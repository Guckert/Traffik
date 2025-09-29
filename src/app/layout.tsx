// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Traffik.nz — AI SEO & Website Optimisation",
  description: "Faster sites, better rankings, more local leads across New Zealand.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Traffik AI Web Optimisation Limited",
  url: "https://www.traffik.nz",
  email: "hello@traffik.nz",
  telephone: "+64 21 296 8586",
  priceRange: "$159-$3540",
  image: "https://www.traffik.nz/images/home-hero.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6 Nancy Avenue, Mairehau",
    addressLocality: "Christchurch",
    postalCode: "8013",
    addressRegion: "Canterbury",
    addressCountry: "NZ",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Christchurch" },
    { "@type": "AdministrativeArea", name: "Canterbury" },
    { "@type": "Country", name: "New Zealand" },
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "18:00" },
  ],
  makesOffer: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      { "@type":"Offer", name:"AI Website Audit", price:"159", priceCurrency:"NZD", url:"https://www.traffik.nz/audit", availability:"https://schema.org/InStock" },
      { "@type":"Offer", name:"Google Business Profile Optimisation", price:"350", priceCurrency:"NZD", url:"https://www.traffik.nz/gbp", availability:"https://schema.org/InStock" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
