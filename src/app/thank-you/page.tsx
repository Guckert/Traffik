import { stripe } from "@/lib/stripe";
export const metadata = { title: "Thank you — Traffik.nz" };
export default async function Page({ searchParams }: { searchParams: { session_id?: string } }) {
  const sessionId = searchParams.session_id;
  let product = "";
  if (sessionId) {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    product = (session.metadata?.product || "").toUpperCase();
    if (process.env.N8N_WEBHOOK_URL) {
      fetch(process.env.N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product: session.metadata?.product, amount_total: session.amount_total, currency: session.currency,
          customer_email: session.customer_details?.email, session_id: session.id
        })
      }).catch(() => {});
    }
  }
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-xl px-4">
        <h1 className="text-4xl font-extrabold text-brand-accent">Thanks — order received</h1>
        <p className="mt-3 text-white/70">We’ll be in touch shortly to start your {product || "service"}.</p>
        <a href="/" className="mt-6 inline-block rounded-xl border border-white/10 px-4 py-2">Back to home</a>
      </div>
    </main>
  );
}