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
    'Meet Jess AI. Your AI receptionist that takes calls, books appointments, sends reminders and upsells services 24/7. Never miss a call again. Call 03 565 4900.',
  alternates: { canonical: '/ai-agents' },
};

export default function AIAgentsPage() {
  return (
    <main className="min-h-screen bg-[#07090b] text-white">
      {/* Hero Section */}
      <HeroLeft
        imageSrc="/images/aiv-hero.jpg"
        imageAlt="Jess AI receptionist interface"
        title="Meet Jess AI"
        subtitle="Your 24/7 AI Receptionist"
        ctas={[
          { label: 'Call Jess AI: 03 565 4900', href: 'tel:+6435654900' },
          { label: 'View Pricing', href: '#pricing' },
        ]}
      />

      {/* Hero supporting copy (moved out of HeroLeft props) */}
      <section className="border-b border-white/10">
        <div className="container mx-auto max-w-6xl px-4 py-10">
          <p className="max-w-3xl text-white/80 text-lg leading-relaxed">
            Never miss a call again. Jess AI answers enquiries, books appointments
            automatically, sends follow-up reminders, and upsells your services —
            all day, every day. Trained specifically on your business data and
            brand voice.
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
            03 565 4900
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#07090b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-4xl font-bold text-white mb-2">34%</div>
              <p className="text-white/70">
                Average NZ business call abandonment rate
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-4xl font-bold text-brand-accent mb-2">0%</div>
              <p className="text-white/70">Missed calls with Jess AI</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <p className="text-white/70">Availability including holidays</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0b0e12] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-accent mb-4">
              What Jess AI Does For Your Business
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Trained specifically on your services, pricing, and booking systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Phone,
                title: 'Takes Calls',
                description:
                  'Answers every call instantly with your business personality, knowledge, and tone',
              },
              {
                icon: Calendar,
                title: 'Books Appointments',
                description:
                  'Real-time calendar integration. Books, reschedules, and manages cancellations automatically',
              },
              {
                icon: MessageSquare,
                title: 'Follows Up',
                description:
                  'Automated reminders via SMS and voice calls to reduce no-shows significantly',
              },
              {
                icon: TrendingUp,
                title: 'Upsells Services',
                description:
                  'Suggests relevant add-ons and premium services based on customer needs',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#07090b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-brand-accent">
            Setup In 3 Steps
          </h2>
          <div className="space-y-12">
            {[
              {
                step: '01',
                title: 'Discovery',
                desc: 'We analyse your current call flow, services, and booking systems',
              },
              {
                step: '02',
                title: 'Training',
                desc: 'Jess AI learns your business data, pricing, FAQs, and brand voice',
              },
              {
                step: '03',
                title: 'Go Live',
                desc: 'Phone number forwarded to Jess. She starts answering immediately, 24/7',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-accent rounded-2xl flex items-center justify-center font-bold text-2xl text-black">
                  {item.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#0b0e12] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-accent mb-4">
              Simple Pricing
            </h2>
            <p className="text-white/70 text-lg">
              Build once, run forever. All prices include GST.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Setup */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="text-sm font-semibold text-brand-accent mb-4 uppercase tracking-wide">
                Setup &amp; Training
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                $1,500 – $3,000
              </div>
              <p className="text-white/60 mb-6">One-time fee inc GST</p>
              <ul className="space-y-4">
                {[
                  'Custom AI training on your data',
                  'Calendar/CRM integration',
                  'Voice personality setup',
                  'Testing & refinement',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/75">
                    <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Weekly */}
            <div className="bg-white/5 rounded-2xl p-8 border-2 border-brand-accent shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-black text-sm font-semibold px-4 py-1 rounded-full">
                Running Costs
              </div>
              <div className="text-sm font-semibold text-brand-accent mb-4 uppercase tracking-wide mt-2">
                Weekly Rate
              </div>
              <div className="text-4xl font-bold text-white mb-2">$169</div>
              <p className="text-white/60 mb-6">per week inc GST</p>
              <ul className="space-y-4">
                {[
                  'Unlimited calls answered',
                  '24/7 availability',
                  'System maintenance',
                  'Monthly performance reports',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/75">
                    <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intro Offer */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-8 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-300 text-black text-xs font-bold px-3 py-1 rounded-bl-xl">
                LIMITED TIME
              </div>
              <div className="text-sm font-semibold text-brand-accent mb-4 uppercase tracking-wide">
                Introductory Offer
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                $99<span className="text-lg font-normal text-white/60">/mo</span>
              </div>
              <p className="text-white/70 mb-4">First 3 months</p>
              <div className="h-px bg-white/10 mb-4" />
              <p className="text-white/60 text-sm mb-6">
                Or split the build cost over 3 months interest-free
              </p>
              <ul className="space-y-4">
                {[
                  'Everything in weekly plan',
                  'Reduced setup fee options',
                  'Priority support',
                  'Free script revisions',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
            Call our demo line right now. Jess will answer and walk you through
            booking a sample appointment.
          </p>
          <a
            href="tel:+6435654900"
            className="inline-flex items-center gap-4 bg-brand-accent text-black text-2xl md:text-3xl font-bold px-10 py-6 rounded-full hover:opacity-90 transition-all hover:scale-105 shadow-2xl"
          >
            <Phone className="h-8 w-8" />
            03 565 4900
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
                a: 'Typically 2–3 weeks from initial consultation to going live, depending on complexity of your booking systems and data.',
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
              <div
                key={idx}
                className="border-b border-white/10 pb-8 last:border-0"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-white/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#07090b] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Never Miss a Call Again?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Join NZ businesses using Jess AI to capture every opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+6435654900"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:opacity-90 text-black font-semibold px-8 py-4 rounded-lg transition"
            >
              <Phone className="h-5 w-5" />
              Call Jess AI: 03 565 4900
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
