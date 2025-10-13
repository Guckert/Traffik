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
          let html = data.html_report || data.html || '';
          
          // Inject viewport meta tag for better mobile scaling
          if (!html.includes('<meta name="viewport"')) {
            html = html.replace(
              '<head>',
              '<head><meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.1, maximum-scale=5.0, user-scalable=yes">'
            );
            // Also add for documents without explicit <head>
            if (!html.includes('<head>')) {
              html = html.replace(
                '<html>',
                '<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.1, maximum-scale=5.0, user-scalable=yes"></head>'
              );
            }
          }
          
          setReportData({ html });
        } else {
          let html = await res.text();
          
          // Inject viewport meta tag
          if (!html.includes('<meta name="viewport"')) {
            html = html.replace(
              '<head>',
              '<head><meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.1, maximum-scale=5.0, user-scalable=yes">'
            );
            if (!html.includes('<head>')) {
              html = html.replace(
                '<html>',
                '<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.1, maximum-scale=5.0, user-scalable=yes"></head>'
              );
            }
          }
          
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
                <iframe
                  sandbox="allow-same-origin"
                  srcDoc={reportData.html}
                  className="h-full w-full border-0"
                  title="Audit HTML Preview"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
