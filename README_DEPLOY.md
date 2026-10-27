# ALPHARISE Website — Vercel Deployment Guide

**Product:** ALPHARISE INNOVATION PRIVATE LIMITED marketing website  
**Framework:** Next.js (App Router)  
**Domain:** https://alphariseinnovation.com

## Vercel project settings

| Setting | Value |
|---------|--------|
| Framework Preset | Next.js |
| Root Directory | `.` (repository root) |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output | `.next` (default) |
| Node.js | 20.x or newer |

The Python `backend/` folder is excluded via `.vercelignore`. Deploy the FastAPI API on **Render** (see `backend/RENDER_DEPLOY.md`) and set `NEXT_PUBLIC_API_URL` to that origin.

## Environment variables (Vercel → Settings → Environment Variables)

Set for Production (and Preview if needed):

```
NEXT_PUBLIC_API_URL=https://<your-render-service>.onrender.com
NEXT_PUBLIC_SITE_URL=https://www.alphariseinnovation.com
NEXT_PUBLIC_COMPANY_NAME=ALPHARISE INNOVATION PRIVATE LIMITED
NEXT_PUBLIC_COMPANY_PHONE=+919168020295
NEXT_PUBLIC_COMPANY_EMAIL=admin@alphariseinnovation.com
NEXT_PUBLIC_COMPANY_CIN=U62091PN2026PTC253412
NEXT_PUBLIC_COMPANY_GSTIN=Not Applicable
```

Replace `NEXT_PUBLIC_API_URL` with the public URL Render shows for the FastAPI service (see `backend/VERCEL_ENV_SETUP.md`). It serves both the Contact form (`/api/v1/contact`) and the Newsletter form (`/api/v1/newsletter`); the Next.js app has no form API routes of its own.

Do **not** set it to `https://api.alphariseinnovation.com` unless that hostname is a CNAME to this API. It currently serves a different AlphaRise backend (Sinchan Mitra), which has no `/api/v1/contact` and rejects this site's CORS origin.

## Domain

1. In Vercel → Domains, add `alphariseinnovation.com` and `www.alphariseinnovation.com`.
2. Point DNS as instructed by Vercel.
3. `www.alphariseinnovation.com` is the canonical host; the bare domain redirects to it (308).
4. Keep `NEXT_PUBLIC_SITE_URL` on the www host. Canonical tags, `sitemap.xml`, `robots.txt` and Open Graph URLs are built from it. (`lib/constants.ts` also rewrites the bare domain to www, so an old apex value cannot put redirecting URLs in the sitemap.)
5. If you ever make the bare domain primary instead, change the default in `lib/constants.ts`, `toCanonicalHost`, and this value together.

## Deploy checklist

1. Push to the connected Git branch (or `vercel --prod`).
2. Wait for build success.
3. Verify:
   - `/`
   - `/contact` (form → FastAPI)
   - `/blog` (Newsletter form → FastAPI)
   - `/opengraph-image` and `/twitter-image` (generated share images)
   - `/robots.txt`
   - `/sitemap.xml`
   - `/manifest.webmanifest`
4. Confirm security headers in browser Network → Response Headers.

## Local production check

```bash
npm install
npm run lint
npm run build
npm run start
```

## Related files

- `.env.example` — env template
- `.vercelignore` — excludes backend and secrets
- `next.config.ts` — security headers + `poweredByHeader: false`
- `LICENSE` — proprietary license
