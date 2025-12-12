'use client';

import React from 'react';
import HeroLeft from '@/components/HeroLeft';

export default function GBPPage() {
  return (
    <main>
      <HeroLeft
        imageSrc="/images/gbp-hero.jpg"
        imageAlt="Google Business Profile optimisation dashboard"
        title="Google Business Profile Optimisation — $350"
        subtitle="The fastest way for tradies to win Maps/Local Pack visibility and turn searches into calls."
        subpoints={[
          'Built for Tradies (NZ)',
          'Fix categories, services, keywords, photos & trust signals',
          'Set up a repeatable review + posting system',
        ]}
        ctas={[
          { label: 'Buy GBP Optimisation — $350', href: '/api/checkout?p=gbp' },
          { label: 'Call 021 296 8586', href: 'tel:+64212968586' },
          { label: 'Start with the $99 Audit', href: '/audit' },
        ]}
        avatarVideoSrc="/videos/steve-urgency.mp4"
      />

      {/* Why GBP first */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">Why GBP is the fastest ROI</h2>
        <p className="mt-4 text-white/85 max-w-3xl">
          For most trades, the quickest visibility gains come from the Google Local Pack (Maps).
          If your profile is miscategorised, incomplete, or inconsistent, Google will show competitors instead.
          This service fixes the fundamentals and installs a system that keeps your profile active and trusted.
        </p>
      </section>

      {/* What you get */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">What’s included</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Categories + services (done properly)</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Primary + secondary category alignment</li>
              <li>• Services list that matches how customers search</li>
              <li>• Remove irrelevant categories that dilute relevance</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Profile copy built to convert</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Business description rewritten for trust + keywords</li>
              <li>• Service-area wording tuned for Auckland/Wellington/Christchurch</li>
              <li>• Clear differentiators (what makes you the safe choice)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Photos + credibility signals</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Photo checklist to look established (even if new)</li>
              <li>• Cover/profile image guidance + naming/geo tips</li>
              <li>• “Proof” content recommendations (before/after, vans, team, work sites)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Reviews system</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Review request message templates</li>
              <li>• Process to keep reviews steady (not spiky)</li>
              <li>• Response templates that improve trust + relevance</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">NAP + consistency check</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Name/Address/Phone consistency guidance</li>
              <li>• Website + booking links correctly set</li>
              <li>• Prevent duplicates and conflicting signals</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Posting plan (simple + repeatable)</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• What to post (services, jobs, offers, proof)</li>
              <li>• Frequency and structure (so it’s sustainable)</li>
              <li>• Call-to-action guidance for conversions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">How it works</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Step 1 — Intake</h3>
            <p className="mt-2 text-white/80">
              You send your GBP link (or the email used to manage it), your services, and your target cities.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Step 2 — Optimisation</h3>
            <p className="mt-2 text-white/80">
              We implement the key changes: categories, services, copy, trust signals, and a posting + review system.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Step 3 — Handover</h3>
            <p className="mt-2 text-white/80">
              You receive a clear checklist, templates, and a simple weekly routine that keeps your profile active.
            </p>
          </div>
        </div>
      </section>

      {/* Sequence / next step */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">The recommended sequence</h2>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-8">
          <ol className="space-y-2 text-white/85 list-decimal list-inside">
            <li>Start with the Audit (tells you what’s broken and what to prioritise)</li>
            <li>GBP Optimisation (fastest visibility lift for tradies)</li>
            <li>AI Visibility Website (high-converting system that compounds results)</li>
          </ol>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/api/checkout?p=gbp"
              className="inline-flex items-center rounded-2xl border border-white/70 px-6 py-3 font-semibold text-white hover:border-brand-accent hover:text-white transition"
            >
              Buy GBP Optimisation — $350
            </a>
            <a
              href="/ai-visibility"
              className="inline-flex items-center rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white/85 hover:bg-white/10 hover:text-white transition"
            >
              Next: AI Visibility Website
            </a>
            <a
              href="tel:+64212968586"
              className="inline-flex items-center rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white/85 hover:bg-white/10 hover:text-white transition"
            >
              Call 021 296 8586
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
