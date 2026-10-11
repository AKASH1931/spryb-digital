import type { Metadata } from "next";
import WorkList from "@/components/WorkList";
import { projects } from "@/data/site";
import Breadcrumb, { JsonLd, SITE } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Work — Results, Not Promises",
  description:
    "See Spryb Digital's client results: +212% D2C revenue, 3.1x hotel bookings, 41k hyperlocal footfall, ₹38Cr real-estate pipeline. Proof across social, SEO, ads and ORM.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const projectList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Spryb Digital case studies",
    url: `${SITE}/work`,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.brand,
      url: `${SITE}/work`,
      description: `${p.category} — ${p.result}`,
    })),
  };
  return (
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[1440px] mb-8">
        <Breadcrumb
          trail={[["Work", "/work"]]}
          pageType="CollectionPage"
          pageName="Work — Results, Not Promises"
          pageUrl={`${SITE}/work`}
        />
      </div>
      <JsonLd data={projectList} />
      <WorkList />
    </div>
  );
}
