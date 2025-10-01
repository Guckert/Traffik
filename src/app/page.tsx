import HeroLeft from '@/components/HeroLeft';
export default function Home(){return(<main>
<HeroLeft imageSrc="/images/home-hero.jpg" imageAlt="Business owner outside storefront at dusk" title="Outperform Your Competition" subtitle="AI SEO, Core Web Vitals and Google Business Profile optimisation. Faster sites, higher rankings, more local leads." ctas={[{label:'Get Audit — $159',href:'/audit'},{label:'Get GBP — $350',href:'/gbp'},{label:'AI Visibility — $3450',href:'/ai-visibility'}]} />
<section className="border-t border-white/10"><div className="container grid gap-4 py-10 md:grid-cols-3">
{[{t:'AI SEO / AEO',d:'Optimise for Google AI Overviews, ChatGPT search and voice assistants.'},{t:'Core Web Vitals',d:'Improve LCP, INP and CLS with code cleanup and asset optimisation.'},{t:'Local / GBP',d:'Categories, attributes, services, media and reviews geared for conversions.'}].map(c=>(
<div key={c.t} className="rounded-xl border border-white/10 bg-white/5 p-5"><div className="font-semibold">{c.t}</div><p className="mt-2 text-white/75">{c.d}</p></div>))}
</div></section>
</main>);}
