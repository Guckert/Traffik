import HeroLeft from '@/components/HeroLeft';
export default function Page(){return(<main>
<HeroLeft imageSrc="/images/services-hero.jpg" imageAlt="Team collaborating in modern office" title="Services" subtitle="Website creation & optimisation, Core Web Vitals, AI SEO/AEO, and GBP." ctas={[{label:'Explore Services',href:'#list'}]} />
<section id="list" className="container py-12"><div className="grid gap-6 md:grid-cols-3">
{[{t:'AI Website Audit',l:'/audit',d:'Technical SEO + CWV + schema opportunities.'},{t:'GBP Optimisation',l:'/gbp',d:'Rank in the local pack and convert views.'},{t:'AI Visibility Pack',l:'/ai-visibility',d:'Full‑stack optimisation across site + GBP.'}].map(c=>(
<a key={c.t} href={c.l} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-brand-accent transition"><div className="font-semibold">{c.t}</div><p className="mt-2 text-white/75">{c.d}</p><div className="mt-4 text-brand-accent">Learn more →</div></a>))}
</div></section></main>);}
