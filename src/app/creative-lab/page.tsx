import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import KandViewer from "@/components/KandViewer";
import { projects, team } from "@/data/site";

export const metadata: Metadata = {
  title: "Creative Lab — 100% Human Content That Converts",
  description:
    "Spryb Digital's Creative Lab: 100% human, research-backed UGC and content — fast, trend-driven, cost-effective. In a world of AI slop, we make content that connects and converts.",
  alternates: { canonical: "/creative-lab" },
};

const showcaseSlugs = ["urban-brew", "lucknow-fnb", "agri-brand"];
const showcase = showcaseSlugs
  .map((s) => projects.find((p) => p.slug === s))
  .filter(Boolean) as typeof projects;

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

const different = [
  { step: "01", title: "Research first", text: "We dig into your audience, category and what’s already working — so every piece has a reason to exist." },
  { step: "02", title: "Human voices", text: "Real creators, real customers, real scripts. 100% human content that sounds like people, not prompts." },
  { step: "03", title: "Trend-native craft", text: "We ride culture, not clichés — formats, hooks and pacing tuned to how people actually scroll today." },
  { step: "04", title: "Fast, tight loops", text: "Quick turnarounds, sharp feedback, constant iteration — without cutting corners on quality." },
  { step: "05", title: "Built to convert", text: "Every idea is judged on one thing: does it connect and convert? Pretty is nice; performance is the point." },
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
            <a href="#work" className="btn-ghost px-8 py-4 text-[15px] rotate-[0.5deg]">
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

      {/* HOW WE DO IT DIFFERENTLY */}
      <section className="px-6 sm:px-10 py-14">
        <div className="mx-auto max-w-[1440px]">
          <p className="section-label">How we do it differently</p>
          <h2 className="font-display text-[11vw] sm:text-[80px] lg:text-[100px] mt-2 text-[#121130]">
            NOT ANOTHER <span className="relative inline-block"><span className="relative z-10">CONTENT</span><span className="absolute left-0 right-0 bottom-[0.12em] h-[0.18em] bg-[#FF8AD8] -rotate-[1deg] -z-0" /></span> FARM.
          </h2>
          <p className="text-[#121130]/70 text-[16px] max-w-[62ch] mt-4">
            Most “content” today is fast, cheap and forgettable. Ours is fast, smart and human — a lab process built to connect and convert, not just to post.
          </p>
          <div className="mt-10 space-y-4">
            {different.map((d, i) => (
              <div key={d.step} className={`bg-white rounded-[22px] border border-[#121130]/12 p-5 sm:p-7 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-7 shadow-[0_12px_40px_rgba(18,17,48,0.06)] ${i % 2 ? "sm:ml-8" : "sm:mr-8"}`}>
                <span className="font-display text-5xl sm:text-6xl text-stroke shrink-0">{d.step}</span>
                <div>
                  <h3 className="font-display text-3xl sm:text-4xl text-[#121130]">{d.title}</h3>
                  <p className="text-[#121130]/70 text-[15px] sm:text-[16px] mt-2 leading-relaxed max-w-[70ch]">{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS / UGC */}
      <section className="px-6 sm:px-10 py-14 relative">
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
          <KandViewer />
        </div>
      </section>

      {/* WORK SHOWCASE */}
      <section id="work" className="px-6 sm:px-10 py-14">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-label">Work from the lab</p>
              <h2 className="font-display text-[11vw] sm:text-[80px] mt-2 text-[#121130]">
                PROOF, NOT <span className="text-gradient">PROMISES.</span>
              </h2>
            </div>
            <Link href="/work" className="btn-ghost px-6 py-3 text-sm mb-2">All projects →</Link>
          </div>
          <p className="text-[#121130]/70 text-[16px] max-w-[60ch] mt-4">
            A peek at content and UGC-led growth we’ve shipped — human stories, real numbers.
          </p>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {showcase.map((p, i) => (
              <article key={p.slug} className={`card-dark overflow-hidden group ${i === 1 ? "md:-translate-y-4" : ""}`}>
                <div className="relative h-56 overflow-hidden">
                  <Image src={p.img} alt={p.brand} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1940] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-[11px] tracking-[0.25em] uppercase text-[#4FEA73]">{p.category}</p>
                  <h3 className="font-display text-3xl mt-2 text-white">{p.brand}</h3>
                  <p className="text-[#D8F23F] font-bold text-[15px] mt-2">{p.result}</p>
                  <p className="text-white/65 text-[14px] mt-3 leading-relaxed">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
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
            {team.map((m, i) => {
              const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-3", "rotate-1", "-rotate-2", "rotate-3", "-rotate-1", "rotate-2", "-rotate-2"];
              const tapes = ["bg-[#D8F23F]", "bg-[#FF8AD8]", "bg-[#00D4FF]", "bg-[#4FEA73]", "bg-[#FFB86B]"];
              const stickers = ["bg-[#4FEA73]", "bg-[#00D4FF]", "bg-[#FF8AD8]", "bg-[#D8F23F]", "bg-[#FFB86B]"];
              const yOff = ["", "sm:mt-8", "", "sm:mt-6", "sm:mt-4", "", "sm:mt-8", "", "sm:mt-6", "sm:mt-4", ""];
              return (
                <article
                  key={m.name}
                  className={`relative bg-white rounded-[20px] border-2 border-[#121130] p-4 pb-5 shadow-[8px_8px_0_#121130] hover:shadow-[12px_12px_0_#121130] hover:-translate-y-1 transition-all duration-300 ${tilts[i % tilts.length]} ${yOff[i % yOff.length]}`}
                >
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 ${tapes[i % tapes.length]} w-16 h-6 rounded-sm rotate-[-4deg] border border-[#121130]/30 opacity-90`} />
                  <span className="absolute -top-4 -right-2 text-3xl drop-shadow-sm rotate-[12deg]">{m.emoji}</span>
                  <div className="relative h-48 rounded-[14px] overflow-hidden border border-[#121130]/10 mt-2">
                    <Image src={m.img} alt={m.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" style={{ objectPosition: m.pos || "50% 30%" }} />
                  </div>
                  <div className="mt-4">
                    <span className={`inline-block ${stickers[i % stickers.length]} text-[#121130] text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border border-[#121130]/20 rotate-[-1deg]`}>
                      {m.role}
                    </span>
                    <h3 className="font-display text-2xl sm:text-[26px] text-[#121130] mt-2 leading-[0.95]">{m.name}</h3>
                    <p className="text-[#121130]/65 text-[13px] mt-2 leading-relaxed line-clamp-3">{m.bio}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <span className="text-[14px] font-bold bg-[#121130] text-white px-5 py-2.5 rounded-full rotate-[-1deg]">11 humans</span>
            <span className="text-[14px] font-bold bg-[#4FEA73] text-[#121130] px-5 py-2.5 rounded-full rotate-[1deg] border-2 border-[#121130] shadow-[3px_3px_0_#121130]">1 mission: make it human</span>
            <span className="text-[14px] font-bold bg-[#FF8AD8] text-[#121130] px-5 py-2.5 rounded-full rotate-[-2deg] border-2 border-[#121130] shadow-[3px_3px_0_#121130]">∞ ideas</span>
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
              <a href="https://www.instagram.com/kreativ_kand/" target="_blank" rel="noreferrer" className="text-[14px] text-[#121130]/60 hover:text-[#0e9f5b] underline underline-offset-4 self-center">or peek our vibe first</a>
            </div>
            <p className="text-[13px] italic text-[#121130]/50 mt-5">* 100% human-made. 0% AI slop. Results may cause conversions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
