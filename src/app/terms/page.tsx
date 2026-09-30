import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms of working with Spryb Digital.",
  alternates: { canonical: "/terms" },
};

const blocks: [string, string][] = [
  ["Working together", "Every engagement starts with a written proposal and a fixed monthly scope. Nothing begins until you approve it in writing (email is fine)."],
  ["Payments", "Retainers are billed monthly in advance. Ad spend is paid directly by you to the platforms and is never mixed with our fees. Late payments beyond 7 days may pause active work."],
  ["Timelines", "We move fast — kickoff within 48 hours of onboarding — but great work needs your inputs on time (logins, approvals, shoot access). Delays on inputs shift timelines equally."],
  ["Ownership", "Once paid in full, all deliverables created for you (designs, videos, copy) are yours. Our internal SOPs, templates and methods stay ours."],
  ["Confidentiality", "Both sides keep shared business information private. NDAs available on request before the first call."],
  ["Ending things", "Either side can end a retainer with 15 days' written notice. Work delivered till the last paid day stays with you."],
  ["Contact", "Questions? Mail hello@sprybdigital.com — a human replies within 24 hours."],
];

export default function TermsPage() {
  return (
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[860px]">
        <p className="section-label">Legal</p>
        <h1 className="font-display text-[13vw] sm:text-[90px]">TERMS &amp; <span className="text-gradient">CONDITIONS.</span></h1>
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
