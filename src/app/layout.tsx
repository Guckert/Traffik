import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Traffik - AI Web Optimisation Limited | NZ Website Audits & GBP",
  description: "NZ's leading AI website audits and Google Business Profile optimization services. Starting at $159.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
