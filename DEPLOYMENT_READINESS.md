# ALPHARISE Website — Deployment Readiness Report

**Date:** 2026-08-04  
**Product:** ALPHARISE INNOVATION PRIVATE LIMITED marketing website  
**Stack:** Next.js 16 · React 19 · TypeScript (strict) · Tailwind CSS 4  
**Status:** Ready for Vercel deployment and Razorpay website review

---

## Checklist

| Area | Status | Notes |
|------|--------|-------|
| TypeScript | Pass | `strict: true`; `npx tsc --noEmit` clean; `backend/` excluded from Next TS project |
| ESLint | Pass | `npm run lint` clean; `backend/` ignored |
| Production Build | Pass | `npm run build` succeeds |
| Responsive | Pass | Shared `Container` (`max-w-7xl` + `px-6 sm:px-8 lg:px-10`); section spacing `py-12 sm:py-16 lg:py-20`; `overflow-x-clip` on `html`/`body` |
| Accessibility | Pass | Skip link, form labels, button labels, accordion semantics, focus rings, `prefers-reduced-motion` |
| SEO | Pass | Per-page metadata, absolute canonicals, sitemap, robots, web manifest |
| APIs | Pass | Contact, Newsletter, Search — validation + in-memory rate limit + error responses; frontend Contact posts to FastAPI via `NEXT_PUBLIC_API_URL` |
| Security | Pass | HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, COOP; `poweredByHeader: false` |
| Performance | Pass | Font `display: swap`; package import optimize; LazyMotion; below-fold home sections via `next/dynamic`; no unused hero image assets |
| Policies | Pass | Privacy, Terms, Refund, Cookie, Community, Host, Creator, User, Virtual Coin |
| Navigation | Pass | Main nav + footer company/platform/legal links aligned with routes |
| Contact | Pass | Form wired to FastAPI; local `/api/contact` retained as optional fallback storage API |
| Sitemap | Pass | `app/sitemap.ts` covers all public marketing + policy routes |
| robots.txt | Pass | Allow all; sitemap + host set to `SITE_URL` |
| Metadata | Pass | Root + `createPageMetadata` — title, description, OG, Twitter |
| JSON-LD | Pass | Organization, LocalBusiness, WebSite, ContactPoint, Product, FAQPage |
| Ready for Vercel | Pass | `.vercelignore` excludes Python backend and secrets; README documents deploy |
| Ready for Razorpay Website Review | Pass | Legal entity, CIN, address, policies, contact, support, pricing transparency present |

---

## Production hardening completed

1. Removed unused create-next-app SVG assets and unused UI primitives (dialog, dropdown, tabs, separator, avatar, navigation-menu).
2. Absolute canonical URLs in root layout and `lib/seo.ts`.
3. Security headers strengthened; `X-Powered-By` disabled.
4. Home below-fold sections lazy-loaded with `next/dynamic`.
5. Fonts: `display: "swap"`; mono not preloaded.
6. Horizontal overflow guard (`overflow-x-clip`); removed fixed background attachment for scroll performance.
7. Added/updated: `.vercelignore`, production `README.md`, `LICENSE`, `app/manifest.ts`, `.env.example`.
8. `.gitignore` hardened for backend env, venv, and `*.tsbuildinfo`.

---

## Deploy notes (Vercel)

1. Framework: Next.js (root directory).
2. Env: set `NEXT_PUBLIC_API_URL` to the production FastAPI origin (no trailing slash).
3. Do not deploy `backend/` on Vercel — host the API separately.
4. Confirm production domain matches `SITE_URL` (`https://alphariseinnovation.com`).
5. After go-live: validate `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, and contact form end-to-end.

---

## Razorpay website review notes

- Registered company name and CIN are shown in footer and contact surfaces.
- Registered office address is published.
- Support email and business hours are published.
- Refund / Terms / Privacy / Cookie policies are linked from the footer.
- Pricing pages describe commercial notes without inventing payment-gateway claims.
- Android app is described as preparing for public release (no false Play Store claim).

---

## Residual recommendations (non-blocking)

- Add a branded Open Graph image (`1200×630`) when a final brand asset is available.
- Add favicon / app icons to `app/` or `public/` for stronger PWA/manifest scoring.
- Prefer Redis/shared rate limiting if the Next.js API routes are scaled across multiple serverless instances.
- Run Lighthouse against the production URL after DNS cutover (lab scores on localhost vary).
