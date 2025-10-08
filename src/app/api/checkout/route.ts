// src/app/api/checkout/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// ✅ Use account default API version (avoid type mismatch issues)
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

// If you’re using lookup keys, this resolves them to a price id; if you already
// have price_... ids, they’re returned as-is.
async function resolvePriceId(raw: string) {
  if (raw.startsWith('price_') && !raw.includes(' ')) return raw;

  const list = await stripe.prices.list({
    active: true,
    // @ts-ignore — lookup_keys is supported at runtime even if not in the types
    lookup_keys: [raw],
    limit: 1,
    expand: ['data.product'],
  });
  if (!list.data.length) {
    throw new Error(`No active Stripe price found for: ${raw}`);
  }
  return list.data[0].id;
}

// Helper to build a Stripe custom text field without sending empty default_value
function customTextField(opts: {
  key: string;
  label: string;
  required?: boolean;
  defaultValue?: string | null;
  min?: number;
  max?: number;
}) {
  const { key, label, required = true, defaultValue, min = 3, max = 200 } = opts;

  // Base field
  const field: any = {
    key,
    label: { type: 'custom', custom: label },
    type: 'text',
    optional: !required,
    text: {
      // Only set these constraints; do NOT set default_value yet
      minimum_length: min,
      maximum_length: max,
    },
  };

  // Only attach default_value if truthy & non-empty
  const trimmed = (defaultValue ?? '').trim();
  if (trimmed.length > 0) {
    field.text.default_value = trimmed;
  }

  return field;
}

async function createSession(product: ProductKey, req: NextRequest) {
  const raw = rawFor(product);
  if (!raw) throw new Error(`Missing env for ${product} price`);

  const priceId = await resolvePriceId(raw);

  const base = baseUrl(req);
  const success_url = `${base}/thank-you?product=${product}`;
  const cancel_url  = `${base}/${product}`;

  // Optional: allow prefill via query params
  const url = new URL(req.url);
  const sitePrefill = url.searchParams.get('site'); // e.g. https://example.co.nz
  const kwPrefill   = url.searchParams.get('kw');   // e.g. plumber, christchurch, hot water

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
  ];

  // Promo codes only for Audit
  const allowPromo = product === 'audit';

  return stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url,
    cancel_url,

    // Collect email automatically; Stripe also captures cardholder name.
    customer_creation: 'always',

    // 💡 Only enable this for Audit
    allow_promotion_codes: allowPromo,

    // Our two required custom fields
    custom_fields,

    // Keep a hint of which product was purchased
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
