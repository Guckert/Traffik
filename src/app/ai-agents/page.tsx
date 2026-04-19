import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calendar, MessageSquare, TrendingUp, CheckCircle, Clock } from 'lucide-react';
import HeroLeft from '@/components/HeroLeft';

export const metadata: Metadata = {
  title: 'Jess AI - 24/7 AI Receptionist | Traffik',
  description:
    'Jess AI is a 24/7 AI receptionist for New Zealand businesses. She answers calls, books appointments, sends reminders and upsells services automatically.',
  alternates: { canonical: '/ai-agents' },
};

/* --------------------------
   SEO / AEO JSON-LD
--------------------------- */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'Jess AI - 24/7 AI Receptionist',
      url: 'https://www.traffik.nz/ai-agents',
      description:
        'Jess AI answers calls, books appointments, sends reminders and upsells services 24/7. Built and trained for NZ businesses.',
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://www.traffik.nz/images/aiv-hero.jpg',
      },
    },
    {
      '@type': 'Service',
      name: 'AI Receptionist (Jess AI)',
      serviceType: 'AI Receptionist / AI Call Answering',
      provider: {
        '@type': 'Organization',
        name: 'Traffik AI Web Optimisation Limited',
        url: 'https://www.traffik.nz',
        telephone: '+64212968586',
        email: 'hello@traffik.nz',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '6 Nancy Avenue, Mairehau',
          addressLocality: 'Christchurch',
          addressRegion: 'Canterbury',
          postalCode: '8013',
          addressCountry: 'NZ',
        },
      },
      areaServed: [
        { '@type': 'Country', name: 'New Zealand' },
        { '@type': 'AdministrativeArea', name: 'Canterbury' },
        { '@type': 'City', name: 'Christchurch' },
      ],
      description:
        'Jess AI answers calls, books appointments, sends reminders and upsells services 24/7. Trained on your business data and brand voice.',
      offers: [
        {
          '@type': 'Offer',
          name: 'Jess AI Setup & Training',
          priceCurrency: 'NZD',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: 1500,
            maxPrice: 3000,
            priceCurrency: 'NZD',
            valueAddedTaxIncluded: true,
          },
          availability: 'https://schema.org/InStock',
          url: 'https://www.traffik.nz/ai-agents#pricing',
        },
        {
          '@type': 'Offer',
          name: 'Jess AI Weekly Management',
          priceCurrency: 'NZD',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: 169,
            priceCurrency: 'NZD',
            valueAddedTaxIncluded: true,
          },
          availability: 'https://schema.org/InStock',
          url: 'https://www.traffik.nz/ai-agents#pricing',
        },
        {
          '@type': 'Offer',
          name: 'Intro Offer (first 12 weeks)',
          priceCurrency: 'NZD',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: 99,
            priceCurrency: 'NZD',
            valueAddedTaxIncluded: true,
          },
          availability: 'https://schema.org/LimitedAvailability',
          url: 'https://www.traffik.nz/ai-agents#pricing',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does setup take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Typically 1–2 weeks from consultation to go-live depending on your booking systems and how much business data is provided.',
          },
        },
        {
          '@type': 'Question',
          name: 'What phone systems does Jess work with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Jess works with most VoIP providers and mobile divert/forwarding systems. We handle the technical integration and testing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my business data secure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. Your data is used only to train your agent and is never shared with other businesses. Access is controlled and handled with NZ privacy best practices.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I customise what Jess says?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. Jess is trained on your scripts, tone of voice and service rules. You approve key call flows before go-live and we can refine them anytime.',
          },
        },
      ],
    },
  ],
};

