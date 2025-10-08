'use client';
import { useEffect, useState } from 'react';

export default function AuditPopup({
  url,
  buttonLabel = 'View sample audit',
}: {
  url: string;
  buttonLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const [html, setHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [scale, setScale] = useState(0.5); // Mobile zoom scale

  async function openModal() {
    setOpen(true);
    if (!html && !loading) {
      setLoading(true);
      setErr(null);
      try {
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch audit');
        let txt = await res.text();
        
        // Inject viewport meta tag for mobile scaling
        if (!txt.includes('viewport')) {
          txt = txt.replace(
            '<head>',
            '<head><meta name="viewport" content="width=680, initial-scale=0.4, minimum-scale=0.2, maximum-scale=3.0, user-scalable=yes">'
          );
        }
        
        setHtml(txt);
      } catch (e: any) {
        setErr(e?.message || 'Could not load the audit');
      } finally {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) {
      window.addEventListener('keydown', onKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const zoomIn = () => setScale(Math.min(scale + 0.1, 1.5));
  const zoomOut = () => setScale(Math.max(scale - 0.1, 0.3));

  return (
    <>
      <button
        onClick={openModal}
        className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 font-medium text-white hover:bg-white/10"
      >
        {buttonLabel}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute left-1/2 top-1/2 w-[95vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-neutral-950 p-4 shadow-2xl md:w-[90vw]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Audit preview"
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
              <h3 className="text-white font-semibold text-sm md:text-base">Sample Audit</h3>
              <div className="flex gap-2">
                {/* Zoom controls - mobile only */}
                <div className="flex gap-1 md:hidden">
                  <button
                    onClick={zoomOut}
                    className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-white/85 hover:bg-white/10"
                    title="Zoom out"
                  >
                    -
                  </button>
                  <button
                    onClick={zoomIn}
                    className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-white/85 hover:bg-white/10"
                    title="Zoom in"
                  >
                    +
                  </button>
                </div>
                <a
                  href={url}
                  download
                  className="rounded-full border border-white/20 px-3 py-1.5 text-xs md:text-sm text-white/85 hover:bg-white/10"
                >
                  Download
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/20 px-3 py-1.5 text-xs md:text-sm text-white/85 hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="mt-3 h-[80vh] md:h-[75vh] overflow-auto rounded-lg bg-white" style={{ WebkitOverflowScrolling: 'touch' }}>
              {loading && <p className="p-4 text-white/70">Loading…</p>}
              {err && <p className="p-4 text-red-400">{err}</p>}
              {html && (
                <>
                  {/* Mobile: scaled view with zoom controls */}
                  <div className="block md:hidden relative" style={{ 
                    width: `${680 * scale}px`,
                    height: '100%',
                  }}>
                    <iframe
                      sandbox="allow-same-origin"
                      srcDoc={html}
                      className="border-0"
                      title="Audit HTML Preview"
                      style={{
                        width: '680px',
                        height: '3000px',
                        transform: `scale(${scale})`,
                        transformOrigin: 'top left',
                      }}
                    />
                  </div>
                  
                  {/* Desktop: full size */}
                  <iframe
                    sandbox="allow-same-origin"
                    srcDoc={html}
                    className="hidden md:block h-full w-full border-0"
                    title="Audit HTML Preview"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
