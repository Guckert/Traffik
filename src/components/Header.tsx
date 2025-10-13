cat > src/components/Header.tsx << 'ENDFILE'
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="text-xl font-extrabold tracking-wide text-brand-accent group-hover:opacity-90">TRAFFIK</span>
          <span className="hidden text-xs font-semibold uppercase text-white/70 sm:block">AI WEB OPTIMISATION</span>
          <span className="hidden text-[10px] uppercase tracking-widest text-white/40 md:block">LIMITED</span>
        </Link>

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

        <div className="hidden items-center gap-2 lg:flex">
          
            href="tel:+64212968586"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3.5 py-1.5 text-sm text-white/90 hover:bg-white/10"
          >
            <PhoneIcon className="h-4 w-4" /> 021 296 8586
          </a>
          
            href="mailto:hello@traffik.nz"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3.5 py-1.5 text-sm text-white/90 hover:bg-white/10"
          >
            <MailIcon className="h-4 w-4" /> hello@traffik.nz
          </a>
        </div>

        <button
          className="inline-flex items-center rounded-md border border-white/15 p-2 text-white/90 hover:bg-white/10 lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden" style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }} onClick={() => setOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-80 max-w-[80%] border-l border-white/10 shadow-2xl"
            style={{ backgroundColor: '#000000', padding: '20px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-extrabold tracking-wide text-brand-accent">TRAFFIK</span>
                <span className="text-[10px] font-semibold uppercase text-white/60">AI WEB OPTIMISATION</span>
              </div>
              <button
                className="rounded-md border border-white/15 p-2 text-white/80 hover:bg-white/10"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    'rounded-lg px-3 py-2 text-sm',
                    isActive(pathname, item.href)
                      ? 'bg-white/10 text-white'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  ].join(' ')}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 grid gap-2">
              
                href="tel:+64212968586"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm text-white/90 hover:bg-white/10"
              >
                <PhoneIcon className="h-4 w-4" /> 021 296 8586
              </a>
              
                href="mailto:hello@traffik.nz"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm text-white/90 hover:bg-white/10"
              >
                <MailIcon className="h-4 w-4" /> hello@traffik.nz
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
ENDFILE
