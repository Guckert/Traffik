'use client';

import React, { useEffect, useRef } from 'react';
import HeroLeft from '@/components/HeroLeft';
import AuditPopup from '@/components/AuditPopup';

export default function AuditPage() {
  const auditPopupRef = useRef<HTMLDivElement>(null);

  // Open modal when the #sample-audit hash is used (hero CTA)
  useEffect(() => {
    const onHash = () => {
      if (typeof window === 'undefined') return;
      if (window.location.hash === '#sample-audit') {
        // Trigger the AuditPopup button click
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
      {/* Invisible anchor so the hero CTA can trigger the modal via hash */}
      <div id="sample-audit" className="hidden" />

      <HeroLeft
        imageSrc="/images/audit-hero.jpg"
        imageAlt="Website audit dashboard on screen"
        title="AI Website Audit — $159"
        subtitle="30-point technical SEO, speed and Google readiness review with prioritised fixes."
        ctas={[
          { label: 'Buy Audit — $159', href: '/api/checkout?p=audit' },
          { label: 'Call 021 296 8586', href: 'tel:+64212968586' },
          { label: 'View Sample Audit', href: '#sample-audit' }, // opens modal via hash listener
        ]}
      />

      {/* What's included */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">What's included</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {/* Performance (Lighthouse + CWV) */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Performance (mobile-first)</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Lighthouse Performance score (mobile)</li>
              <li>• Core Web Vitals: LCP, CLS, TBT, FCP</li>
              <li>• Bottlenecks: heavy JS/CSS, image sizing, caching</li>
            </ul>
          </div>

          {/* SEO */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">SEO signals</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Lighthouse SEO score</li>
              <li>• Titles & meta descriptions, canonicals</li>
              <li>• Crawlability & indexability (sitemap/robots)</li>
            </ul>
          </div>

          {/* Technical */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Technical best practices</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Lighthouse Best-Practices score</li>
              <li>• Security/HTTPS, deprecated APIs, console errors</li>
              <li>• Redirects, broken assets and duplicates</li>
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

          {/* AI Search Readiness */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">AI search readiness</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• JSON-LD audit: Organization/WebPage/Breadcrumb</li>
              <li>• LocalBusiness, FAQ & Service schema coverage</li>
              <li>• Natural-language metas for AI Overviews/voice</li>
            </ul>
          </div>

          {/* Local & GBP */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Local rankings & GBP</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Local Pack / Maps / Organic position by keyword</li>
              <li>• Competitor count & visibility snapshot</li>
              <li>• GBP audit: categories, services, photos, reviews, NAP</li>
            </ul>
          </div>

          {/* Competitive */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Competitive snapshot</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Top local competitor & positioning gaps</li>
              <li>• Differentiators you can claim quickly</li>
            </ul>
          </div>

          {/* Action plan */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Prioritised action plan</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Top 5 quick wins with estimated score gains</li>
              <li>• Sequenced fixes for devs (ticket-ready)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How it's delivered */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">How it's delivered</h2>
        <ul className="mt-4 grid gap-2 text-white/85 md:grid-cols-2">
          <li>• Turnaround: 48 hours (business days)</li>
          <li>• HTML preview + PDF summary (with prioritised actions)</li>
          <li>• Optional 15-minute call to clarify next steps</li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/api/checkout?p=audit"
            className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-medium text-white hover:bg-white/10"
          >
            Buy Audit — $159
          </a>
          <a
            href="tel:+64212968586"
            className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-medium text-white/85 hover:text-white hover:bg-white/10"
          >
            Call 021 296 8586
          </a>
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
