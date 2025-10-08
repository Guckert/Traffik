// src/app/api/checkout/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// ✅ Use your account's default API version (avoid type/type-mismatch issues)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// Price IDs (or lookup keys) from env
const RAW_PRICE_AUDIT = process.env.PRICE_AUDIT!;
const RAW_PRICE_GBP   = process.env.PRICE_GBP!;

type ProductKey = 'audit' | 'gbp';

function baseUrl(req: NextRequest) {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  const origin = req.headers.get('origin') || '';
  return envUrl || origin || 'http://localhost:3000';
}

function rawFor(product: ProductKey) {
  return product === 'audit' ? RAW_PRICE_AUDIT : RAW_PRICE_GBP;
}

// Resolve lookup key -> price id (or pass through if already price_...)
async function resolvePriceId(raw: string) {
  if (raw.startsWith('price_') && !raw.includes(' ')) return raw;

  const list = await stripe.prices.list({
    active: true,
    // @ts-ignore lookup_keys is supported at runtime
    lookup_keys: [raw],
    limit: 1,
    expand: ['data.product'],
  });
  if (!list.data.length) {
    throw new Error(`No active Stripe price found for: ${raw}`);
  }
  return list.data[0].id;
}

// Build a text custom field without sending empty default_value
function customTextField(opts: {
  key: string;
  label: string;
  required?: boolean;
  defaultValue?: string | null;
  min?: number;
  max?: number;
}) {
  const { key, label, required = true, defaultValue, min = 3, max = 200 } = opts;
  const field: any = {
    key,
    label: { type: 'custom', custom: label },
    type: 'text',
    optional: !required,
    text: {
      minimum_length: min,
      maximum_length: max,
    },
  };
  const trimmed = (defaultValue ?? '').trim();
  if (trimmed) field.text.default_value = trimmed; // only include if non-empty
  return field;
}

async function createSession(product: ProductKey, req: NextRequest) {
  const raw = rawFor(product);
  if (!raw) throw new Error(`Missing env for ${product} price`);
  const priceId = await resolvePriceId(raw);

  const base = baseUrl(req);
  const success_url = `${base}/thank-you?product=${product}`;
  const cancel_url  = `${base}/${product}`;

  // Optional prefill via query params
  const url = new URL(req.url);
  const sitePrefill = url.searchParams.get('site'); // e.g. https://example.co.nz
  const kwPrefill   = url.searchParams.get('kw');   // e.g. plumber christchurch,hot water
  const locPrefill  = url.searchParams.get('loc');  // e.g. Christchurch, Riccarton, Selwyn

  // ⚠️ Max 3 custom fields allowed by Stripe
  const custom_fields = [
    customTextField({
      key: 'website_url',
      label: 'Website URL',
      required: true,
      defaultValue: sitePrefill,
      min: 4,
      max: 250,
    }),
    customTextField({
      key: 'keywords',
      label: 'Keywords (comma-separated)',
      required: true,
      defaultValue: kwPrefill,
      min: 3,
      max: 250,
    }),
    customTextField({
      key: 'location',
      label: 'Location (suburb/city/region)',
      required: true,
      defaultValue: locPrefill,
      min: 2,
      max: 120,
    }),
  ];

  const allowPromo = product === 'audit'; // promo codes for Audit only

  return stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url,
    cancel_url,

    // Stripe collects email automatically; cardholder name is on the payment element.
    customer_creation: 'always',

    allow_promotion_codes: allowPromo,
    custom_fields,

    metadata: { product },
  });
}

export async function GET(req: NextRequest) {
  const p = (new URL(req.url).searchParams.get('p') || '').toLowerCase() as ProductKey;
  if (p !== 'audit' && p !== 'gbp') {
    return NextResponse.json({ error: 'Unknown product' }, { status: 400 });
  }
  try {
    const session = await createSession(p, req);
    return NextResponse.redirect(session.url!, { status: 303 });
  } catch (e: any) {
    console.error('Stripe checkout error', e);
    return NextResponse.json({ error: e?.message || 'Stripe error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { product } = await req.json();
    if (product !== 'audit' && product !== 'gbp') {
      return NextResponse.json({ error: 'Unknown product' }, { status: 400 });
    }
    const session = await createSession(product, req);
    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    console.error('Stripe checkout error', e);
    return NextResponse.json({ error: e?.message || 'Stripe error' }, { status: 500 });
  }
}
