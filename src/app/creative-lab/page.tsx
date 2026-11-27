import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CreativeLabVideos from "@/components/CreativeLabVideos";

const OG_TITLE = "Creative Lab — In a world of AI slop, humans win";
const OG_DESCRIPTION =
  "100% human, research-backed UGC and content — fast, trend-driven, built to convert. Real faces. Real voices. No prompts, no filler.";

export const metadata: Metadata = {
  title: OG_TITLE,
  description: OG_DESCRIPTION,
  alternates: { canonical: "/creative-lab" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/creative-lab",
    siteName: "Spryb Digital",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
  },
};

const usps = [
  { title: "100% Human", text: "Authentic, relatable, engaging content — made by real people, not prompt machines.", sticker: "NO AI SLOP", color: "bg-[#4FEA73]" },
  { title: "Research-Based", text: "Every video is powered by insights and analysis — we study what lands before we shoot.", sticker: "DATA + VIBES", color: "bg-[#00D4FF]" },
  { title: "Cost-Effective", text: "High-quality content at optimised costs. More output, smarter spend.", sticker: "SMART ₹", color: "bg-[#D8F23F]" },
  { title: "Quick Turnaround", text: "Faster execution without compromise — trends don’t wait, neither do we.", sticker: "FAST AF", color: "bg-[#FF8AD8]" },
  { title: "Trend-Driven", text: "We create around culture and trends so your brand shows up where attention already is.", sticker: "ON TREND", color: "bg-[#FFB86B]" },
];

const whyUgc = [
  { title: "People trust people", text: "In an AI-flooded feed, real faces and real voices cut through. UGC feels lived-in, not manufactured — and trust is what converts." },
  { title: "AI fatigue is real", text: "Audiences can smell generic, over-polished AI content a mile away. Human-made stories feel fresh because they actually are." },
  { title: "Relatability > perfection", text: "UGC mirrors how customers talk, use and love a product. That mirror sells better than any glossy ad script." },
  { title: "Algorithms love it", text: "Platforms reward content that sparks saves, shares and comments — and nothing sparks conversation like authentic human moments." },
];

const growth = [
  { stage: "Hook them", metric: "3.2x", label: "Reach lift", how: "Trend-native hooks + relatable first 2 seconds stop the scroll and push content into new feeds.", color: "bg-[#4FEA73]" },
  { stage: "Hold them", metric: "46%", label: "Avg. watch-through", how: "Human stories, tight pacing and real faces keep people watching instead of swiping past.", color: "bg-[#00D4FF]" },
  { stage: "Make them act", metric: "2.4x", label: "Saves & shares", how: "Useful, authentic UGC earns saves, shares and comments — the signals algorithms love.", color: "bg-[#FF8AD8]" },
  { stage: "Turn it to growth", metric: "28%", label: "Inquiry lift", how: "Clear CTAs and trust-building content convert attention into profile taps, DMs and leads.", color: "bg-[#D8F23F]" },
];

const labTeam = [
  { name: "Hook Rani", role: "Hook Architect", emoji: "🎣", img: "/creator-lab-team/member-01.jpg", pos: "50% 25%", bio: "Lives for the first 2 seconds. If it doesn’t stop the scroll, it doesn’t ship." },
  { name: "Trend Bhaiya", role: "Culture Scout", emoji: "📡", img: "/creator-lab-team/member-02.jpg", pos: "50% 25%", bio: "Spots trends before they peak and turns them into brand-ready content." },
  { name: "Cut-Cut Ninja", role: "Chaos Editor", emoji: "✂️", img: "/creator-lab-team/member-05.jpg", pos: "50% 25%", bio: "Slices messy footage into crisp, bingeable stories at dangerous speed." },
  { name: "Vibe Daaku", role: "Mood Director", emoji: "🌈", img: "/creator-lab-team/member-04.jpg", pos: "50% 25%", bio: "Steals the right vibe every time — colour, pace, energy, all on point." },
  { name: "Script Pundit", role: "Word Alchemist", emoji: "🪄", img: "/creator-lab-team/member-03.jpg", pos: "50% 25%", bio: "Turns rough briefs into lines people actually remember and repeat." },
  { name: "Pixel Paaji", role: "Frame Tamer", emoji: "🎯", img: "/creator-lab-team/member-06.jpg", pos: "50% 25%", bio: "Obsessed with clean frames, sharp cuts and details nobody asked for (but everyone feels)." },
];

