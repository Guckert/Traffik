// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://traffik.nz'),
  title: { default: 'AI Website Optimisation for NZ Trades | Traffik.nz', template: '%s | Traffik.nz' },
  description:
    'Traffik helps NZ tradies get found on Google. $159 audit, $350 Google Business Profile optimisation, and the AI Visibility System.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // IMPORTANT: no 'use client' in this file, and keep the <html> wrapper only in this file.
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
