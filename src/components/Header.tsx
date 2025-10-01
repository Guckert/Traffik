import Link from 'next/link';
export default function Header(){
  return (<header className="sticky top-0 z-40 border-b border-white/10 bg-[#07090b]/85 backdrop-blur">
    <div className="container flex items-center justify-between py-4">
      <Link href="/" className="font-extrabold text-2xl tracking-wide">
        <span className="text-brand-accent">TRAFFIK</span>
        <span className="ml-2 text-xs text-white/70">AI WEB OPTIMISATION LIMITED</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-white/90">
        <Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/audit">Audit</Link>
        <Link href="/gbp">GBP</Link><Link href="/ai-visibility">AI Visibility</Link><Link href="/service-area">Service Area</Link>
        <Link href="/contact" className="underline">Contact</Link>
      </nav>
      <div className="flex items-center gap-4 text-white/90">
        <a href="tel:+64212968586">📞 0212968586</a>
        <a href="mailto:hello@traffik.nz">✉ hello@traffik.nz</a>
      </div>
    </div></header>);
}