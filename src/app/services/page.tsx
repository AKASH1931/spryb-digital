import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { expertises, process } from "@/data/site";

const IMAGES = [
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1400&q=80",
];

export const metadata: Metadata = {
  title: "Services — Social, SEO, Ads, ORM & Hyperlocal",
  description:
    "Explore Spryb Digital's 8 growth pillars: social media strategy, content production, community management, SEO, performance ads, web & branding, ORM and hyperlocal marketing in India.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[1440px]">
        <p className="section-label">Expertise</p>
        <span className="inline-block bg-[#1A1940] text-white rounded-2xl px-4 py-2.5 text-xl rotate-[3deg] mt-4">👀📱📊</span>
        <h1 className="font-display text-[13vw] sm:text-[100px]">THINK DEEP <br />TO <span className="text-gradient">RESONATE.</span></h1>
        <p className="text-[#121130]/70 text-[17px] max-w-[60ch] mt-6">Spryb runs on strong expertises. Scroll — har service ek puri screen legi.</p>
      </div>
    </div>
    <div className="mt-4 space-y-6 px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[1440px] space-y-6">
        {expertises.map((e, i) => (
          <article
            key={e.title}
            className="sticky rounded-[28px] overflow-hidden min-h-[88vh] flex items-end shadow-[0_30px_90px_rgba(18,17,48,0.35)]"
            style={{ top: `${88 + i * 14}px` }}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 animate-kenburns">
                <Image src={IMAGES[i % IMAGES.length]} alt={e.title} fill className="object-cover" sizes="100vw" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B22] via-[#121130]/55 to-[#121130]/25" />
            </div>
            <div className="relative p-7 sm:p-12 w-full">
              <div className="flex items-end justify-between gap-4">
                <span className="font-display text-6xl sm:text-8xl text-stroke-white opacity-80">0{i + 1}</span>
                <span className="text-[11px] font-bold tracking-[0.25em] text-[#D8F23F] mb-3">0{i + 1} / 08</span>
              </div>
              <h2 className="font-display text-[11vw] sm:text-[72px] text-white mt-2">{e.title}</h2>
              <div className="flex flex-wrap gap-2 mt-5">
                {e.points.map((p) => (
                  <span key={p} className="text-[13px] text-white bg-white/10 border border-white/20 backdrop-blur rounded-full px-4 py-2">→ {p}</span>
                ))}
              </div>
              <Link href="/contact" className="btn-gradient mt-7 inline-block !py-3 !px-7 text-sm">
                Get {e.title} quote →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
    <div className="px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="font-display text-4xl sm:text-5xl mt-16">WE LIKE THIS ORDER. <span className="text-gradient">ALWAYS.</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-8">
          {process.map((p) => (
            <div key={p.n} className="card-dark p-5">
              <div className="font-display text-4xl text-stroke-white opacity-80">{p.n}</div>
              <h3 className="font-display text-lg mt-2 text-[#D8F23F]">{p.title}</h3>
              <p className="text-white/60 text-[12.5px] mt-1.5">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="card-dark mt-8 p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
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
