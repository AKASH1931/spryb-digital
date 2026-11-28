import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/site";
import Breadcrumb, { JsonLd, SITE, ORG_ID } from "@/components/Schema";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.brand} Case Study — ${p.result}`,
    description: `${p.category} case study: ${p.result}. ${p.desc} Full numbers, spend context and how we define a qualified lead.`,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: {
      title: `${p.brand} — ${p.result} | Spryb Digital Case Study`,
      description: `${p.desc} ${p.category}. Full breakdown: spend, qualified-lead rate, CPL and outcomes.`,
      url: `/work/${p.slug}`,
      type: "article",
    },
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const others = projects.filter((x) => x.slug !== p.slug).slice(0, 3);

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${p.brand} — ${p.result}`,
    description: `${p.category} case study by Spryb Digital: ${p.result}.`,
    url: `${SITE}/work/${p.slug}`,
    mainEntityOfPage: `${SITE}/work/${p.slug}`,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    about: p.category,
    articleSection: "Case Study",
  };

  return (
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <JsonLd data={article} />
      <div className="mx-auto max-w-[1100px]">
        <Breadcrumb
          trail={[
            ["Work", "/work"],
            [p.brand, `/work/${p.slug}`],
          ]}
          pageType="WebPage"
          pageName={`${p.brand} Case Study — ${p.result}`}
          pageUrl={`${SITE}/work/${p.slug}`}
        />

        <p className="text-[11px] tracking-[0.25em] uppercase text-[#121130]/45 mt-4">{p.category}</p>
        <h1 className="font-display text-[11vw] sm:text-[72px] leading-[0.95] mt-2">
          {p.brand.toUpperCase()} — <span className="text-gradient">{p.result}</span>
        </h1>
        <p className="font-bold text-[17px] mt-4">{p.tagline}</p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {p.tags.map((t) => (
            <span key={t} className="pill-tag !text-[#0e9f5b] !bg-[#4FEA73]/15 !border-[#4FEA73]/40">{t}</span>
          ))}
        </div>

        <div className="mt-10 space-y-5">
          {p.story.map((s, i) => (
            <p key={i} className="text-[#121130]/75 text-[16.5px] sm:text-[18px] leading-relaxed max-w-[70ch]">
              {s}
            </p>
          ))}
        </div>

        <h2 className="font-display text-4xl sm:text-5xl mt-14">THE NUMBERS.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
          {p.stats.map((s) => (
            <div key={s.label} className="border border-[#121130]/12 rounded-[16px] p-5 bg-white">
              <p className="font-display text-3xl text-gradient">{s.value}</p>
              <p className="text-[13px] font-bold tracking-[0.06em] uppercase text-[#121130]/70 mt-1">{s.label}</p>
              <p className="text-[#121130]/65 text-[13.5px] mt-2 leading-relaxed">{s.what}</p>
              <p className="text-[#121130]/45 text-[12.5px] mt-2 italic">Benchmark: {s.benchmark}</p>
            </div>
          ))}
        </div>

        <div className="card-dark rounded-[24px] p-7 sm:p-10 mt-12">
          <h2 className="font-display text-3xl sm:text-4xl text-white">HOW WE DEFINE A <span className="text-[#D8F23F]">QUALIFIED LEAD.</span></h2>
          <p className="text-white/70 text-[15px] mt-4 leading-relaxed">
            Headline CPLs mean nothing without a definition. In our engagements a lead is counted only when it is a real
            person we can verify on at least three signals — reachable phone/WhatsApp, named enquiry matching the offer,
            and consent to be contacted. A lead becomes marketing-qualified when it matches the client&rsquo;s stated
            customer criteria (location, budget band, intent), and sales-qualified only after the client&rsquo;s own team
            accepts it. We report raw, marketing-qualified and sales-qualified numbers separately, with spend and
            timeframe, so results can be audited rather than admired.
          </p>
          <p className="text-white/45 text-[13px] mt-3 italic">
            Benchmarks shown above are industry context from public sources and our own campaign data; they are indicative, not guarantees.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between card-dark rounded-[24px] p-7 sm:p-10">
          <div>
            <h3 className="font-display text-3xl sm:text-4xl">WANT NUMBERS <span className="text-gradient">LIKE THESE?</span></h3>
            <p className="text-white/60 text-[15px] mt-2">Take the free teardown — we'll show you the one lever to pull first.</p>
          </div>
          <Link href="/contact" className="btn-gradient shrink-0">Get a free teardown →</Link>
        </div>

        <h3 className="font-display text-3xl mt-14">MORE CASES.</h3>
        <div className="grid sm:grid-cols-3 gap-3 mt-5">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/work/${o.slug}`}
              className="border border-[#121130]/12 rounded-[16px] p-5 bg-white hover:border-[#0e9f5b]/50 transition-colors"
            >
              <p className="text-[10.5px] tracking-[0.2em] uppercase text-[#121130]/45">{o.category}</p>
              <p className="font-display text-xl mt-1">{o.brand}</p>
              <p className="text-[#0e9f5b] font-bold text-[14px] mt-2">{o.result}</p>
            </Link>
          ))}
        </div>
        <p className="text-center mt-10">
          <Link href="/work" className="tlink-dark">← All work</Link>
        </p>
      </div>
    </div>
  );
}
