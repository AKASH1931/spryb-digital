import Link from "next/link";
import Image from "next/image";
import { services, projects, process, faqs, team } from "@/data/site";
import { Marquee, Faq, ContactForm } from "@/components/ui";

export default function Home() {
  return (
    <div className="relative">
      {/* HERO — Foudre style massive display, Spryb dark */}
      <section className="relative noise overflow-hidden pt-32 sm:pt-40 pb-10 px-6 sm:px-10">
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#4FEA73]/12 blur-[120px]" />
        <div className="absolute top-40 -left-40 w-[420px] h-[420px] rounded-full bg-[#D8F23F]/10 blur-[120px]" />
        <div className="mx-auto max-w-[1440px] relative">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="pill-tag">● Full-stack growth agency</span>
            <span className="pill-tag">Social · SEO · Ads · ORM · Hyperlocal</span>
          </div>
          <p className="text-[12px] tracking-[0.3em] uppercase text-white/50 mb-4">
            Spryb Digital — Human Social Club, Indian edition
          </p>
          <h1 className="font-display leading-[0.85] text-[15.5vw] sm:text-[110px] lg:text-[150px]">
            WE MAKE
            <br />
            BRANDS <span className="text-gradient">IMPOSSIBLE</span>
            <br />
            <span className="text-stroke">TO IGNORE.</span>
          </h1>
          <div className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-end">
            <p className="text-white/70 text-[17px] sm:text-[20px] leading-[1.35] max-w-[58ch]">
              We&apos;re the current, you&apos;re the story. Strategy, scroll-stopping content, ads, SEO, ORM and hyperlocal — one team turning attention into revenue.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gradient px-8 py-4 text-[15px]">Get free teardown →</Link>
              <Link href="/work" className="btn-ghost px-8 py-4 text-[15px]">See proof</Link>
            </div>
          </div>

          {/* stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              ["120+", "brands scaled"],
              ["4.9★", "avg. rating lift"],
              ["3.2x", "avg. ROAS"],
              ["48hr", "kickoff speed"],
            ].map(([n, l]) => (
              <div key={l} className="card-dark p-5">
                <div className="font-display text-3xl sm:text-4xl text-gradient">{n}</div>
                <div className="text-white/55 text-[13px] mt-1">{l}</div>
              </div>
            ))}
          </div>

          {/* logo card */}
          <div className="mt-6 card-dark p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <Image src="/spryb-logo.png" alt="Spryb Digital logo" width={220} height={120} className="rounded-xl bg-white p-3" />
            <p className="text-white/60 text-[14px] leading-relaxed">
              The arrow in our <b className="text-white">b</b> only points one way — up. Same energy we bring to your search rankings, ratings, reach and revenue.
            </p>
            <div className="ml-auto hidden sm:block w-20 h-20 rounded-full bg-gradient-spryb animate-float grid place-items-center text-3xl text-[#121130] font-black">↗</div>
          </div>
        </div>
      </section>

      <Marquee items={team.map(t => `${t.emoji} ${t.name} · ${t.role}`)} />

      {/* ABOUT TEASER */}
      <section className="px-6 sm:px-10 py-20 sm:py-[120px]">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[12px] tracking-[0.3em] uppercase text-[#4FEA73]">Agency</p>
          <h2 className="font-display text-[11vw] sm:text-[80px] lg:text-[110px] mt-3">
            WE ELECTRIFY <br /><span className="text-gradient">YOUR FEED,</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-10 mt-8">
            <p className="text-white/70 text-[17px] leading-relaxed max-w-[60ch]">
              Publishing a few posts isn&apos;t a strategy. We build the story, the system and the distribution — then run it daily so your brand stays top-of-mind and top-of-search. Human first, metrics always.
            </p>
            <div className="flex flex-wrap gap-2 content-start">
              {team.map(m => (
                <div key={m.name} className="card-dark px-5 py-4 flex items-center gap-3">
                  <span className="text-2xl">{m.emoji}</span>
                  <div><div className="font-bold text-[14px]">{m.name}</div><div className="text-white/50 text-[12px]">{m.role} — {m.vibe}</div></div>
                </div>
              ))}
            </div>
          </div>
          <Link href="/about" className="inline-block mt-8 text-[#D8F23F] font-medium underline underline-offset-8">Meet the crew →</Link>
        </div>
      </section>

      {/* WORK */}
      <section className="px-6 sm:px-10 pb-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="font-display text-[11vw] sm:text-[80px]">WE MAKE THEM <span className="text-stroke-lime">SOCIAL.</span></h2>
            <Link href="/work" className="btn-ghost px-6 py-3 text-sm">All work →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {projects.slice(0, 6).map(p => (
              <Link key={p.slug} href="/work" className="card-dark overflow-hidden group">
                <div className={`h-44 bg-gradient-to-br ${p.gradient} relative p-5 flex flex-col justify-between`}>
                  <span className="text-5xl">{p.emoji}</span>
                  <span className="inline-block self-start bg-[#121130] text-white text-[11px] font-bold px-3 py-1.5 rounded-full">{p.result}</span>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">{p.tags.map(t => <span key={t} className="pill-tag">{t}</span>)}</div>
                  <h3 className="font-display text-2xl group-hover:text-[#D8F23F] transition">{p.brand}</h3>
                  <p className="text-white/55 text-[13px] mt-1">{p.category}</p>
                  <p className="text-white/65 text-[14px] mt-3">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="px-6 sm:px-10 py-20 text-center relative overflow-hidden">
        <p className="text-white/50 text-[15px]">It&apos;s the impact of showing up right.</p>
        <p className="text-white/50 text-[15px]">It&apos;s aiming true and</p>
        <h2 className="font-display text-[18vw] sm:text-[150px] leading-[0.85] mt-2">HITTING <span className="text-gradient">HARD.</span></h2>
        <div className="mx-auto mt-6 w-16 h-16 rounded-full bg-gradient-spryb grid place-items-center text-2xl text-[#121130] font-black animate-float">⚡</div>
      </section>

      {/* EXPERTISE */}
      <section id="expertises" className="px-6 sm:px-10 pb-20">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[12px] tracking-[0.3em] uppercase text-[#4FEA73]">👀📱📊 What we do</p>
          <h2 className="font-display text-[11vw] sm:text-[80px] mt-2">THINK DEEP <br/>TO <span className="text-gradient">RESONATE.</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {services.map(s => (
              <div key={s.slug} className="card-dark p-6 hover:border-[#D8F23F]/50 transition group">
                <div className="text-[11px] text-[#4FEA73] font-bold tracking-widest">{s.index} — {s.icon}</div>
                <h3 className="font-display text-[22px] mt-2 leading-[1] group-hover:text-[#D8F23F] transition">{s.title}</h3>
                <p className="text-[#D8F23F]/80 text-[12px] mt-1 italic">{s.tagline}</p>
                <p className="text-white/60 text-[13.5px] mt-3">{s.desc}</p>
                <ul className="mt-4 space-y-1.5 text-[13px] text-white/70">
                  {s.points.map(pt => <li key={pt} className="flex gap-2"><span className="text-[#4FEA73]">→</span>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <Link href="/services" className="btn-gradient inline-block mt-8 px-8 py-4 text-[15px]">Explore all services →</Link>
        </div>
      </section>

      <Marquee slow items={["SEO", "PERFORMANCE ADS", "SOCIAL MEDIA", "CONTENT", "ORM", "HYPERLOCAL", "WEB", "BRANDING"]} />

      {/* PROCESS */}
      <section className="px-6 sm:px-10 py-20 sm:py-[120px]">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[12px] tracking-[0.3em] uppercase text-[#4FEA73]">🫡⚡️🧠 How we work</p>
          <h2 className="font-display text-[11vw] sm:text-[80px]">WE LIKE THIS ORDER. <span className="text-gradient">ALWAYS.</span></h2>
          <div className="grid md:grid-cols-5 gap-3 mt-10">
            {process.map(p => (
              <div key={p.n} className="card-dark p-6 relative overflow-hidden">
                <div className="font-display text-5xl text-stroke">{p.n}</div>
                <h3 className="font-display text-xl mt-3 text-[#D8F23F]">{p.title}</h3>
                <p className="text-white/60 text-[13.5px] mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              ["Social-first experts", "10+ yrs combined across feeds, search and ads. This is all we do."],
              ["Premium & custom", "No copy-paste packs. Every retainer is scoped to your city, category and goal."],
              ["A real method", "SOPs, calendars, dashboards. Creative with the discipline of a media house."],
              ["Humans first", "Founders on calls, faces on shoots. Your customers buy from people, so do we."],
            ].map(([t, d]) => (
              <div key={t} className="border border-white/10 rounded-[20px] p-6 bg-white/[0.02]">
                <h4 className="font-bold text-[15px] text-white">{t}</h4>
                <p className="text-white/60 text-[13.5px] mt-2">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 sm:px-10 pb-20">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-[12px] tracking-[0.3em] uppercase text-[#4FEA73]">⛑️👐📣 FAQ</p>
          <h2 className="font-display text-[11vw] sm:text-[70px]">SMALL QUESTIONS, <span className="text-gradient">BIG ANSWERS.</span></h2>
          <div className="grid gap-3 mt-8">
            {faqs.map(f => <Faq key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 sm:px-10 pb-24">
        <div className="mx-auto max-w-[1100px] grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#4FEA73]">Contact</p>
            <h2 className="font-display text-[13vw] sm:text-[80px] leading-[0.9]">TELL US <br/><span className="text-gradient">EVERYTHING.</span></h2>
            <p className="text-white/65 mt-4">A mini form, 30 seconds. We reply within 24 hours with a free teardown and a fixed quote. No spam, NDA on request.</p>
            <div className="mt-6 space-y-2 text-[14px] text-white/70">
              <p>✉ hello@spryb.digital</p>
              <p>◷ Mon–Sat, 10am–7pm IST · Remote-first, shoots on-site</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
