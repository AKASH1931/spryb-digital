import Link from "next/link";
import Image from "next/image";
import { team, expertises, process, whyUs, faqs } from "@/data/site";
import { Marquee, CarouselShell, Faq, ContactForm } from "@/components/ui";
import ParallaxHero from "@/components/ParallaxHero";
import ParallaxTeam from "@/components/ParallaxTeam";
import PinnedWork from "@/components/PinnedWork";

export default function Home() {
  return (
    <div>
      <ParallaxHero />

      <div className="mt-14">
        <Marquee items={["SOCIAL MEDIA STRATEGY", "CONTENT CREATION", "COMMUNITY MANAGEMENT", "SEO & SEARCH", "PERFORMANCE ADS", "WEB & BRANDING", "ORM & REPUTATION", "HYPERLOCAL MARKETING"]} />
      </div>

      {/* ── TEAM — Foudre 3-col: headline / group photo / text ── */}
      <section id="agence" className="px-6 sm:px-10 py-20 sm:py-[120px] relative overflow-hidden">
        <div className="mx-auto max-w-[1440px]">
          <p className="section-label">Agency</p>
          <ParallaxTeam />
        </div>
      </section>

      {/* ── PROJECTS — pinned horizontal scroll, one section at a time ── */}
      <PinnedWork />

      {/* ── IMPACT — "FRAPPER FORT" ── */}
      <section className="px-6 sm:px-10 py-20 text-left sm:text-center relative overflow-hidden">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[#121130]/60 text-[15px]">It&apos;s the impact of your sincerity.</p>
          <p className="text-[#121130]/60 text-[15px]">It&apos;s aiming right and</p>
          <h2 className="font-display text-[20vw] sm:text-[150px] mt-2">
            HITTING <span className="text-gradient">HARD.</span>
          </h2>
        </div>
      </section>

      {/* ── EXPERTISES — "Raisonner pour mieux résonner" ── */}
      <section id="expertises" className="px-6 sm:px-10 pb-20">
        <div className="mx-auto max-w-[1440px]">
          <p className="section-label">👀📱📊 Expertise</p>
          <h2 className="font-display text-[12vw] sm:text-[90px] lg:text-[120px] mt-3">
            THINK DEEP
            <br />
            TO <span className="text-gradient">RESONATE.</span>
          </h2>
          <p className="text-[#121130]/65 text-[16px] max-w-[60ch] mt-5">Spryb runs on strong expertises — strategy, content, community… plus search, paid, web, reputation and hyperlocal.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-12">
            {expertises.map((e, i) => (
              <div key={e.title} className="border-t border-[#121130]/15 pt-5">
                <p className="text-[11px] font-bold tracking-[0.25em] text-[#0e9f5b]">0{i + 1}</p>
                <h3 className="font-display text-2xl mt-2">{e.title}</h3>
                <ul className="mt-4 space-y-2 text-[14px] text-[#121130]/70">
                  {e.points.map((pt) => <li key={pt}>— {pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee slow items={["SEO", "PERFORMANCE ADS", "SOCIAL MEDIA", "CONTENT", "ORM", "HYPERLOCAL", "WEB", "BRANDING"]} />

      {/* ── PROCESS — "Nous préfèrerons cet ordre. Toujours." ── */}
      <section className="px-6 sm:px-10 py-20 sm:py-[120px]">
        <div className="mx-auto max-w-[1440px]">
          <p className="section-label">🫡⚡️🧠 Method</p>
          <h2 className="font-display text-[12vw] sm:text-[90px] lg:text-[120px] mt-3">
            WE PREFER
            <br />
            THIS ORDER. <span className="text-gradient">ALWAYS.</span>
          </h2>
          <p className="text-[#121130]/65 text-[16px] max-w-[60ch] mt-5">At Spryb, every project follows a clear process. Effective communication isn&apos;t improvised — our method blends strategy, creativity and rigour for concrete results.</p>
          <div className="mt-10 space-y-0">
            {process.map((p) => (
              <div key={p.n} className="grid grid-cols-[64px_1fr] sm:grid-cols-[120px_1fr_1fr] gap-4 items-baseline border-t border-[#121130]/15 py-7">
                <span className="font-display text-4xl sm:text-6xl text-stroke">{p.n}</span>
                <h3 className="font-display text-3xl sm:text-5xl text-[#0e9f5b]">{p.title}</h3>
                <p className="text-[#121130]/65 text-[15px] col-start-2 sm:col-start-3">{p.desc}</p>
              </div>
            ))}
            <div className="border-t border-[#121130]/15" />
          </div>
        </div>
      </section>

      {/* ── WHY — "POURQUOI CHOISIR FOUDRE" ── */}
      <section className="px-6 sm:px-10 pb-20">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-display text-[12vw] sm:text-[80px]">WHY CHOOSE <span className="text-gradient">SPRYB</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {whyUs.map((w) => (
              <div key={w.title} className="card-dark p-6">
                <h3 className="font-display text-xl text-[#D8F23F]">{w.title}</h3>
                <p className="text-white/60 text-[14px] mt-3 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREW — member cards moved down here ── */}
      <section className="pl-6 sm:pl-10 pb-20">
        <div className="mx-auto max-w-[1440px]">
          <p className="section-label">The crew</p>
          <h2 className="font-display text-[11vw] sm:text-[70px] mt-2 pr-6">MEET THE <span className="text-gradient">HUMANS.</span></h2>
          <div className="mt-8">
            <CarouselShell id="team-carousel">
              {team.map((m) => (
                <article key={m.name} className="card-dark w-[300px] sm:w-[340px] p-6 group">
                  <div className="h-44 rounded-[14px] overflow-hidden relative">
                    <Image src={m.img} alt={m.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <p className="text-[11px] tracking-[0.25em] uppercase text-[#4FEA73] mt-5">{m.role}</p>
                  <h3 className="font-display text-3xl mt-1">{m.name}</h3>
                  <p className="text-white/60 text-[14px] mt-3 leading-relaxed">{m.bio}</p>
                </article>
              ))}
            </CarouselShell>
          </div>
        </div>
      </section>
      <section id="faq" className="px-6 sm:px-10 pb-20">
        <div className="mx-auto max-w-[1100px]">
          <p className="section-label">⛑️👐📣 FAQ</p>
          <h2 className="font-display text-[11vw] sm:text-[70px] mt-2">SMALL QUESTIONS, <span className="text-gradient">BIG ANSWERS.</span></h2>
          <div className="grid gap-3 mt-8">
            {faqs.map((f) => <Faq key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* ── CONTACT — "Racontez-nous" ── */}
      <section id="contact" className="px-6 sm:px-10 pb-24">
        <div className="mx-auto max-w-[1100px] grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <p className="section-label">Contact</p>
            <h2 className="font-display text-[13vw] sm:text-[80px]">TELL US <br /><span className="text-gradient">EVERYTHING.</span></h2>
            <p className="text-[#121130]/70 mt-4">A mini form, 30 seconds. We get your answers and come back fast.</p>
            <p className="text-[#121130]/55 text-[14px] mt-4">✉ hello@spryb.digital<br />◷ Mon–Sat, 10am–7pm IST · Remote-first, shoots on-site</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
