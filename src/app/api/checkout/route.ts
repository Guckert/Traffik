import { NextResponse } from 'next/server';import Stripe from 'stripe';
const stripeSecret=process.env.STRIPE_SECRET_KEY||'';const stripe=new Stripe(stripeSecret,{apiVersion:'2024-06-20'});
export async function GET(req:Request){if(!stripeSecret){return NextResponse.redirect(new URL('/?error=stripe',req.url));}
const {searchParams}=new URL(req.url);const sku=searchParams.get('sku');const origin=new URL(req.url).origin;
const map:{[k:string]:{name:string;amount:number}}={audit:{name:'AI Website Audit',amount:15900},gbp:{name:'GBP Optimisation',amount:35000}};
if(!sku||!map[sku]) return NextResponse.redirect(new URL('/',req.url));
const line=map[sku];const session=await stripe.checkout.sessions.create({mode:'payment',currency:'nzd',success_url:`${origin}/thank-you`,cancel_url:`${origin}/${sku==='audit'?'audit':'gbp'}`,line_items:[{quantity:1,price_data:{currency:'nzd',unit_amount:line.amount,product_data:{name:line.name},tax_behavior:'inclusive'}}],});return NextResponse.redirect(session.url!,303);}
