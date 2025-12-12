'use client';

import React, { useEffect, useRef } from 'react';
import HeroLeft from '@/components/HeroLeft';
import AuditPopup from '@/components/AuditPopup';

export default function AuditPage() {
  const auditPopupRef = useRef<HTMLDivElement>(null);

  // Handle #sample-audit hash (opens modal automatically)
  useEffect(() => {
    const onHash = () => {
      if (typeof window === 'undefined') return;
      if (window.location.hash === '#sample-audit') {
        const button = auditPopupRef.current?.querySelector('button');
        button?.click();
        history.replaceState({}, '', window.location.pathname + window.location.search);
      }
    };
    onHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <main>

      {/* Anchor used by CTA to auto-open sample modal */}
      <div id="sample-audit" className="hidden" />

      {/* ---------------------------------------------------------
            HERO SECTION — Updated with Steve avatar & $99 offer
      ---------------------------------------------------------- */}
      <HeroLeft
        imageSrc="/images/audit-hero.jpg"
        imageAlt="Website audit dashboard on screen"
        title="AI Website & Google Audit — Now $99"
        subtitle="Normal price $159. Use code BOSS at checkout. Get ahead of your competitors before 2025 hits."
        subpoints={[
          "Built for Tradies",
          "30-point technical, SEO & Google readiness review",
          "Find out exactly what's blocking your visibility",
        ]}
        ctas={[
          { label: 'Start Audit — $99 (Code: BOSS)', href: '/api/checkout?p=audit&discount=BOSS' },
          { label: 'Call 021 296 8586', href: 'tel:+64212968586' },
          { label: 'View Sample Audit', href: '#sample-audit' },
        ]}
        avatarVideoSrc="/videos/steve-urgency.mp4"
      />

      {/* ---------------------------------------------------------
             WHY NOW — Urgency section
      ---------------------------------------------------------- */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">Why now?</h2>

        <p className="mt-4 text-white/85 max-w-3xl">
          When January hits, search behaviour resets. Competitors who optimise first
          gain top visibility for months.
          <br /><br />
          This audit shows you exactly what’s broken — before it costs you real tradie jobs.
        </p>
      </section>

      {/* ---------------------------------------------------------
            WHAT'S INCLUDED — Feature grid (kept same styling)
      ---------------------------------------------------------- */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">What's included</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">

          {/* Performance */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Performance (mobile-first)</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Lighthouse Performance score (mobile)</li>
              <li>• Core Web Vitals: LCP, CLS, TBT, FCP</li>
              <li>• Bottlenecks: JavaScript, CSS, images, caching</li>
            </ul>
          </div>

          {/* SEO */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">SEO signals</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Lighthouse SEO score</li>
              <li>• Titles, meta descriptions & canonicals</li>
              <li>• Crawlability & indexability checks</li>
            </ul>
          </div>

          {/* Technical */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Technical best practices</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Lighthouse Best-Practices score</li>
              <li>• Security/HTTPS, deprecated APIs, console errors</li>
              <li>• Redirect chains, broken assets, duplicates</li>
            </ul>
          </div>

          {/* Accessibility */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Accessibility</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Lighthouse Accessibility score</li>
              <li>• Alt text, contrast, headings, focus states</li>
            </ul>
          </div>

          {/* AI */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">AI search readiness</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• JSON-LD audit: Organization, LocalBusiness, Service schema</li>
              <li>• FAQ & Service schema coverage</li>
              <li>• Natural-language metas for AI Overviews</li>
            </ul>
          </div>

          {/* Local & GBP */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Local rankings & GBP</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Local Pack / Maps visibility by keyword</li>
              <li>• Competitor snapshot & ranking gaps</li>
              <li>• GBP: categories, photos, reviews, NAP alignment</li>
            </ul>
          </div>

          {/* Competitive */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Competitive snapshot</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Top competitor analysis</li>
              <li>• Gaps in visibility and messaging</li>
            </ul>
          </div>

          {/* Action plan */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Prioritised action plan</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Top 5 quick wins to boost visibility</li>
              <li>• Sequenced, ticket-ready dev fixes</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------------
            DELIVERY SECTION — With 15m call removed
      ---------------------------------------------------------- */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">How it's delivered</h2>

        <ul className="mt-4 grid gap-2 text-white/85 md:grid-cols-2">
          <li>• Turnaround: 48 hours (business days)</li>
          <li>• HTML preview + PDF summary (with prioritised actions)</li>
          <li>• Clear next steps for Tradies based on your audit results</li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/api/checkout?p=audit&discount=BOSS"
            className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-medium text-white hover:bg-white/10"
          >
            Start Audit — $99 (Code: BOSS)
          </a>
          <a
            href="tel:+64212968586"
            className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-medium text-white/85 hover:text-white hover:bg-white/10"
          >
            Call 021 296 8586
          </a>

          {/* Sample audit modal */}
          <div ref={auditPopupRef}>
            <AuditPopup 
              url="/sample-audit.json" 
              buttonLabel="View Sample Audit" 
            />
          </div>
        </div>
      </section>

    </main>
  );
}
