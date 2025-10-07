'use client';

import { useEffect, useState } from 'react';
import HeroLeft from '@/components/HeroLeft';

/** Popup component (loads /public/sample-audit.html and shows it in a modal) */
function AuditPopup({
  url,
  buttonLabel = 'View sample audit (popup)',
}: {
  url: string;
  buttonLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const [html, setHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function openModal() {
    setOpen(true);
    if (!html && !loading) {
      setLoading(true);
      setErr(null);
      try {
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch audit');
        const txt = await res.text();
        setHtml(txt);
      } catch (e: any) {
        setErr(e?.message || 'Could not load the audit');
      } finally {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <button
        onClick={openModal}
        className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-medium text-white hover:bg-white/10"
      >
        {buttonLabel}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute left-1/2 top-1/2 w-[95vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-neutral-950 p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Audit preview"
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
              <h3 className="text-white font-semibold">Sample Audit</h3>
              <div className="flex gap-2">
                <a
                  href={url}
                  download
                  className="rounded-full border border-white/20 px-3 py-1.5 text-sm text-white/85 hover:bg-white/10"
                >
                  Download
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/20 px-3 py-1.5 text-sm text-white/85 hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="mt-3 h-[75vh] overflow-hidden rounded-lg">
              {loading && <p className="p-4 text-white/70">Loading…</p>}
              {err && <p className="p-4 text-red-400">{err}</p>}
              {html && (
                <iframe
                  // sandboxed for safety (no scripts run)
                  sandbox=""
                  srcDoc={html}
                  className="h-full w-full rounded-lg bg-white"
                  title="Audit HTML Preview"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Page() {
  return (
    <main>
      <HeroLeft
        imageSrc="/images/audit-hero.jpg"
        imageAlt="Website audit dashboard on screen"
        title="AI Website Audit — $159"
        subtitle="30-point technical SEO, speed and Google readiness review with prioritised fixes."
        ctas={[
          // TODO: replace with your Stripe checkout when ready
          { label: 'Buy Audit — $159', href: 'mailto:hello@traffik.nz?subject=Buy%20Website%20Audit%20($159)' },
          { label: 'Call 021 296 8586', href: 'tel:+64212968586' },
        ]}
      />

      {/* What you get */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">What’s included</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Technical & Speed</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Core Web Vitals & page speed (mobile first)</li>
              <li>• Crawlability, sitemaps, robots, indexing</li>
              <li>• Broken links, images, redirects, duplicates</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">SEO & Content</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Titles, metas, headings, internal linking</li>
              <li>• Schema/structured data & AI-readiness</li>
              <li>• Service & suburb coverage gaps</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Google Business Profile</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Categories, services, keywords & photos</li>
              <li>• Review velocity & response strategy</li>
              <li>• Local pack visibility snapshot</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Conversion & Tracking</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Calls, quote forms, click-to-call paths</li>
              <li>• Analytics, goals and basic call tracking</li>
              <li>• Top 5 quick wins to do first</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">How it’s delivered</h2>
        <ul className="mt-4 grid gap-2 text-white/85 md:grid-cols-2">
          <li>• Turnaround: 48 hours (business days)</li>
          <li>• PDF summary + action plan (prioritised)</li>
          <li>• Loom walkthrough (10–15 minutes)</li>
          <li>• Optional 15-minute call to clarify next steps</li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:hello@traffik.nz?subject=Buy%20Website%20Audit%20($159)"
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

          {/* Popup trigger */}
          <div className="ml-auto">
            <AuditPopup url="/sample-audit.html" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold text-white">Who is it for?</h3>
            <p className="mt-2 text-white/85">NZ tradies: plumbers, builders, sparkies, roofers, painters, landscapers and more.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold text-white">What do you need from me?</h3>
            <p className="mt-2 text-white/85">Your website URL and service area. That’s it.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold text-white">Will you do the fixes?</h3>
            <p className="mt-2 text-white/85">We can quote fixes or roll them into our AI Visibility System.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold text-white">Money-back?</h3>
            <p className="mt-2 text-white/85">If we can’t find at least 5 meaningful improvements, we’ll refund you.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
