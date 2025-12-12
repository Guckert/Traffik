'use client';

import React, { useEffect, useRef } from 'react';
import HeroLeft from '@/components/HeroLeft';
import AuditPopup from '@/components/AuditPopup';

import { motion } from 'framer-motion';
import { fadeUp, fadeIn, staggerContainer, card } from '@/lib/animations';

export default function AuditPage() {
  const auditPopupRef = useRef<HTMLDivElement>(null);

  // Auto-open modal when #sample-audit is triggered
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

      <div id="sample-audit" className="hidden" />

      {/* HERO (HeroLeft has its own animation on the avatar now) */}
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

      {/* WHY NOW */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container py-12"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">Why now?</h2>

        <p className="mt-4 text-white/85 max-w-3xl">
          When January hits, search behaviour resets. Competitors who optimise
          first gain top visibility for months.
          <br /><br />
          This audit shows you exactly what’s broken — before it costs you real tradie jobs.
        </p>
      </motion.section>

      {/* WHAT'S INCLUDED */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container py-12"
      >
        <motion.h2
          variants={fadeUp}
          className="text-2xl md:text-3xl font-semibold text-brand-accent"
        >
          What's included
        </motion.h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">

          {[
            {
              title: "Performance (mobile-first)",
              items: [
                "Lighthouse Performance score (mobile)",
                "Core Web Vitals: LCP, CLS, TBT, FCP",
                "Bottlenecks: JavaScript, CSS, images, caching",
              ]
            },
            {
              title: "SEO signals",
              items: [
                "Lighthouse SEO score",
                "Titles, meta descriptions & canonicals",
                "Crawlability & indexability checks"
              ]
            },
            {
              title: "Technical best practices",
              items: [
                "Lighthouse Best-Practices score",
                "Security/HTTPS, deprecated APIs, console errors",
                "Redirect chains, broken assets, duplicates",
              ]
            },
            {
              title: "Accessibility",
              items: [
                "Lighthouse Accessibility score",
                "Alt text, contrast, headings, focus states",
              ]
            },
            {
              title: "AI search readiness",
              items: [
                "JSON-LD audit: Organization, LocalBusiness, Service schema",
                "FAQ & Service schema coverage",
                "Natural-language metas for AI Overviews",
              ]
            },
            {
              title: "Local rankings & GBP",
              items: [
                "Local Pack / Maps visibility by keyword",
                "Competitor snapshot & ranking gaps",
                "GBP: categories, photos, reviews, NAP alignment",
              ]
            },
            {
              title: "Competitive snapshot",
              items: [
                "Top competitor analysis",
                "Gaps in visibility and messaging",
              ]
            },
            {
              title: "Prioritised action plan",
              items: [
                "Top 5 quick wins to boost visibility",
                "Sequenced, ticket-ready dev fixes",
              ]
            }
          ].map((section, i) => (
            <motion.div
              key={i}
              variants={card}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="mt-3 space-y-2 text-white/85">
                {section.items.map((it, idx) => (
                  <li key={idx}>• {it}</li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>
      </motion.section>

      {/* DELIVERY SECTION */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container py-12"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">How it's delivered</h2>

        <ul className="mt-4 grid gap-2 text-white/85 md:grid-cols-2">
          <li>• Turnaround: 48 hours (business days)</li>
          <li>• HTML preview + PDF summary (with prioritised actions)</li>
          <li>• Clear next steps for Tradies based on your audit results</li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <motion.a
            variants={fadeIn}
            href="/api/checkout?p=audit&discount=BOSS"
            className="inline-flex items-center rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10"
          >
            Start Audit — $99 (Code: BOSS)
          </motion.a>

          <motion.a
            variants={fadeIn}
            href="tel:+64212968586"
            className="inline-flex items-center rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white/85 hover:text-white hover:bg-white/10"
          >
            Call 021 296 8586
          </motion.a>

          <motion.div variants={fadeIn} ref={auditPopupRef}>
            <AuditPopup
              url="/sample-audit.json"
              buttonLabel="View Sample Audit"
            />
          </motion.div>
        </div>
      </motion.section>

    </main>
  );
}
