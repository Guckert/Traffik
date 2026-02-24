import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  Calendar,
  MessageSquare,
  TrendingUp,
  CheckCircle,
  Clock,
} from 'lucide-react';
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
              'Typically 2–3 weeks from consultation to go-live depending on your booking systems and business complexity.',
          },
        },
        {
          '@type': 'Question',
          name: 'What phone systems does Jess work with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Jess works with most VoIP providers and mobile divert/forwarding systems. We handle the technical integration.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my business data secure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. Your data is used only to train your agent and is never shared with other businesses.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I customise what Jess says?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. Jess is trained on your scripts, tone of voice and service rules. You approve flows before go-live.',
          },
        },
      ],
    },
  ],
};

export default function AIAgentsPage() {
  return (
    <main className="min-h-screen bg-[#07090b] text-white">
      {/* Inject structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroLeft
        imageSrc="/images/aiv-hero.jpg"
        imageAlt="Jess AI receptionist answering calls"
        title="Meet Jess AI"
        subtitle="Your 24/7 AI Receptionist"
        ctas={[
          { label: 'Call Jess AI: 03 565 4900', href: 'tel:+6435654900' },
          { label: 'View Pricing', href: '#pricing' },
        ]}
      />

      {/* Intro */}
      <section className="border-b border-white/10">
        <div className="container mx-auto max-w-5xl px-4 py-12">
          <p className="text-lg text-white/80 leading-relaxed">
            Never miss a call again. Jess AI answers enquiries, books appointments,
            sends reminders and upsells services — automatically, 24/7.
            Trained specifically on your business data and brand voice.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-[#0b0e12] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-accent mb-4">
              Pricing That Reflects Performance
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Jess AI is built to convert missed calls into booked revenue.
              One setup. One weekly management fee. No bloated retainers.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Setup */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">
                Setup & Training
              </h3>
              <div className="text-4xl font-bold mb-2">$1,500–$3,000</div>
              <p className="text-white/60 mb-6">
                One-time build inc GST. Custom-trained on your services.
              </p>
            </div>

            {/* Weekly */}
            <div className="bg-white/5 rounded-2xl p-8 border-2 border-brand-accent shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">
                Weekly Management
              </h3>
              <div className="text-4xl font-bold mb-2">$169</div>
              <p className="text-white/60 mb-6">
                Per week inc GST. Unlimited calls. Continuous improvement.
              </p>
            </div>

            {/* Intro */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">
                Introductory Launch Offer
              </h3>
              <div className="text-4xl font-bold mb-2">
                $99<span className="text-lg text-white/60">/week</span>
              </div>
              <p className="text-white/70 mb-4">
                Intro offer — first 12 weeks only.
              </p>
              <p className="text-white/60 text-sm">
                Designed for businesses ready to trial Jess AI before moving
                to the standard weekly rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#07090b] text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Never Miss Another Call?
        </h2>
        <a
          href="tel:+6435654900"
          className="inline-flex items-center gap-3 bg-brand-accent text-black px-8 py-4 rounded-full font-bold text-xl hover:opacity-90"
        >
          <Phone className="h-6 w-6" />
          03 565 4900
        </a>
      </section>
    </main>
  );
}
