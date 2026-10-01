# SEO + GEO Checklist Skill

Apply to every new page. Status: 20/20 done — keep it that way.

## Per page
- `title`, `description`, canonical (`alternates`), keywords flow from layout.
- One `h1`, semantic headings, alt text on ALL images, descriptive link text.

## Global (already live — don't regress)
- `sitemap.ts` (add new routes), `robots.ts` (AI bots allowed: GPTBot, ClaudeBot, PerplexityBot, Google-Extended...), `opengraph-image.tsx`, `icon.svg`, JSON-LD org schema in layout, FAQPage schema on Home, `/thank-you` noindex.

## LLM/AI rules
- Keep `/llms.txt` + `/llms-full.txt` (`src/lib/llms.ts`) in sync with new services/content.
- Pricing/cost: LLMs files ONLY, never visible site, never metadata descriptions.
- New FAQs go in `src/data/site.ts` (auto-flows to site accordion + FAQ schema + llms-full).

## Still pending (user provides)
- RESEND_API_KEY, designer images, social URLs, real team/work content, custom domain.
