# Video Creator Skill

Tagdi video workflow for Spryb site — performance-first, mobile-safe. Use whenever video appears on site.

## Sourcing (reliability order)
1. **Own files** (`/public/videos/*.mp4`) — designer/client phone-shot reels are best. Specs to demand: 1080x1920 or 1920x1080, H.264, ≤8 MB per clip, no audio track needed.
2. **Hotlinked stock** (Pexels file CDN only) — verify with a HEAD request (200 + `video/*` content-type) BEFORE shipping. Never guess URLs.
3. Never: YouTube/Vimeo embeds for backgrounds (heavy + branding), autoplay with sound (browsers block it).

## Web implementation (rules)
- Always: `muted + loop + playsInline + autoPlay`, `preload="metadata"`, `poster="..."` image that matches first frame.
- Lazy: start loading/playing only via IntersectionObserver (50% visible). Pause when off-screen.
- Fallback: poster `<img>` beneath video; if video errors, hide `<video>` element (onError) — design must look complete with images alone.
- Mobile: respect `prefers-reduced-motion` (don't autoplay) and keep clips ≤5 MB; hero clips max 3.
- Captions/alt: every video gets `aria-label` + poster `alt`.

## Ask designer for
- 3 hero clips (Meta ads desk, creator talking, city hyperlocal), 6–10 sec loops, vertical-safe crop.
- 8 service clips (one per service) OR 3 generic agency-life clips reused.
