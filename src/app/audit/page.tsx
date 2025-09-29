import { BuyButton } from "@/components/BuyButton";
export const metadata = { title: "AI Website Audit — Traffik.nz", description: "$159 AI Website Audit — faster sites, better rankings, more local leads." };
export default function Page() {
  return (
    <main>
      <section className="hero-fw" role="banner" aria-label="AI Website Audit">
        <img src="/images/audit-hero.jpg" alt="AI Website Audit banner" className="hero-img" />
        <div className="hero-overlay"></div>
        <div className="hero-inner">
          <div>
            <h1 className="hero-title">AI Website Audit — $159</h1>
            <p className="hero-lead">Technical SEO, Core Web Vitals, schema opportunities, and prioritised fixes for NZ businesses.</p>
            <div className="mt-4"><BuyButton product="audit">Buy Audit — $159</BuyButton></div>
          </div>
        </div>
      </section>
    </main>
  );
}