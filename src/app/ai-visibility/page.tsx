import HeroLeft from '@/components/HeroLeft';
export default function Page(){return(<main>
<HeroLeft imageSrc="/images/aiv-hero.jpg" imageAlt="AI dashboards and analytics in dark studio" title="AI Visibility Pack — $3,450" subtitle="Full‑stack optimisation across site, GBP and AI‑ready content." ctas={[{label:'Enquire Now',href:'mailto:hello@traffik.nz?subject=AI%20Visibility%20Pack'}]} />
<section className="container py-12"><h2 className="text-2xl font-semibold text-brand-accent">What you get</h2>
<ul className="mt-3 grid gap-2 text-white/85 md:grid-cols-2"><li>• Site‑wide optimisation & Core Web Vitals</li><li>• GBP optimisation (categories, attributes, services, reviews)</li><li>• AI‑ready content & structured data</li><li>• Tracking dashboards and reporting</li></ul></section></main>);}
