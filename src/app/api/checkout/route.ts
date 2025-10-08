// src/app/api/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// ✅ Use your account’s default API version (no apiVersion typed)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const PRICE_AUDIT = process.env.PRICE_AUDIT!;
const PRICE_GBP   = process.env.PRICE_GBP!;

// ...keep the rest of your file exactly the same...

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe WITHOUT apiVersion so it uses your account default
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// ENV (price ids or lookup keys)
const RAW_PRICE_AUDIT = process.env.PRICE_AUDIT!;
const RAW_PRICE_GBP   = process.env.PRICE_GBP!;

// Simple in-memory cache (resets on cold start/redeploy)
const priceCache = new Map<string, string>();

function baseUrl(req: NextRequest) {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  const origin = req.headers.get('origin') || '';
  return envUrl || origin || 'http://localhost:3000';
}

function rawFor(product: 'audit' | 'gbp') {
  return product === 'audit' ? RAW_PRICE_AUDIT : RAW_PRICE_GBP;
}

/** Resolve an env value that might be a real price ID or a lookup_key */
async function resolvePriceId(raw: string) {
  // Already cached?
  if (priceCache.has(raw)) return priceCache.get(raw)!;

  // Already a Price ID?
  if (raw.startsWith('price_') && !raw.includes(' ')) {
    priceCache.set(raw, raw);
    return raw;
  }

  // Try the typed Search API first
  try {
    const search = await stripe.prices.search({
      query: `lookup_key:'${raw}' AND active:'true'`,
      limit: 1,
    });
    if (search.data.length) {
      const id = search.data[0].id;
      priceCache.set(raw, id);
      return id;
    }
  } catch {
    // fall through to list()
  }

  // Fallback: list and find by lookup_key (typed)
  const list = await stripe.prices.list({
    active: true,
    limit: 100,
    expand: ['data.product'],
  });
  const match = list.data.find((p) => p.lookup_key === raw);
  if (!match) throw new Error(`No active Stripe price found for: ${raw}`);
  priceCache.set(raw, match.id);
  return match.id;
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
