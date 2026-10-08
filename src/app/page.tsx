import Link from "next/link";
import Image from "next/image";
import { team, expertises, process, whyUs, faqs } from "@/data/site";
import { Marquee, CarouselShell, Faq } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import ParallaxHero from "@/components/ParallaxHero";
import ParallaxTeam from "@/components/ParallaxTeam";
import PinnedWork from "@/components/PinnedWork";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ParallaxHero />

      {/* ── CLIENTS — trusted by ── */}
      <section className="px-6 sm:px-10 pt-14 pb-4">
        <div className="mx-auto max-w-[1440px]">
          <p className="section-label text-center">Brands that trust Spryb</p>
          <div className="overflow-hidden mt-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex items-center gap-16 pr-16 w-max animate-[marquee_32s_linear_infinite] hover:[animation-play-state:paused]">
              {[
                ["motherhood.png", "Motherhood"],
                ["muldhara.png", "Muldhara"],
                ["nova.png", "Nova"],
                ["nxgen.png", "Nxgen"],
                ["sms.png", "SMS"],
                ["starlink.png", "Starlink"],
                ["tmc.png", "TMC"],
                ["woobly.jpeg", "Woobly"],
                ["zadcars.png", "Zadcars"],
                ["zeevaa.png", "Zeevaa"],
                ["client-1x1.jpg", "Client"],
              ].concat([
                ["motherhood.png", "Motherhood"],
                ["muldhara.png", "Muldhara"],
                ["nova.png", "Nova"],
                ["nxgen.png", "Nxgen"],
                ["sms.png", "SMS"],
                ["starlink.png", "Starlink"],
                ["tmc.png", "TMC"],
                ["woobly.jpeg", "Woobly"],
                ["zadcars.png", "Zadcars"],
                ["zeevaa.png", "Zeevaa"],
                ["client-1x1.jpg", "Client"],
              ]).map(([f, name], i) => (
                <span key={i} className="h-20 sm:h-24 w-44 sm:w-52 shrink-0 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
                  <Image src={`/clients/${f}`} alt={`${name} — Spryb Digital client`} fill className="object-contain" sizes="208px" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

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
          <p className="section-label">Expertise</p>
          <h2 className="font-display text-[12vw] sm:text-[90px] lg:text-[120px] mt-3">
            THINK DEEP
            <br />
            TO <span className="text-gradient">RESONATE.</span>
          </h2>
          <p className="text-[#121130]/65 text-[16px] max-w-[60ch] mt-5">Spryb runs on strong expertises — strategy, content, community… plus search, paid, web, reputation and hyperlocal. Scroll, cards stack karte jayenge.</p>
          <div className="mt-12 space-y-5">
            {expertises.map((e, i) => (
              <div
                key={e.title}
                className="card-dark overflow-hidden sticky shadow-[0_24px_70px_rgba(18,17,48,0.3)]"
                style={{ top: `${96 + i * 18}px` }}
              >
                <div className="grid md:grid-cols-[1fr_320px]">
                  <div className="p-7 sm:p-10">
                    <div className="flex items-baseline gap-5">
                      <span className="font-display text-5xl sm:text-7xl text-stroke-white opacity-80">0{i + 1}</span>
                      <h3 className="font-display text-3xl sm:text-5xl text-white">{e.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {e.points.map((pt) => (
                        <span key={pt} className="text-[13px] text-white/80 bg-white/[0.06] border border-white/15 rounded-full px-4 py-2">→ {pt}</span>
                      ))}
                    </div>
                    <Link href="/contact" className="btn-gradient mt-7 inline-block !py-3 !px-6 text-sm">Get {e.title} quote →</Link>
                  </div>
                  <div className="relative min-h-[220px] md:min-h-full overflow-hidden">
                    <Image
                      src={[
                        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=640&q=80",
                        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=640&q=80",
                        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=640&q=80",
                        "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=640&q=80",
                        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=640&q=80",
                        "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=640&q=80",
                        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=640&q=80",
                        "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=640&q=80",
                      ][i % 8]}
                      alt={e.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1A1940] via-transparent to-transparent hidden md:block" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee slow items={["SEO", "PERFORMANCE ADS", "SOCIAL MEDIA", "CONTENT", "ORM", "HYPERLOCAL", "WEB", "BRANDING"]} />

      {/* ── PROCESS — "Nous préfèrerons cet ordre. Toujours." ── */}
      <section className="px-6 sm:px-10 py-20 sm:py-[120px]">
        <div className="mx-auto max-w-[1440px]">
          <p className="section-label">Method</p>
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
                    <Image src={m.img} alt={m.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" style={{ objectPosition: m.pos }} />
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
          <p className="section-label">FAQ</p>
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
            <p className="text-[#121130]/55 text-[14px] mt-4">hello@sprybdigital.com<br />Mon–Sat, 10am–7pm IST · Remote-first, shoots on-site</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
