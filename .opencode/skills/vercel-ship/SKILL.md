# Vercel Ship Skill

Use for EVERY deploy of spryb-site. Stack: Next.js 16 + Tailwind v4. Never break this chain.

## Steps
1. `npm run build` in `D:\Private\Spryb Website\spryb-site` — must pass (TS + Turbopack). If fail, fix, never push broken.
2. `git add -A` → commit (`git -c user.name="Spryb" -c user.email="hello@sprybdigital.com" commit -m "..."`) → `git push origin main`.
3. Vercel auto-deploys in ~2 min. ALWAYS wait, then verify live with a real check (fetch page/CSS/route and grep for the change marker).
4. Only then tell the user it's live. Remind: hard refresh (`Ctrl+Shift+R`) or incognito.

## Gotchas learned
- PowerShell 5.1: no `tail`, no `&&`. Use `;` and `Select-Object`.
- CSS classes may be cached in browser — live-bundle grep (`.text-gradient{...}` in `/_next/static/immutable/chunks/*.css`) proves deploy.
- Contact form mails need `RESEND_API_KEY` in Vercel env (pending).
- Canonical/sitemap/OG base = `https://sprybdigital.com`; OG image absolute = vercel.app URL until domain connects.
