import Link from "next/link";
import Image from "next/image";
import { team } from "@/data/site";

export default function AboutPage() {
  return (
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-[12px] tracking-[0.3em] uppercase text-[#4FEA73]">Agency</p>
        <h1 className="font-display text-[13vw] sm:text-[100px] leading-[0.88]">HUMANS FIRST. <br/><span className="text-gradient">METRICS ALWAYS.</span></h1>
        <div className="grid lg:grid-cols-2 gap-8 mt-8 items-start">
          <div className="card-dark p-8">
            <Image src="/spryb-logo.png" alt="Spryb Digital" width={280} height={150} className="rounded-xl bg-white p-4" />
            <p className="text-white/70 text-[16px] leading-relaxed mt-6">
              Spryb started with a simple frustration: agencies selling posts when businesses needed pipelines. So we built the opposite — a full-stack crew where strategists, shooters, designers, media buyers and ORM nerds sit on the same call.
            </p>
            <p className="text-white/70 text-[16px] leading-relaxed mt-4">
              We shoot like creators, think like economists and report like adults. No vanity screenshots, no jargon decks — just brand, distribution and numbers you can take to the bank.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {team.map(m => (
              <div key={m.name} className="card-dark p-6 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-spryb grid place-items-center text-3xl">{m.emoji}</div>
                <div className="font-display text-2xl mt-3">{m.name}</div>
                <div className="text-[#D8F23F] text-[12px] font-medium mt-1">{m.role}</div>
                <div className="text-white/50 text-[12px] mt-1 italic">{m.vibe}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-3 mt-8">
          {[["No copy-paste", "Every brand gets its own pillars, shoots and dashboards."],["Fast & documented", "48-hr kickoff, weekly updates, monthly learnings."],["Skin in the game", "We tie reporting to leads, footfall and revenue — not likes."]].map(([t,d])=>(
            <div key={t} className="border border-white/10 rounded-[20px] p-6 bg-white/[0.02]">
              <h3 className="font-bold">{t}</h3><p className="text-white/60 text-[14px] mt-2">{d}</p>
            </div>
          ))}
        </div>
        <Link href="/contact" className="btn-gradient inline-block mt-8 px-8 py-4 text-[15px]">Work with us →</Link>
      </div>
    </div>
  );
}
