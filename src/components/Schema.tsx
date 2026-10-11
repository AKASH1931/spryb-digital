export const SITE = "https://sprybdigital.com";
export const ORG_ID = `${SITE}/#organization`;

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function Breadcrumb({
  trail,
  pageType = "WebPage",
  pageName,
  pageUrl,
}: {
  trail: Array<[string, string]>;
  pageType?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  pageName: string;
  pageUrl: string;
}) {
  const items = [["Home", "/"], ...trail] as Array<[string, string]>;
  const list = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, href], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      ...(i < items.length - 1 ? { item: `${SITE}${href}` } : {}),
    })),
  };
  const page = {
    "@context": "https://schema.org",
    "@type": pageType,
    name: pageName,
    url: pageUrl,
    isPartOf: { "@id": ORG_ID },
  };
  return (
    <>
      <JsonLd data={list} />
      <JsonLd data={page} />
      <nav aria-label="Breadcrumb" className="text-[12px] text-[#121130]/50 mb-5">
        {items.map(([name, href], i) => (
          <span key={`${href}-${name}`}>
            {i > 0 && <span className="mx-1.5 text-[#121130]/30">/</span>}
            {i < items.length - 1 ? (
              <a
                href={href}
                className="hover:text-[#0e9f5b] hover:underline underline-offset-4"
              >
                {name}
              </a>
            ) : (
              <span className="text-[#121130]/75 font-medium">{name}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
