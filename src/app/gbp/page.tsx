import HeroLeft from '@/components/HeroLeft';
export default function Page(){return(<main>
<HeroLeft imageSrc="/images/gbp-hero.jpg" imageAlt="Google Maps on phone outside shop" title="Google Business Profile Optimisation — $350" subtitle="Improve local pack rankings and convert views into calls, bookings and directions." ctas={[{label:'Get GBP — $350',href:'/api/checkout?sku=gbp'},{label:'AI Visibility — $3450',href:'/ai-visibility'}]} />
<section className="container py-12"><h2 className="text-2xl font-semibold text-brand-accent">Expected outcomes</h2>
<ul className="mt-3 grid gap-2 text-white/85 md:grid-cols-2"><li>• Improved Maps rankings</li><li>• Higher calls & direction requests</li><li>• Better conversion from profile views</li></ul>
<div className="mt-2 text-white/60 text-sm">Timing: 3–5 working days after onboarding.</div></section></main>);}
