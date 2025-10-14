// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';

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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://traffik.nz/#org',
        name: 'Traffik',
        url: 'https://traffik.nz/',
        logo: 'https://traffik.nz/logo.png',
        sameAs: [],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+64-21-296-8586',
            contactType: 'customer support',
            areaServed: 'NZ',
            availableLanguage: ['en'],
          },
        ],
      },
      {
        '@type': 'MarketingAgency',
        '@id': 'https://traffik.nz/#local',
        name: 'Traffik — AI Web Optimisation',
        url: 'https://traffik.nz/',
        image: 'https://traffik.nz/og-image.jpg',
        priceRange: '$$',
        telephone: '+64-21-296-8586',
        areaServed: { '@type': 'Country', name: 'New Zealand' },
        address: { '@type': 'PostalAddress', addressCountry: 'NZ', addressLocality: 'Christchurch' },
        parentOrganization: { '@id': 'https://traffik.nz/#org' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Services',
          itemListElement: [
            { '@type': 'Offer', name: 'AI Website Audit — $159', price: '159.00', priceCurrency: 'NZD', url: 'https://traffik.nz/audit' },
            { '@type': 'Offer', name: 'Google Business Profile Optimisation — $350', price: '350.00', priceCurrency: 'NZD', url: 'https://traffik.nz/gbp' },
            { '@type': 'Offer', name: 'AI Visibility System — $3,450/month', price: '3450.00', priceCurrency: 'NZD', url: 'https://traffik.nz/ai-visibility' },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://traffik.nz/#website',
        url: 'https://traffik.nz/',
        name: 'Traffik.nz',
        publisher: { '@id': 'https://traffik.nz/#org' },
      },
    ],
  };

  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Header />
        {children}
        <Footer />

        {/* Structured data: next/script with beforeInteractive -> ends up in <head>, no duplicates */}
        <Script
          id="schema-graph"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
