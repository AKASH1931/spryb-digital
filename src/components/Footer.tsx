import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0C0B22] border-t border-white/10">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 pt-16 pb-8">
        <div className="grid md:grid-cols-[1.2fr_1fr_1fr] gap-10">
          <div>
            <p className="section-label">Spryb Digital</p>
            <p className="font-display text-4xl sm:text-5xl mt-3 text-white">
              LET&apos;S MAKE <br />
              <span className="text-gradient">SOME NOISE.</span>
            </p>
            <p className="text-white/65 text-[15px] mt-4 max-w-[42ch]">
              Full-stack growth: social, content, SEO, ads, web, ORM & hyperlocal. One team, one dashboard, zero fluff.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gradient !py-3 !px-6 text-sm">Get proposal →</Link>
              <a href="mailto:hello@sprybdigital.com" className="btn-ghost !py-3 !px-6 text-sm">hello@sprybdigital.com</a>
            </div>
            <p className="mt-4 text-[14px] text-white/70"><a href="tel:+917307934372" className="text-[#D8F23F] font-medium">+91 73079 34372</a></p>
          </div>
          <div className="text-sm">
            <p className="text-white/40 uppercase tracking-widest text-[11px] mb-4">Sitemap</p>
            <div className="flex flex-wrap gap-2">
              {[
                ["Home", "/"],
                ["Agency", "/about"],
                ["Projects", "/work"],
                ["Expertise", "/services"],
                ["Kreative Kand", "/kreative-kand"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[13px] text-white/80 border border-white/20 bg-white/[0.04] rounded-full px-4 py-2 hover:border-[#D8F23F] hover:text-[#D8F23F] hover:bg-white/[0.08] transition"
                >
                  {label}
                </Link>
              ))}
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

        <div className="font-display text-[22vw] md:text-[190px] leading-[0.85] text-center mt-14 select-none animate-shine">
          SPRYB
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-[12px] text-white/45">
          <span>© 2026 Spryb Digital. All rights reserved.</span>
          <span className="flex gap-4">
            <Link href="/privacy" className="hover:text-[#D8F23F]">Privacy</Link>
            <Link href="/terms" className="hover:text-[#D8F23F]">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
