"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/site";
import CaseModal from "@/components/CaseModal";

function RowSlider({ images, brand }: { images: string[]; brand: string }) {
  const [i, setI] = useState(0);
  const n = images.length;
  return (
    <div>
      <div className="relative rounded-[20px] overflow-hidden aspect-[16/10] bg-[#1A1940] group">
        {images.map((s, k) => (
          <div key={s} className={`absolute inset-0 transition-opacity duration-500 ${k === i ? "opacity-100" : "opacity-0"}`}>
            <Image src={s} alt={`${brand} ${k + 1}`} fill className="object-cover" />
          </div>
        ))}
        <button onClick={() => setI((i - 1 + n) % n)} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 circle-btn !w-10 !h-10 !text-base">←</button>
        <button onClick={() => setI((i + 1) % n)} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 circle-btn !w-10 !h-10 !text-base">→</button>
      </div>
      <div className="flex gap-2 mt-3">
        {images.map((s, k) => (
          <button
            key={s}
            onClick={() => setI(k)}
            aria-label={`Slide ${k + 1}`}
            className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-gradient-spryb" : "w-2 bg-[#121130]/20"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function WorkList() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className="mx-auto max-w-[1440px]">
          <p className="section-label">Work</p>
        <h1 className="font-display text-[13vw] sm:text-[100px]">ALL OUR <span className="text-gradient">PROJECTS.</span></h1>
        <p className="text-[#121130]/70 text-[17px] max-w-[52ch] mt-5">Welcome to the Human Social Club. Proof, not promises — open any case.</p>

        <div className="mt-14 space-y-16 sm:space-y-24">
          {projects.map((p, idx) => (
            <article key={p.slug} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <RowSlider images={p.slides} brand={p.brand} />
              </div>
              <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                <p className="text-[11px] tracking-[0.25em] uppercase text-[#121130]/45">{p.category}</p>
                <h2 className="font-display text-5xl sm:text-6xl mt-2">{p.brand}</h2>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tags.map((t) => <span key={t} className="pill-tag !text-[#0e9f5b] !bg-[#4FEA73]/15 !border-[#4FEA73]/40">{t}</span>)}
                </div>
                <p className="font-bold text-[16px] mt-4">{p.result}</p>
                <p className="text-[#121130]/65 text-[15.5px] leading-relaxed mt-2">{p.desc}</p>
                <p className="text-[#121130]/60 text-[14.5px] leading-relaxed mt-2 line-clamp-2">{p.story[0]}</p>
                <button onClick={() => setOpen(idx)} className="btn-gradient mt-6 !py-3 !px-6 text-sm">
                  View the case →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="font-display text-3xl">YOUR BRAND <span className="text-gradient">NEXT?</span></p>
          <p className="text-[#121130]/60 text-[15px] mt-3">
            Built with <Link href="/services" className="tlink-dark">Social Strategy</Link> ·{" "}
            <Link href="/services" className="tlink-dark">Performance Ads</Link> ·{" "}
            <Link href="/services" className="tlink-dark">SEO</Link> ·{" "}
            <Link href="/services" className="tlink-dark">ORM</Link>
          </p>
          <Link href="/contact" className="btn-gradient inline-block mt-4">Become the next case →</Link>
        </div>
      </div>

      {open !== null && (
        <CaseModal
          project={projects[open]}
          onClose={() => setOpen(null)}
          onPrev={() => setOpen((open - 1 + projects.length) % projects.length)}
          onNext={() => setOpen((open + 1) % projects.length)}
        />
      )}
    </>
  );
}
