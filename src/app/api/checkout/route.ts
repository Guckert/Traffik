// src/app/api/checkout/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Use your account default API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// ENV: can be a price_… id or a lookup_key
const RAW_PRICE_AUDIT = process.env.PRICE_AUDIT!;
const RAW_PRICE_GBP   = process.env.PRICE_GBP!;

function baseUrl(req: NextRequest) {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  const origin = req.headers.get('origin') || '';
  return envUrl || origin || 'http://localhost:3000';
}

async function resolvePriceId(raw: string) {
  if (raw.startsWith('price_') && !raw.includes(' ')) return raw;
  const list = await stripe.prices.list({
    active: true,
    // @ts-ignore – lookup_keys is supported at runtime
    lookup_keys: [raw],
    limit: 1,
  });
  if (!list.data.length) throw new Error(`No active Stripe price found for: ${raw}`);
  return list.data[0].id;
}

function rawFor(product: 'audit' | 'gbp') {
  return product === 'audit' ? RAW_PRICE_AUDIT : RAW_PRICE_GBP;
}

const CUSTOM_FIELDS: Stripe.Checkout.SessionCreateParams.CustomField[] = [
  {
    key: 'website_url',
    label: { type: 'custom', custom: 'Website URL' },
    type: 'text',
    text: { maximum_length: 200 },
    optional: false,
  },
  {
    key: 'keyword_1',
    label: { type: 'custom', custom: 'Target keyword #1' },
    type: 'text',
    text: { maximum_length: 100 },
    optional: false,
  },
  {
    key: 'keyword_2',
    label: { type: 'custom', custom: 'Target keyword #2' },
    type: 'text',
    text: { maximum_length: 100 },
    optional: true,
  },
  {
    key: 'keyword_3',
    label: { type: 'custom', custom: 'Target keyword #3' },
    type: 'text',
    text: { maximum_length: 100 },
    optional: true,
  },
];

async function createSession(product: 'audit' | 'gbp', req: NextRequest) {
  const priceId = await resolvePriceId(rawFor(product));

  const base = baseUrl(req);
  // Include {CHECKOUT_SESSION_ID} so the thank-you page can read details
  const success_url = `${base}/thank-you?product=${product}&session_id={CHECKOUT_SESSION_ID}`;
  const cancel_url  = `${base}/${product}`;

  const allowPromo = product === 'audit'; // promo box only for Audit

  return stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url,
    cancel_url,
    // Email is collected automatically in Checkout
    billing_address_collection: 'auto', // gives us billing name (“name on card” UI)
    allow_promotion_codes: allowPromo ? true : undefined,
    custom_fields: CUSTOM_FIELDS,
    payment_method_types: ['card'],
    metadata: { product },
  });
}

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
