import Link from "next/link";
import { team, expertises, projects, process, whyUs, faqs } from "@/data/site";
import { Marquee, CarouselShell, Faq, ContactForm } from "@/components/ui";

export default function Home() {
  return (
    <div>
      {/* ── HERO — Foudre flow: poetic lines + giant display + image slabs ── */}
      <section id="hero" className="pt-32 sm:pt-40 px-6 sm:px-10 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#4FEA73]/10 blur-[120px]" />
        <div className="mx-auto max-w-[1440px] relative">
          <p className="text-white/70 text-[17px] sm:text-[22px] leading-[1.5] max-w-[46ch]">
            Get heard, without making noise.
            <br />Get noticed, without showing off.
            <br />And step out of the shadows, <em className="text-gradient not-italic font-bold">to take the light.</em>
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            {[
              { e: "⚡", t: "Team energy" },
              { e: "🖥️⚡️🎧", t: "Studio mode" },
              { e: "📽️⚡🤛", t: "Shoot days" },
            ].map((c) => (
              <div key={c.t} className="card-dark h-52 sm:h-64 grid place-items-center relative overflow-hidden">
                <span className="text-6xl animate-float">{c.e}</span>
                <span className="absolute bottom-4 text-[12px] text-white/45">{c.t}</span>
              </div>
            ))}
          </div>

          <p className="section-label mt-14">Spryb Digital — Full-stack agency</p>
          <h1 className="font-display text-[16vw] sm:text-[120px] lg:text-[160px] mt-3">
            HUMAN
            <br />
            <span className="text-gradient">SOCIAL CLUB</span>
          </h1>
          <p className="font-display text-[9vw] sm:text-[54px] mt-6 text-white">
            WE ARE THE CURRENT, <span className="text-stroke">YOU ARE THE STORY.</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-gradient">Get free teardown →</Link>
            <Link href="/work" className="btn-ghost">See proof</Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="pill-tag">📱⚡️😜 Social-first</span>
            <span className="pill-tag">SEO + Ads + ORM + Hyperlocal</span>
          </div>
        </div>
      </section>

      <div className="mt-14">
        <Marquee items={team.map((t) => `${t.emoji} ${t.name}`)} />
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
          <p className="text-white/65 text-[16px] sm:text-[20px] leading-[1.4] max-w-[60ch] mt-6">
            At Spryb, we believe digital communication isn&apos;t a few posts on Instagram. It&apos;s a story to tell, a strategy to build, an image to embody. Our mission: turn your networks into visibility and growth — keeping what matters most: humans at the heart.
          </p>
          <div className="mt-10">
            <CarouselShell id="team-carousel">
              {team.map((m) => (
                <article key={m.name} className="card-dark w-[300px] sm:w-[340px] p-6">
                  <div className="h-44 rounded-[14px] bg-gradient-spryb grid place-items-center text-7xl text-[#121130] font-black">
                    {m.emoji}
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
                <article key={p.slug} className="card-dark w-[300px] sm:w-[360px] overflow-hidden">
                  <div className={`h-48 bg-gradient-to-br ${p.gradient} p-5 flex flex-col justify-between`}>
                    <span className="text-5xl">{p.emoji}</span>
                    <span className="self-start bg-[#121130] text-white text-[11px] font-bold px-3 py-1.5 rounded-full">{p.result}</span>
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
          <p className="text-white/55 text-[15px]">It&apos;s the impact of your sincerity.</p>
          <p className="text-white/55 text-[15px]">It&apos;s aiming right and</p>
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
          <p className="text-white/60 text-[16px] max-w-[60ch] mt-5">Spryb runs on strong expertises — strategy, content, community… plus search, paid, web, reputation and hyperlocal.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-12">
            {expertises.map((e, i) => (
              <div key={e.title} className="border-t border-white/15 pt-5">
                <p className="text-[11px] font-bold tracking-[0.25em] text-[#4FEA73]">0{i + 1}</p>
                <h3 className="font-display text-2xl mt-2">{e.title}</h3>
                <ul className="mt-4 space-y-2 text-[14px] text-white/65">
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
          <p className="text-white/60 text-[16px] max-w-[60ch] mt-5">At Spryb, every project follows a clear process. Effective communication isn&apos;t improvised — our method blends strategy, creativity and rigour for concrete results.</p>
          <div className="mt-10 space-y-0">
            {process.map((p) => (
              <div key={p.n} className="grid grid-cols-[64px_1fr] sm:grid-cols-[120px_1fr_1fr] gap-4 items-baseline border-t border-white/15 py-7">
                <span className="font-display text-4xl sm:text-6xl text-stroke">{p.n}</span>
                <h3 className="font-display text-3xl sm:text-5xl text-[#D8F23F]">{p.title}</h3>
                <p className="text-white/60 text-[15px] col-start-2 sm:col-start-3">{p.desc}</p>
              </div>
            ))}
            <div className="border-t border-white/15" />
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
            <p className="text-white/65 mt-4">A mini form, 30 seconds. We get your answers and come back fast.</p>
            <p className="text-white/50 text-[14px] mt-4">✉ hello@spryb.digital<br />◷ Mon–Sat, 10am–7pm IST · Remote-first, shoots on-site</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
