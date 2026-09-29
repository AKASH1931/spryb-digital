"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Agency" },
  { href: "/work", label: "Projects" },
  { href: "/services", label: "Expertise" },
  { href: "/#faq", label: "FAQ" },
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

          <nav className="hidden md:flex items-center gap-1 bg-[#1A1940]/85 backdrop-blur border border-white/10 rounded-full px-2 py-2">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[13px] font-medium px-4 py-2 rounded-full text-white/75 hover:text-[#121130] hover:bg-gradient-spryb transition"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-gradient !py-2 !px-5 text-[13px]">
              Get proposal →
            </Link>
          </nav>

          <Link href="/" aria-label="Spryb home" className="circle-btn font-black">
            ↑
          </Link>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-[#0C0B22]/95 backdrop-blur-xl pt-28 px-6 sm:px-12">
          <div className="mx-auto max-w-[1100px] flex flex-col gap-2">
            <p className="section-label mb-4">Spryb Digital — Menu</p>
            {links.map((l, i) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-[13vw] sm:text-[80px] text-white hover:text-[#D8F23F] transition border-b border-white/10 pb-2 flex items-baseline gap-4"
              >
                <span className="text-sm font-sans text-[#4FEA73]">0{i + 1}</span>
                {l.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-gradient">Start a project →</Link>
              <a href="mailto:hello@spryb.digital" className="btn-ghost">hello@spryb.digital</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
