import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb, { JsonLd, SITE, ORG_ID } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Performance Marketing Agency in Gurugram — Spryb Digital",
  description:
    "Spryb Digital's Gurugram (Udyog Vihar) desk runs performance marketing, Google & Meta ads, SEO and ORM for Delhi NCR businesses that need qualified leads, not just clicks.",
  alternates: { canonical: "/digital-marketing-agency-gurugram" },
};

const services = [
  ["Performance & lead-gen ads", "Google and Meta campaigns engineered around cost per qualified lead — reported with definitions, not vanity numbers."],
  ["B2B & D2C search campaigns", "High-intent search capture for services, clinics, real estate and professional firms across NCR."],
  ["SEO that compounds", "Technical, on-page and location SEO so your pipeline doesn't depend on ad spend alone."],
  ["ORM for NCR brands", "Google review engines and rating recovery — because NCR buyers check stars before they check your website."],
  ["Content & creative studio", "Shoots, reels and founder films produced with the discipline of a media house."],
  ["Landing pages & tracking", "Fast pages, clean analytics and CRM-ready lead flow — every rupee traceable."],
];

export default function GurugramPage() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Spryb Digital — Gurugram",
    url: `${SITE}/digital-marketing-agency-gurugram`,
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot no. 744, Phase-5, Udyog Vihar, Sector 19",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122016",
      addressCountry: "IN",
    },
    telephone: "+91-7307934372",
    email: "hello@sprybdigital.com",
    areaServed: "Gurugram, Delhi NCR",
    priceRange: "₹₹",
  };
  return (
    <>
      <JsonLd data={localBusiness} />
      <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
        <div className="mx-auto max-w-[1100px]">
          <Breadcrumb
            trail={[["Performance Marketing Agency in Gurugram", "/digital-marketing-agency-gurugram"]]}
            pageType="WebPage"
            pageName="Performance Marketing Agency in Gurugram — Spryb Digital"
            pageUrl={`${SITE}/digital-marketing-agency-gurugram`}
          />
          <p className="section-label mt-4">Gurugram · Delhi NCR</p>
          <h1 className="font-display text-[12vw] sm:text-[80px] leading-[0.95]">
            PERFORMANCE MARKETING <span className="text-gradient">AGENCY IN GURUGRAM.</span>
          </h1>
          <p className="text-[#121130]/75 text-[17px] max-w-[62ch] mt-6">
            From our Udyog Vihar studio in Gurugram, Spryb Digital runs performance marketing for Delhi NCR businesses:
            qualified-lead ad engines, search and social, SEO and ORM. One team, dashboards open, every claim carrying a
            number.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mt-10">
            {services.map(([t, d]) => (
              <div key={t} className="border border-[#121130]/12 rounded-[16px] p-5 bg-white">
                <h2 className="font-display text-2xl">{t}</h2>
                <p className="text-[#121130]/65 text-[14.5px] mt-2 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          <div className="card-dark rounded-[24px] p-7 sm:p-10 mt-12">
            <h2 className="font-display text-3xl sm:text-4xl text-white">NCR-RELEVANT <span className="text-[#D8F23F]">PROOF.</span></h2>
            <p className="text-white/70 text-[15.5px] mt-4 leading-relaxed">
              Our Google Search engine for a Brampton tiffin brand turned high-intent searches into 819 paid
              subscriptions at C$2.10 each from C$1,722 spend. The same search-first, qualified-lead discipline is what
              we run for NCR clients.{" "}
              <Link href="/work/tiffin-brampton" className="text-[#D8F23F] underline underline-offset-4">Read the search case →</Link>
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            <div className="border-t border-[#121130]/15 pt-4">
              <p className="text-[11px] font-bold tracking-[0.25em] text-[#0e9f5b]">GURUGRAM STUDIO</p>
              <p className="font-bold mt-1">Plot no. 744, Phase-5, Udyog Vihar</p>
              <p className="text-[#121130]/60 text-[14px]">Sector 19, Gurugram, Haryana — 122016</p>
              <p className="text-[#121130]/60 text-[14px] mt-1">Mon–Sat, 10am–7pm IST · <a href="tel:+917307934372" className="tlink-dark">+91 73079 34372</a></p>
            </div>
            <div className="border-t border-[#121130]/15 pt-4">
              <p className="text-[11px] font-bold tracking-[0.25em] text-[#0e9f5b]">HEAD OFFICE</p>
              <p className="font-bold mt-1">Lucknow</p>
              <p className="text-[#121130]/60 text-[14px]">Vibhuti Khand, Gomti Nagar — strategy, content, shoots. <Link href="/digital-marketing-agency-lucknow" className="tlink-dark">Lucknow office →</Link></p>
            </div>
          </div>

          <div className="card-dark mt-12 p-8 sm:p-12 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl">NCR PIPELINE <span className="text-gradient">STARTS HERE.</span></h3>
              <p className="text-white/60 text-[15px] mt-2">Free teardown call — we'll tell you the one lever to pull first.</p>
            </div>
            <Link href="/contact" className="btn-gradient shrink-0">Book a discovery call →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
