import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb, { JsonLd, SITE, ORG_ID } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Lucknow — Spryb Digital",
  description:
    "Spryb Digital is a full-stack digital marketing agency in Lucknow (Vibhuti Khand, Gomti Nagar): lead generation, social media, local SEO, performance ads, ORM and hyperlocal marketing for Lucknow businesses.",
  alternates: { canonical: "/digital-marketing-agency-lucknow" },
};

const services = [
  ["Lead generation campaigns", "Meta and Google ads built for enquiries, not likes — tracked from click to call to customer."],
  ["Local SEO & Google Business Profile", "Rank when Lucknow searches for what you sell. Maps, reviews and location pages."],
  ["Social media & content", "Calendars, reels and shoots that make Lucknow customers stop scrolling and start talking."],
  ["ORM & Google reviews", "Rating recovery and review engines for restaurants, clinics, hotels and showrooms."],
  ["Hyperlocal ads (1–5km)", "Geo-targeted campaigns that pull footfall into your store, café or clinic."],
  ["Websites that convert", "Fast, search-ready sites — because traffic without enquiries is just a bill."],
];

export default function LucknowPage() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Spryb Digital — Lucknow",
    url: `${SITE}/digital-marketing-agency-lucknow`,
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sikarwar Tower, C-69, Ground Floor, Vibhuti Khand",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      postalCode: "226010",
      addressCountry: "IN",
    },
    telephone: "+91-7307934372",
    email: "hello@sprybdigital.com",
    areaServed: "Lucknow",
    priceRange: "₹₹",
  };
  return (
    <>
      <JsonLd data={localBusiness} />
      <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
        <div className="mx-auto max-w-[1100px]">
          <Breadcrumb
            trail={[["Digital Marketing Agency in Lucknow", "/digital-marketing-agency-lucknow"]]}
            pageType="WebPage"
            pageName="Digital Marketing Agency in Lucknow — Spryb Digital"
            pageUrl={`${SITE}/digital-marketing-agency-lucknow`}
          />
          <p className="section-label mt-4">Lucknow · Head Office</p>
          <h1 className="font-display text-[12vw] sm:text-[80px] leading-[0.95]">
            DIGITAL MARKETING <span className="text-gradient">AGENCY IN LUCKNOW.</span>
          </h1>
          <p className="text-[#121130]/75 text-[17px] max-w-[62ch] mt-6">
            Spryb Digital runs from Lucknow — our HQ at Sikarwar Tower, Vibhuti Khand, Gomti Nagar. We build growth
            engines for Lucknow and UP brands: restaurants and cafés, clinics and salons, real estate, boutiques and
            local retail. Strategy on one call, shoots on-site, reporting you can audit.
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
            <h2 className="font-display text-3xl sm:text-4xl text-white">LUCKNOW PROOF, <span className="text-[#D8F23F]">NOT PROMISES.</span></h2>
            <p className="text-white/70 text-[15.5px] mt-4 leading-relaxed">
              For a premium Lucknow F&B brand we ran a 3-month Instagram + hyperlocal engine: 12,480+ engagements, 3.4x
              store visits and ₹672.5K+ attributed revenue at ₹56.32 per engagement.{" "}
              <Link href="/work/lucknow-fnb" className="text-[#D8F23F] underline underline-offset-4">Read the full Lucknow case →</Link>
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            <div className="border-t border-[#121130]/15 pt-4">
              <p className="text-[11px] font-bold tracking-[0.25em] text-[#0e9f5b]">LUCKNOW HQ</p>
              <p className="font-bold mt-1">Sikarwar Tower, C-69, Ground Floor</p>
              <p className="text-[#121130]/60 text-[14px]">Vibhuti Khand, Gomti Nagar, Lucknow — 226010</p>
              <p className="text-[#121130]/60 text-[14px] mt-1">Mon–Sat, 10am–7pm IST · <a href="tel:+917307934372" className="tlink-dark">+91 73079 34372</a></p>
            </div>
            <div className="border-t border-[#121130]/15 pt-4">
              <p className="text-[11px] font-bold tracking-[0.25em] text-[#0e9f5b]">ALSO SERVING</p>
              <p className="font-bold mt-1">Gurugram & Delhi NCR</p>
              <p className="text-[#121130]/60 text-[14px]">Udyog Vihar studio — ads, SEO and ORM desk. <Link href="/digital-marketing-agency-gurugram" className="tlink-dark">Gurugram office →</Link></p>
            </div>
          </div>

          <div className="card-dark mt-12 p-8 sm:p-12 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl">LUCKNOW BRAND? <span className="text-gradient">LET'S TALK.</span></h3>
              <p className="text-white/60 text-[15px] mt-2">One free teardown call. Zero jargon. A plan you can steal even if we never work together.</p>
            </div>
            <Link href="/contact" className="btn-gradient shrink-0">Book a discovery call →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
