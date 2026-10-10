import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Marquee } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kreative Kand — Our Instagram Playground",
  description:
    "Kreative Kand by Spryb Digital: reels, trends, memes and behind-the-scenes on Instagram. Follow @kreativ_kand.",
  alternates: { canonical: "/kreative-kand" },
};

const REELS = [
  "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=480&q=80",
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=480&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=480&q=80",
];

const SHOTS = [
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=640&q=80",
];

const RING = ["ring-[#4FEA73]", "ring-[#D8F23F]", "ring-[#FF8A5C]"];

export default function KreativeKandPage() {
  return (
    <div>
      <section className="pt-32 sm:pt-40 pb-14 px-6 sm:px-10 relative overflow-hidden bg-gradient-to-br from-[#4FEA73]/25 via-[#D8F23F]/20 to-[#FF8A5C]/20">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#4FEA73]/30 blur-[100px]" />
        <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-[#FF8A5C]/25 blur-[100px]" />
        <div className="mx-auto max-w-[1440px] relative">
          <p className="section-label">Spryb presents</p>
          <h1 className="font-display text-[16vw] sm:text-[120px] leading-[0.85] mt-2">
            <span className="text-[#121130]">KREATIVE</span>
            <br />
            <span className="text-gradient">KAND.</span>
          </h1>
          <p className="text-[#121130]/75 text-[16px] sm:text-[20px] max-w-[56ch] mt-5 font-medium">
            Our Instagram playground. Reels, trends, memes and behind-the-scenes — where Spryb tries things before clients dare to.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://www.instagram.com/kreativ_kand/" target="_blank" rel="noreferrer" className="btn-madness px-8 py-4 text-[15px]">
              Follow @kreativ_kand →
            </a>
            <Link href="/contact" className="btn-ghost">Work with us</Link>
          </div>
        </div>
      </section>

      <div>
        <Marquee items={["REELS", "TRENDS", "MEMES", "BTS", "EXPERIMENTS", "KAND"]} />
      </div>

      <section className="px-6 sm:px-10 py-16 bg-white">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-display text-[11vw] sm:text-[70px]">FRESH <span className="text-gradient">REELS.</span></h2>
          <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-8 max-w-[900px]">
            {REELS.map((s, i) => (
              <a
                key={s}
                href="https://www.instagram.com/kreativ_kand/"
                target="_blank"
                rel="noreferrer"
                className={`relative rounded-[20px] overflow-hidden group aspect-[9/16] ring-4 ${RING[i % 3]} shadow-[0_16px_50px_rgba(18,17,48,0.2)]`}
              >
                <Image src={s} alt={`Kreative Kand reel ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width:768px) 33vw, 300px" />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="w-14 h-14 rounded-full bg-white/90 grid place-items-center text-[#121130] text-xl font-black shadow-lg group-hover:scale-110 transition-transform">▶</span>
                </span>
                <span className="absolute bottom-3 left-3 text-white text-[12px] font-bold drop-shadow">Reel 0{i + 1}</span>
              </a>
            ))}
          </div>

          <h2 className="font-display text-[11vw] sm:text-[70px] mt-16">STATIC <span className="text-gradient">HEAT.</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-8">
            {SHOTS.map((s, i) => (
              <a
                key={s}
                href="https://www.instagram.com/kreativ_kand/"
                target="_blank"
                rel="noreferrer"
                className={`relative aspect-square rounded-[20px] overflow-hidden group ring-4 ${RING[i % 3]} shadow-[0_16px_50px_rgba(18,17,48,0.15)]`}
              >
                <Image src={s} alt={`Kreative Kand post ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width:768px) 50vw, 33vw" />
                <span className="absolute inset-0 bg-gradient-to-t from-[#121130]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-white text-[12px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">View on Instagram ↗</span>
              </a>
            ))}
          </div>

          <div className="rounded-[24px] mt-12 p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between bg-gradient-to-r from-[#121130] via-[#1A1940] to-[#0e9f5b] shadow-[0_24px_70px_rgba(18,17,48,0.35)]">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-white">WANT THIS ENERGY <span className="text-gradient">FOR YOUR BRAND?</span></h2>
              <p className="text-white/65 text-[15px] mt-2">Same team, same chaos — pointed at your growth.</p>
            </div>
            <Link href="/contact" className="btn-gradient shrink-0">Start talking →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
