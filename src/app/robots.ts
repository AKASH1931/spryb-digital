import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const bots = ["*", "GPTBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot", "Google-Extended", "Bytespider", "CCBot"];
  return {
    rules: bots.map((userAgent) => ({ userAgent, allow: "/" })),
    sitemap: "https://sprybdigital.com/sitemap.xml",
  };
}
