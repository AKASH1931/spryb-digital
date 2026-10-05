"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/site";

/**
 * Pinned horizontal scroll (Foudre style) — ALL screens including phones:
 * section pins, vertical scroll drives cards horizontally,
 * then releases to the next section.
 */
export default function PinnedWork() {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;

    const layout = () => {
      const parent = track.parentElement!;
      const distance = Math.max(track.scrollWidth - parent.clientWidth + 60, 0);
      outer.style.height = `${distance + window.innerHeight}px`;
    };
    layout();

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = outer.getBoundingClientRect();
      const total = outer.offsetHeight - window.innerHeight;
      const p = Math.min(Math.max(-rect.top / Math.max(total, 1), 0), 1);
      const maxX = Math.max(track.scrollWidth - track.parentElement!.clientWidth + 60, 0);
      track.style.transform = `translate3d(${-p * maxX}px, 0, 0)`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      layout();
      update();
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="pl-6 sm:pl-10 pb-20">
      <div ref={outerRef}>
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center py-6">
          <div className="mx-auto max-w-[1440px] w-full grid lg:grid-cols-[340px_1fr] gap-5 lg:gap-8 items-center">
            <div className="pr-6 shrink-0">
              <p className="section-label">Work</p>
              <h2 className="font-display text-[12vw] sm:text-[64px] mt-2 sm:mt-3">
                WE MAKE THEM
                <br />
                GROW.
              </h2>
              <div className="hidden sm:flex items-center mt-6">
                {projects.slice(0, 4).map((p, i) => (
                  <span key={p.slug} className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow -ml-2 first:ml-0 relative" style={{ zIndex: 4 - i }}>
                    <Image src={p.img} alt={p.brand} fill className="object-cover" />
                  </span>
                ))}
                <Link href="/work" className="circle-btn !w-11 !h-11 !text-sm -ml-2 font-bold">+2</Link>
              </div>
              <Link href="/work" className="btn-gradient mt-4 sm:mt-6 inline-block !py-2.5 !px-5 sm:!py-3 sm:!px-6 text-sm">Explore all →</Link>
            </div>
            <div className="overflow-hidden">
              <div ref={trackRef} className="flex gap-4 w-max will-change-transform">
                {projects.map((p) => (
                  <article key={p.slug} className="w-[230px] sm:w-[320px] aspect-[3/4] rounded-[20px] overflow-hidden relative group shadow-[0_20px_60px_rgba(18,17,48,0.2)] shrink-0">
                    <Image src={p.img} alt={p.brand} fill className="object-cover group-hover:scale-108 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#121130]/80 via-[#121130]/10 to-[#121130]/80" />
                    <h3 className="absolute top-5 left-0 right-0 text-center font-display text-3xl sm:text-5xl text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.9)] px-4">{p.brand}</h3>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="mb-3">
                        <span className="text-[11px] font-bold bg-gradient-spryb text-[#121130] px-3.5 py-2 rounded-full shadow-[0_4px_20px_rgba(79,234,115,0.4)]">{p.result}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((t) => <span key={t} className="text-[11px] font-medium bg-[#121130]/70 backdrop-blur text-[#D8F23F] border border-[#D8F23F]/40 px-3 py-1.5 rounded-full">{t}</span>)}
                      </div>
                    </div>
                  </article>
                ))}
                <Link href="/work" className="w-[230px] sm:w-[320px] aspect-[3/4] rounded-[20px] bg-[#1A1940] p-8 grid place-items-center text-center shrink-0">
                  <div>
                    <h3 className="font-display text-3xl text-white">MORE PROJECTS?</h3>
                    <span className="btn-gradient mt-5 inline-block !py-3 !px-6 text-sm">Explore →</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
