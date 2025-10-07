import HeroLeft from '@/components/HeroLeft';

export default function Page() {
  return (
    <main>
      <HeroLeft
        imageSrc="/images/gbp-hero.jpg"
        imageAlt="Google Business Profile on mobile"
        title="Google Business Profile Optimisation — $350"
        subtitle="Show up in the local map pack and turn searches into calls, bookings and directions."
        ctas={[
          // TODO: replace with your Stripe checkout when ready
          { label: 'Get GBP — $350', href: 'mailto:hello@traffik.nz?subject=Get%20GBP%20Optimisation%20($350)' },
          { label: 'Call 021 296 8586', href: 'tel:+64212968586' },
        ]}
      />

      {/* What you get */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">What’s included</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Profile Tune-Up</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Primary/secondary categories & services</li>
              <li>• Keyword-rich business description</li>
              <li>• NAP consistency and duplicate cleanup</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Content & Engagement</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Photo optimisation & upload guidance</li>
              <li>• 4 x post templates you can re-use</li>
              <li>• Review prompts + response templates</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Map Pack Visibility</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Baseline grid report of local visibility</li>
              <li>• Competitor snapshot & gap checklist</li>
              <li>• Action plan for next 30 days</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold text-white">Compliance & Spam</h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>• Profile policy checks & best practice</li>
              <li>• Competitor spam/reporting playbook</li>
              <li>• Duplicate/soft-suspension remediation tips</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Outcome band */}
      <section className="container py-12">
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h3 className="text-xl font-semibold text-white">Outcome</h3>
          <p className="mt-2 text-white/85">
            A tuned, trustworthy profile that ranks in your service area and converts views into calls and quote requests.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="mailto:hello@traffik.nz?subject=Get%20GBP%20Optimisation%20($350)"
              className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-medium text-white hover:bg-white/10"
            >
              Get GBP — $350
            </a>
            <a
              href="tel:+64212968586"
              className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-medium text-white/85 hover:text-white hover:bg-white/10"
            >
              Call 021 296 8586
            </a>
          </div>
        </div>
      </section>

      {/* Why for trades */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">Why it works for trades</h2>
        <ul className="mt-4 grid gap-2 text-white/85 md:grid-cols-2">
          <li>• Map pack is where most local jobs start</li>
          <li>• Photos, posts and reviews drive calls</li>
          <li>• Shows coverage across suburbs you service</li>
          <li>• Sets you up for our AI Visibility System</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-accent">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold text-white">Do you need my login?</h3>
            <p className="mt-2 text-white/85">We’ll request manager access to your GBP via email. You keep ownership.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold text-white">How fast can we start?</h3>
            <p className="mt-2 text-white/85">Usually within 2–3 business days once access is granted.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold text-white">What if my profile is suspended?</h3>
            <p className="mt-2 text-white/85">We’ll guide re-instatement and clean-up. If complex, we’ll quote.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold text-white">Will this get me more calls?</h3>
            <p className="mt-2 text-white/85">That’s the goal — a tuned profile plus posts & reviews usually lifts call volume.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
