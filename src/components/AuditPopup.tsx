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
  const [reportData, setReportData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  
  // Better default zoom for mobile - fit to screen
  const getDefaultZoom = () => {
    if (typeof window !== 'undefined') {
      const vw = window.innerWidth;
      if (vw < 768) {
        // Mobile: calculate zoom to fit 680px report in 95vw
        return Math.floor((vw * 0.9) / 680 * 100);
      }
    }
    return 100; // Desktop default
  };
  
  const [zoom, setZoom] = useState(getDefaultZoom());

  async function openModal() {
    setOpen(true);
    if (!reportData && !loading) {
      setLoading(true);
      setErr(null);
      try {
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch audit');
        
        const contentType = res.headers.get('content-type');
        
        if (contentType?.includes('application/json')) {
          // It's JSON with html_report field
          const data = await res.json();
          setReportData({ html: data.html_report });
        } else {
          // It's direct HTML
          const html = await res.text();
          setReportData({ html });
        }
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
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const zoomIn = () => setZoom(Math.min(zoom + 10, 150));
  const zoomOut = () => setZoom(Math.max(zoom - 10, 30));

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
            className="absolute left-1/2 top-1/2 w-[95vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-neutral-950 p-2 md:p-4 shadow-2xl md:w-[90vw]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Audit preview"
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
              <div className="flex items-center gap-3">
              <h3 className="text-white font-semibold text-sm md:text-base">Sample Audit {zoom}%</h3>
              </div>
              <div className="flex gap-2">
                {/* Zoom controls - mobile only */}
               <div className="flex gap-1" style={{border: '2px solid red'}}>
                  <button
                    onClick={zoomOut}
                    className="rounded-full border border-white/20 px-3 py-1.5 text-sm text-white/85 hover:bg-white/10"
                    title="Zoom out"
                  >
                    −
                  </button>
                  <button
                    onClick={zoomIn}
                    className="rounded-full border border-white/20 px-3 py-1.5 text-sm text-white/85 hover:bg-white/10"
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
              {loading && <p className="p-4 text-gray-700">Loading…</p>}
              {err && <p className="p-4 text-red-600">{err}</p>}
              {reportData?.html && (
                <>
                  {/* Mobile with zoom */}
                  <div className="md:hidden overflow-x-hidden">
                    <div
                      className="transition-transform duration-200"
                      style={{
                        transform: `scale(${zoom / 100})`,
                        transformOrigin: 'top left',
                        width: '680px',
                      }}
                      dangerouslySetInnerHTML={{ __html: reportData.html }}
                    />
                  </div>
                  
                  {/* Desktop full size */}
                  <div 
                    className="hidden md:block"
                    dangerouslySetInnerHTML={{ __html: reportData.html }}
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
