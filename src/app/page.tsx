import Link from "next/link";
import Image from "next/image";
import { team, expertises, projects, process, whyUs, faqs } from "@/data/site";
import { Marquee, CarouselShell, Faq, ContactForm } from "@/components/ui";

export default function Home() {
  return (
    <div>
      {/* ── HERO — Foudre signature: giant word + overlapping tilted photo cards ── */}
      <section id="hero" className="pt-24 sm:pt-28 relative overflow-hidden min-h-[105vh]">
        <div className="absolute top-24 -right-32 w-[480px] h-[480px] rounded-full bg-[#4FEA73]/10 blur-[120px]" />
        {/* giant background word */}
        <div aria-hidden className="font-display text-[38vw] sm:text-[30vw] leading-[0.8] text-center select-none animate-gradient-flow opacity-60 -mb-[6vw] sm:-mb-[4vw]">
          SPRYB
        </div>

        {/* overlapping tilted photo cards */}
        <div className="relative mx-auto max-w-[1100px] h-[440px] sm:h-[520px] -mt-[10vw] sm:-mt-[6vw]">
          <div className="absolute left-[2%] top-10 w-[42%] sm:w-[36%] aspect-[3/4] rounded-[20px] overflow-hidden -rotate-6 shadow-[0_24px_70px_rgba(0,0,0,0.45)] border border-white/10 hover:rotate-0 hover:scale-[1.03] transition-transform duration-300 group">
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" alt="Meta Ads" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            <span className="absolute bottom-3 left-3 text-[11px] bg-[#121130]/85 px-3 py-1.5 rounded-full text-white/70">Meta Ads</span>
            <span className="absolute top-[38%] -right-2 bg-[#1A1940] border border-white/15 rounded-2xl px-3 py-2 text-lg rotate-3">🖥️⚡️🎧</span>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[46%] sm:w-[38%] aspect-[3/4] rounded-[20px] overflow-hidden z-10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] border border-white/10 hover:scale-[1.03] transition-transform duration-300 group">
            <Image src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80" alt="Influencer Marketing" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            <span className="absolute bottom-3 left-3 text-[11px] bg-[#121130]/85 px-3 py-1.5 rounded-full text-white/70">Influencer Marketing</span>
            <span className="absolute top-8 left-6 bg-[#1A1940] border border-white/15 rounded-2xl px-3 py-2 text-lg -rotate-3">⚡</span>
          </div>
          <div className="absolute right-[2%] top-10 w-[42%] sm:w-[36%] aspect-[3/4] rounded-[20px] overflow-hidden rotate-6 shadow-[0_24px_70px_rgba(0,0,0,0.45)] border border-white/10 hover:rotate-0 hover:scale-[1.03] transition-transform duration-300 group">
            <Image src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80" alt="Hyperlocal" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            <span className="absolute bottom-3 left-3 text-[11px] bg-[#121130]/85 px-3 py-1.5 rounded-full text-white/70">Hyperlocal</span>
            <span className="absolute top-[42%] -left-2 bg-[#1A1940] border border-white/15 rounded-2xl px-3 py-2 text-lg -rotate-3">📽️⚡🤛</span>
          </div>
        </div>

        {/* bottom-left stacked headline */}
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 pb-10 mt-16 sm:mt-24">
          <p className="section-label">Full-stack growth agency</p>
          <h1 className="font-display text-[17vw] sm:text-[110px] leading-[0.85] mt-2">
            <span className="text-gradient">HUMAN</span>
            <br />
            <span className="text-stroke">SOCIAL CLUB</span>
          </h1>
          <p className="text-[#121130]/70 text-[16px] max-w-[52ch] mt-5">We are the current, you are the story. Strategy, content, ads, SEO, ORM & hyperlocal — one team.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-gradient">Get free teardown →</Link>
            <Link href="/work" className="btn-ghost">See proof</Link>
          </div>
        </div>

        {/* Case of the month — peeking card like Foudre */}
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 pb-14">
          <Link href="/work" className="card-dark overflow-hidden flex flex-col sm:flex-row items-stretch gap-0 !p-0 group">
            <div className="sm:w-[280px] min-h-[180px] relative overflow-hidden">
              <Image src="https://picsum.photos/seed/spryb-coffee/560/360" alt="Urban Brew Co." fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6 sm:p-8 flex-1">
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#4FEA73]">Case of the month</p>
              <h3 className="font-display text-3xl sm:text-4xl mt-2 group-hover:text-[#D8F23F] transition">URBAN BREW CO.</h3>
              <div className="flex flex-wrap gap-1.5 mt-3">
                <span className="pill-tag">Content</span>
                <span className="pill-tag">Social Strategy</span>
                <span className="pill-tag">+212% revenue</span>
              </div>
              <span className="tlink text-[14px] inline-block mt-4">View the case →</span>
            </div>
          </Link>
        </div>
      </section>

      <div className="mt-14">
        <Marquee items={["SOCIAL MEDIA STRATEGY", "CONTENT CREATION", "COMMUNITY MANAGEMENT", "SEO & SEARCH", "PERFORMANCE ADS", "WEB & BRANDING", "ORM & REPUTATION", "HYPERLOCAL MARKETING"]} />
      </div>

      {/* ── TEAM CAROUSEL — "Nous électrisons vos réseaux" ── */}
      <section id="agence" className="px-6 sm:px-10 py-20 sm:py-[120px]">
        <div className="mx-auto max-w-[1440px]">
          <p className="section-label">Agency</p>
          <h2 className="font-display text-[12vw] sm:text-[90px] lg:text-[120px] mt-3">
            WE ELECTRIFY
            <br />
            <span className="text-gradient">YOUR NETWORKS,</span>
          </h2>
          <p className="text-[#121130]/70 text-[16px] sm:text-[20px] leading-[1.4] max-w-[60ch] mt-6">
            At Spryb, we believe digital communication isn&apos;t a few posts on Instagram. It&apos;s a story to tell, a strategy to build, an image to embody. Our mission: turn your networks into visibility and growth — keeping what matters most: humans at the heart.
          </p>
          <div className="mt-10">
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

      {/* ── PROJECTS CAROUSEL — "NOUS LES RENDONS, SOCIAUX" ── */}
      <section className="px-6 sm:px-10 pb-20">
        <div className="mx-auto max-w-[1440px]">
          <p className="section-label">📱💖😎 Work</p>
          <h2 className="font-display text-[12vw] sm:text-[90px] lg:text-[120px] mt-3">
            WE MAKE THEM,
            <br />
            <span className="text-stroke-lime">SOCIAL.</span>
          </h2>
          <div className="mt-10">
            <CarouselShell id="work-carousel">
              {projects.map((p) => (
                <article key={p.slug} className="card-dark w-[300px] sm:w-[360px] overflow-hidden group">
                  <div className="h-48 relative overflow-hidden">
                    <Image src={p.img} alt={p.brand} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <span className="absolute bottom-3 left-3 bg-[#121130] text-white text-[11px] font-bold px-3 py-1.5 rounded-full">{p.result}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.tags.map((t) => <span key={t} className="pill-tag">{t}</span>)}
                    </div>
                    <h3 className="font-display text-2xl">{p.brand}</h3>
                    <p className="text-white/45 text-[12px] mt-1">{p.category}</p>
                    <p className="text-white/60 text-[14px] mt-3">{p.desc}</p>
                    <Link href="/work" className="tlink text-[14px] inline-block mt-4">View the case →</Link>
                  </div>
                </article>
              ))}
              <Link href="/work" className="card-dark w-[300px] sm:w-[340px] p-8 grid place-items-center text-center border-dashed">
                <div>
                  <h3 className="font-display text-3xl">MORE PROJECTS?</h3>
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

      {/* ── FAQ — "Petites questions, grandes réponses" ── */}
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
