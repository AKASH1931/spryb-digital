"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Agency" },
  { href: "/work", label: "Projects" },
  { href: "/services", label: "Expertise" },
  { href: "/kreative-kand", label: "Kand" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 pt-4 flex items-start justify-between">
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="circle-btn">
            {open ? "✕" : "☰"}
          </button>

          <nav className="hidden lg:flex items-center gap-1 bg-white/85 backdrop-blur border border-[#121130]/10 rounded-full px-2 py-2 shadow-[0_8px_30px_rgba(18,17,48,0.08)]">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[13px] font-medium px-4 py-2 rounded-full text-[#121130]/70 hover:text-[#121130] hover:bg-gradient-spryb transition"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/kreative-kand" className="btn-madness !py-2 !px-5 text-[13px]">
              Enter the madness →
            </Link>
          </nav>

          <Link href="/" aria-label="Spryb home" className="circle-btn font-black">
            ↑
          </Link>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-28 px-6 sm:px-12">
          <div className="mx-auto max-w-[1100px] flex flex-col gap-2">
            <p className="section-label mb-4">Spryb Digital — Menu</p>
            {links.map((l, i) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-[13vw] sm:text-[80px] text-[#121130] hover:text-[#0e9f5b] transition border-b border-[#121130]/10 pb-2 flex items-baseline gap-4"
              >
                <span className="text-sm font-sans text-[#0e9f5b]">0{i + 1}</span>
                {l.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-gradient">Start a project →</Link>
              <a href="mailto:hello@sprybdigital.com" className="btn-ghost">hello@sprybdigital.com</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
