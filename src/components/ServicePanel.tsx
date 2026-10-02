"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Expertise = { title: string; points: string[] };

/** Full-screen service panel: video/parallax bg + staggered reveal, no overlap */
export default function ServicePanel({ e, i, img, video }: { e: Expertise; i: number; img: string; video?: string }) {
  const rootRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const root = rootRef.current;
      if (!root || !bgRef.current) return;
      const rect = root.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);
      bgRef.current.style.transform = `translate3d(0, ${(p - 0.5) * -120}px, 0) scale(1.15)`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          // lazy-load + play video only when visible
          const v = videoRef.current;
          if (v && v.dataset.src && !v.src) {
            v.src = v.dataset.src;
            v.load();
            v.play().catch(() => {});
          }
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (rootRef.current) io.observe(rootRef.current);
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const step = (d: number) =>
    `transition-all duration-700 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;

  return (
    <article
      ref={rootRef}
      className="rounded-[28px] overflow-hidden min-h-[88vh] flex items-end shadow-[0_30px_90px_rgba(18,17,48,0.35)] relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        {video ? (
          <div ref={bgRef} className="absolute -inset-y-[10%] inset-x-0 will-change-transform">
            <video
              ref={videoRef}
              data-src={video}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="none"
              poster={img}
              aria-label={e.title}
            />
          </div>
        ) : (
          <div ref={bgRef} className="absolute -inset-y-[10%] inset-x-0 will-change-transform">
            <Image src={img} alt={e.title} fill className="object-cover" sizes="100vw" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B22] via-[#121130]/55 to-[#121130]/25" />
      </div>
      <div className="relative p-7 sm:p-12 w-full">
        <div className={`flex items-end justify-between gap-4 ${step(0)}`} style={{ transitionDelay: "0ms" }}>
          <span className="font-display text-6xl sm:text-8xl text-stroke-white opacity-80">0{i + 1}</span>
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#D8F23F] mb-3">0{i + 1} / 08</span>
        </div>
        <h2 className={`font-display text-[11vw] sm:text-[72px] text-white mt-2 ${step(1)}`} style={{ transitionDelay: "120ms" }}>{e.title}</h2>
        <div className={`flex flex-wrap gap-2 mt-5 ${step(2)}`} style={{ transitionDelay: "240ms" }}>
          {e.points.map((p) => (
            <span key={p} className="text-[13px] text-white bg-white/10 border border-white/20 backdrop-blur rounded-full px-4 py-2">→ {p}</span>
          ))}
        </div>
        <div className={step(3)} style={{ transitionDelay: "360ms" }}>
          <Link href="/contact" className="btn-gradient mt-7 inline-block !py-3 !px-7 text-sm">
            Get {e.title} quote →
          </Link>
        </div>
      </div>
    </article>
  );
}
