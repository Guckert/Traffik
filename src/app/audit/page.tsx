'use client';

import { useEffect, useState } from 'react';
import HeroLeft from '@/components/HeroLeft';

export default function Page() {
  const [open, setOpen] = useState(false);
  const [html, setHtml] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('Sample_Audit.html');

  // Open modal when the #sample-audit hash is used (hero CTA)
  useEffect(() => {
    const openFromHash = () => {
      if (typeof window === 'undefined') return;
      if (window.location.hash === '#sample-audit') {
        loadSample();
        // remove the hash so the page doesn't jump
        history.replaceState({}, '', window.location.pathname + window.location.search);
      }
    };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, []);

  // Fetch JSON, strip the site URL from the HTML, then show modal
  async function loadSample() {
    try {
      if (!html) {
        const res = await fetch('/sample-audit.json', { cache: 'no-store' });
        if (!res.ok) throw new Error(`Fetch ${res.status}`);
        const data = await res.json();
        const raw: string = data.html_report ?? data.html ?? '';

        // Remove the anchor that shows whiteheadplumbing.co.nz then the <br/>
        let cleaned = raw.replace(
          /<a[^>]*href="https?:\/\/whiteheadplumbing\.co\.nz\/?"[^>]*>[\s\S]*?<\/a><br\/?>/i,
          ''
        );

        // (Optional) also remove any bare-text mention of that domain just in case
        cleaned = cleaned.replace(/https?:\/\/whiteheadplumbing\.co\.nz\/?/gi, '');

        setHtml(cleaned);
        setFileName(data.report_filename || 'Sample_Audit.html');
      }
      setOpen(true);
    } catch (e) {
      console.error(e);
      setHtml(
        '<!doctype html><html><body style="font-family:system-ui;padding:16px">Could not load the sample right now.</body></html>'
      );
      setOpen(true);
    }
  }

  function downloadHtml() {
    if (!html) return;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName || 'Sample_Audit.html';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

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
          { label: 'Buy Audit — $159', href: 'mailto:hello@traffik.nz?subject=Buy%20Website%20Audit%20($159)' },
          { label: 'Call 021 296 8586', href: 'tel:+64212968586' },
          { label: 'View Sample Audit', href: '#sample-audit' }, // opens modal via hash listener
        ]}
      />

      {/* What’s included */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">What’s included</h2>

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

          {/* SEO (Lighthouse SEO) */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">SEO signals</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Lighthouse SEO score</li>
              <li>• Titles & meta descriptions, canonicals</li>
              <li>• Crawlability & indexability (sitemap/robots)</li>
            </ul>
          </div>

          {/* Technical (Best Practices) */}
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

          {/* AI Search Readiness (schema + AEO) */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">AI search readiness</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• JSON-LD audit: Organization/WebPage/Breadcrumb</li>
              <li>• LocalBusiness, FAQ & Service schema coverage</li>
              <li>• Natural-language metas for AI Overviews/voice</li>
            </ul>
          </div>

          {/* Local rankings + GBP */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Local rankings & GBP</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Local Pack / Maps / Organic position by keyword</li>
              <li>• Competitor count & visibility snapshot</li>
              <li>• GBP audit: categories, services, photos, reviews, NAP</li>
            </ul>
          </div>

          {/* Competitive snapshot */}
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

      {/* How it’s delivered */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">How it’s delivered</h2>
        <ul className="mt-4 grid gap-2 text-white/85 md:grid-cols-2">
          <li>• Turnaround: 48 hours (business days)</li>
          <li>• HTML preview + PDF summary (with prioritised actions)</li>
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
          <button
            onClick={loadSample}
            className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-medium text-white hover:bg-white/10"
          >
            View Sample Audit
          </button>
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

      {/* Modal */}
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto mt-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f14] shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 p-4">
              <h3 className="text-lg font-semibold text-white">Sample Audit</h3>
              <div className="flex gap-2">
                <button
                  onClick={downloadHtml}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                >
                  Download HTML
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="h-[72vh] w-full bg-black">
              {html ? (
                <iframe
                  title="Sample Audit"
                  className="h-full w-full"
                  srcDoc={html}
                  sandbox="allow-same-origin allow-popups allow-top-navigation-by-user-activation"
                />
              ) : (
                <div className="p-6 text-white/80">Loading…</div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
