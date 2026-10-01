# Foudre Motion Skill

Scroll-motion system of this site (Lenis + rAF parallax). Reuse these patterns; don't add framer-motion.

## Stack
- `SmoothScroll` (Lenis, `duration: 1.15`) in layout. All scroll effects read `window.scrollY` (works with Lenis) via rAF-throttled listeners, `translate3d` + `will-change-transform`.

## Patterns
- **Hero close**: layers converge on scroll within first viewport (`scrollY/innerHeight`): word drifts down, side cards move to center, center scales. File: `ParallaxHero.tsx`.
- **Block parallax**: section progress via `getBoundingClientRect` → `(vh - top)/(vh + height)`; layers translate at different speeds. File: `ParallaxTeam.tsx`.
- **Pinned horizontal**: outer height = track overflow + 100vh; `sticky top-0 h-screen`; progress maps to `translateX`. Desktop + mobile (compact title on phones). File: `PinnedWork.tsx`.
- **Sticky stack**: `position: sticky` cards with incremental `top` offsets. Expertise section.
- **Row drift**: `CarouselShell drift` prop — outer wrapper translates with section progress; arrows still work inside.

## Rules
- NEVER animate `opacity` on headline blocks (caused gray washout once — `translate` only).
- New effects must work on mobile widths too (user demands phone parity).
- Keep rAF loops cheap: transforms only, no layout reads inside the loop except cached rects.
