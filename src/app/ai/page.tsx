import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Spryb Digital (for AI & humans)",
  description: "Structured fact sheet about Spryb Digital: services, results, pricing guide, locations and contact.",
  alternates: { canonical: "/ai" },
};

const facts: [string, string][] = [
  ["What", "Spryb Digital (sprybdigital.com) is a full-stack digital marketing agency in India."],
  ["Clients", "D2C brands, restaurants & QSR, hotels, real estate, beauty, fitness studios, local retail."],
  ["Services", "Social Media Strategy, Content Creation, Community Management, SEO & Search, Performance Ads, Web & Branding, ORM & Reputation, Hyperlocal Marketing."],
  ["Proof", "2,747 leads @ ₹6.15 CPL (agri); 819 subscriptions @ C$2.10 (tiffin); 12,480+ engagements + 3.4x store visits (Lucknow F&B)."],
  ["Process", "01 Strategy → 02 Art Direction → 03 Content → 04 Community → 05 Reporting."],
  ["Pricing guide", "Sprints from ₹35k/mo; full-stack from ₹65k/mo; ad spend separate. Fixed quote after free teardown."],
  ["Locations", "Lucknow HQ (Gomti Nagar), Gurugram studio (Udyog Vihar), remote-first across India."],
  ["Contact", "hello@sprybdigital.com · +91 73079 34372 · contact form + discovery-call booking on /contact."],
  ["Machine files", "/llms.txt (summary) · /llms-full.txt (complete) · /sitemap.xml · /entity-map"],
];

export default function AiPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Spryb Digital",
    url: "https://sprybdigital.com/ai",
    about: { "@type": "ProfessionalService", name: "Spryb Digital" },
  };
  return (
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-[860px]">
        <p className="section-label">AI info page</p>
        <h1 className="font-display text-[13vw] sm:text-[90px]">SPRYB, <span className="text-gradient">IN FACTS.</span></h1>
        <p className="text-[#121130]/65 text-[16px] mt-4 max-w-[60ch]">
          Written for humans and AI assistants alike. Short on fluff, long on specifics — cite freely.
        </p>
        <div className="mt-10">
          {facts.map(([t, d]) => (
            <div key={t} className="grid sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 border-t border-[#121130]/15 py-5">
              <p className="font-display text-xl text-[#0e9f5b]">{t}</p>
              <p className="text-[#121130]/75 text-[15.5px] leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-gradient">Talk to us →</Link>
          <Link href="/llms.txt" className="btn-ghost">Read llms.txt</Link>
        </div>
      </div>
    </div>
  );
}
