import type { Metadata } from 'next';
import Link from 'next/link';
import HeroLeft from '@/components/HeroLeft';

export const metadata: Metadata = {
  title: 'Services | Traffik.nz',
  description:
    'Traffik services: Jess AI (24/7 AI receptionist), Google Business Profile optimisation, AI Visibility System, and NZ-focused website SEO.',
  alternates: { canonical: '/services' },
};

const services = [
  {
    t: 'AI Agents (Jess AI)',
    l: '/ai-agents',
    d: '24/7 AI receptionist that answers calls, books appointments, sends reminders, and upsells services — trained on your business and data.',
    tags: ['Calls', 'Bookings', 'Reminders', 'Upsells'],
    cta: 'View Jess AI',
  },
  {
    t: 'Google Business Profile Optimisation',
    l: '/gbp',
    d: 'Improve local pack rankings with category refinement, services setup, media strategy and review systems that turn views into calls.',
    tags: ['Maps', 'Reviews', 'Local pack', 'Citations'],
    cta: 'Get GBP — $350',
  },
  {
    t: 'AI Visibility System',
    l: '/ai-visibility',
    d: 'Done-for-you optimisation across your website, GBP and content strategy — built to keep you visible in Google and AI-powered search.',
    tags: ['SEO', 'AEO', 'Content', 'Tracking'],
    cta: 'Learn more',
  },
  {
    t: 'Website Optimisation (NZ SEO)',
    l: '/contact',
    d: 'Technical SEO, content structure, internal linking and on-page optimisation that supports high-intent “near me” searches.',
    tags: ['On-page', 'Structure', 'Speed', 'Schema'],
    cta: 'Talk to us',
  },
  {
    t: 'Landing Pages & Service Pages',
    l: '/contact',
    d: 'High-converting pages for your core services, built for NZ cities, suburbs and intent-based searches.',
    tags: ['Conversion', 'Cities', 'Services', 'Schema'],
    cta: 'Request a quote',
  },
  {
    t: 'Tracking & Reporting',
    l: '/contact',
    d: 'Call and lead tracking, conversion events, dashboards and monthly reporting so you can see what’s working.',
    tags: ['GA4', 'GSC', 'Calls', 'Leads'],
    cta: 'Set up tracking',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#07090b] text-white">
      <HeroLeft
        imageSrc="/images/services-hero.jpg"
        imageAlt="Team collaborating in modern office"
        title="Services"
        subtitle="AI Agents, Google Business Profile optimisation, and AI-first visibility for NZ businesses."
        ctas={[
          { label: 'AI Agents (Jess AI)', href: '/ai-agents' },
          { label: 'Get GBP — $350', href: '/gbp' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      <section id="list" className="border-t border-white/10">
        <div className="container mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.t}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-brand-accent/40 transition"
              >
                <h2 className="text-xl font-semibold text-white">{s.t}</h2>
                <p className="mt-2 text-white/70">{s.d}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={s.l}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
                  >
                    {s.cta}
                  </Link>
                  {s.t === 'AI Agents (Jess AI)' && (
                    <a
                      href="tel:+6435654900"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10 hover:text-white"
                    >
                      Call Demo: 03 565 4900
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-[#0b0e12] p-8 text-center">
            <h3 className="text-2xl font-bold text-brand-accent">Not sure what you need?</h3>
            <p className="mt-3 text-white/70 max-w-3xl mx-auto">
              Tell us your industry and your goal (more calls, more bookings, better map rankings).
              We’ll recommend the fastest path — usually Jess AI + GBP for immediate results.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link
                href="/ai-agents"
                className="rounded-full bg-brand-accent px-6 py-3 font-semibold text-black hover:opacity-90"
              >
                Start with Jess AI
              </Link>
              <Link
                href="/gbp"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                Get GBP — $350
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
