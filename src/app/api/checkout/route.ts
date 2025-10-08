// src/app/api/checkout/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// ✅ One Stripe instance, no apiVersion so it uses your account default
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// Env can be either a price ID (price_...) or a lookup key (e.g. gbp_350_nzd)
const RAW_PRICE_AUDIT = process.env.PRICE_AUDIT!;
const RAW_PRICE_GBP   = process.env.PRICE_GBP!;

function baseUrl(req: NextRequest) {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  const origin = req.headers.get('origin') || '';
  return envUrl || origin || 'http://localhost:3000';
}

function rawFor(product: 'audit' | 'gbp') {
  return product === 'audit' ? RAW_PRICE_AUDIT : RAW_PRICE_GBP;
}

// If RAW is a price_... ID, use it directly; otherwise treat it as a lookup key
async function resolvePriceId(raw: string) {
  if (raw.startsWith('price_') && !raw.includes(' ')) return raw;

  const list = await stripe.prices.list({
    active: true,
    // lookup_keys is supported at runtime even if TS defs differ between versions
    // @ts-ignore
    lookup_keys: [raw],
    limit: 1,
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

  const base = baseUrl(req);
  return stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${base}/thank-you?product=${product}`,
    cancel_url: `${base}/${product}`,
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
