# Spryb LLM Ranking Audit — Execution Plan

**Date:** 2026-11-28  
**Objective:** Measure whether AI/search discovery can generate qualified agency leads for Spryb Digital, then prioritise fixes by lead impact.

## Assumptions
- Audience: founders and marketing decision-makers at Indian D2C, F&B, hospitality, real-estate, clinic/salon and local businesses.
- Markets: India first; Lucknow and Gurugram/Delhi NCR as local high-intent markets.
- Primary conversion: discovery-call/contact enquiries, not traffic alone.
- No production website changes are included in this audit.

## Method
1. Build a fixed prompt set covering non-branded category, service, local, industry and branded queries.
2. Run obtainable answer-engine checks with fresh sessions where possible. Record exact prompt, engine, date, response URL/evidence, brands recommended and citations.
3. Run a separate search-retrievability check. Search results are a proxy for source discovery, **not** an LLM ranking.
4. Audit live crawlability and answer assets: robots, llms files, sitemap, schema, service/entity clarity, proof and third-party corroboration.
5. Score only observed answers; mark blocked/unavailable tests as `NT`, never zero.
6. Deliver raw results, baseline metrics, competitor set and lead-prioritised actions.

## Metrics
- **Mention rate:** valid non-branded answers mentioning Spryb / valid non-branded answers.
- **Citation rate:** valid answers citing sprybdigital.com / valid answers.
- **Average rank:** average recommendation position when Spryb is mentioned.
- **Share of voice:** Spryb mentions / all agency recommendations in the same valid answers.
- **Branded answer accuracy:** supported facts answered correctly, with incorrect claims flagged.
- **Search retrievability:** reported separately; never presented as LLM visibility.

## Status
- [x] Objective, market and assumptions set
- [x] Prompt set and scorecard created (`prompts.csv`)
- [x] Answer-engine checks executed (Duck.ai GPT-6 web-search; Perplexity NT — sign-in wall)
- [x] Search-retrievability and live asset checks executed (DDG; Bing NT — bot wall)
- [x] Evidence and scores compiled (`RESULTS.csv`)
- [x] Final report and next actions delivered (`REPORT.md`)
