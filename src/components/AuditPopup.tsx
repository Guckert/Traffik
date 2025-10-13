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
          const data = await res.json();
          setReportData({ html: data.html_report || data.html || '' });
        } else {
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

  const downloadHTML = () => {
    if (!reportData?.html) return;
    
    const blob = new Blob([reportData.html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'audit-report.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

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
              <h3 className="text-white font-semibold text-sm md:text-base">Sample Audit</h3>
              <div className="flex gap-2">
                <button
                  onClick={downloadHTML}
                  disabled={!reportData?.html}
                  className="rounded-full border border-white/20 px-3 py-1.5 text-xs md:text-sm text-white/85 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Download HTML
                </button>
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
                  {/* Mobile view with scaling */}
                  <div className="md:hidden w-full h-full overflow-auto" style={{ 
                    WebkitOverflowScrolling: 'touch',
                    touchAction: 'pan-x pan-y pinch-zoom'
                  }}>
                    <div 
                      dangerouslySetInnerHTML={{ __html: reportData.html }}
                      style={{
                        transform: 'scale(0.5)',
                        transformOrigin: 'top left',
                        width: '200%',
                        minHeight: '100%'
                      }}
                    />
                  </div>
                  
                  {/* Desktop view - full size iframe */}
                  <iframe
                    sandbox="allow-same-origin allow-scripts"
                    srcDoc={reportData.html}
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
