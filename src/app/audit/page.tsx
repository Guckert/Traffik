import HeroLeft from '@/components/HeroLeft';

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

        <div className="mt-6 flex gap-3">
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
    </main>
  );
}
