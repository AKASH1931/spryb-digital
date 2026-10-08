import type { Metadata } from "next";
import Link from "next/link";
import { process } from "@/data/site";
import ServiceRows from "@/components/ServiceRows";

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
        {<ServiceRows />}
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
