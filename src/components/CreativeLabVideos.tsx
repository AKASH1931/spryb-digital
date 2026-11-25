"use client";
import { useEffect, useRef, useState } from "react";

const CLIP_ORDER = [6, 7, 8, 10, 11, 12, 1, 2, 3, 4, 5, 9];
const CLIPS = CLIP_ORDER.map((i) => {
  const n = String(i).padStart(2, "0");
  return { src: `/creator-lab/clip-${n}.mp4`, label: `Clip ${n}` };
});

function ClipThumb({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          v.muted = true;
          v.defaultMuted = true;
          v.setAttribute("muted", "");
          v.setAttribute("playsinline", "");
          if (!v.src) {
            v.src = `${src}#t=0.1`;
            v.load();
          }
          const play = () => v.play().catch(() => {});
          if (v.readyState >= 2) play();
          else v.addEventListener("loadeddata", play, { once: true });
        } else {
          v.pause();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [src]);
  return (
    <video
      ref={ref}
      className="absolute inset-0 w-full h-full object-cover"
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
    />
  );
}

export default function CreativeLabVideos() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 mt-8">
        {CLIPS.map((c, i) => (
          <button
            key={c.src}
            onClick={() => setOpen(i)}
            className="relative rounded-[22px] overflow-hidden group aspect-[9/16] border border-[#121130]/12 hover:border-[#0e9f5b]/60 transition-colors text-left shadow-[0_16px_50px_rgba(18,17,48,0.12)] bg-[#121130]"
          >
            <ClipThumb src={c.src} label={c.label} />
            <span className="absolute inset-0 grid place-items-center pointer-events-none">
              <span className="w-12 h-12 rounded-full bg-white/90 grid place-items-center text-[#121130] text-lg font-black shadow-lg">▶</span>
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
