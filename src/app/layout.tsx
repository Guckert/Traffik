import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://traffik-sigma.vercel.app'),
  title: {
    default: "Traffik - AI Web Optimisation | $159 Website Audits NZ",
    template: "%s | Traffik"
  },
  description: "NZ's leading AI website audits ($159) and Google Business Profile optimization. Improve Core Web Vitals, local rankings, and conversions for Christchurch businesses.",
  keywords: ["website audit", "SEO audit", "Google Business Profile", "GBP optimization", "Core Web Vitals", "Christchurch", "New Zealand", "AI optimization", "local SEO", "website speed"],
  authors: [{ name: "Traffik", url: "https://traffik-sigma.vercel.app" }],
  creator: "Traffik",
  publisher: "Traffik",
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://traffik-sigma.vercel.app",
    siteName: "Traffik",
    title: "Traffik - AI Web Optimisation Limited",
    description: "AI-powered website audits and local SEO optimization for NZ businesses. Starting at $159.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Traffik AI Web Optimisation"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Traffik - AI Web Optimisation NZ",
    description: "AI website audits & GBP optimization starting at $159",
    images: ["/images/hero.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Traffik - AI Web Optimisation Limited",
              "description": "AI-powered website audits and Google Business Profile optimization for New Zealand businesses",
              "url": "https://traffik-sigma.vercel.app",
              "telephone": "+64212968586",
              "email": "steve@traffik.nz",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Christchurch",
                "addressRegion": "Canterbury",
                "addressCountry": "NZ"
              },
              "priceRange": "$159-$3450",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Optimization Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Website Audit",
                      "description": "Comprehensive AI-powered website analysis"
                    },
                    "price": "159",
                    "priceCurrency": "NZD"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Google Business Profile Optimisation",
                      "description": "Local SEO and GBP optimization"
                    },
                    "price": "350",
                    "priceCurrency": "NZD"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Visibility Pack",
                      "description": "Complete optimization with ongoing monitoring"
                    },
                    "price": "3450",
                    "priceCurrency": "NZD"
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
