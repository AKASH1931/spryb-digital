"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const REELS = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: `/kand/reel-${n}.mp4`,
  poster: `/kand/reel-${n}.jpg`,
}));

function KandVideo({ src, poster, alt, big = false }: { src: string; poster: string; alt: string; big?: boolean }) {
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
            v.src = src;
            v.load();
          }
          const play = () => v.play().catch(() => {});
          if (v.readyState >= 2) play();
          else v.addEventListener("canplay", play, { once: true });
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
    <>
      <Image src={poster} alt={alt} fill className="object-cover" sizes={big ? "90vw" : "(max-width:768px) 50vw, 33vw"} />
      <video
        ref={ref}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        aria-label={alt}
      />
    </>
  );
}

export default function KandViewer() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 mt-8">
        {REELS.map((r, i) => (
          <button
            key={r.src}
            onClick={() => setOpen(i)}
            className="relative rounded-[22px] overflow-hidden group aspect-[9/16] border border-[#121130]/12 hover:border-[#0e9f5b]/60 transition-colors text-left shadow-[0_16px_50px_rgba(18,17,48,0.12)]"
          >
            <KandVideo src={r.src} poster={r.poster} alt={`Kreative Kand reel ${i + 1}`} />
            <span className="absolute inset-0 grid place-items-center pointer-events-none">
              <span className="w-12 h-12 rounded-full bg-white/90 grid place-items-center text-[#121130] text-lg font-black shadow-lg">▶</span>
            </span>
            <span className="absolute bottom-3 left-3 text-white text-[12px] font-bold drop-shadow">Reel 0{i + 1}</span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-label="Viewer">
          <div className="absolute inset-0 bg-[#0C0B22]/90 backdrop-blur-sm" onClick={() => setOpen(null)} />
          <button onClick={() => setOpen(null)} aria-label="Close" className="absolute top-5 right-5 z-10 circle-btn">✕</button>
          <button onClick={() => setOpen((open - 1 + REELS.length) % REELS.length)} aria-label="Previous" className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-10 circle-btn">←</button>
          <button onClick={() => setOpen((open + 1) % REELS.length)} aria-label="Next" className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-10 circle-btn">→</button>
          <div className="absolute inset-0 grid place-items-center p-6 sm:p-12 pointer-events-none">
            <div className="relative rounded-[22px] overflow-hidden border border-white/20 shadow-[0_40px_120px_rgba(0,0,0,0.6)] h-[78vh] aspect-[9/16]">
              <video
                key={REELS[open].src}
                src={REELS[open].src}
                className="w-full h-full object-cover"
                controls
                autoPlay
                playsInline
                poster={REELS[open].poster}
              />
            </div>
          </div>
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <a href="https://www.instagram.com/kreativ_kand/" target="_blank" rel="noreferrer" className="inline-block text-[13px] text-white/70 hover:text-[#D8F23F] underline underline-offset-4">
              Watch it live on Instagram ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}
