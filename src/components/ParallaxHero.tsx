"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Foudre-style scroll parallax hero (Lenis smooth scroll drives it):
 * giant word + 3 photo cards move in/out at different speeds on scroll.
 */
export default function ParallaxHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      // progress completes within the first viewport of scrolling
      const y = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1.2);
      // giant word drifts down slow
      if (wordRef.current) wordRef.current.style.transform = `translate3d(0, ${y * 200}px, 0)`;
      // side cards CLOSE toward the center + lift up (Foudre closing tiles)
      if (leftRef.current) leftRef.current.style.transform = `translate3d(${y * 150}px, ${y * -70}px, 0)`;
      if (rightRef.current) rightRef.current.style.transform = `translate3d(${y * -150}px, ${y * -70}px, 0)`;
      // center card lingers + grows slightly
      if (centerRef.current) {
        centerRef.current.style.transform = `translate3d(0, ${y * 110}px, 0) scale(${1 + y * 0.05})`;
      }
      if (headRef.current) {
        headRef.current.style.transform = `translate3d(0, ${y * -30}px, 0)`;
        headRef.current.style.opacity = `${Math.max(1 - y * 0.7, 0)}`;
      }
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

  return (
    <section id="hero" ref={sectionRef} className="pt-24 sm:pt-28 relative overflow-hidden min-h-[105vh]">
      <div className="absolute top-24 -right-32 w-[480px] h-[480px] rounded-full bg-[#4FEA73]/10 blur-[120px]" />
      {/* giant background word — drifts down slower */}
      <div ref={wordRef} aria-hidden className="font-display text-[38vw] sm:text-[30vw] leading-[0.8] text-center select-none text-gradient-bright opacity-85 -mb-[6vw] sm:-mb-[4vw] will-change-transform">
        SPRYB
      </div>

      {/* photo cards — each layer moves at its own speed */}
      <div className="relative mx-auto max-w-[1100px] h-[440px] sm:h-[520px] -mt-[10vw] sm:-mt-[6vw]">
        <div ref={leftRef} className="absolute left-[2%] top-10 w-[42%] sm:w-[36%] will-change-transform">
          <div className="aspect-[3/4] rounded-[20px] overflow-hidden -rotate-6 shadow-[0_24px_70px_rgba(0,0,0,0.45)] border border-white/10 hover:rotate-0 hover:scale-[1.03] transition-transform duration-300 group relative">
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" alt="Meta Ads" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            <span className="absolute bottom-3 left-3 text-[11px] bg-[#121130]/85 px-3 py-1.5 rounded-full text-white/70">Meta Ads</span>
            <span className="absolute top-[38%] -right-2 bg-[#1A1940] border border-white/15 rounded-2xl px-3 py-2 text-lg rotate-3">🖥️⚡️🎧</span>
          </div>
        </div>
        <div ref={centerRef} className="absolute left-1/2 -translate-x-1/2 top-0 w-[46%] sm:w-[38%] z-10 will-change-transform">
          <div className="aspect-[3/4] rounded-[20px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)] border border-white/10 hover:scale-[1.03] transition-transform duration-300 group relative">
            <Image src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80" alt="Influencer Marketing" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            <span className="absolute bottom-3 left-3 text-[11px] bg-[#121130]/85 px-3 py-1.5 rounded-full text-white/70">Influencer Marketing</span>
            <span className="absolute top-8 left-6 bg-[#1A1940] border border-white/15 rounded-2xl px-3 py-2 text-lg -rotate-3">⚡</span>
          </div>
        </div>
        <div ref={rightRef} className="absolute right-[2%] top-10 w-[42%] sm:w-[36%] will-change-transform">
          <div className="aspect-[3/4] rounded-[20px] overflow-hidden rotate-6 shadow-[0_24px_70px_rgba(0,0,0,0.45)] border border-white/10 hover:rotate-0 hover:scale-[1.03] transition-transform duration-300 group relative">
            <Image src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80" alt="Hyperlocal" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            <span className="absolute bottom-3 left-3 text-[11px] bg-[#121130]/85 px-3 py-1.5 rounded-full text-white/70">Hyperlocal</span>
            <span className="absolute top-[42%] -left-2 bg-[#1A1940] border border-white/15 rounded-2xl px-3 py-2 text-lg -rotate-3">📽️⚡🤛</span>
          </div>
        </div>
      </div>

      {/* bottom-left stacked headline */}
      <div ref={headRef} className="mx-auto max-w-[1440px] px-6 sm:px-10 pb-10 mt-16 sm:mt-24 will-change-transform">
        <p className="section-label">Full-stack growth agency</p>
        <h1 className="font-display text-[17vw] sm:text-[110px] leading-[0.85] mt-2">
          <span className="text-gradient">HUMAN</span>
          <br />
          <span className="text-stroke">SOCIAL CLUB</span>
        </h1>
        <p className="text-[#121130]/70 text-[16px] max-w-[52ch] mt-5">We are the current, you are the story. Strategy, content, ads, SEO, ORM & hyperlocal — one team.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-gradient">Get free teardown →</Link>
          <Link href="/work" className="btn-ghost">See proof</Link>
        </div>
      </div>

      {/* Case of the month */}
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 pb-14">
        <Link href="/work" className="card-dark overflow-hidden flex flex-col sm:flex-row items-stretch gap-0 !p-0 group">
          <div className="sm:w-[280px] min-h-[180px] relative overflow-hidden">
            <Image src="https://picsum.photos/seed/spryb-coffee/560/360" alt="Urban Brew Co." fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="p-6 sm:p-8 flex-1">
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#4FEA73]">Case of the month</p>
            <h3 className="font-display text-3xl sm:text-4xl mt-2 group-hover:text-[#D8F23F] transition">URBAN BREW CO.</h3>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="pill-tag">Content</span>
              <span className="pill-tag">Social Strategy</span>
              <span className="pill-tag">+212% revenue</span>
            </div>
            <span className="tlink text-[14px] inline-block mt-4">View the case →</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
