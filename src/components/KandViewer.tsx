"use client";
import { useState } from "react";
import Image from "next/image";

const REELS = [
  "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=480&q=80",
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=480&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=480&q=80",
];

const SHOTS = [
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=640&q=80",
];

type Item = { src: string; kind: "reel" | "shot"; i: number };
const ALL: Item[] = [
  ...REELS.map((src, i) => ({ src, kind: "reel" as const, i })),
  ...SHOTS.map((src, i) => ({ src, kind: "shot" as const, i })),
];

export default function KandViewer() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 max-w-[960px]">
        {REELS.map((s, i) => (
          <button
            key={s}
            onClick={() => setOpen(i)}
            className={`relative rounded-[22px] overflow-hidden group aspect-[9/16] border border-white/15 bg-white/5 backdrop-blur shadow-[0_0_50px_rgba(79,234,115,0.12)] transition-transform duration-500 hover:scale-[1.03] hover:-rotate-1 text-left ${i === 1 ? "sm:translate-y-8" : ""}`}
          >
            <Image src={s} alt={`Kreative Kand reel ${i + 1}`} fill className="object-cover" sizes="(max-width:768px) 33vw, 320px" />
            <span className="absolute inset-0 bg-gradient-to-t from-[#0C0B22]/80 via-transparent to-transparent" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="w-14 h-14 rounded-full bg-gradient-spryb grid place-items-center text-[#121130] text-xl font-black shadow-[0_0_40px_rgba(216,242,63,0.5)] group-hover:scale-110 transition-transform">▶</span>
            </span>
            <span className="absolute bottom-3 left-3 text-white text-[12px] font-bold">Reel 0{i + 1}</span>
          </button>
        ))}
      </div>

      <h2 className="font-display text-[12vw] sm:text-[80px] mt-16">STATIC <span className="text-gradient">HEAT.</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 mt-8">
        {SHOTS.map((s, i) => (
          <button
            key={s}
            onClick={() => setOpen(REELS.length + i)}
            className="relative aspect-square rounded-[22px] overflow-hidden group border border-white/12 hover:border-[#D8F23F]/60 transition-colors text-left"
          >
            <Image src={s} alt={`Kreative Kand post ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width:768px) 50vw, 33vw" />
            <span className="absolute inset-0 bg-gradient-to-t from-[#0C0B22]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="absolute bottom-3 left-3 text-white text-[12px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">Open ⤢</span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-label="Viewer">
          <div className="absolute inset-0 bg-[#0C0B22]/90 backdrop-blur-sm" onClick={() => setOpen(null)} />
          <button onClick={() => setOpen(null)} aria-label="Close" className="absolute top-5 right-5 z-10 circle-btn">✕</button>
          <button onClick={() => setOpen((open - 1 + ALL.length) % ALL.length)} aria-label="Previous" className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-10 circle-btn">←</button>
          <button onClick={() => setOpen((open + 1) % ALL.length)} aria-label="Next" className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-10 circle-btn">→</button>
          <div className="absolute inset-0 grid place-items-center p-6 sm:p-12 pointer-events-none">
            <div className={`relative rounded-[22px] overflow-hidden border border-white/20 shadow-[0_40px_120px_rgba(0,0,0,0.6)] ${ALL[open].kind === "reel" ? "h-[78vh] aspect-[9/16]" : "w-full max-w-[880px] aspect-[16/10]"}`}>
              <Image src={ALL[open].src} alt="Kreative Kand full view" fill className="object-cover" sizes="90vw" />
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
