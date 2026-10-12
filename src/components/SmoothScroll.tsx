"use client";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let raf = 0;
    let alive = true;
    import("lenis").then(({ default: Lenis }) => {
      if (!alive) return;
      lenis = new Lenis({ duration: 1.15, smoothWheel: true });
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });
    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);
  return null;
}
