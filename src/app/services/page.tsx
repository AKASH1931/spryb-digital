import Link from "next/link";
import { services } from "@/data/site";

export default function ServicesPage() {
  return (
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-[12px] tracking-[0.3em] uppercase text-[#4FEA73]">Services</p>
        <h1 className="font-display text-[13vw] sm:text-[100px] leading-[0.88]">FULL-STACK GROWTH, <span className="text-gradient">ZERO FLUFF.</span></h1>
        <p className="text-white/65 text-[17px] max-w-[62ch] mt-6">Eight pillars, one dashboard. Start with one sprint or hand us the whole engine — social, search, paid, reputation and footfall, all talking to each other.</p>
        <div className="grid sm:grid-cols-2 gap-4 mt-12">
          {services.map(s => (
            <div key={s.slug} id={s.slug} className="card-dark p-8">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-widest text-[#4FEA73]">{s.index}</span>
                <span className="text-3xl">{s.icon}</span>
              </div>
              <h2 className="font-display text-4xl mt-3">{s.title}</h2>
              <p className="text-[#D8F23F] italic text-[14px] mt-1">{s.tagline}</p>
              <p className="text-white/65 text-[15px] mt-3">{s.desc}</p>
              <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                {s.points.map(p => <li key={p} className="text-[13.5px] text-white/75 bg-white/[0.04] border border-white/10 rounded-[10px] px-3.5 py-2.5">→ {p}</li>)}
              </ul>
              <Link href="/contact" className="inline-block mt-6 text-[14px] font-bold text-[#121130] bg-gradient-spryb rounded-[10px] px-5 py-2.5">Get {s.title} quote →</Link>
            </div>
          ))}
        </div>
        <div className="card-dark mt-8 p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
          <div>
            <h3 className="font-display text-3xl">NOT SURE WHERE TO START?</h3>
            <p className="text-white/60 text-[15px] mt-2">Take the free teardown — we&apos;ll tell you the one lever to pull first.</p>
          </div>
          <Link href="/contact" className="btn-gradient px-8 py-4 text-[15px] shrink-0">Free teardown →</Link>
        </div>
      </div>
    </div>
  );
}
