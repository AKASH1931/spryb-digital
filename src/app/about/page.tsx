import Link from "next/link";
import Image from "next/image";
import { team } from "@/data/site";

export default function AboutPage() {
  return (
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[1440px]">
        <p className="section-label">Agency</p>
        <h1 className="font-display text-[13vw] sm:text-[100px]">WE ELECTRIFY <br /><span className="text-gradient">YOUR NETWORKS.</span></h1>
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
              <div key={m.name} className="card-dark p-6">
                <div className="h-28 rounded-[14px] bg-gradient-spryb grid place-items-center text-5xl">{m.emoji}</div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-[#4FEA73] mt-4">{m.role}</p>
                <div className="font-display text-2xl mt-1">{m.name}</div>
                <p className="text-white/55 text-[13px] mt-2 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
        <Link href="/contact" className="btn-gradient inline-block mt-8">Work with us →</Link>
      </div>
    </div>
  );
}
