"use client";
import { useState } from "react";

const CLIPS = Array.from({ length: 12 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return { src: `/creator-lab/clip-${n}.mp4`, label: `Clip ${n}` };
});

export default function CreativeLabVideos() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 mt-8">
        {CLIPS.map((c, i) => (
          <button
            key={c.src}
            onClick={() => setOpen(i)}
            className="relative rounded-[22px] overflow-hidden group aspect-[9/16] border border-[#121130]/12 hover:border-[#0e9f5b]/60 transition-colors text-left shadow-[0_16px_50px_rgba(18,17,48,0.12)] bg-gradient-to-br from-[#121130] via-[#1b1942] to-[#0f3d2a]"
            aria-label={`Play ${c.label}`}
          >
            <span className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,#4FEA73,transparent_45%),radial-gradient(circle_at_70%_80%,#FF8AD8,transparent_40%)]" />
            <span className="absolute inset-0 grid place-items-center pointer-events-none">
              <span className="w-12 h-12 rounded-full bg-white/90 grid place-items-center text-[#121130] text-lg font-black shadow-lg group-hover:scale-110 transition-transform">▶</span>
            </span>
            <span className="absolute bottom-3 left-3 text-white text-[12px] font-bold drop-shadow">{c.label}</span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-label="Viewer">
          <div className="absolute inset-0 bg-[#0C0B22]/90 backdrop-blur-sm" onClick={() => setOpen(null)} />
          <button onClick={() => setOpen(null)} aria-label="Close" className="absolute top-5 right-5 z-10 circle-btn">✕</button>
          <button onClick={() => setOpen((open - 1 + CLIPS.length) % CLIPS.length)} aria-label="Previous" className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-10 circle-btn">←</button>
          <button onClick={() => setOpen((open + 1) % CLIPS.length)} aria-label="Next" className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-10 circle-btn">→</button>
          <div className="absolute inset-0 grid place-items-center p-6 sm:p-12 pointer-events-none">
            <div className="relative rounded-[22px] overflow-hidden border border-white/20 shadow-[0_40px_120px_rgba(0,0,0,0.6)] h-[78vh] aspect-[9/16] bg-black pointer-events-auto">
              <video
                key={CLIPS[open].src}
                src={CLIPS[open].src}
                className="w-full h-full object-cover"
                controls
                autoPlay
                playsInline
                preload="metadata"
              />
            </div>
          </div>
          <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
            <span className="inline-block text-[13px] text-white/70">{CLIPS[open].label} • {open + 1}/{CLIPS.length}</span>
          </div>
        </div>
      )}
    </>
  );
}
