"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/site";

type Project = (typeof projects)[number];

export default function CaseModal({
  project,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [slide, setSlide] = useState(0);
  const n = project.slides.length;

  useEffect(() => {
    setSlide(0);
  }, [project.slug]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-label={project.brand}>
      <div className="absolute inset-0 bg-[#0C0B22]/80 backdrop-blur-sm" onClick={onClose} />
      <div data-lenis-prevent className="absolute inset-0 overflow-y-auto py-6 sm:py-10 px-4 sm:px-8">
        <div className="mx-auto max-w-[920px] bg-white rounded-[24px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between px-6 sm:px-10 pt-6">
            <p className="section-label">{project.category}</p>
            <button onClick={onClose} aria-label="Close" className="circle-btn !w-11 !h-11">
              ✕
            </button>
          </div>

          <div className="px-6 sm:px-10">
            <h2 className="font-display text-[13vw] sm:text-[72px] mt-2">{project.brand}</h2>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.tags.map((t) => <span key={t} className="pill-tag !text-[#0e9f5b] !bg-[#4FEA73]/15 !border-[#4FEA73]/40">{t}</span>)}
            </div>
            <p className="font-display text-xl sm:text-2xl mt-4 text-[#0e9f5b]">{project.tagline}</p>
          </div>

          {/* slider */}
          <div className="px-6 sm:px-10 mt-6">
            <div className="relative rounded-[20px] overflow-hidden aspect-[16/10] bg-[#1A1940]">
              {project.slides.map((s, i) => (
                <div key={s} className={`absolute inset-0 transition-opacity duration-500 ${i === slide ? "opacity-100" : "opacity-0"}`}>
                  <Image src={s} alt={`${project.brand} ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
              <button onClick={() => setSlide((slide - 1 + n) % n)} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 circle-btn !w-10 !h-10 !text-base">←</button>
              <button onClick={() => setSlide((slide + 1) % n)} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 circle-btn !w-10 !h-10 !text-base">→</button>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {project.slides.map((s, i) => (
                <button
                  key={s}
                  onClick={() => setSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === slide ? "w-8 bg-gradient-spryb" : "w-2 bg-[#121130]/20"}`}
                />
              ))}
            </div>
          </div>

          {/* story */}
          <div className="px-6 sm:px-10 mt-8">
            <p className="font-bold text-[19px] sm:text-[22px] text-[#121130]">{project.story[0]}</p>
            <p className="text-[#121130]/70 text-[16px] leading-relaxed mt-4">{project.story[1]}</p>
          </div>

          {/* stat blocks with explainer */}
          <div className="px-6 sm:px-10 mt-8 grid sm:grid-cols-2 gap-4">
            {project.stats.map((st) => (
              <div key={st.label} className="card-dark p-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">{st.label}</p>
                <p className="font-display text-5xl text-gradient mt-2">{st.value}</p>
                <p className="text-white/60 text-[13.5px] mt-3">{st.what}</p>
                <p className="text-white/45 text-[12.5px] mt-2 italic">Benchmark: {st.benchmark}</p>
              </div>
            ))}
          </div>

          {/* socials + CTA */}
          <div className="px-6 sm:px-10 mt-8 flex flex-wrap items-center gap-3">
            {project.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="btn-ghost !py-3 !px-6 text-sm">
                {s.label} ↗
              </a>
            ))}
            <Link href="/contact" className="btn-gradient !py-3 !px-6 text-sm" onClick={onClose}>
              Get results like this →
            </Link>
          </div>

          {/* prev / next */}
          <div className="mt-8 border-t border-[#121130]/10 px-6 sm:px-10 py-5 flex items-center justify-between">
            <button onClick={onPrev} className="tlink-dark text-[14px] font-bold">← Prev case</button>
            <button onClick={onClose} className="text-[13px] text-[#121130]/50 hover:text-[#121130]">Close ✕</button>
            <button onClick={onNext} className="tlink-dark text-[14px] font-bold">Next case →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
