import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers — Come Make Noise With Us",
  description:
    "Join Spryb Digital: social media executives, designers, video editors and interns. Mail your portfolio to hello@sprybdigital.com.",
  alternates: { canonical: "/careers" },
};

const ROLES = [
  {
    title: "Social Media Executive",
    type: "Full-time · Lucknow / Remote",
    desc: "Own accounts end-to-end: calendars, publishing, DMs, trends. 1+ year of proof (not promises) needed.",
  },
  {
    title: "Graphic Designer",
    type: "Full-time · Lucknow / Remote",
    desc: "Grids, thumbs, carousels and brand kits. Portfolio-first hiring — show, don't tell.",
  },
  {
    title: "Video Editor",
    type: "Full-time · Remote",
    desc: "Reels that retain. Pace, captions, sound — 30 pieces a month without breaking a sweat.",
  },
  {
    title: "Internships",
    type: "3 months · Lucknow",
    desc: "Social, design or video. Real client work from week one, stipend + a job if you earn it.",
  },
];

export default function CareersPage() {
  return (
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[1100px]">
        <p className="section-label">Careers</p>
        <h1 className="font-display text-[13vw] sm:text-[100px]">
          COME MAKE <span className="text-gradient">NOISE.</span>
        </h1>
        <p className="text-[#121130]/70 text-[17px] max-w-[58ch] mt-5">
          Small team, big output, zero politics. If your work speaks louder than your resume, you&apos;ll fit right in.
        </p>
        <div className="mt-12 space-y-4">
          {ROLES.map((r, i) => (
            <div key={r.title} className="card-dark p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:items-center">
              <span className="font-display text-4xl text-stroke-white opacity-70 shrink-0">0{i + 1}</span>
              <div className="flex-1">
                <h2 className="font-display text-2xl sm:text-3xl">{r.title}</h2>
                <p className="text-[#4FEA73] text-[12px] font-medium mt-1">{r.type}</p>
                <p className="text-white/60 text-[14.5px] mt-2">{r.desc}</p>
              </div>
              <a
                href={`mailto:hello@sprybdigital.com?subject=Applying for ${encodeURIComponent(r.title)}`}
                className="btn-gradient !py-3 !px-6 text-sm shrink-0"
              >
                Apply →
              </a>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-[#121130]/60 text-[15px]">Role not listed? Send anything great to <a href="mailto:hello@sprybdigital.com" className="tlink-dark font-bold">hello@sprybdigital.com</a></p>
          <Link href="/about" className="tlink-dark text-[14px] inline-block mt-3">Meet the team first →</Link>
        </div>
      </div>
    </div>
  );
}
