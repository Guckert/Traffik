// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://traffik.nz'),
  title: { default: 'AI Website Optimisation for NZ Trades | Traffik.nz', template: '%s | Traffik.nz' },
  description:
    'Traffik helps NZ tradies get found on Google. $159 website audit, $350 Google Business Profile optimisation, and the AI Visibility System.',
  openGraph: {
    type: 'website',
    url: 'https://traffik.nz/',
    siteName: 'Traffik.nz',
    images: [{ url: 'https://traffik.nz/og-image.jpg', width: 1200, height: 630, alt: 'Traffik.nz' }],
  },
  twitter: { card: 'summary_large_image', images: ['https://traffik.nz/og-image.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="border-b border-white/10">
          <nav className="container flex items-center justify-between py-4">
            <Link href="/" className="font-bold tracking-wide text-brand-accent">TRAFFIK</Link>
            <ul className="flex items-center gap-5 text-white/85">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/audit">Audit</Link></li>
              <li><Link href="/gbp">GBP</Link></li>
              <li><Link href="/ai-visibility">AI Visibility System</Link></li>
              <li><a href="tel:+64212968586">021 296 8586</a></li>
              <li><a href="mailto:hello@traffik.nz">hello@traffik.nz</a></li>
            </ul>
          </nav>
        </header>

        {children}

        <footer className="border-t border-white/10">
          <div className="container py-6 text-sm text-white/70">© {new Date().getFullYear()} Traffik.nz • Christchurch, NZ</div>
        </footer>

        <Script id="schema-profservice" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Traffik.nz',
            url: 'https://traffik.nz/',
            logo: 'https://traffik.nz/logo.png',
            image: 'https://traffik.nz/og-image.jpg',
            description: 'AI website optimisation for NZ trades. Website audits, Google Business Profile optimisation, and a full AI Visibility System.',
            areaServed: { '@type': 'Country', name: 'New Zealand' },
            telephone: '+64 21 296 8586',
            email: 'hello@traffik.nz',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Traffik Services',
              itemListElement: [
                { '@type': 'Offer', name: 'AI Website Audit', priceCurrency: 'NZD', price: '159', url: 'https://traffik.nz/audit' },
                { '@type': 'Offer', name: 'Google Business Profile Optimisation', priceCurrency: 'NZD', price: '350', url: 'https://traffik.nz/gbp' },
                { '@type': 'Offer', name: 'AI Visibility System', priceCurrency: 'NZD', price: '3450', url: 'https://traffik.nz/ai-visibility' },
              ],
            },
          })}
        </Script>

        <Script id="schema-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: 'https://traffik.nz/',
            name: 'Traffik.nz',
            publisher: { '@type': 'Organization', name: 'Traffik.nz', logo: { '@type': 'ImageObject', url: 'https://traffik.nz/logo.png' } },
          })}
        </Script>
      </body>
    </html>
  );
}
