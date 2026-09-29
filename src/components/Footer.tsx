import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0C0B22] border-t border-white/10">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 pt-16 pb-8">
        <div className="grid md:grid-cols-[1.2fr_1fr_1fr] gap-10">
          <div>
            <p className="section-label">Spryb Digital</p>
            <p className="font-display text-4xl sm:text-5xl mt-3">
              LET&apos;S MAKE <br />
              <span className="text-gradient">SOME NOISE.</span>
            </p>
            <p className="text-white/65 text-[15px] mt-4 max-w-[42ch]">
              Full-stack growth: social, content, SEO, ads, web, ORM & hyperlocal. One team, one dashboard, zero fluff.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gradient !py-3 !px-6 text-sm">Get proposal →</Link>
              <a href="mailto:hello@spryb.digital" className="btn-ghost !py-3 !px-6 text-sm">hello@spryb.digital</a>
            </div>
          </div>
          <div className="text-sm">
            <p className="text-white/40 uppercase tracking-widest text-[11px] mb-4">Sitemap</p>
            <div className="flex flex-col gap-2.5 text-white/75">
              <Link className="tlink" href="/">Home</Link>
              <Link className="tlink" href="/about">Agency</Link>
              <Link className="tlink" href="/work">Projects</Link>
              <Link className="tlink" href="/services">Expertise</Link>
              <Link className="tlink" href="/contact">Contact</Link>
            </div>
          </div>
          <div className="text-sm">
            <p className="text-white/40 uppercase tracking-widest text-[11px] mb-4">Expertise</p>
            <div className="flex flex-wrap gap-2">
              {["Social Strategy","Content","SEO","Performance Ads","Web & Branding","ORM","Hyperlocal","Community"].map(t=>(
                <span key={t} className="pill-tag">{t}</span>
              ))}
            </div>
            <p className="text-white/50 mt-6 text-[13px] leading-relaxed">
              Remote-first across India.<br/>Shoots on-site · Reporting online.<br/>Mon–Sat, 10am–7pm IST
            </p>
          </div>
        </div>

        <div className="font-display text-[22vw] md:text-[190px] leading-[0.85] text-center mt-14 select-none text-stroke-white opacity-60">
          SPRYB
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-[12px] text-white/45">
          <span>© 2026 Spryb Digital. All rights reserved.</span>
          <span>Privacy · Legal</span>
        </div>
      </div>
    </footer>
  );
}
