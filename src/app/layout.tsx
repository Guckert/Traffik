// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  // Canonical base: https://www.traffik.nz
  metadataBase: new URL('https://www.traffik.nz'),
  title: {
    default: 'AI Website Optimisation for NZ Trades | Traffik.nz',
    template: '%s | Traffik.nz',
  },
  description:
    'Traffik helps NZ tradies get found on Google. $159 website audit, $350 Google Business Profile optimisation, and the AI Visibility System.',
  openGraph: {
    type: 'website',
    url: 'https://www.traffik.nz/',
    siteName: 'Traffik.nz',
    images: [
      {
        url: 'https://www.traffik.nz/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Traffik.nz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.traffik.nz/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // Single JSON-LD graph (Organization + LocalBusiness + WebSite)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.traffik.nz/#org',
        name: 'Traffik',
        url: 'https://www.traffik.nz/',
        logo: 'https://www.traffik.nz/logo.png',
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
        // Service-area business: no street/postcode
        '@type': 'LocalBusiness',
        '@id': 'https://www.traffik.nz/#local',
        name: 'Traffik — AI Web Optimisation',
        url: 'https://www.traffik.nz/',
        image: 'https://www.traffik.nz/og-image.jpg',
        priceRange: '$$',
        telephone: '+64-21-296-8586',

        areaServed: { '@type': 'Country', name: 'New Zealand' },
        serviceArea: [
          { '@type': 'AdministrativeArea', name: 'Christchurch' },
          { '@type': 'AdministrativeArea', name: 'Canterbury' },
        ],

        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
        ],

        parentOrganization: { '@id': 'https://www.traffik.nz/#org' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Services',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'AI Website Audit — $159',
              price: '159.00',
              priceCurrency: 'NZD',
              url: 'https://www.traffik.nz/audit',
            },
            {
              '@type': 'Offer',
              name: 'Google Business Profile Optimisation — $350',
              price: '350.00',
              priceCurrency: 'NZD',
              url: 'https://www.traffik.nz/gbp',
            },
            {
              '@type': 'Offer',
              name: 'AI Visibility System — $3,450/month',
              price: '3450.00',
              priceCurrency: 'NZD',
              url: 'https://www.traffik.nz/ai-visibility',
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.traffik.nz/#website',
        url: 'https://www.traffik.nz/',
        name: 'Traffik.nz',
        publisher: { '@id': 'https://www.traffik.nz/#org' },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Canonical */}
        <link rel="canonical" href="https://www.traffik.nz/" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Icons / Manifest */}
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" crossOrigin="use-credentials" />
      </head>
      <body className="bg-black text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
