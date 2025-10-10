import Link from 'next/link';
export default function Footer(){
  return (<footer className="mt-16 border-t border-white/10">
    <div className="container py-10 grid gap-6 md:grid-cols-3 text-sm text-white/80">
      <div><div className="font-semibold text-brand-accent">Traffik AI Web Optimisation Limited</div>
      
      <div>GST 146-492-606 • NZBN 9429053048431</div>
      <div>Hours: Mon–Fri 09:00–18:00 (NZT)</div></div>
      <div><div className="font-semibold">Contact</div>
      <div>📞 <a href="tel:+64212968586" className="hover:underline">021 296 8586</a></div>
      <div>✉ <a href="mailto:hello@traffik.nz" className="hover:underline">hello@traffik.nz</a></div></div>
      <div><div className="font-semibold">Links</div>
        <ul className="space-y-1">
          <li><Link href="/privacy" className="hover:underline">Privacy</Link></li>
          <li><Link href="/terms" className="hover:underline">Terms</Link></li>
          <li><Link href="/refunds" className="hover:underline">Refunds</Link></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/10 py-4 text-center text-white/60 text-xs">
      © {new Date().getFullYear()} Traffik.nz • Christchurch • Canterbury • All of New Zealand
    </div>
  </footer>);
}
