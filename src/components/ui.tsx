"use client";
import { useState, useRef, useEffect } from "react";

export function Marquee({ items, slow = false }: { items: string[]; slow?: boolean }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-[#121130]/10 bg-white py-3">
      <div className={`inline-flex gap-8 pr-8 ${slow ? "animate-[marquee_48s_linear_infinite]" : "animate-[marquee_30s_linear_infinite]"}`}>
        {row.map((t, i) => (
          <span key={i} className="font-display text-lg sm:text-xl text-[#121130]/80">
            {t} <span className="text-gradient ml-8">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function CarouselShell({ children, id, drift = false }: { children: React.ReactNode; id: string; drift?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };
  useEffect(() => {
    if (!drift) return;
    let ticking = false;
    const update = () => {
      ticking = false;
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);
      el.style.transform = `translate3d(${80 - p * 220}px, 0, 0)`;
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
  }, [drift]);
  return (
    <div ref={wrapRef} className={drift ? "will-change-transform" : undefined}>
      <div ref={ref} id={id} className="carousel-row">
        {children}
      </div>
      <div className="flex gap-3 mt-5">
        <button onClick={() => scroll(-1)} aria-label="Previous" className="circle-btn">←</button>
        <button onClick={() => scroll(1)} aria-label="Next" className="circle-btn">→</button>
      </div>
    </div>
  );
}

export function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-dark overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full text-left px-6 py-5 flex justify-between items-center gap-4">
        <span className="font-medium text-[16px]">{q}</span>
        <span className={`w-9 h-9 shrink-0 rounded-full grid place-items-center font-bold ${open ? "bg-gradient-spryb text-[#121130]" : "border border-white/20"}`}>
          {open ? "−" : "+"}
        </span>
      </button>
      {open && <p className="px-6 pb-6 text-white/65 text-[15px] leading-relaxed">{a}</p>}
    </div>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <div className="card-dark p-10 text-center">
        <div className="w-14 h-14 mx-auto rounded-full bg-gradient-spryb grid place-items-center text-2xl text-[#121130] font-black">✓</div>
        <h3 className="font-display text-3xl mt-5">THANK YOU.</h3>
        <p className="text-white/65 mt-2">We got your message. Expect a reply within 24 hours. Bisous.</p>
      </div>
    );
  }
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="card-dark p-6 sm:p-8 grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input required placeholder="First name *" className="bg-[#121130] border border-white/15 rounded-[10px] px-4 py-3.5 text-sm outline-none focus:border-[#D8F23F] placeholder:text-white/35" />
        <input required placeholder="Last name *" className="bg-[#121130] border border-white/15 rounded-[10px] px-4 py-3.5 text-sm outline-none focus:border-[#D8F23F] placeholder:text-white/35" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input required type="email" placeholder="Email *" className="bg-[#121130] border border-white/15 rounded-[10px] px-4 py-3.5 text-sm outline-none focus:border-[#D8F23F] placeholder:text-white/35" />
        <input placeholder="Phone / Company" className="bg-[#121130] border border-white/15 rounded-[10px] px-4 py-3.5 text-sm outline-none focus:border-[#D8F23F] placeholder:text-white/35" />
      </div>
      <div className="flex flex-wrap gap-2 text-[12px]">
        {["Social Media","Content Shoot","SEO","Ads","Web","ORM","Hyperlocal"].map(s=>(
          <label key={s} className="cursor-pointer">
            <input type="checkbox" className="peer hidden" />
            <span className="inline-block px-3.5 py-1.5 rounded-full border border-white/15 text-white/60 peer-checked:bg-gradient-spryb peer-checked:text-[#121130] peer-checked:border-transparent peer-checked:font-bold transition">{s}</span>
          </label>
        ))}
      </div>
      <textarea required rows={4} placeholder="A few words? *" className="bg-[#121130] border border-white/15 rounded-[10px] px-4 py-3.5 text-sm outline-none focus:border-[#D8F23F] placeholder:text-white/35" />
      <button className="btn-gradient py-4 text-[15px]">Send my message →</button>
      <p className="text-[12px] text-white/40 text-center">30 seconds. No spam. NDA on request.</p>
    </form>
  );
}
