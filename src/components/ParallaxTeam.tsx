"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const CARDS = [
  {
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    video: "https://videos.pexels.com/video-files/6563909/6563909-sd_960_540_25fps.mp4",
    alt: "Agency life",
    caption: "agency life 🎬",
  },
  {
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    video: "https://videos.pexels.com/video-files/3249672/3249672-sd_960_540_25fps.mp4",
    alt: "Team at work",
    caption: "team work 📱",
  },
  {
    img: "/team/palash.jpg",
    alt: "Palash Goorha, Founder",
    caption: "founder ⚡",
  },
];

function AutoVideo({ src, poster, alt }: { src: string; poster: string; alt: string }) {
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
          v.src = src;
          v.load();
          const play = () => v.play().catch(() => {});
          if (v.readyState >= 2) play();
          else v.addEventListener("canplay", play, { once: true });
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [src]);
  return (
    <>
      <Image src={poster} alt={alt} fill className="object-cover" />
      <video ref={ref} className="absolute inset-0 w-full h-full object-cover" muted loop playsInline preload="none" poster={poster} aria-label={alt} />
    </>
  );
}

/** Foudre-style scroll parallax + click-to-front polaroids */
export default function ParallaxTeam() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const leftPeekRef = useRef<HTMLDivElement>(null);
  const rightPeekRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const [front, setFront] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);
      if (headRef.current) headRef.current.style.transform = `translate3d(0, ${p * 60}px, 0)`;
      if (centerRef.current) {
        centerRef.current.style.transform = `translate3d(0, ${p * -60}px, 0) scale(${1 + p * 0.04})`;
      }
      if (leftPeekRef.current) {
        leftPeekRef.current.style.transform = `translate3d(${p * -70}px, ${p * 40}px, 0) rotate(${-12 - p * 6}deg)`;
      }
      if (rightPeekRef.current) {
        rightPeekRef.current.style.transform = `translate3d(${p * 70}px, ${p * 40}px, 0) rotate(${12 + p * 6}deg)`;
      }
      if (textRef.current) textRef.current.style.transform = `translate3d(0, ${p * 50}px, 0)`;
      if (dotsRef.current) dotsRef.current.style.transform = `translate3d(0, ${p * -90}px, 0)`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const posOf = (i: number) => (i - front + CARDS.length) % CARDS.length; // 0 = front

  return (
    <div ref={sectionRef} className="grid lg:grid-cols-[1fr_1.15fr_1fr] gap-10 items-center mt-6">
      <div ref={headRef} className="relative will-change-transform">
        <span className="inline-block bg-[#1A1940] text-white rounded-2xl px-4 py-2.5 text-xl rotate-[-4deg]">📱⚡️😜</span>
        <h2 className="font-display text-[13vw] sm:text-[64px] lg:text-[76px] mt-4">
          WE ELECTRIFY
          <br />
          <span className="text-gradient">YOUR NETWORKS,</span>
        </h2>
      </div>
      <div className="relative mx-auto w-full max-w-[440px]">
        <div ref={leftPeekRef} className="absolute -left-8 top-10 w-[45%] aspect-[3/4] rounded-[20px] overflow-hidden opacity-90 will-change-transform">
          <Image src="https://picsum.photos/seed/spryb-side1/400/520" alt="On shoot" fill className="object-cover" />
        </div>
        <div ref={rightPeekRef} className="absolute -right-8 top-10 w-[45%] aspect-[3/4] rounded-[20px] overflow-hidden opacity-90 will-change-transform">
          <Image src="https://picsum.photos/seed/spryb-side2/400/520" alt="In studio" fill className="object-cover" />
        </div>
        <div ref={centerRef} className="relative z-10 aspect-[3/4] will-change-transform">
          {CARDS.map((c, i) => {
            const pos = posOf(i);
            const isFront = pos === 0;
            return (
              <button
                key={c.caption}
                onClick={() => setFront(i)}
                aria-label={`Bring ${c.alt} to front`}
                className={`absolute inset-x-4 top-0 bottom-8 bg-white p-3 pb-12 rounded-xl shadow-[0_30px_80px_rgba(18,17,48,0.3)] overflow-hidden transition-all duration-500 text-left ${
                  isFront
                    ? "z-20 scale-100 rotate-0 cursor-default"
                    : pos === 1
                      ? "z-10 scale-[0.92] rotate-[10deg] translate-x-8 cursor-pointer hover:scale-[0.95]"
                      : "z-10 scale-[0.92] -rotate-[10deg] -translate-x-8 cursor-pointer hover:scale-[0.95]"
                }`}
              >
                <span className="relative block w-full h-full rounded-lg overflow-hidden">
                  {"video" in c && c.video ? (
                    <AutoVideo src={c.video} poster={c.img} alt={c.alt} />
                  ) : (
                    <Image src={c.img} alt={c.alt} fill className="object-cover pointer-events-none" />
                  )}
                </span>
                <span className="block text-center text-[13px] italic text-[#121130]/70 mt-2">{c.caption}</span>
                {!isFront && (
                  <span className="absolute top-4 right-4 bg-[#121130]/85 text-white text-[11px] px-3 py-1.5 rounded-full">
                    Tap to view ↑
                  </span>
                )}
              </button>
            );
          })}
        </div>
        <div ref={dotsRef} className="absolute inset-0 pointer-events-none will-change-transform">
          <span className="absolute -top-2 left-1/4 w-3 h-3 rounded-full bg-gradient-spryb z-20" />
          <span className="absolute top-1/3 -left-3 w-2.5 h-2.5 rounded-full bg-gradient-spryb z-20" />
          <span className="absolute top-1/4 -right-2 w-3 h-3 rounded-full bg-gradient-spryb z-20" />
          <span className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 rounded-full bg-gradient-spryb z-20" />
        </div>
      </div>
      <div ref={textRef} className="text-[15px] sm:text-[17px] leading-relaxed text-[#121130]/75 will-change-transform">
        <p className="font-bold text-[#121130]">At Spryb, we believe digital communication isn&apos;t publishing a few posts on Instagram.</p>
        <p className="mt-4">It&apos;s a story to tell, a strategy to build, an image to embody. Our mission: turn your networks into visibility and growth — keeping what matters most: humans at the heart of every project.</p>
      </div>
    </div>
  );
}
