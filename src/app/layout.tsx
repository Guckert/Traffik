import "./globals.css";

export const metadata = {
  title: "Traffik.nz — AI SEO & Website Optimisation",
  description: "Faster sites, better rankings, more local leads across New Zealand."
};

const jsonLd = {"@context":"https://schema.org","@type":"LocalBusiness","name":"Traffik AI Web Optimisation Limited","url":"https://www.traffik.nz","email":"hello@traffik.nz","telephone":"+64 21 296 8586","priceRange":"$159-$3540","image":"/images/home-hero.jpg","address":{"@type":"PostalAddress","streetAddress":"6 Nancy Avenue, Mairehau","addressLocality":"Christchurch","postalCode":"8013","addressRegion":"Canterbury","addressCountry":"NZ"},"areaServed":[{"@type":"AdministrativeArea","name":"Christchurch"},{"@type":"AdministrativeArea","name":"Canterbury"},{"@type":"Country","name":"New Zealand"}],"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"09:00","closes":"18:00"}],"makesOffer":{"@type":"OfferCatalog","name":"Services","itemListElement":[{"@type":"Offer","name":"AI Website Audit","price":"159","priceCurrency":"NZD","url":"https://www.traffik.nz/audit","availability":"https://schema.org/InStock"},{"@type":"Offer","name":"Google Business Profile Optimisation","price":"350","priceCurrency":"NZD","url":"https://www.traffik.nz/gbp","availability":"https://schema.org/InStock"}]}};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <header className="header">
          <div className="container h-16 flex items-center justify-between gap-4">
            <a href="/" className="font-extrabold tracking-tight text-brand-accent text-lg">Traffik.nz</a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a className="text-white/80 hover:text-white" href="/audit">Audit</a>
              <a className="text-white/80 hover:text-white" href="/gbp">GBP</a>
              <a className="text-white/80 hover:text-white" href="/ai-visibility">AI Visibility</a>
              <a className="text-white/80 hover:text-white" href="/services">Services</a>
              <a className="text-white/80 hover:text-white" href="/#locations">Service Area</a>
              <a className="text-white/80 hover:text-white" href="/#contact">Contact</a>
            </nav>
            <div className="hidden md:flex items-center gap-2">
              <a href="tel:+64212968586" className="btn-outline" aria-label="Call 021 296 8586">📞</a>
              <a href="mailto:hello@traffik.nz?subject=Enquiry" className="btn-outline" aria-label="Email hello@traffik.nz">✉️</a>
            </div>
          </div>
        </header>
        {children}
        <footer className="border-t border-white/10">
          <div className="container footer-grid">
            <div><div className="text-brand-accent font-semibold">Contact</div><div className="text-white/70 mt-2">Traffik AI Web Optimisation Ltd<br/>6 Nancy Avenue, Mairehau, Christchurch 8013, New Zealand<br/>021 296 8586 · hello@traffik.nz</div></div>
            <div><div className="text-brand-accent font-semibold">Hours</div><div className="text-white/70 mt-2">Mon–Fri 09:00–18:00 (NZT)</div><div className="text-brand-accent font-semibold mt-4">Service Area</div><div className="text-white/70 mt-2">Christchurch • Canterbury • All of New Zealand</div></div>
            <div><div className="text-brand-accent font-semibold">Legal</div><div className="text-white/70 mt-2">GST 146-492-606 · NZBN 9429053048431</div></div>
          </div>
          <div className="container text-sm text-white/50 py-4 border-t border-white/10">© {new Date().getFullYear()} Traffik.nz</div>
        </footer>
      </body>
    </html>
  );
}