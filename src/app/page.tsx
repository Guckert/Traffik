import HeroLeft from '@/components/HeroLeft';

export default function Home() {
  return (
    <main>
      <HeroLeft
        imageSrc="/images/home-hero.jpg"
        imageAlt="Business owner outside storefront at dusk"
        title="Get Found. Get Calls. Get Work."
        subtitle="AI website optimisation for NZ tradies — faster sites, stronger Google rankings, and steady local leads."
        ctas={[
          { label: 'Get Audit — $159', href: '/audit' },
          { label: 'Get GBP — $350', href: '/gbp' },
          { label: 'AI Visibility System — $3,450/mo', href: '/ai-visibility' },
        ]}
      />

      {/* Feature highlights (keep your original 3, lightly reworded) */}
      <section className="border-t border-white/10">
        <div className="container grid gap-4 py-10 md:grid-cols-3">
          {[
            {
              t: 'AI SEO / AEO',
              d: 'Optimised for Google AI Overviews, ChatGPT-style search and voice assistants.',
            },
            {
              t: 'Core Web Vitals',
              d: 'Lift LCP, INP and CLS with code cleanup, caching and asset optimisation.',
            },
            {
              t: 'Local / GBP',
              d: 'Categories, services, photos and reviews tuned to turn views into calls.',
            },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="font-semibold text-white">{c.t}</div>
              <p className="mt-2 text-white/75">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product cards */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">Choose a starting point</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {/* Audit */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">AI Website Audit</h3>
            <p className="mt-2 text-white/85">30-point review of speed, SEO and Google readiness with prioritised fixes.</p>
            <p className="mt-4 font-semibold text-white">$159</p>
            <a
              href="/audit"
              className="mt-4 inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-medium text-white hover:bg-white/10"
            >
              Get Audit — $159
            </a>
          </div>

          {/* GBP */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Google Business Profile Optimisation</h3>
            <p className="mt-2 text-white/85">Map-pack tuning: categories, services, posts, photos and review strategy.</p>
            <p className="mt-4 font-semibold text-white">$350</p>
            <a
              href="/gbp"
              className="mt-4 inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-medium text-white hover:bg-white/10"
            >
              Get GBP — $350
            </a>
          </div>

          {/* AI Visibility System */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">AI Visibility System</h3>
            <p className="mt-2 text-white/85">Done-for-you website, SEO and GBP management powered by AI — built to keep the phone ringing.</p>
            <p className="mt-4 font-semibold text-white">$3,450/mo • 12-month plan</p>
            <a
              href="/ai-visibility"
              className="mt-4 inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-medium text-white hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Why it works for trades */}
      <section className="container pb-12">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">Why tradies choose Traffik</h2>
          <ul className="mt-4 grid gap-2 text-white/85 md:grid-cols-2">
            <li>• Built around NZ service areas (Google Maps + suburbs)</li>
            <li>• Simple CTAs to drive calls, quotes and bookings</li>
            <li>• Website + GBP + SEO covered in one place</li>
            <li>• AI keeps content aligned with local demand</li>
          </ul>
          <p className="mt-6 italic text-white/70">
            “It’s like having your own marketing department — without hiring anyone.”
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/audit"
              className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-medium text-white hover:bg-white/10"
            >
              Start with an Audit — $159
            </a>
            <a
              href="/ai-visibility"
              className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-medium text-white/85 hover:text-white hover:bg-white/10"
            >
              See the AI Visibility System
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
