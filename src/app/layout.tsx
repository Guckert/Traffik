// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  // ✅ canonical base: www
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
  // ✅ single JSON-LD (Organization + MarketingAgency + WebSite), all on www
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
        '@type': 'MarketingAgency',
        '@id': 'https://www.traffik.nz/#local',
        name: 'Traffik — AI Web Optimisation',
        url: 'https://www.traffik.nz/',
        image: 'https://www.traffik.nz/og-image.jpg',
        priceRange: '$$',
        telephone: '+64-21-296-8586',
        areaServed: { '@type': 'Country', name: 'New Zealand' },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'NZ',
          addressLocality: 'Christchurch',
        },
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
