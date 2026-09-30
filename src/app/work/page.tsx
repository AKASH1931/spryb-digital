import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Work — Results, Not Promises",
  description:
    "See Spryb Digital's client results: +212% D2C revenue, 3.1x hotel bookings, 41k hyperlocal footfall, ₹38Cr real-estate pipeline. Proof across social, SEO, ads and ORM.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[1440px]">
        <p className="section-label">Projects</p>
        <h1 className="font-display text-[13vw] sm:text-[100px]">WE MAKE THEM, <br /><span className="text-stroke-lime">SOCIAL.</span></h1>
        <p className="text-[#121130]/70 text-[17px] max-w-[60ch] mt-6">Proof, not promises. Every case below ran the same order: strategy → art direction → creation → community → reporting.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {projects.map((p) => (
            <article key={p.slug} className="card-dark overflow-hidden group">
              <div className="h-48 relative overflow-hidden">
                <Image src={p.img} alt={p.brand} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <span className="absolute bottom-3 left-3 bg-[#121130] text-white text-[12px] font-bold px-3.5 py-2 rounded-full">{p.result}</span>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">{p.tags.map((t) => <span key={t} className="pill-tag">{t}</span>)}</div>
                <h2 className="font-display text-3xl">{p.brand}</h2>
                <p className="text-white/45 text-[12px] mt-1">{p.category}</p>
                <p className="text-white/60 text-[14.5px] mt-4">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="font-display text-3xl">YOUR BRAND <span className="text-gradient">NEXT?</span></p>
          <Link href="/contact" className="btn-gradient inline-block mt-4">Become the next case →</Link>
        </div>
      </div>
    </div>
  );
}
