// src/app/api/checkout/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Use account default API version (cleanest for type compat)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// ENV
const RAW_PRICE_AUDIT = process.env.PRICE_AUDIT!;
const RAW_PRICE_GBP   = process.env.PRICE_GBP!;

/** Resolve an env value that might be a real price ID or a lookup_key */
async function resolvePriceId(raw: string) {
  // If it already looks like a real Stripe price id, just use it.
  if (raw.startsWith('price_') && !raw.includes(' ')) return raw;

  // Otherwise, treat it as a lookup_key and resolve to a price id
  const list = await stripe.prices.list({
    active: true,
    // @ts-ignore - lookup_keys is supported at runtime; types vary by SDK version
    lookup_keys: [raw],
    limit: 1,
    expand: ['data.product'],
  });

  if (!list.data.length) {
    throw new Error(`No active Stripe price found for lookup_key: ${raw}`);
  }
  return list.data[0].id;
}

function baseUrl(req: NextRequest) {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  const origin = req.headers.get('origin') || '';
  return envUrl || origin || 'http://localhost:3000';
}

function rawFor(product: 'audit' | 'gbp') {
  return product === 'audit' ? RAW_PRICE_AUDIT : RAW_PRICE_GBP;
}

async function createSession(product: 'audit' | 'gbp', req: NextRequest) {
  const raw = rawFor(product);
  if (!raw) throw new Error(`Missing env for ${product} price`);

  const priceId = await resolvePriceId(raw);

  const base = baseUrl(req);
  const success_url = `${base}/thank-you?product=${product}`;
  const cancel_url  = `${base}/${product}`;

  return stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url,
    cancel_url,
    billing_address_collection: 'auto',
    allow_promotion_codes: true,
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
