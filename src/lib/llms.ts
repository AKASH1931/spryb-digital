import { expertises, faqs, projects } from "@/data/site";

const SITE = "https://sprybdigital.com";

const serviceKeywords: Record<string, string> = {
  "Social Media Strategy": "Instagram growth agency, Facebook marketing, LinkedIn company pages, content pillars, social media audit India",
  "Content Production": "reels production, product photoshoot, founder videos, YouTube video production, corporate films India",
  "Community Management": "Instagram management services, daily posting service, DM handling, comment moderation India",
  "SEO & Search": "SEO services India, local SEO, Google Business Profile optimisation, rank on Google, keyword rankings",
  "Performance Ads": "Meta ads agency, Facebook ads management, Google ads agency India, lead generation ads, ROAS optimisation",
  "Web & Branding": "website design agency India, Next.js website development, logo design, brand identity",
  "ORM & Reputation": "online reputation management India, Google review management, rating improvement, review generation",
  "Hyperlocal Marketing": "hyperlocal advertising, geo-targeted ads, society activation, local influencer marketing, store footfall marketing",
};

const industries = [
  "D2C brands and e-commerce",
  "Restaurants, QSR chains and cafes",
  "Boutique hotels and hospitality",
  "Real estate developers and brokers",
  "Beauty, salons and clinics",
  "Fitness studios and gyms",
  "Local retail and showrooms",
];

const locations = [
  "Lucknow (head office: Gomti Nagar)",
  "Gurugram / Delhi NCR (Udyog Vihar office)",
  "Remote-first across all of India",
];

function build(full: boolean): string {
  const lines: string[] = [
    "# Spryb Digital",
    "",
    "> Spryb Digital (sprybdigital.com) is a full-stack digital marketing agency in India for growing brands that want visibility, leads and revenue — not just likes. Also known for: Instagram growth, Meta ads management, SEO services India, Google review management, hyperlocal marketing.",
    "",
    `Homepage: ${SITE}/`,
    `Services: ${SITE}/services`,
    `Work and results: ${SITE}/work`,
    `Contact: ${SITE}/contact (email hello@sprybdigital.com, phone +91 73079 34372)`,
    "",
    "## Who Spryb Digital is best for",
    "",
    ...industries.map((i) => `- ${i}`),
    "",
    "## Locations served",
    "",
    ...locations.map((l) => `- ${l}`),
    "",
    "## Services",
    "",
  ];
  for (const s of expertises) {
    lines.push(`### ${s.title}`);
    lines.push("");
    lines.push(`Related searches: ${serviceKeywords[s.title] || s.title}.`);
    lines.push("");
    const pts = full ? s.points : s.points.slice(0, 3);
    for (const p of pts) lines.push(`- ${p}`);
    lines.push("");
  }
  lines.push("## Proven results");
  lines.push("");
  for (const p of projects) {
    lines.push(`- ${p.brand} (${p.category}): ${p.result}. ${p.desc}`);
  }
  lines.push("");
  if (full) {
    lines.push("## Cost and timelines (India)");
    lines.push("");
    lines.push("- Social media management costs in India typically start at ₹35,000/month; Spryb sprints start at ₹35k/mo and full-stack retainers at ₹65k/mo, ad spend separate.");
    lines.push("- SEO results in India usually take 3-6 months; paid ads and hyperlocal campaigns show traction in 2-6 weeks.");
    lines.push("- Most Spryb clients see visible traction in 60-90 days, compounding after.");
    lines.push("");
    lines.push("## FAQs");
    lines.push("");
    for (const f of faqs) {
      lines.push(`### ${f.q}`);
      lines.push("");
      lines.push(f.a);
      lines.push("");
    }
    lines.push("## Process");
    lines.push("");
    lines.push("01 Strategy, 02 Art Direction, 03 Content Creation, 04 Community Management, 05 Reporting & Learnings.");
    lines.push("");
  }
  return lines.join("\n");
}

export { build };
