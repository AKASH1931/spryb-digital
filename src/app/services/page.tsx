import Link from "next/link";
import { expertises } from "@/data/site";

export default function ServicesPage() {
  return (
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[1440px]">
        <p className="section-label">Expertise</p>
        <h1 className="font-display text-[13vw] sm:text-[100px]">THINK DEEP <br />TO <span className="text-gradient">RESONATE.</span></h1>
        <p className="text-white/60 text-[17px] max-w-[60ch] mt-6">Spryb runs on strong expertises. Start with one pillar or hand us the whole engine — every retainer begins with strategy, never advice-only.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-12">
          {expertises.map((e, i) => (
            <div key={e.title} className="border-t border-white/15 pt-5">
              <p className="text-[11px] font-bold tracking-[0.25em] text-[#4FEA73]">0{i + 1}</p>
              <h2 className="font-display text-2xl mt-2">{e.title}</h2>
              <ul className="mt-4 space-y-2 text-[14px] text-white/65">
                {e.points.map((p) => <li key={p}>— {p}</li>)}
              </ul>
              <Link href="/contact" className="tlink text-[14px] inline-block mt-4">Get a quote →</Link>
            </div>
          ))}
        </div>
        <div className="card-dark mt-12 p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
          <div>
            <h3 className="font-display text-3xl">NOT SURE WHERE TO START?</h3>
            <p className="text-white/60 text-[15px] mt-2">Take the free teardown — we&apos;ll tell you the one lever to pull first.</p>
          </div>
          <Link href="/contact" className="btn-gradient shrink-0">Free teardown →</Link>
        </div>
      </div>
    </div>
  );
}
