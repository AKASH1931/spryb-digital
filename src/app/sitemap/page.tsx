import type { Metadata } from "next";
import Link from "next/link";
import { expertises, projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Every page on Spryb Digital: services, work, company and legal.",
  alternates: { canonical: "/sitemap" },
};

export default function SitemapPage() {
  return (
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[1100px]">
        <p className="section-label">Index</p>
        <h1 className="font-display text-[13vw] sm:text-[90px]">SITE <span className="text-gradient">MAP.</span></h1>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12 mt-12">
          <div>
            <h2 className="font-display text-2xl border-b border-[#121130]/15 pb-3">Main</h2>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {[["Home", "/"], ["Services", "/services"], ["Work", "/work"], ["About", "/about"], ["Contact", "/contact"]].map(([t, h]) => (
                <li key={h}><Link href={h} className="tlink-dark">→ {t}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl border-b border-[#121130]/15 pb-3">Services</h2>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {expertises.map((e) => (
                <li key={e.title}><Link href="/services" className="tlink-dark">→ {e.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl border-b border-[#121130]/15 pb-3">Case studies</h2>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {projects.map((p) => (
                <li key={p.slug}><Link href="/work" className="tlink-dark">→ {p.brand} <span className="text-[#121130]/50">({p.result})</span></Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl border-b border-[#121130]/15 pb-3">Company & legal</h2>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {[["Thank you", "/thank-you"], ["Privacy", "/privacy"], ["Terms", "/terms"]].map(([t, h]) => (
                <li key={h}><Link href={h} className="tlink-dark">→ {t}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
