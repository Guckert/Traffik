'use client';

import React from 'react';
import HeroLeft from '@/components/HeroLeft';

export default function GBPPage() {
  return (
    <main>
      <HeroLeft
        imageSrc="/images/gbp-hero.jpg"
        imageAlt="Google Business Profile optimisation"
        title="Google Business Profile Optimisation — $350"
        subtitle="Rank in the local pack and convert views into calls, bookings and direction requests."
        ctas={[
          { label: 'Buy GBP Optimisation — $350', href: '/api/checkout?p=gbp' },
          { label: 'Call 021 296 8586', href: 'tel:+64212968586' },
        ]}
      />

      {/* What’s included */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">What’s included</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Profile foundation</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Category & attribute refinement</li>
              <li>• NAP consistency audit (name, address, phone)</li>
              <li>• Services/products structuring + menu setup</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Conversion assets</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Photo strategy & branded post templates</li>
              <li>• Offer/Service highlights & UTM tracking</li>
              <li>• Call tracking and appointment links</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Reviews & messaging</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Review acquisition + response playbook</li>
              <li>• Auto-reply & FAQ suggestions</li>
              <li>• Spam review escalation guidance</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Local ranking signals</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Category & service match to queries</li>
              <li>• Proximity & prominence quick wins</li>
              <li>• Citations (core + industry) checklist</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">How it’s delivered</h2>
        <ul className="mt-4 grid gap-2 text-white/85 md:grid-cols-2">
          <li>• Turnaround: 3–5 working days after onboarding</li>
          <li>• Implementation inside your GBP + short report</li>
          <li>• Optional 15-minute call to review next steps</li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/api/checkout?p=gbp"
            className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-medium text-white hover:bg-white/10"
          >
            Buy GBP Optimisation — $350
          </a>
          <a
            href="tel:+64212968586"
            className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-medium text-white/85 hover:text-white hover:bg-white/10"
          >
            Call 021 296 8586
          </a>
        </div>
      </section>
    </main>
  );
}
