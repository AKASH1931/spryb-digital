import type { MetadataRoute } from "next";
import { projects } from "@/data/site";

export const dynamic = "force-static";

const SITE_URL = "https://sprybdigital.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/work", "/about", "/contact", "/privacy", "/terms", "/sitemap", "/ai", "/kreative-kand", "/creative-lab", "/careers", "/digital-marketing-agency-lucknow", "/digital-marketing-agency-gurugram"];
  const staticPages = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
  const casePages = projects.map((p) => ({
    url: `${SITE_URL}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  return [...staticPages, ...casePages];
}
