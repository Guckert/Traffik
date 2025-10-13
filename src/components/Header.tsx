'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

/* --- tiny inline icons (no external deps) --- */
const PhoneIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M6.7 2.8a2 2 0 0 1 2.3 1.1l1.1 2.6a2 2 0 0 1-.5 2.2l-1 1a14.5 14.5 0 0 0 6.7 6.7l1-1a2 2 0 0 1 2.2-.5l2.6 1.1a2 2 0 0 1 1.1 2.3l-.4 1.4a2.5 2.5 0 0 1-2.4 1.8A19.5 19.5 0 0 1 3.7 5.2 2.5 2.5 0 0 1 5.5 2.8z" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);
const MailIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M3.5 6.5h17a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 16V8a1.5 1.5 0 0 1 1.5-1.5z" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M4 8l8 5 8-5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);
const MenuIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const CloseIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

/* --- helpers --- */
const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Audit', href: '/audit' },
  { label: 'GBP', href: '/gbp' },
  { label: 'AI Visibility', href: '/ai-visibility' },
  { label: 'Service Area', href: '/service-area' },
  { label: 'Contact', href: '/contact' },
];

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Esc to close + basic focus trap when open
  useEffect(() => {
    if (!open) return;

    const el = panelRef.current;
    const getFocusables = () =>
      el?.querySelectorAll<HTMLElement>(
        'a,button,textarea,input,select,summary,[tabindex]:not([tabindex="-1"])'
      ) ?? ([] as unknown as NodeListOf<HTMLElement>);

    // send focus to first focusable
    const focusables = getFocusables();
    focusables[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;

      const items = getFocusables();
      if (!items.length) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey) {
        if (active === first || !el?.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last || !el?.contains(active)) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black lg:bg-black/60 lg:backdrop-blur-md lg:supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
        {/* Brand block */}
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="text-xl font-extrabold tracking-wide text-brand-accent group-hover:opacity-90">TRAFFIK</span>
          <span className="hidden text-xs font-semibold uppercase text-white/70 sm:block">AI WEB OPTIMISATION</span>
          <span className="hidden text-[10px] uppercase tracking-widest text-white/40 md:block">LIMITED</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? 'page' : undefined}
              className={[
                'text-sm',
                isActive(pathname, item.href)
                  ? 'text-white font-semibold'
                  : 'text-white/80 hover:text-white'
              ].join(' ')}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="tel:+64212968586"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3.5 py-1.5 text-sm text-white/90 hover:bg-white/10"
          >
            <PhoneIcon className="h-4 w-4" /> 021 296 8586
          </a>

          <a
            href="mailto:hello@traffik.nz"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3.5 py-1.5 text-sm text-white/90 hover:bg-white/10"
          >
            <MailIcon className="h-4 w-4" /> hello@traffik.nz
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center rounded-md border border-white/15 p-2 text-white/90 hover:bg-white/10 lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* scrim; blocks page text behind */}
          <div
            className="absolute inset-0 bg-black/80"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          {/* solid panel, safe-area aware */}
          <div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-neutral-950 text-white border-l border-white/10 shadow-2xl focus:outline-none motion-reduce:transition-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 pt-[max(env(safe-area-inset-top),20px)] pb-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-extrabold tracking-wide text-brand-accent">TRAFFIK</span>
                  <span className="text-[10px] font-semibold uppercase text-white/70">AI WEB OPTIMISATION</span>
                </div>
                <button
                  className="rounded-md border border-white/15 p-2 text-white/80 hover:bg-white/10"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      'rounded-lg px-3 py-2 text-sm',
                      isActive(pathname, item.href)
                        ? 'bg-white/10 text-white'
                        : 'text-white/90 hover:bg-white/10'
                    ].join(' ')}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 grid gap-2">
                <a
                  href="tel:+64212968586"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                >
                  <PhoneIcon className="h-4 w-4" /> 021 296 8586
                </a>

                <a
                  href="mailto:hello@traffik.nz"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                >
                  <MailIcon className="h-4 w-4" /> hello@traffik.nz
                </a>
              </div>
            </div>

            {/* bottom safe area pad */}
            <div className="pb-[max(env(safe-area-inset-bottom),20px)]" />
          </div>
        </div>
      )}
    </div>
  );
}