export default function AIAgentsPage() {
  return (
    <main className="min-h-screen bg-[#07090b] text-white">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <HeroLeft
        imageSrc="/images/aiv-hero.jpg"
        imageAlt="Jess AI receptionist answering calls"
        title="Meet Jess AI"
        subtitle="Your 24/7 AI Receptionist"
        ctas={[
          { label: 'Call Jess AI: 03 661 7222', href: 'tel:+6435654900' },
          { label: 'View Pricing', href: '#pricing' },
        ]}
      />

      {/* Intro */}
      <section className="border-b border-white/10">
        <div className="container mx-auto max-w-6xl px-4 py-10">
          <p className="max-w-3xl text-white/80 text-lg leading-relaxed">
            Never miss a call again. Jess AI answers enquiries, books appointments automatically,
            sends follow-up reminders, and upsells your services — all day, every day.
            Trained specifically on your business data and brand voice.
          </p>
        </div>
      </section>

      {/* Live Indicator Bar */}
      <section className="bg-[#0b0e12] py-4 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </span>
          <span className="text-emerald-300 font-medium text-sm uppercase tracking-wide">
            Demo Line Active Now
          </span>
          <span className="text-white/30">|</span>
          <a
            href="tel:+6435654900"
            className="text-white hover:text-emerald-300 font-semibold transition-colors"
          >
            03 661 7222
          </a>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-[#0b0e12] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-accent mb-4">
              What Jess AI Does For Your Business
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Trained on your services, pricing, FAQs and booking rules — so customers get answers and action, fast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Phone,
                title: 'Takes Calls',
                description:
                  'Answers every call instantly with your business personality, knowledge and tone.',
              },
              {
                icon: Calendar,
                title: 'Books Appointments',
                description:
                  'Books, reschedules and manages cancellations using your real availability.',
              },
              {
                icon: MessageSquare,
                title: 'Follows Up',
                description:
                  'Appointment reminders and follow-ups to reduce no-shows and recover missed opportunities.',
              },
              {
                icon: TrendingUp,
                title: 'Upsells Services',
                description:
                  'Suggests relevant add-ons and premium services based on customer intent and context.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#0b0e12] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-accent mb-4">
              Pricing That Pays For Itself
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Jess AI is built to capture revenue you already generate — but lose when calls go unanswered,
              messages go cold, or follow-ups don’t happen. You pay once to build & train Jess for your business,
              then a predictable weekly rate to keep her live, accurate and improving.
            </p>
            <p className="mt-4 text-white/60 text-sm">
              All pricing is NZD and includes GST.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Setup */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="text-sm font-semibold text-brand-accent mb-4 uppercase tracking-wide">
                Setup &amp; Training
              </div>
              <div className="text-4xl font-bold text-white mb-2">$1,500 – $3,000</div>
              <p className="text-white/60 mb-6">
                One-time setup. We train Jess on your services, scripts, FAQs and booking rules.
              </p>
              <ul className="space-y-4">
                {[
                  'Custom AI training on your business data + FAQs',
                  'Call flows built for bookings, quoting and upsells',
                  'Calendar / booking integration and testing',
                  'Go-live support + first optimisation pass',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/75">
                    <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-white/70 text-sm">
                You can also split the setup cost across 3 months, interest-free.
              </div>
            </div>

            {/* Weekly */}
            <div className="bg-white/5 rounded-2xl p-8 border-2 border-brand-accent shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-black text-sm font-semibold px-4 py-1 rounded-full">
                Standard Plan
              </div>
              <div className="text-sm font-semibold text-brand-accent mb-4 uppercase tracking-wide mt-2">
                Weekly Management
              </div>
              <div className="text-4xl font-bold text-white mb-2">$169</div>
              <p className="text-white/60 mb-6">
                Per week. Unlimited calls. Continuous improvements. Monthly reporting.
              </p>
              <ul className="space-y-4">
                {[
                  'Unlimited calls answered (24/7)',
                  'Ongoing tuning + knowledge updates',
                  'Monitoring + reliability maintenance',
                  'Monthly performance reporting',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/75">
                    <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-white/70 text-sm">
                Best fit once Jess is live and you want consistent, compounding performance.
              </div>
            </div>

            {/* Intro Offer */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-8 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-300 text-black text-xs font-bold px-3 py-1 rounded-bl-xl">
                INTRO WINDOW
              </div>
              <div className="text-sm font-semibold text-brand-accent mb-4 uppercase tracking-wide">
                Introductory Rate
              </div>

              <div className="text-4xl font-bold text-white mb-2">
                $99<span className="text-lg font-normal text-white/60">/week</span>
              </div>
              <p className="text-white/70 mb-2">
                First 12 weeks only.
              </p>
              <p className="text-white/60 text-sm mb-5">
                For businesses that want to trial Jess AI while we dial in scripts, objections, booking flow and upsells.
              </p>

              <div className="h-px bg-white/10 mb-4" />

              <p className="text-white/70 text-sm mb-6">
                Designed to make onboarding easy — with a clear upgrade path to the standard weekly plan at week 13.
              </p>

              <ul className="space-y-4">
                {[
                  'Full Jess AI functionality',
                  'Priority onboarding and tuning',
                  'Script revisions included',
                  'Smooth transition to standard weekly plan',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="tel:+6435654900"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-accent px-5 py-3 font-semibold text-black hover:opacity-90"
                >
                  <Phone className="h-5 w-5" />
                  Talk to Jess (Demo): 03 661 7222
                </a>
                <a
                  href="mailto:hello@traffik.nz?subject=Jess%20AI%20Intro%20Offer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/10"
                >
                  Email to start onboarding
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center text-white/55 text-sm">
            No lock-in contracts. Cancel anytime after the intro period or on the standard weekly plan.
          </div>
        </div>
      </section>

      {/* Live Demo CTA */}
      <section className="py-24 bg-[#07090b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Clock className="h-16 w-16 mx-auto mb-6 opacity-80 text-brand-accent" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Hear Jess AI In Action
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Call the demo line now. Jess will answer and walk you through booking a sample appointment.
          </p>
          <a
            href="tel:+6435654900"
            className="inline-flex items-center gap-4 bg-brand-accent text-black text-2xl md:text-3xl font-bold px-10 py-6 rounded-full hover:opacity-90 transition-all hover:scale-105 shadow-2xl"
          >
            <Phone className="h-8 w-8" />
            03 661 7222
          </a>
          <p className="mt-6 text-white/60 text-sm">
            Demo available 24/7 • Standard call rates apply • Based in NZ
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0b0e12] border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-accent mb-12">
            Common Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: 'How long does setup take?',
                a: 'Typically 1–2 weeks from initial consultation to going live, depending on complexity of your booking systems and data.',
              },
              {
                q: 'What phone systems does Jess work with?',
                a: 'Jess integrates with most modern VoIP systems, mobile divert, and can use a dedicated number or forward from your existing line. We handle the technical setup.',
              },
              {
                q: 'Is my business data secure?',
                a: 'Absolutely. Your data is used to train only your agent, never shared or used for other clients. We follow NZ privacy best practices.',
              },
              {
                q: 'Can I customise what Jess says?',
                a: 'Yes. Jess is trained on your scripts, tone of voice, and business rules. You approve everything before going live.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-white/10 pb-8 last:border-0">
                <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-white/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+6435654900"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:opacity-90 text-black font-semibold px-8 py-4 rounded-lg transition"
            >
              <Phone className="h-5 w-5" />
              Call Jess AI Demo
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
