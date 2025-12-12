import Link from "next/link";

export default function Page() {
  return (
    <main className="container py-20">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-brand-accent">Thank you!</h1>
        <p className="mt-3 text-white/80 text-lg">
          Your order is complete. Your audit is now in our queue and we’ll email your onboarding details shortly.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="/api/checkout?p=gbp"
            className="rounded-2xl border border-white/70 text-white/95 px-6 py-3 font-semibold backdrop-blur-[1px] hover:border-brand-accent hover:text-white transition"
          >
            Upgrade Now: GBP Optimisation (Fastest ROI)
          </a>

          <a
            href="tel:+64212968586"
            className="rounded-2xl border border-white/20 text-white/85 px-6 py-3 font-semibold hover:bg-white/10 hover:text-white transition"
          >
            Call 021 296 8586
          </a>
        </div>

        <p className="mt-4 text-white/60 text-sm">
          Most tradies see the fastest visibility gains from Google Business Profile before website upgrades.
        </p>
      </div>

      {/* Divider */}
      <div className="mx-auto my-12 max-w-4xl border-t border-white/10" />

      {/* What happens next */}
      <section className="mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">What happens next</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Step 1 — Intake</h3>
            <p className="mt-2 text-white/80">
              We confirm your website, target location, and core keywords so the audit reflects real tradie searches.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Step 2 — Audit run</h3>
            <p className="mt-2 text-white/80">
              We run performance, technical SEO, local visibility and AI-search readiness checks, then prioritise fixes.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Step 3 — Delivery</h3>
            <p className="mt-2 text-white/80">
              You receive an HTML preview + PDF summary with a clear, sequenced action plan.
              Turnaround: 48 hours (business days).
            </p>
          </div>
        </div>
      </section>

      {/* Upsell */}
      <section className="mx-auto mt-12 max-w-4xl">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Want the fastest wins first?
          </h2>
          <p className="mt-3 text-white/80 text-lg">
            The audit tells you what’s broken. The fastest way to turn that into real enquiries is usually your{" "}
            <span className="text-white font-semibold">Google Business Profile</span> — that’s where you win Maps/Local Pack
            visibility quickly.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="text-lg font-semibold text-white">GBP Optimisation includes</h3>
              <ul className="mt-3 space-y-2 text-white/80">
                <li>• Correct categories + services (built for your trade)</li>
                <li>• Conversion-ready description + keywords</li>
                <li>• Photos checklist + posting plan</li>
                <li>• Review strategy + trust signals</li>
                <li>• NAP consistency + local ranking improvements</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="text-lg font-semibold text-white">Recommended sequence</h3>
              <ol className="mt-3 space-y-2 text-white/80 list-decimal list-inside">
                <li>Audit (done)</li>
                <li>GBP Optimisation (fast visibility)</li>
                <li>AI Visibility Website (high conversion)</li>
              </ol>
              <p className="mt-4 text-white/70">
                If you want a head start for next year, this order compounds the fastest.
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/api/checkout?p=gbp"
              className="rounded-2xl border border-white/70 text-white/95 px-6 py-3 font-semibold backdrop-blur-[1px] hover:border-brand-accent hover:text-white transition"
            >
              Upgrade Now: GBP Optimisation
            </a>

            <Link
              href="/ai-visibility"
              className="rounded-2xl border border-white/20 text-white/85 px-6 py-3 font-semibold hover:bg-white/10 hover:text-white transition"
            >
              Next After That: AI Visibility Website
            </Link>
          </div>
        </div>
      </section>

      {/* What we need from you */}
      <section className="mx-auto mt-12 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">To avoid delays, have this ready</h2>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <ul className="space-y-2 text-white/80">
            <li>• Your website URL</li>
            <li>• Your main service(s) (e.g., plumbing, electrical, roofing — or “tradie services”)</li>
            <li>• Primary city + service areas (Auckland / Wellington / Christchurch)</li>
            <li>• 3–10 keywords you want to rank for</li>
            <li>• If doing GBP next: your GBP link (or the email used to manage it)</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

