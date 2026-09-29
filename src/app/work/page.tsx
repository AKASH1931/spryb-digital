import Link from "next/link";
import { projects } from "@/data/site";

export default function WorkPage() {
  return (
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-[12px] tracking-[0.3em] uppercase text-[#4FEA73]">Work</p>
        <h1 className="font-display text-[13vw] sm:text-[100px] leading-[0.88]">PROOF, <span className="text-gradient">NOT PROMISES.</span></h1>
        <p className="text-white/65 text-[17px] max-w-[60ch] mt-6">A few recent engines. Every one started with the same 5-step order: strategy → identity → creation → distribution → reporting.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {projects.map(p => (
            <article key={p.slug} className="card-dark overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${p.gradient} p-6 flex flex-col justify-between`}>
                <span className="text-6xl">{p.emoji}</span>
                <span className="self-start bg-[#121130] text-white text-[12px] font-bold px-3.5 py-2 rounded-full">{p.result}</span>
              </div>
              <div className="p-6">
                <p className="text-[11px] tracking-widest uppercase text-white/45">{p.category}</p>
                <h2 className="font-display text-3xl mt-1">{p.brand}</h2>
                <div className="flex flex-wrap gap-1.5 mt-3">{p.tags.map(t => <span key={t} className="pill-tag">{t}</span>)}</div>
                <p className="text-white/65 text-[14.5px] mt-4">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="font-display text-3xl">YOUR BRAND <span className="text-gradient">NEXT?</span></p>
          <Link href="/contact" className="btn-gradient inline-block mt-4 px-8 py-4 text-[15px]">Become case #07 →</Link>
        </div>
      </div>
    </div>
  );
}
