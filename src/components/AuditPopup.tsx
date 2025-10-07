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

  async function openModal() {
    setOpen(true);
    if (!html && !loading) {
      setLoading(true);
      setErr(null);
      try {
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch audit');
        const txt = await res.text();
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
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
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
            className="absolute left-1/2 top-1/2 w-[95vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-neutral-950 p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Audit preview"
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
              <h3 className="text-white font-semibold">Sample Audit</h3>
              <div className="flex gap-2">
                <a
                  href={url}
                  download
                  className="rounded-full border border-white/20 px-3 py-1.5 text-sm text-white/85 hover:bg-white/10"
                >
                  Download
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/20 px-3 py-1.5 text-sm text-white/85 hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="mt-3 h-[75vh] overflow-hidden rounded-lg">
              {loading && <p className="p-4 text-white/70">Loading…</p>}
              {err && <p className="p-4 text-red-400">{err}</p>}
              {html && (
                <iframe
                  // sandboxed = safe by default (no scripts run)
                  sandbox=""
                  srcDoc={html}
                  className="h-full w-full rounded-lg bg-white"
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
