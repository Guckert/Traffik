import HeroLeft from '@/components/HeroLeft';
export default function Page(){return(<main>
<HeroLeft imageSrc="/images/audit-hero.jpg" imageAlt="Website analytics dashboard on laptop" title="AI Website Audit — $159" subtitle="Technical SEO + Core Web Vitals + schema opportunities with prioritised fixes." ctas={[{label:'Get Audit — $159',href:'/api/checkout?sku=audit'}]} />
<section className="container py-12"><h2 className="text-2xl font-semibold text-brand-accent">What’s included</h2>
<ul className="mt-3 grid gap-2 text-white/85 md:grid-cols-2">
<li>• Crawlability, indexation and render diagnostics</li><li>• Core Web Vitals fixes (LCP, INP, CLS)</li><li>• Schema: LocalBusiness, Services, FAQ</li><li>• AI‑ready content briefs / optimisation</li><li>• Information architecture & internal linking</li><li>• NZ local SEO: citations & “near me” queries</li>
</ul></section></main>);}
