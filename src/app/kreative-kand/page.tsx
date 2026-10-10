import type { Metadata } from "next";
import Link from "next/link";
import KandViewer from "@/components/KandViewer";

export const metadata: Metadata = {
  title: "Kreative Kand — Enter the Madness",
  description:
    "Kreative Kand by Spryb Digital: reels, trends, memes and behind-the-scenes on Instagram. Follow @kreativ_kand.",
  alternates: { canonical: "/kreative-kand" },
};

export default function KreativeKandPage() {
  return (
    <div className="bg-[#0C0B22] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative pt-32 sm:pt-40 pb-16 px-6 sm:px-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[10%] w-72 h-72 rounded-full bg-[#4FEA73]/25 blur-[110px] animate-float" />
          <div className="absolute bottom-0 right-[5%] w-96 h-96 rounded-full bg-[#D8F23F]/15 blur-[130px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7B5CFF]/10 blur-[140px]" />
          <div
            className="absolute inset-0 opacity-[0.13]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "56px 56px" }}
          />
        </div>
        <div className="mx-auto max-w-[1440px] relative">
          <p className="text-[12px] tracking-[0.35em] uppercase text-[#4FEA73]">Spryb presents // 001</p>
          <h1 className="font-display leading-[0.85] mt-4">
            <span className="block text-[16vw] sm:text-[120px] text-white">ENTER THE</span>
            <span className="block text-[20vw] sm:text-[170px] text-gradient">MADNESS.</span>
          </h1>
          <p className="text-white/65 text-[16px] sm:text-[19px] max-w-[56ch] mt-6">
            Kreative Kand is our Instagram lab — reels, trends, memes and beautiful chaos, beamed straight from the Spryb floor.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://www.instagram.com/kreativ_kand/" target="_blank" rel="noreferrer" className="btn-madness px-8 py-4 text-[15px]">
              Follow @kreativ_kand →
            </a>
            <Link href="/contact" className="px-8 py-4 text-[15px] rounded-[10px] border border-white/25 text-white hover:border-[#D8F23F] hover:text-[#D8F23F] transition">
              Work with us
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-12 max-w-[720px]">
            {[["120+", "experiments"], ["9:16", "native format"], ["∞", "kand energy"]].map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-white/12 bg-white/[0.04] backdrop-blur p-4 sm:p-6 text-center shadow-[0_0_40px_rgba(79,234,115,0.08)]">
                <div className="font-display text-3xl sm:text-5xl text-gradient">{n}</div>
                <div className="text-white/50 text-[12px] sm:text-[13px] mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REELS */}
      <section className="px-6 sm:px-10 py-14">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-[12vw] sm:text-[80px]">FRESH <span className="text-gradient">DROPS.</span></h2>
            <span className="hidden sm:inline-block text-[14px] text-white/60 shrink-0">Tap to expand ⤢</span>
          </div>
          <KandViewer />

          <div className="rounded-[24px] mt-12 p-[2px] bg-gradient-to-r from-[#4FEA73] via-[#D8F23F] to-[#FF8A5C]">
            <div className="rounded-[22px] bg-[#0C0B22] p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl text-white">WANT THIS ENERGY <span className="text-gradient">FOR YOUR BRAND?</span></h2>
                <p className="text-white/60 text-[15px] mt-2">Same team, same chaos — pointed at your growth.</p>
              </div>
              <Link href="/contact" className="btn-madness px-8 py-4 text-[15px] shrink-0">Start talking →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
