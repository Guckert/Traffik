// src/app/api/checkout/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// ✅ Use your account’s default API version (don’t pass apiVersion)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// Accept real price IDs (price_...) OR lookup keys via env
const RAW_PRICE_AUDIT = process.env.PRICE_AUDIT!;
const RAW_PRICE_GBP   = process.env.PRICE_GBP!;

// --- Custom fields (max 3 allowed by Stripe Checkout) ---
const CUSTOM_FIELDS: Stripe.Checkout.SessionCreateParams.CustomField[] = [
  {
    key: 'website_url',
    label: { type: 'custom', custom: 'Website URL' },
    type: 'text',
    text: { maximum_length: 200, default_value: '' },
    optional: false,
  },
  {
    key: 'keywords',
    label: { type: 'custom', custom: 'Target keywords (comma separated)' },
    type: 'text',
    text: {
      maximum_length: 300,
      default_value: '',
      // Not in types, but Stripe renders it fine:
      // @ts-expect-error
      placeholder: 'e.g. blocked drains, hot water cylinder, gas fitting',
    },
    optional: false,
  },
];

function baseUrl(req: NextRequest) {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  const origin = req.headers.get('origin') || '';
  return envUrl || origin || 'http://localhost:3000';
}

function rawFor(product: 'audit' | 'gbp') {
  return product === 'audit' ? RAW_PRICE_AUDIT : RAW_PRICE_GBP;
}

/** Resolve an env value that might be a price ID or a lookup_key */
async function resolvePriceId(raw: string) {
  if (raw.startsWith('price_') && !raw.includes(' ')) return raw;

  const list = await stripe.prices.list({
    active: true,
    // Some Stripe versions don’t type lookup_keys; ignore type here:
    // @ts-ignore
    lookup_keys: [raw],
    limit: 1,
    expand: ['data.product'],
  });

  if (!list.data.length) {
    throw new Error(`No active Stripe price found for: ${raw}`);
  }
  return list.data[0].id;
}

async function createSession(product: 'audit' | 'gbp', req: NextRequest) {
  const raw = rawFor(product);
  if (!raw) throw new Error(`Missing env for ${product} price`);

  const priceId = await resolvePriceId(raw);
  const base    = baseUrl(req);

  const success_url = `${base}/thank-you?product=${product}`;
  const cancel_url  = `${base}/${product}`;

  // Only allow promotion codes on the Audit
  const allowPromo = product === 'audit';

  return stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url,
    cancel_url,
    billing_address_collection: 'auto',
    allow_promotion_codes: allowPromo,
    custom_fields: CUSTOM_FIELDS,
    // Keep track of which product they bought
    metadata: { product },
  });
}

// GET /api/checkout?p=audit|gbp -> redirects to hosted checkout
export async function GET(req: NextRequest) {
  const p = (new URL(req.url).searchParams.get('p') || '').toLowerCase();
  if (p !== 'audit' && p !== 'gbp') {
    return NextResponse.json({ error: 'Unknown product' }, { status: 400 });
  }
  try {
    const session = await createSession(p as 'audit' | 'gbp', req);
    return NextResponse.redirect(session.url!, { status: 303 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Stripe error' }, { status: 500 });
  }
}

// POST { product: 'audit' | 'gbp' } -> returns { url }
export async function POST(req: NextRequest) {
  try {
    const { product } = await req.json();
    if (product !== 'audit' && product !== 'gbp') {
      return NextResponse.json({ error: 'Unknown product' }, { status: 400 });
    }
    const session = await createSession(product, req);
    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Stripe error' }, { status: 500 });
  }
}
