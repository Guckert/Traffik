// src/app/api/checkout/route.ts
export const runtime = 'nodejs';          // ensure Node runtime (not Edge)
export const dynamic = 'force-dynamic';   // avoid caching for redirects

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe WITHOUT apiVersion so it uses your account default
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Stripe Price IDs from env
const PRICE_AUDIT = process.env.PRICE_AUDIT!;
const PRICE_GBP   = process.env.PRICE_GBP!;

// Build a base URL for success/cancel redirects
function baseUrl(req: NextRequest) {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  const origin = req.headers.get('origin') || '';
  return envUrl || origin || 'http://localhost:3000';
}

function priceFor(product: 'audit' | 'gbp') {
  if (product === 'audit') return PRICE_AUDIT;
  if (product === 'gbp')   return PRICE_GBP;
  return '';
}

async function createSession(product: 'audit' | 'gbp', req: NextRequest) {
  const price = priceFor(product);
  if (!price) throw new Error(`Missing Stripe price for ${product}`);

  const base = baseUrl(req);
  const success_url = `${base}/thank-you?product=${product}`;
  const cancel_url  = `${base}/${product}`;

  return stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price, quantity: 1 }],
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
