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
      if (window.location.hash === '#sample-audit') {
        loadSample();
        // remove the hash so browser doesn’t jump around
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
        const data = await res.json();
        const raw: string = data.html_report ?? data.html ?? '';
        // remove the anchor line that shows the whiteheadplumbing.co.nz URL (keep the date/Audit ID)
        const cleaned = raw.replace(
          /<a[^>]*href="https?:\/\/whiteheadplumbing\.co\.nz\/?"[^>]*>[\s\S]*?<\/a><br\/?>/i,
          ''
        );
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
      {/* Invisible anchor so the hero CTA has a valid target */}
      <div id="sample-audit" className="hidden" />

      <HeroLeft
        imageSrc="/images/audit-hero.jpg"
        imageAlt="Website audit dashboard on screen"
        title="AI Website Audit — $159"
        subtitle="30-point technical SEO, speed and Google readiness review with prioritised fixes."
        ctas={[
          { label: 'Buy Audit — $159', href: 'mailto:hello@traffik.nz?subject=Buy%20Website%20Audit%20($159)' },
          { label: 'Call 021 296 8586', href: 'tel:+64212968586' },
          // New CTA beside the others – opens the modal via hash listener above
          { label: 'View Sample Audit', href: '#sample-audit' },
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
