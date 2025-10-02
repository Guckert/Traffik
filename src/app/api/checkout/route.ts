import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// 1) Stripe client (no apiVersion pin to avoid TS literal mismatch)
const stripeSecret = process.env.STRIPE_SECRET_KEY || '';
const stripe = new Stripe(stripeSecret);

// 2) Simple SKU map (amounts are cents, GST-inclusive)
const PRICES: Record<string, { name: string; amount: number }> = {
  audit: { name: 'AI Website Audit', amount: 15900 }, // $159.00
  gbp:   { name: 'GBP Optimisation', amount: 35000 }, // $350.00
};

// 3) GET /api/checkout?sku=audit|gbp
export async function GET(req: Request) {
  try {
    // If Stripe isn’t configured, bounce back gracefully
    if (!stripeSecret) {
      const url = new URL('/?error=stripe', req.url);
      return NextResponse.redirect(url);
    }

    const { searchParams, origin } = new URL(req.url);
    const sku = searchParams.get('sku') ?? '';

    const item = PRICES[sku];
    if (!item) {
      return NextResponse.json({ error: 'Invalid SKU' }, { status: 400 });
    }

    // 4) Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      // Price data: NZD & GST-inclusive line item
      line_items: [
        {
          price_data: {
            currency: 'nzd',
            unit_amount: item.amount, // cents
            product_data: {
              name: item.name,
              metadata: { sku },
            },
            tax_behavior: 'inclusive', // include GST in the price shown
          },
          quantity: 1,
        },
      ],
      // Success/Cancel
      success_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?cancelled=1`,
      metadata: {
        sku,
      },
    });

    if (!session.url) {
      return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
    }

    // 5) Redirect the browser to Stripe Checkout
    return NextResponse.redirect(session.url, { status: 303 });
  } catch (err: any) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json({ error: err?.message ?? 'Checkout failed' }, { status: 500 });
  }
}
