import HeroLeft from '@/components/HeroLeft';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* HERO (Jess AI first) */}
      <HeroLeft
        imageSrc="/images/home-hero.jpg" // Option: change to "/images/jess-hero.jpg"
        imageAlt="Business phone call answered instantly by AI receptionist"
        title="Never Miss a Call Again."
        subtitle="Jess AI answers calls 24/7, books appointments, sends reminders, and upsells your services — trained on your business and data."
        ctas={[
          { label: 'View Jess AI', href: '/ai-agents' },
          { label: 'Call Demo — 03 661 7222', href: 'tel:035654900' },
          { label: 'GBP Optimisation — $350', href: '/gbp' },
        ]}
      />

      {/* 3 FEATURE CARDS (Jess AI relevance) */}
      <section className="border-t border-white/10 bg-black">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold text-white">AI Agents (Jess AI)</div>
              <p className="mt-2 text-sm text-white/70">
                24/7 call answering, appointment booking, reminders and follow-ups —
                with your services + pricing baked in.
              </p>
            </div>

            {/* REPLACED: Core Web Vitals */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold text-white">Bookings & Reminders</div>
              <p className="mt-2 text-sm text-white/70">
                Jess AI captures every lead, books instantly, and reduces no-shows with automated reminders —
                so your diary stays full.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold text-white">Local / GBP</div>
              <p className="mt-2 text-sm text-white/70">
                Categories, services, photos and reviews tuned to convert profile views into calls and bookings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STARTING POINT CARDS */}
      <section className="bg-black">
        <div className="container mx-auto px-4 py-14">
          <h2 className="text-lg font-semibold text-brand-accent">Choose a starting point</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {/* Jess AI */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white">AI Agents (Jess AI)</div>
              <p className="mt-2 text-sm text-white/70">
                Your 24/7 AI receptionist: answers calls, books appointments, sends reminders and follows up,
                and can upsell services — trained on your business and data.
              </p>

              <div className="mt-4 text-sm text-white/80">
                <div><span className="font-semibold">$1,500–$3,000</span> setup (inc GST)</div>
                <div><span className="font-semibold">$169/week</span> ongoing (inc GST)</div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/ai-agents"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15"
                >
                  View Jess AI
                </Link>
                <a
                  href="tel:035654900"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
                >
                  Call Demo: 03 661 7222
                </a>
              </div>
            </div>

            {/* GBP */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white">Google Business Profile Optimisation</div>
              <p className="mt-2 text-sm text-white/70">
                Map-pack tuning: categories, services, media and review strategy built to drive calls.
              </p>
              <div className="mt-4 text-sm text-white/80">
                <span className="font-semibold">$350</span>
              </div>

              <div className="mt-5">
                <Link
                  href="/gbp"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15"
                >
                  Get GBP — $350
                </Link>
              </div>
            </div>

            {/* AIV */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white">AI Visibility System</div>
              <p className="mt-2 text-sm text-white/70">
                Done-for-you website, SEO and GBP management powered by AI — built to keep the phone ringing.
              </p>
              <div className="mt-4 text-sm text-white/80">
                <span className="font-semibold">$3,450</span> / 12-month plan
              </div>

              <div className="mt-5">
                <Link
                  href="/ai-visibility"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
