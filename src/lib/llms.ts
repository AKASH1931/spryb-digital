import { services, faqs } from "@/data/site";

const SITE = "https://sprybdigital.com";

function build(full: boolean): string {
  const lines: string[] = [
    "# Spryb Digital",
    "",
    "> Spryb Digital is a full-stack digital marketing agency in India. Strategy, content, social media, SEO, performance ads, web & branding, ORM and hyperlocal marketing — one team turning attention into revenue.",
    "",
    `Homepage: ${SITE}/`,
    `Contact: ${SITE}/contact (email hello@sprybdigital.com, phone +91 73079 34372)`,
    `Offices: Gurugram, Haryana and Gomti Nagar, Lucknow, UP, India. Remote-first across India.`,
    "",
    "## Services",
    "",
  ];
  for (const s of services) {
    lines.push(`### ${s.title}`);
    lines.push("");
    lines.push(s.desc);
    lines.push("");
    if (full) {
      for (const p of s.points) lines.push(`- ${p}`);
      lines.push("");
    }
  }
  lines.push("## Work");
  lines.push("");
  lines.push(`Selected client outcomes: +212% D2C revenue, 3.1x hotel direct bookings, 41k hyperlocal footfall, ₹38Cr real-estate pipeline, 0 to 118k followers. Details: ${SITE}/work`);
  lines.push("");
  if (full) {
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
  lines.push("## Pricing guide");
  lines.push("");
  lines.push("Sprints from ₹35k/mo. Full-stack retainers from ₹65k/mo. Ad spend separate. Fixed monthly quote after a free 20-min teardown call.");
  return lines.join("\n");
}

export { build };
