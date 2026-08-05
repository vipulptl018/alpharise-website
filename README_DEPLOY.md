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
NEXT_PUBLIC_API_URL=https://api.alphariseinnovation.com
NEXT_PUBLIC_SITE_URL=https://alphariseinnovation.com
NEXT_PUBLIC_COMPANY_NAME=ALPHARISE INNOVATION PRIVATE LIMITED
NEXT_PUBLIC_COMPANY_PHONE=+919168020295
NEXT_PUBLIC_COMPANY_EMAIL=admin@alphariseinnovation.com
NEXT_PUBLIC_COMPANY_CIN=U62091PN2026PTC253412
NEXT_PUBLIC_COMPANY_GSTIN=Not Applicable
```

Replace `NEXT_PUBLIC_API_URL` with your real FastAPI production URL.

## Domain

1. In Vercel → Domains, add `alphariseinnovation.com` and `www.alphariseinnovation.com`.
2. Point DNS as instructed by Vercel.
3. Prefer HTTPS redirect and apex → www (or reverse) per your DNS preference.
4. Confirm `NEXT_PUBLIC_SITE_URL` matches the canonical host.

## Deploy checklist

1. Push to the connected Git branch (or `vercel --prod`).
2. Wait for build success.
3. Verify:
   - `/`
   - `/contact` (form → FastAPI)
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
