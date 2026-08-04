# ALPHARISE Website — Production Deployment Report

**Date:** 2026-08-04  
**Product:** ALPHARISE INNOVATION PRIVATE LIMITED  
**Canonical domain:** https://alphariseinnovation.com  
**Platform:** Vercel (Next.js)

## Checklist

| Item | Status | Notes |
|------|--------|-------|
| Build | Pass | `npm run build` succeeds |
| Lint | Pass | `npm run lint` clean |
| TypeScript | Pass | Strict mode; build typecheck clean |
| SEO | Pass | Per-page metadata via `createPageMetadata` |
| Metadata | Pass | Title, description, canonical, OG, Twitter |
| Security Headers | Pass | HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy; `poweredByHeader: false` |
| Sitemap | Pass | `/sitemap.xml` |
| Robots | Pass | `/robots.txt` |
| JSON-LD | Pass | Organization, LocalBusiness, WebSite, ContactPoint, Product, FAQ |
| Images | Pass | No unused public raster assets; decorative UI is CSS/SVG |
| Accessibility | Pass | Skip link, labels, focus states, reduced-motion |
| Performance | Pass | `next/dynamic` home sections, font `display: swap`, `compress`, package import optimize |
| Deployment Ready | Pass | Env template + deploy guide |
| Vercel Ready | Pass | Root Next.js app; backend ignored |
| Domain Ready | Pass | Defaults to `https://alphariseinnovation.com`; no hardcoded localhost in app code |

## Environment

Template: `.env.example`  
Local secrets: `.env.local` (gitignored)

Contact form uses `${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact`.

## Deploy files

- `.vercelignore`
- `README_DEPLOY.md`
- `LICENSE`
- `.env.example`

## Vercel settings

- Framework: Next.js  
- Install: `npm install`  
- Build: `npm run build`  
- Output: `.next`  

See `README_DEPLOY.md` for domain + env setup.
