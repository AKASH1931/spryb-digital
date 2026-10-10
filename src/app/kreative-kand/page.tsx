import type { Metadata } from "next";
import Link from "next/link";
import KandViewer from "@/components/KandViewer";

export const metadata: Metadata = {
  title: "Kreative Kand — Certified Kands Only",
  description:
    "Kreative Kand by Spryb Digital: reels, trends, memes and behind-the-scenes on Instagram. Follow @kreativ_kand.",
  alternates: { canonical: "/kreative-kand" },
};

export default function KreativeKandPage() {
  return (
    <div className="bg-[#FFF8EC] overflow-hidden">
      {/* HERO */}
      <section className="relative pt-32 sm:pt-40 pb-10 px-6 sm:px-10">
        <div className="absolute top-16 right-[8%] w-40 h-40 rounded-full bg-[#D8F23F]/50 blur-[70px] animate-float" />
        <div className="absolute bottom-10 left-[5%] w-52 h-52 rounded-full bg-[#4FEA73]/40 blur-[80px]" />
        <div className="mx-auto max-w-[1440px] relative">
          <span className="inline-block bg-[#121130] text-white text-[12px] font-bold tracking-[0.2em] px-4 py-2 rounded-full rotate-[-2deg]">
            100% ORIGINAL KAND • 0% BORING
          </span>
          <h1 className="font-display leading-[0.88] mt-5">
            <span className="block text-[17vw] sm:text-[120px] text-[#121130]">WE DO</span>
            <span className="block text-[17vw] sm:text-[120px]">
              <span className="relative inline-block px-3 bg-[#D8F23F] rotate-[-1.5deg]">KAND</span>
              <span className="text-[#121130]">, YOU</span>
            </span>
            <span className="block text-[17vw] sm:text-[120px] text-[#121130]">GET FAMOUS.</span>
          </h1>
          <p className="text-[#121130]/70 text-[16px] sm:text-[19px] max-w-[54ch] mt-6 font-medium">
            Kreative Kand is Spryb&apos;s Instagram lab — reels, trends, memes and beautiful chaos. Enter at your own risk.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a href="https://www.instagram.com/kreativ_kand/" target="_blank" rel="noreferrer" className="btn-madness px-8 py-4 text-[15px] rotate-[-1deg]">
              Follow @kreativ_kand →
            </a>
            <span className="text-[13px] text-[#121130]/55 italic rotate-[1deg]">← 2,418 people already inside</span>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden whitespace-nowrap bg-[#121130] text-white py-3 -rotate-1 scale-[1.02]">
        <div className="inline-flex gap-8 pr-8 animate-[marquee_22s_linear_infinite]">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["CERTIFIED KAND", "NO BORING ALLOWED", "TRENDS DIED HERE", "MEMES LIVE HERE", "100% HUMAN DRAMA"].map((t, i) => (
              <span key={`${k}-${i}`} className="font-display text-lg sm:text-xl">
                {t} <span className="text-gradient ml-8">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* VIEWER */}
      <section className="px-6 sm:px-10 py-14">
        <div className="mx-auto max-w-[1440px]">
          <KandViewer />
        </div>
      </section>

      {/* REPORT CARD */}
      <section className="px-6 sm:px-10 pb-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="bg-white rounded-[24px] border-2 border-dashed border-[#121130]/25 p-7 sm:p-10 rotate-[0.5deg] shadow-[8px_8px_0_#121130]">
            <h2 className="font-display text-3xl sm:text-5xl">KAND REPORT <span className="bg-[#4FEA73] px-2">CARD.</span></h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-7">
              {[
                ["Drama", "A+"],
                ["Consistency", "A+"],
                ["Boring", "F-"],
                ["Vibes", "A++"],
              ].map(([s, g]) => (
                <div key={s} className="text-center border border-[#121130]/12 rounded-2xl py-4">
                  <div className="font-display text-4xl text-[#0e9f5b]">{g}</div>
                  <div className="text-[12px] uppercase tracking-widest text-[#121130]/55 mt-1">{s}</div>
                </div>
              ))}
            </div>
            <p className="text-[13px] italic text-[#121130]/55 mt-5">* Signed, the internet. Results may cause followers.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gradient px-8 py-4 text-[15px]">Get this energy →</Link>
              <a href="https://www.instagram.com/kreativ_kand/" target="_blank" rel="noreferrer" className="btn-ghost px-8 py-4 text-[15px]">Stalk us first</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
