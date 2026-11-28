# Spryb LLM Ranking Report — Baseline

**Date:** 2026-11-28 · **Engine tested:** Duck.ai (GPT-6-class model, web-search ON) · **Raw data:** `RESULTS.csv` · **Prompts:** `prompts.csv`

## Objective
Measure Spryb's visibility in AI answers for lead-intent agency searches (India + Lucknow/Gurugram, 8 service verticals) and prioritise fixes that generate qualified enquiries.

## Baseline Scores (observed, not simulated)

| Metric | Value | Notes |
|---|---|---|
| Non-branded mention rate | **0 / 12 (0%)** | Spryb was never recommended in any category, service, local or industry prompt |
| Non-branded citation rate | **0 / 12 (0%)** | sprybdigital.com never cited as a source |
| Share of voice | **0%** | 40+ competitor mentions across 12 answers; all competitors |
| Branded answer (B02) | **Accurate, "evidence too thin"** | AI found the site, quoted 2,747 leads @ ₹6.15, 120+ brands, 3.2× ROAS — then told the user to run only a small pilot |
| Branded entity test (B01) | **FAILED — wrong company** | AI answered about **Spry Digital, St. Louis** (sprydigital.com). Spryb did not surface at all |
| Search retrievability (separate metric) | Branded OK; **case-study queries: absent** | "sprybdigital.com case study" SERP = 100% Spry Digital (St. Louis). Spryb's /work page does not surface |
| Unavailable tests | Perplexity (sign-in wall), Bing (bot wall) — marked NT, not zero | Re-run quarterly |

## Why competitors win (pattern across all 12 answers)

Every recommended agency had at least one of these; Spryb has none:

1. **A dedicated, crawlable case-study page per vertical** — FK Digital (real estate CPL), Flame Techno (340+ leads), Webskitters (salon +55%), HND (141% leads). Spryb's 6 case studies are trapped as sections on a single `/work` page with no individual URLs. **This is the #1 gap.**
2. **Directory listings** — Semrush's agency directory single-handedly supplied the entire shortlist for ORM (S02) and local SEO (S04). Spryb only has Clutch.
3. **Roundup/listicle presence** — the "full-stack agency India" answer (G02) came almost entirely from dmcockpit.com and themanifest.com lists.
4. **Location-specific service pages** — Lucknow competitors (Optin, Digital Nawab, Tantrash) each have pages naming Lucknow + services + address. Spryb's Lucknow identity exists only inside the homepage.

## Entity risk (urgent)

- Spry Digital (sprydigital.com, St. Louis) has stronger case-study footprint and outranks Spryb on case-study queries. In a clean-session AI answer to "What does Spryb Digital do?", the model answered about the wrong company entirely.
- Spryb's own directory snippets are inconsistent: SyncGTM says "AI-powered solutions, New Delhi"; Facebook says "website & app development, CRM"; magicpin has a single 5.0 rating. This fuzziness is what the B02 answer flagged as "too thin".

## Action plan (lead-impact order)

**P0 — Case-study pages (highest lead leverage)**
- Build `/work/[slug]` pages (slugs already exist in `src/data/site.ts`: agri-investment-plan, tiffin-brampton, lucknow-fnb, urban-brew, solace-stays, nest-realty) with full text: client context, spend & timeframe, lead definition, qualified-lead %, CPL, outcome. The stats/benchmarks data already exists in `site.ts` — it just needs to be prose, crawlable, one URL per case.
- Each page targets one AI prompt: "real estate lead generation case study India", "Meta ads CPL case study India", "Google Ads tiffin lead generation Canada", etc.
- Fix the AI objection directly: add a "How we define a qualified lead" section (B02's exact criticism was that ₹6.15 CPL lacks qualification detail).

**P1 — Entity disambiguation**
- Homepage + About + footer copy: one natural sentence anchoring the entity, e.g. "Spryb Digital — often searched as Spry Digital India or Spryb Digital Lucknow — is a digital marketing agency (not related to Spry Digital, the St. Louis web firm)." (Model-safe phrasing; no fake claims.)
- Tighten schema `sameAs` (LinkedIn, Clutch, Facebook) and make LinkedIn/Facebook/Clutch descriptions identical: "digital marketing agency, Lucknow + Gurugram, India — lead generation, social, SEO, ads, ORM, hyperlocal."
- Clean up or claim stray profiles (findglocal, SyncGTM descriptions).

**P2 — Directory presence (feeds 2 of 12 answers by itself)**
- Create/complete listings: Semrush Agency Directory (free), DesignRush, GoodFirms, Google Business Profile (Lucknow HQ) with the same entity description. Semrush directory alone produced the full ORM + local-SEO shortlists.

**P3 — Location pages**
- Add `/digital-marketing-agency-lucknow` and `/digital-marketing-agency-gurugram` (real offices, real addresses — matches how Optin/Digital Nawab/Tantrash won L01).

**P4 — Answer-first content (slower compounding)**
- 3 blog posts mapped to existing llms-full.txt facts: "Digital marketing cost in India (2026)", "How long SEO takes", "What a qualified lead should cost" — each ending in the free-teardown CTA. AI answers repeatedly told users to ask agencies exactly these questions; owning the pages means Spryb gets cited.

**P5 — Measurement**
- Re-run this exact 14-prompt set quarterly (script + prompts saved). Track mention rate 0% → target ≥25% (3/12) in 2 quarters, and B01 entity test passing.
- GTM: tag outbound clicks from AI referrers (chatgpt.com, perplexity.ai, duckduckgo.com referral strings) to see AI-sourced enquiries in GA4.

## Limitations
- One answer engine measured (Perplexity/Bing blocked this session); Duck.ai's GPT-6 Luna with web search is a reasonable proxy for citation-driven AI answers but not identical to ChatGPT/AI Overviews.
- Rankings vary per session; these are single-session observations, labelled as such. NT entries are not zeros.