export default function CreativeLabPage() {
  return (
    <div className="bg-[#F4FFF8] overflow-hidden">
      {/* HERO */}
      <section className="relative pt-32 sm:pt-40 pb-14 px-6 sm:px-10">
        <div className="absolute top-20 right-[6%] w-44 h-44 rounded-full bg-[#00D4FF]/35 blur-[70px] animate-float" />
        <div className="absolute bottom-0 left-[4%] w-56 h-56 rounded-full bg-[#4FEA73]/35 blur-[80px]" />
        <div className="absolute top-40 left-[45%] w-32 h-32 rounded-full bg-[#FF8AD8]/25 blur-[60px]" />
        <div className="mx-auto max-w-[1440px] relative">
          <span className="inline-block bg-[#121130] text-white text-[12px] font-bold tracking-[0.2em] px-4 py-2 rounded-full rotate-[-2deg]">
            SPRYB CREATIVE LAB • 100% HUMAN
          </span>
          <h1 className="font-display leading-[0.88] mt-5">
            <span className="block text-[15vw] sm:text-[110px] text-[#121130]">IN A WORLD OF</span>
            <span className="block text-[15vw] sm:text-[110px]">
              <span className="relative inline-block px-3 bg-[#00D4FF] rotate-[-1.5deg] text-[#121130]">AI SLOP,</span>
            </span>
            <span className="block text-[15vw] sm:text-[110px] text-[#121130]">
              <span className="text-gradient">HUMANS</span> WIN.
            </span>
          </h1>
          <p className="text-[#121130]/75 text-[16px] sm:text-[19px] max-w-[58ch] mt-6 font-medium">
            Creative Lab is where we turn ideas into content that actually connects — 100% human, research-backed, trend-driven and built to convert. No generic prompts. Just real stories that sell.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-gradient px-8 py-4 text-[15px] rotate-[-1deg]">
              Book the Lab →
            </Link>
            <a href="#videos" className="btn-ghost px-8 py-4 text-[15px] rotate-[0.5deg]">
              See the work
            </a>
            <span className="text-[13px] text-[#121130]/55 italic rotate-[1deg]">real humans. real results.</span>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="px-6 sm:px-10 py-14">
        <div className="mx-auto max-w-[1440px]">
          <p className="section-label">What we do</p>
          <h2 className="font-display text-[11vw] sm:text-[80px] lg:text-[100px] mt-2 text-[#121130]">
            CONTENT WITH A <span className="text-gradient">PULSE.</span>
          </h2>
          <p className="text-[#121130]/70 text-[16px] max-w-[60ch] mt-4">
            We don’t ship filler. We build content engines — researched, human-made and tuned for the platforms your audience actually lives on.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {usps.map((u, i) => (
              <div key={u.title} className={`bg-white rounded-[22px] border-2 border-[#121130] p-6 shadow-[6px_6px_0_#121130] ${i % 2 === 0 ? "rotate-[-0.6deg]" : "rotate-[0.6deg]"}`}>
                <span className={`inline-block ${u.color} text-[#121130] text-[11px] font-bold tracking-[0.15em] px-3 py-1.5 rounded-full mb-4`}>
                  {u.sticker}
                </span>
                <h3 className="font-display text-3xl text-[#121130]">{u.title}</h3>
                <p className="text-[#121130]/70 text-[15px] mt-3 leading-relaxed">{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY UGC IN AI WORLD */}
      <section className="px-6 sm:px-10 py-14 relative">
        <div className="mx-auto max-w-[1440px]">
          <div className="card-dark rounded-[28px] p-7 sm:p-12 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-[#4FEA73]/20 blur-[60px]" />
            <div className="absolute bottom-0 -left-8 w-44 h-44 rounded-full bg-[#00D4FF]/20 blur-[50px]" />
            <div className="relative">
              <p className="text-[12px] tracking-[0.3em] uppercase text-[#4FEA73] font-medium">The big why</p>
              <h2 className="font-display text-[10vw] sm:text-[72px] lg:text-[90px] mt-3 text-white">
                WHY <span className="bg-[#D8F23F] text-[#121130] px-2 inline-block rotate-[-1deg]">UGC</span> MATTERS<br />
                IN THE WORLD OF <span className="text-[#00D4FF]">AI.</span>
              </h2>
              <p className="text-white/70 text-[16px] sm:text-[18px] max-w-[62ch] mt-5">
                AI can generate endless content. What it can’t generate is trust. When feeds are flooded with synthetic polish, the brands that win are the ones that feel unmistakably human.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                {whyUgc.map((w, i) => (
                  <div key={w.title} className={`bg-white/[0.06] border border-white/15 rounded-[18px] p-6 ${i % 2 ? "sm:translate-y-3" : ""}`}>
                    <h3 className="font-display text-2xl sm:text-3xl text-[#D8F23F]">{w.title}</h3>
                    <p className="text-white/70 text-[15px] mt-3 leading-relaxed">{w.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROWTH */}
      <section className="px-6 sm:px-10 py-14 relative">
        <div className="mx-auto max-w-[1440px]">
          <div className="bg-[#121130] rounded-[28px] p-7 sm:p-12 relative overflow-hidden">
            <div className="absolute -top-12 right-[10%] w-56 h-56 rounded-full bg-[#4FEA73]/20 blur-[70px]" />
            <div className="absolute bottom-0 left-[5%] w-48 h-48 rounded-full bg-[#FF8AD8]/20 blur-[70px]" />
            <div className="relative">
              <span className="inline-block bg-[#D8F23F] text-[#121130] text-[12px] font-bold tracking-[0.2em] px-4 py-2 rounded-full rotate-[-2deg]">
                GROWTH, BUT MAKE IT HUMAN
              </span>
              <h2 className="font-display text-[10vw] sm:text-[72px] lg:text-[90px] mt-4 text-white leading-[0.9]">
                HOW WE DRIVE <span className="text-[#4FEA73]">GROWTH.</span>
              </h2>
              <p className="text-white/70 text-[16px] sm:text-[18px] max-w-[62ch] mt-5">
                Not gimmicks — a system. Every reel and post works like a mini funnel, from hook to action. Here’s how human content moves the numbers, logically.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                {growth.map((g, i) => (
                  <div key={g.stage} className={`bg-white rounded-[20px] border-2 border-[#121130] p-5 shadow-[6px_6px_0_#000] ${i % 2 ? "sm:-rotate-1" : "sm:rotate-1"}`}>
                    <span className={`inline-block ${g.color} text-[#121130] text-[11px] font-bold tracking-[0.15em] px-3 py-1.5 rounded-full`}>{g.stage}</span>
                    <div className="font-display text-5xl sm:text-6xl text-[#121130] mt-4 leading-none">{g.metric}</div>
                    <div className="text-[13px] font-bold tracking-[0.08em] uppercase text-[#121130]/70 mt-1">{g.label}</div>
                    <p className="text-[#121130]/70 text-[14px] mt-3 leading-relaxed">{g.how}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3 items-center">
                <span className="text-[13px] bg-white/10 border border-white/20 text-white rounded-full px-4 py-2">🔁 research → create → post → learn → repeat</span>
                <span className="text-[12px] text-white/45 italic">* lab-style benchmarks — logical, not random.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOS / UGC */}
      <section id="videos" className="px-6 sm:px-10 py-14 relative">
        <div className="absolute top-10 left-[10%] w-40 h-40 rounded-full bg-[#FF8AD8]/25 blur-[70px]" />
        <div className="absolute bottom-10 right-[8%] w-48 h-48 rounded-full bg-[#00D4FF]/25 blur-[80px]" />
        <div className="mx-auto max-w-[1440px] relative">
          <span className="inline-block bg-[#FF8AD8] text-[#121130] text-[12px] font-bold tracking-[0.2em] px-4 py-2 rounded-full rotate-[2deg]">
            STRAIGHT FROM THE LAB
          </span>
          <h2 className="font-display text-[11vw] sm:text-[80px] lg:text-[100px] mt-4 text-[#121130]">
            VIDEOS & <span className="relative inline-block px-2 bg-[#4FEA73] -rotate-[1deg]">UGC</span><br />
            WE <span className="text-gradient">CREATED.</span>
          </h2>
          <p className="text-[#121130]/70 text-[16px] sm:text-[18px] max-w-[62ch] mt-4">
            Reels, trends and human-first content — shot, edited and shipped by us. No stock faces, no AI slop. Tap to watch with sound.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="text-[13px] bg-white border border-[#121130]/15 rounded-full px-4 py-2 rotate-[-1deg] shadow-[3px_3px_0_#121130]">🎬 100% human-made</span>
            <span className="text-[13px] bg-[#D8F23F] border border-[#121130] rounded-full px-4 py-2 rotate-[1deg] font-bold shadow-[3px_3px_0_#121130]">UGC that converts</span>
            <span className="text-[13px] bg-white border border-[#121130]/15 rounded-full px-4 py-2 rotate-[-0.5deg] shadow-[3px_3px_0_#121130]">trend-native hooks</span>
          </div>
          <CreativeLabVideos />
        </div>
      </section>

      {/* FUNKY TEAM */}
      <section className="px-6 sm:px-10 py-16 relative overflow-hidden">
        <div className="absolute -top-6 left-[20%] w-52 h-52 rounded-full bg-[#D8F23F]/30 blur-[80px]" />
        <div className="absolute top-1/2 -right-10 w-60 h-60 rounded-full bg-[#FF8AD8]/25 blur-[90px]" />
        <div className="absolute bottom-0 left-[5%] w-44 h-44 rounded-full bg-[#00D4FF]/25 blur-[70px]" />
        <div className="mx-auto max-w-[1440px] relative">
          <span className="inline-block bg-[#00D4FF] text-[#121130] text-[12px] font-bold tracking-[0.2em] px-4 py-2 rounded-full rotate-[-3deg] shadow-[4px_4px_0_#121130]">
            CERTIFIED HUMANS • ZERO BOTS
          </span>
          <h2 className="font-display text-[11vw] sm:text-[80px] lg:text-[100px] mt-4 text-[#121130] leading-[0.9]">
            THE <span className="relative inline-block"><span className="bg-[#FF8AD8] px-2 rotate-[1.5deg] inline-block">HUMANS</span></span><br />
            IN THE <span className="text-gradient">LAB.</span>
          </h2>
          <p className="text-[#121130]/70 text-[16px] sm:text-[18px] max-w-[60ch] mt-4">
            Real people, weird ideas, sharp instincts. Meet the crew that turns briefs into content your audience actually feels.
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            <span className="text-[13px] bg-white border-2 border-[#121130] rounded-full px-4 py-2 rotate-[-2deg] font-bold shadow-[3px_3px_0_#121130]">🧠 big brains</span>
            <span className="text-[13px] bg-[#4FEA73] border-2 border-[#121130] rounded-full px-4 py-2 rotate-[1.5deg] font-bold shadow-[3px_3px_0_#121130]">⚡ fast hands</span>
            <span className="text-[13px] bg-[#D8F23F] border-2 border-[#121130] rounded-full px-4 py-2 rotate-[-1deg] font-bold shadow-[3px_3px_0_#121130]">🎯 zero AI slop</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 mt-12">
            {labTeam.map((m, i) => {
              const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-3", "rotate-1"];
              const tapes = ["bg-[#D8F23F]", "bg-[#FF8AD8]", "bg-[#00D4FF]", "bg-[#4FEA73]", "bg-[#FFB86B]", "bg-[#4FEA73]"];
              const stickers = ["bg-[#4FEA73]", "bg-[#00D4FF]", "bg-[#FF8AD8]", "bg-[#D8F23F]", "bg-[#FFB86B]", "bg-[#00D4FF]"];
              const yOff = ["", "sm:mt-8", "", "sm:mt-6", "sm:mt-4", ""];
              return (
                <article
                  key={m.name}
                  className={`relative bg-white rounded-[20px] border-2 border-[#121130] p-4 pb-5 shadow-[8px_8px_0_#121130] hover:shadow-[12px_12px_0_#121130] hover:-translate-y-1 transition-all duration-300 ${tilts[i % tilts.length]} ${yOff[i % yOff.length]}`}
                >
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 ${tapes[i % tapes.length]} w-16 h-6 rounded-sm rotate-[-4deg] border border-[#121130]/30 opacity-90`} />
                  <span className="absolute -top-4 -right-2 text-3xl drop-shadow-sm rotate-[12deg]">{m.emoji}</span>
                  <div className="relative h-48 rounded-[14px] overflow-hidden border border-[#121130]/10 mt-2">
                    <Image src={m.img} alt={m.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" style={{ objectPosition: m.pos }} />
                  </div>
                  <div className="mt-4">
                    <span className={`inline-block ${stickers[i % stickers.length]} text-[#121130] text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border border-[#121130]/20 rotate-[-1deg]`}>
                      {m.role}
                    </span>
                    <h3 className="font-display text-2xl sm:text-[26px] text-[#121130] mt-2 leading-[0.95]">{m.name}</h3>
                    <p className="text-[#121130]/65 text-[13px] mt-2 leading-relaxed">{m.bio}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <span className="text-[14px] font-bold bg-[#121130] text-white px-5 py-2.5 rounded-full rotate-[-1deg]">6 lab humans</span>
            <span className="text-[14px] font-bold bg-[#4FEA73] text-[#121130] px-5 py-2.5 rounded-full rotate-[1deg] border-2 border-[#121130] shadow-[3px_3px_0_#121130]">quirky names, real energy</span>
            <span className="text-[14px] font-bold bg-[#FF8AD8] text-[#121130] px-5 py-2.5 rounded-full rotate-[-2deg] border-2 border-[#121130] shadow-[3px_3px_0_#121130]">0% original names</span>
          </div>
        </div>
      </section>

      {/* INQUIRY / BOOK */}
      <section className="px-6 sm:px-10 pb-20 pt-6">
        <div className="mx-auto max-w-[1100px]">
          <div className="bg-white rounded-[28px] border-2 border-dashed border-[#121130]/25 p-7 sm:p-12 rotate-[-0.4deg] shadow-[10px_10px_0_#121130] relative overflow-hidden">
            <span className="absolute top-5 right-6 bg-[#FF8AD8] text-[#121130] text-[12px] font-bold px-3 py-1.5 rounded-full rotate-[6deg]">SLOTS OPEN</span>
            <p className="section-label">Book the lab</p>
            <h2 className="font-display text-[10vw] sm:text-[72px] mt-2 text-[#121130] leading-[0.9]">
              GOT A BRAND?<br />
              <span className="bg-[#4FEA73] px-2 inline-block rotate-[-1deg]">LET&apos;S MAKE IT HUMAN.</span>
            </h2>
            <p className="text-[#121130]/70 text-[16px] sm:text-[18px] max-w-[58ch] mt-5">
              Tell us what you’re building — we’ll bring the research, the humans and the content engine. Book a quick discovery call or drop us a brief.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gradient px-8 py-4 text-[15px]">Book a discovery call →</Link>
              <Link href="/contact" className="btn-ghost px-8 py-4 text-[15px]">Send a brief</Link>
            </div>
            <p className="text-[13px] italic text-[#121130]/50 mt-5">* 100% human-made. 0% AI slop. Results may cause conversions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
