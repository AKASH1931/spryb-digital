import type { Metadata } from "next";
import Link from "next/link";
import { expertises, process } from "@/data/site";
import ServicePanel from "@/components/ServicePanel";
import ServicesAccordion from "@/components/ServicesAccordion";

const VIDEOS: Record<number, string> = {
  0: "https://videos.pexels.com/video-files/6563909/6563909-sd_960_540_25fps.mp4",
  1: "https://videos.pexels.com/video-files/7677007/7677007-sd_960_540_25fps.mp4",
  7: "https://videos.pexels.com/video-files/20538640/20538640-sd_640_360_30fps.mp4",
};
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
    <>
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[1440px]">
        <p className="section-label">Expertise</p>
        <span className="inline-block bg-[#1A1940] text-white rounded-2xl px-4 py-2.5 text-xl rotate-[3deg] mt-4">👀📱📊</span>
        <h1 className="font-display text-[13vw] sm:text-[100px]">THINK DEEP <br />TO <span className="text-gradient">RESONATE.</span></h1>
        <p className="text-[#121130]/70 text-[17px] max-w-[60ch] mt-6">Spryb runs on strong expertises. Scroll — har service ek puri screen legi.</p>
      </div>
    </div>
    <div className="mt-4 space-y-6 px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[1440px] space-y-6 hidden md:block">
        {expertises.map((e, i) => (
          <ServicePanel key={e.title} e={e} i={i} img={IMAGES[i % IMAGES.length]} video={VIDEOS[i]} />
        ))}
      </div>
      <div className="mx-auto max-w-[1440px] md:hidden">
        <ServicesAccordion />
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
