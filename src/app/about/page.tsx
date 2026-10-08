import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { team } from "@/data/site";

export const metadata: Metadata = {
  title: "About — Humans First, Metrics Always",
  description:
    "Meet Spryb Digital: a remote-first team of strategists, creators, media buyers and ORM experts turning attention into revenue for Indian brands.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[1440px]">
        <p className="section-label">Agency</p>
        <h1 className="font-display text-[13vw] sm:text-[100px]">WE ELECTRIFY <br /><span className="text-gradient">YOUR NETWORKS.</span></h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          {[
            ["120+", "brands scaled"],
            ["4.9★", "avg. rating lift"],
            ["3.2x", "avg. ROAS"],
            ["48hr", "kickoff speed"],
          ].map(([n, l]) => (
            <div key={l} className="border-t border-[#121130]/15 pt-4">
              <div className="font-display text-4xl sm:text-5xl text-gradient">{n}</div>
              <div className="text-[#121130]/55 text-[13px] mt-1">{l}</div>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mt-8 items-start">
          <div className="card-dark p-8">
            <Image src="/spryb-logo.png" alt="Spryb Digital" width={280} height={150} className="rounded-xl bg-white p-4" />
            <p className="text-white/70 text-[16px] leading-relaxed mt-6">
              At Spryb, we believe digital communication isn&apos;t publishing a few posts. It&apos;s a story to tell, a strategy to build, an image to embody — turning your networks into visibility and growth.
            </p>
            <p className="text-white/70 text-[16px] leading-relaxed mt-4">
              Strategists, shooters, designers, media buyers and local buzz experts on one call. Creative with the discipline of a media house — and humans, always, at the heart of every project.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {team.map((m) => (
              <div key={m.name} className="card-dark p-6 group">
                <div className="h-28 rounded-[14px] overflow-hidden relative">
                  <Image src={m.img} alt={m.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" style={{ objectPosition: m.pos }} />
                </div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-[#4FEA73] mt-4">{m.role}</p>
                <div className="font-display text-2xl mt-1">{m.name}</div>
                <p className="text-white/55 text-[13px] mt-2 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
        <Link href="/contact" className="btn-gradient inline-block mt-8">Work with us →</Link>

        <h2 className="font-display text-[11vw] sm:text-[70px] mt-20">WHAT WE <span className="text-gradient">STAND FOR.</span></h2>
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {[
            ["Humans first", "Founders on calls, faces on shoots. Customers buy from people — so do we."],
            ["Proof over promises", "Every claim carries a number. Dashboards open, reporting honest, learnings shared."],
            ["Speed with discipline", "48-hour kickoff, weekly momentum, SOPs behind the creativity. Fast never means sloppy."],
          ].map(([t, d]) => (
            <div key={t} className="card-dark p-7">
              <h3 className="font-display text-2xl text-[#D8F23F]">{t}</h3>
              <p className="text-white/60 text-[14px] mt-3 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          <div className="border-t border-[#121130]/15 pt-4">
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#0e9f5b]">HQ</p>
            <p className="font-bold mt-1">Lucknow</p>
            <p className="text-[#121130]/60 text-[14px]">Gomti Nagar — strategy, content, shoots</p>
          </div>
          <div className="border-t border-[#121130]/15 pt-4">
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#0e9f5b]">STUDIO</p>
            <p className="font-bold mt-1">Gurugram</p>
            <p className="text-[#121130]/60 text-[14px]">Udyog Vihar — ads, SEO, ORM desk</p>
          </div>
          <div className="border-t border-[#121130]/15 pt-4">
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#0e9f5b]">EVERYWHERE</p>
            <p className="font-bold mt-1">Remote-first</p>
            <p className="text-[#121130]/60 text-[14px]">Clients across India + beyond</p>
          </div>
        </div>

        <div className="card-dark mt-12 p-8 sm:p-12 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[#4FEA73]/15 blur-[80px]" />
          <div className="relative">
            <h3 className="font-display text-3xl sm:text-5xl">HAVE SOMETHING <span className="text-gradient">TO SAY?</span></h3>
            <p className="text-white/60 text-[15px] mt-3">One call. Zero jargon. A plan you can steal even if we never work together.</p>
          </div>
          <Link href="/contact" className="btn-gradient shrink-0 relative">Start talking →</Link>
        </div>
      </div>
    </div>
  );
}
