import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
