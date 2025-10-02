import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripeSecret = process.env.STRIPE_SECRET_KEY || '';
const stripe = new Stripe(stripeSecret); // ← no apiVersion

export async function GET(req: Request) {
  if (!stripeSecret) {
    return NextResponse.redirect(new URL('/?error=stripe', req.url));
  }
  // ...rest unchanged...
}
