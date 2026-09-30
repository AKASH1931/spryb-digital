import Link from "next/link";
import Image from "next/image";
import { team, expertises, projects, process, whyUs, faqs } from "@/data/site";
import { Marquee, CarouselShell, Faq, ContactForm } from "@/components/ui";
import ParallaxHero from "@/components/ParallaxHero";
import ParallaxTeam from "@/components/ParallaxTeam";

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

      {/* ── PROJECTS — Foudre sticky title + tall horizontal cards ── */}
      <section className="pl-6 sm:pl-10 pb-20">
        <div className="mx-auto max-w-[1440px] grid lg:grid-cols-[340px_1fr] gap-8 items-start">
          <div className="lg:sticky lg:top-28 pr-6">
            <p className="section-label">📱💖😎 Work</p>
            <span className="inline-block bg-[#1A1940] text-white rounded-2xl px-4 py-2.5 text-xl rotate-[3deg] mt-4">📱💖😎</span>
            <h2 className="font-display text-[13vw] sm:text-[64px] mt-3">
              WE MAKE THEM,
              <br />
              SOCIAL.
            </h2>
            <div className="flex items-center mt-6">
              {team.slice(0, 4).map((m, i) => (
                <span key={m.name} className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow -ml-2 first:ml-0 relative" style={{ zIndex: 4 - i }}>
                  <Image src={m.img} alt={m.name} fill className="object-cover" />
                </span>
              ))}
              <Link href="/work" className="circle-btn !w-11 !h-11 !text-sm -ml-2 font-bold">+2</Link>
            </div>
            <Link href="/work" className="btn-gradient mt-6 inline-block !py-3 !px-6 text-sm">Explore all →</Link>
          </div>
          <div className="overflow-hidden">
            <CarouselShell id="work-carousel" drift>
              {projects.map((p) => (
                <article key={p.slug} className="w-[270px] sm:w-[320px] aspect-[3/4] rounded-[20px] overflow-hidden relative group shadow-[0_20px_60px_rgba(18,17,48,0.2)]">
                  <Image src={p.img} alt={p.brand} fill className="object-cover group-hover:scale-108 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#121130]/30 via-transparent to-[#121130]/70" />
                  <h3 className="absolute top-5 left-0 right-0 text-center font-display text-4xl sm:text-5xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] px-4">{p.brand}</h3>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-9 h-9 rounded-full bg-gradient-spryb grid place-items-center text-[#121130] font-bold">+</span>
                      <span className="w-9 h-9 rounded-full bg-white grid place-items-center text-[#121130]">♥</span>
                      <span className="ml-auto text-[11px] font-bold bg-white/90 text-[#121130] px-3 py-1.5 rounded-full">{p.result}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => <span key={t} className="text-[11px] font-medium bg-white/90 text-[#121130] px-3 py-1.5 rounded-full">{t}</span>)}
                    </div>
                  </div>
                </article>
              ))}
              <Link href="/work" className="w-[270px] sm:w-[320px] aspect-[3/4] rounded-[20px] bg-[#1A1940] p-8 grid place-items-center text-center shrink-0">
                <div>
                  <h3 className="font-display text-3xl text-white">MORE PROJECTS?</h3>
                  <span className="btn-gradient mt-5 inline-block !py-3 !px-6 text-sm">Explore →</span>
                </div>
              </Link>
            </CarouselShell>
          </div>
        </div>
      </section>

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
