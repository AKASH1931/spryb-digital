import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Spryb Digital collects, uses and protects your information.",
  alternates: { canonical: "/privacy" },
};

const blocks: [string, string][] = [
  ["What we collect", "When you fill our contact form, we collect your name, email, phone/company (if shared), selected services and message. That's it — nothing sneaky, no tracking beyond basic anonymous analytics."],
  ["How we use it", "Only to reply to you, prepare your teardown and proposal, and improve our site. We never sell, rent or share your details with third parties for their marketing."],
  ["Cookies", "We use a minimal cookie to remember your cookie-banner choice, plus privacy-friendly analytics once enabled. No advertising cookies, no cross-site tracking."],
  ["Your rights", "Ask us anytime at hello@sprybdigital.com to see, correct or delete your data. We'll act within 7 working days."],
  ["Contact", "Questions about privacy? Mail hello@sprybdigital.com and a human will reply — usually within 24 hours."],
];

export default function PrivacyPage() {
  return (
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[860px]">
        <p className="section-label">Legal</p>
        <h1 className="font-display text-[13vw] sm:text-[90px]">PRIVACY <span className="text-gradient">POLICY.</span></h1>
        <p className="text-[#121130]/60 text-[14px] mt-4">Last updated: September 2026</p>
        <div className="mt-10 space-y-8">
          {blocks.map(([t, d]) => (
            <div key={t} className="border-t border-[#121130]/15 pt-6">
              <h2 className="font-display text-2xl">{t}</h2>
              <p className="text-[#121130]/70 text-[15.5px] leading-relaxed mt-3">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
