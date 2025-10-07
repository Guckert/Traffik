// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';

// Your components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
  // NOTE: do not add 'use client' here
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Header />
        {children}
        <Footer />

        {/* JSON-LD: ProfessionalService + Offers */}
        <Script id="schema-profservice" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Traffik.nz',
            url: 'https://traffik.nz/',
            logo: 'https://traffik.nz/logo.png',
            image: 'https://traffik.nz/og-image.jpg',
            description:
              'AI website optimisation for NZ trades. Website audits, Google Business Profile optimisation, and a full AI Visibility System.',
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

        {/* JSON-LD: WebSite */}
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
