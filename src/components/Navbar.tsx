"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 pt-4 flex items-start justify-between">
          {/* left : circular menu trigger — Foudre signature */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="w-[50px] h-[50px] rounded-full bg-gradient-spryb grid place-items-center text-[#121130] font-black text-xl shadow-[0_8px_30px_rgba(79,234,115,0.35)]"
          >
            {open ? "✕" : "☰"}
          </button>

          {/* center : pill nav (desktop) */}
          <nav className="hidden md:flex items-center gap-1 bg-[#1A1940]/85 backdrop-blur border border-white/10 rounded-full px-2 py-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium px-4 py-2 rounded-full text-white/75 hover:text-[#121130] hover:bg-gradient-spryb transition"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-gradient text-[13px] px-5 py-2 ml-1"
            >
              Get proposal →
            </Link>
          </nav>

          {/* right : circular brand mark */}
          <Link
            href="/"
            aria-label="Spryb home"
            className="w-[50px] h-[50px] rounded-full bg-gradient-spryb grid place-items-center text-[#121130] font-black text-2xl"
          >
            ↑
          </Link>
        </div>
      </header>

      {/* fullscreen menu — editorial massive type */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#0C0B22]/97 backdrop-blur-xl pt-28 px-6 sm:px-12">
          <div className="mx-auto max-w-[1100px] flex flex-col gap-2">
            <p className="text-[12px] tracking-[0.25em] uppercase text-[#D8F23F] mb-4">
              Spryb Digital — Menu
            </p>
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-[13vw] sm:text-[80px] leading-[0.9] text-white hover:text-gradient hover:text-[#D8F23F] transition border-b border-white/10 pb-2 flex items-baseline gap-4"
              >
                <span className="text-sm font-sans text-[#4FEA73]">0{i + 1}</span>
                {l.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-gradient px-7 py-3 text-sm">
                Start a project →
              </Link>
              <a href="mailto:hello@spryb.digital" className="btn-ghost px-7 py-3 text-sm">
                hello@spryb.digital
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
