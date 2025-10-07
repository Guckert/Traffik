import HeroLeft from '@/components/HeroLeft';

export default function Page() {
  return (
    <main>
      <HeroLeft
        imageSrc="/images/aiv-hero.jpg"
        imageAlt="AI dashboards and analytics in dark studio"
        title="AI Visibility System — $3,450/mo (12-Month Plan)"
        subtitle="Fully managed website, SEO and Google Business Profile powered by AI — built to keep your phone ringing."
        ctas={[
          { label: 'Enquire Now', href: 'mailto:hello@traffik.nz?subject=AI%20Visibility%20System' },
          { label: 'Call 021 296 8586', href: 'tel:+64212968586' },
        ]}
      />

      {/* What’s included */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">What’s included</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">AI-Optimised Website (Built & Hosted)</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Custom, mobile-first site tuned for speed & conversions</li>
              <li>• Managed hosting, backups, updates & security</li>
              <li>• Conversion paths for calls, quotes & bookings</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Local SEO Automation</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• AI monitors keywords, competitors & trends</li>
              <li>• Smart on-page tweaks to stay visible in search</li>
              <li>• Regular content refreshes based on demand</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Google Business Profile Growth</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Weekly posts, photos & services tuning</li>
              <li>• Review prompts + professional response templates</li>
              <li>• Monthly report: calls, map views & directions</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Lead Tracking & Reporting</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Simple dashboard showing what’s working</li>
              <li>• Plain-English monthly insights & next steps</li>
              <li>• NZ-based support for priority changes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Growth plan */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">The growth plan</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Month 1–2: Build & Fix</h3>
            <p className="mt-2 text-white/85">
              Site build or rebuild, speed & Core Web Vitals, tracking, GBP overhaul, audit fixes prioritised for quick wins.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Month 3–6: Rank & Expand</h3>
            <p className="mt-2 text-white/85">
              Location/service pages, AI-guided on-page updates, content refresh cadence, review velocity and GBP growth.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Month 7–12: Optimise & Scale</h3>
            <p className="mt-2 text-white/85">
              Conversion lift, suburb expansion, competitor gaps, steady lead volume with monthly tuning and reporting.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-white/5 to-white/0">
          <p className="text-white">
            <span className="font-semibold">Pricing:</span>{' '}
            <span className="text-brand-accent font-semibold">$3,450/month</span> for 12 months (all-inclusive: build, hosting, SEO, AI & management).
          </p>
          <p className="mt-2 text-white/85">
            <span className="font-semibold">After 12 months →</span> $300/month Maintenance Plan (hosting, monitoring & ongoing AI tune-ups).
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="mailto:hello@traffik.nz?subject=AI%20Visibility%20System"
              className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-medium text-white hover:bg-white/10"
            >
              Enquire Now
            </a>
            <a
              href="tel:+64212968586"
              className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-medium text-white/85 hover:text-white hover:bg-white/10"
            >
              Call 021 296 8586
            </a>
          </div>
        </div>
      </section>

      {/* Why it works for trades */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">Why it works for trades</h2>
        <ul className="mt-4 grid gap-2 text-white/85 md:grid-cols-2">
          <li>• Built around NZ service areas (Maps + suburbs)</li>
          <li>• Website + GBP + SEO covered in one system</li>
          <li>• AI keeps content aligned with local demand</li>
          <li>• Fixed monthly cost, predictable growth</li>
        </ul>
        <p className="mt-6 italic text-white/70">
          “It’s like having your own marketing department — without hiring anyone.”
        </p>
      </section>

      {/* FAQ */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold text-white">Is there a contract?</h3>
            <p className="mt-2 text-white/85">Yes — 12 months for the build & growth phase, then month-to-month at $300.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold text-white">Do you write content?</h3>
            <p className="mt-2 text-white/85">Yes — AI-assisted, edited by humans for NZ tone and accuracy.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold text-white">Which trades is this best for?</h3>
            <p className="mt-2 text-white/85">Plumbers, builders, electricians, roofers, painters, landscapers & more.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold text-white">How fast will I see results?</h3>
            <p className="mt-2 text-white/85">Quick wins often land in the first 4–8 weeks; compounding gains across 3–6 months.</p>
          </div>
        </div>
      </section>

      {/* Final CTA band */}
      <section className="container py-12">
        <div className="rounded-2xl border border-white/10 p-8 bg-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white">Ready to keep the phone ringing?</h3>
            <p className="mt-2 text-white/85">Let’s see if your trade business is a fit for the AI Visibility System.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="mailto:hello@traffik.nz?subject=AI%20Visibility%20System"
              className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-medium text-white hover:bg-white/10"
            >
              Enquire Now
            </a>
            <a
              href="tel:+64212968586"
              className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-medium text-white/85 hover:text-white hover:bg-white/10"
            >
              Call 021 296 8586
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
