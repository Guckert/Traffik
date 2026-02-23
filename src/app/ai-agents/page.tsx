import { Metadata } from 'next';
import { Phone, Calendar, MessageSquare, TrendingUp, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';
import HeroLeft from '@/components/HeroLeft';

export const metadata: Metadata = {
  title: 'Jess AI - 24/7 AI Receptionist | Traffik',
  description: 'Meet Jess AI. Your AI receptionist that takes calls, books appointments, sends reminders and upsells services 24/7. Never miss a call again. Call 03 565 4900.',
  alternates: {
    canonical: '/ai-agents',
  },
};

export default function AIAgentsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroLeft 
        title="Meet Jess AI"
        subtitle="Your 24/7 AI Receptionist"
        description="Never miss a call again. Jess AI answers inquiries, books appointments automatically, sends follow-up reminders, and upsells your services—all day, every day. Trained specifically on your business data and brand voice."
        primaryCta={{
          label: "Call Jess AI: 03 565 4900",
          href: "tel:035654900"
        }}
        secondaryCta={{
          label: "View Pricing",
          href: "#pricing"
        }}
        imageSrc="/images/aiv-hero.jpg"
        imageAlt="Jess AI Receptionist Interface"
      />

      {/* Live Indicator Bar */}
      <section className="bg-slate-900 py-4 border-y border-slate-800">
        <div className="max-w-7xl mx-osx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 font-medium text-sm uppercase tracking-wide">Demo Line Active Now</span>
          <span className="text-slate-500">|</span>
          <a href="tel:035654900" className="text-white hover:text-emerald-400 font-semibold transition-colors">
            03 565 4900
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-slate-900 mb-2">34%</div>
              <p className="text-slate-600">Average NZ business call abandonment rate</p>
            </div>
            <div className="p-6 md:border-x md:border-slate-200">
              <div className="text-4xl font-bold text-indigo-600 mb-2">0%</div>
              <p className="text-slate-600">Missed calls with Jess AI</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
              <p className="text-slate-600">Availability including holidays</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Jess AI Does For Your Business
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Trained specifically on your services, pricing, and booking systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Phone,
                title: "Takes Calls",
                description: "Answers every call instantly with your business personality, knowledge, and tone"
              },
              {
                icon: Calendar,
                title: "Books Appointments",
                description: "Real-time calendar integration. Books, reschedules, and manages cancellations automatically"
              },
              {
                icon: MessageSquare,
                title: "Follows Up",
                description: "Automated reminders via SMS and voice calls to reduce no-shows by up to 70%"
              },
              {
                icon: TrendingUp,
                title: "Upsells Services",
                description: "Intelligently suggests relevant add-ons and premium services based on customer needs"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Setup In 3 Steps</h2>
          <div className="space-y-12">
            {[
              { step: "01", title: "Discovery", desc: "We analyze your current call flow, services, and booking systems" },
              { step: "02", title: "Training", desc: "Jess AI learns your business data, pricing, FAQs, and brand voice" },
              { step: "03", title: "Go Live", desc: "Phone number forwarded to Jess. She starts answering immediately, 24/7" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center font-bold text-2xl">
                  {item.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple Pricing</h2>
            <p className="text-slate-600 text-lg">Build once, run forever. All prices include GST.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Setup */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="text-sm font-semibold text-indigo-600 mb-4 uppercase tracking-wide">Setup & Training</div>
              <div className="text-4xl font-bold text-slate-900 mb-2">$1,500 – $3,000</div>
              <p className="text-slate-500 mb-6">One-time fee inc GST</p>
              <ul className="space-y-4">
                {['Custom AI training on your data', 'Calendar/CRM integration', 'Voice personality setup', 'Testing & refinement'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Weekly */}
            <div className="bg-white rounded-2xl p-8 border-2 border-indigo-600 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                Running Costs
              </div>
              <div className="text-sm font-semibold text-indigo-600 mb-4 uppercase tracking-wide mt-2">Weekly Rate</div>
              <div className="text-4xl font-bold text-slate-900 mb-2">$169</div>
              <p className="text-slate-500 mb-6">per week inc GST</p>
              <ul className="space-y-4">
                {['Unlimited calls answered', '24/7 availability', 'System maintenance', 'Monthly performance reports'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intro Offer */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-xl">
                LIMITED TIME
              </div>
              <div className="text-sm font-semibold text-indigo-400 mb-4 uppercase tracking-wide">Introductory Offer</div>
              <div className="text-4xl font-bold mb-2">$99<span className="text-lg font-normal text-slate-300">/mo</span></div>
              <p className="text-slate-300 mb-4">First 3 months</p>
              <div className="h-px bg-slate-600 mb-4"></div>
              <p className="text-slate-400 text-sm mb-6">Or split the build cost over 3 months interest-free</p>
              <ul className="space-y-4">
                {['Everything in weekly plan', 'Reduced setup fee options', 'Priority support', 'Free script revisions'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo CTA */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Clock className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Hear Jess AI In Action</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Call our demo line right now. Jess will answer and walk you through booking a sample appointment.
          </p>
          <a 
            href="tel:035654900" 
            className="inline-flex items-center gap-4 bg-white text-indigo-600 text-2xl md:text-3xl font-bold px-10 py-6 rounded-full hover:bg-indigo-50 transition-all hover:scale-105 shadow-2xl"
          >
            <Phone className="h-8 w-8" />
            03 565 4900
          </a>
          <p className="mt-6 text-indigo-200 text-sm">
            Demo available 24/7 • Standard call rates apply • Based in NZ
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Common Questions</h2>
          <div className="space-y-8">
            {[
              {
                q: "How long does setup take?",
                a: "Typically 2-3 weeks from initial consultation to going live, depending on complexity of your booking systems and data."
              },
              {
                q: "What phone systems does Jess work with?",
                a: "Jess integrates with most modern VoIP systems, mobile divert, and can use a dedicated number or forward from your existing line. We handle the technical setup."
              },
              {
                q: "Is my business data secure?",
                a: "Absolutely. All data is stored in NZ-based secure servers, fully compliant with NZ Privacy Act. Your data trains only your agent, never shared or used for other models."
              },
              {
                q: "Can I customize what Jess says?",
                a: "Yes. Jess is trained on your specific scripts, tone of voice, and business rules. You approve everything before going live."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-slate-200 pb-8 last:border-0">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Never Miss a Call Again?</h2>
          <p className="text-slate-300 mb-8 text-lg">Join NZ businesses using Jess AI to capture every opportunity.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:035654900" 
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call Jess AI: 03 565 4900
            </a>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
