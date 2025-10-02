// src/app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

// Stripe client (no apiVersion pin to avoid TS literal mismatch)
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || "";
const stripe = new Stripe(STRIPE_SECRET_KEY);

// SKU → product map (amounts are NZD cents, GST-inclusive)
const PRICES: Record<string, { name: string; amount: number }> = {
  audit: { name: "AI Website Audit", amount: 15900 }, // $159.00
  gbp:   { name: "GBP Optimisation", amount: 35000 }, // $350.00
};

// GET /api/checkout?sku=audit|gbp
export async function GET(req: Request) {
  try {
    // Guard: Stripe not configured
    if (!STRIPE_SECRET_KEY) {
      return NextResponse.redirect(new URL("/?error=stripe", req.url));
    }

    const url = new URL(req.url);
    const sku = url.searchParams.get("sku") ?? "";
    const origin = url.origin;

    const item = PRICES[sku];
    if (!item) {
      return NextResponse.redirect(new URL("/?error=sku", req.url));
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "nzd",
            unit_amount: item.amount, // cents
            product_data: {
              name: item.name,
              metadata: { sku },
            },
            // If your Stripe tax settings are inclusive, this is fine to omit.
            // Uncomment if you want to explicitly mark it:
            // tax_behavior: "inclusive",
          },
          quantity: 1,
        },
      ],

      // ✅ Collect phone number
      phone_number_collection: {
        enabled: true,
      },

      // ✅ Custom fields shown on the Checkout page (like your screenshot)
      custom_fields: [
        {
          key: "full_name",
          label: { type: "custom", custom: "Full Name" },
          type: "text",
        },
        {
          key: "website_url",
          label: { type: "custom", custom: "Website URL" },
          type: "text",
        },
        {
          key: "target_keywords",
          label: { type: "custom", custom: "Target Keywords" },
          type: "text",
        },
      ],

      // Where to go after payment / cancel
      success_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?cancelled=1`,

      // Handy to keep track of what was purchased
      metadata: { sku },
      // Optionally collect billing address:
      billing_address_collection: "required",
    });

    if (!session.url) {
      return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
    }

    // Redirect the browser to Stripe Checkout
    return NextResponse.redirect(session.url, 303);
  } catch (err: any) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: err?.message ?? "Checkout failed" }, { status: 500 });
  }
}
