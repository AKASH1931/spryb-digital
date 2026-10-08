import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { expertises, process } from "@/data/site";

const IMAGES = [
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=640&q=80",
  "https://images.pexels.com/photos/19921713/pexels-photo-19921713.jpeg?auto=compress&cs=tinysrgb&w=640",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&q=80",
  "https://images.pexels.com/photos/3851254/pexels-photo-3851254.jpeg?auto=compress&cs=tinysrgb&w=640",
  "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=640&q=80",
  "https://images.pexels.com/photos/8939052/pexels-photo-8939052.jpeg?auto=compress&cs=tinysrgb&w=640",
  "https://images.pexels.com/photos/33565968/pexels-photo-33565968.jpeg?auto=compress&cs=tinysrgb&w=640",
];

export const metadata: Metadata = {
  title: "Services — Social, SEO, Ads, ORM & Hyperlocal",
  description:
    "Explore Spryb Digital's 8 growth pillars: social media strategy, content production, community management, SEO, performance ads, web & branding, ORM and hyperlocal marketing in India.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[1440px]">
        <p className="section-label">Expertise</p>
        <h1 className="font-display text-[13vw] sm:text-[100px]">THINK DEEP <br />TO <span className="text-gradient">RESONATE.</span></h1>
        <p className="text-[#121130]/70 text-[17px] max-w-[60ch] mt-6">Eight pillars, zero fluff. Pick one sprint or hand us the whole engine.</p>
      </div>
    </div>
    <div className="px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[1440px]">
        {expertises.map((e, i) => (
          <Link
            key={e.title}
            href="/contact"
            className="group grid grid-cols-[auto_84px_1fr] sm:grid-cols-[64px_220px_1fr_auto] gap-3 sm:gap-8 items-center border-t border-[#121130]/15 py-6 sm:py-8 last:border-b hover:bg-[#121130]/[0.025] transition-colors px-2 sm:px-4 -mx-2 sm:-mx-4"
          >
            <span className="font-display text-xl sm:text-4xl text-[#0e9f5b]">0{i + 1}</span>
            <span className="relative block w-[84px] h-[84px] sm:w-[220px] sm:h-[140px] rounded-[14px] sm:rounded-[16px] overflow-hidden shrink-0 shadow-[0_12px_40px_rgba(18,17,48,0.18)]">
              <Image src={IMAGES[i % IMAGES.length]} alt={e.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500 saturate-[0.82] contrast-[1.08] brightness-[0.9]" sizes="(max-width:640px) 84px, 220px" />
            </span>
            <span className="col-span-1">
              <span className="block font-display text-3xl sm:text-5xl group-hover:text-[#0e9f5b] transition-colors">{e.title}</span>
              <span className="block text-[13px] sm:text-[14px] text-[#121130]/60 mt-2">{e.points.slice(0, 4).join("  ·  ")}{e.points.length > 4 ? `  ·  +${e.points.length - 4} more` : ""}</span>
            </span>
            <span className="hidden sm:grid w-14 h-14 rounded-full border border-[#121130]/20 place-items-center text-xl group-hover:bg-gradient-spryb group-hover:border-transparent group-hover:text-[#121130] transition-all group-hover:rotate-[-45deg]">→</span>
          </Link>
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
    </>
  );
}
