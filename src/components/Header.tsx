'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07090b]/85 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-extrabold text-2xl tracking-wide">
          <span className="text-brand-accent">TRAFFIK</span>
          <span className="ml-2 text-xs text-white/70">AI WEB OPTIMISATION LIMITED</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-white/90">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/audit">Audit</Link>
          <Link href="/gbp">GBP</Link>
          <Link href="/ai-visibility">AI Visibility</Link>
          <Link href="/service-area">Service Area</Link>
          <Link href="/contact" className="underline">Contact</Link>
        </nav>

        {/* Desktop Contact */}
        <div className="hidden md:flex items-center gap-4 text-white/90">
          <a href="tel:+64212968586">📞 0212968586</a>
          <a href="mailto:hello@traffik.nz">✉ hello@traffik.nz</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#07090b]/95 backdrop-blur">
          <nav className="container py-4 flex flex-col gap-3">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/audit" onClick={() => setMobileMenuOpen(false)}>Audit</Link>
            <Link href="/gbp" onClick={() => setMobileMenuOpen(false)}>GBP</Link>
            <Link href="/ai-visibility" onClick={() => setMobileMenuOpen(false)}>AI Visibility</Link>
            <Link href="/service-area" onClick={() => setMobileMenuOpen(false)}>Service Area</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a href="tel:+64212968586">📞 0212968586</a>
              <a href="mailto:hello@traffik.nz">✉ hello@traffik.nz</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
