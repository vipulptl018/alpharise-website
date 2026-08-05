# Deployment Checklist — ALPHARISE Contact API

Lightweight Contact-only stack: **Vercel + Render Free + Supabase Free + Gmail**.

Use this list in order. Details: `SUPABASE_SETUP.md`, `RENDER_SETUP.md`, `VERCEL_ENV_SETUP.md`.

---

## A. Pre-flight (code — already done)

- [x] Dockerfile present (`backend/Dockerfile`)
- [x] `render.yaml` present
- [x] Gunicorn startup configured
- [x] Alembic runs on boot
- [x] Contact API `POST /api/v1/contact`
- [x] Gmail SMTP env-driven
- [x] CORS: production domains + `*.vercel.app`
- [x] `/health` and `/docs` enabled
- [x] No Redis / Celery / payments / Android APIs required

---

## B. Supabase

- [ ] Create Supabase project
- [ ] Save database password
- [ ] Copy Session/Direct URI (port **5432**)
- [ ] Add `?sslmode=require`
- [ ] URL-encode password special characters
- [ ] Keep URI ready for Render `DATABASE_URL`

Exact format:

```text
postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:5432/postgres?sslmode=require
```

---

## C. Gmail SMTP

- [ ] 2-Step Verification enabled on `alphariseinnovations@gmail.com`
- [ ] App Password created
- [ ] App Password ready for Render `SMTP_PASSWORD` (not committed to git)

---

## D. Render

- [ ] New Web Service connected to repo
- [ ] Root Directory = `backend`
- [ ] Runtime = Docker
- [ ] Health Check Path = `/health`
- [ ] Plan = Free
- [ ] Env vars set (see below)
- [ ] Deploy succeeded (green)
- [ ] Public URL copied

### Env vars to set

| Key | Set? |
|-----|------|
| `SECRET_KEY` | [ ] |
| `DATABASE_URL` | [ ] |
| `SMTP_PASSWORD` | [ ] |
| `APP_ENV=production` | [ ] |
| `APP_DEBUG=false` | [ ] |
| `SMTP_HOST=smtp.gmail.com` | [ ] |
| `SMTP_PORT=587` | [ ] |
| `SMTP_USERNAME=alphariseinnovations@gmail.com` | [ ] |
| `SMTP_FROM=alphariseinnovations@gmail.com` | [ ] |
| `CONTACT_NOTIFY_EMAIL=admin@alphariseinnovation.com` | [ ] |
| `CORS_ORIGINS=https://alphariseinnovation.com,https://www.alphariseinnovation.com` | [ ] |
| `CORS_ORIGIN_REGEX=https://.*\.vercel\.app` | [ ] |
| `SMTP_USE_TLS=true` | [ ] |
| `SMTP_USE_SSL=false` | [ ] |

Do **not** set `PORT` or `REDIS_URL`.

---

## E. Post-deploy API checks

Replace `BASE` with your Render URL.

- [ ] `GET BASE/health` → 200 (application ok, database ok)
- [ ] `GET BASE/docs` → 200
- [ ] `POST BASE/api/v1/contact` → **201 Created**
- [ ] Supabase `contact_inquiries` has new row
- [ ] Email received at `admin@alphariseinnovation.com`

```bash
curl -s BASE/health
curl -s -o /dev/null -w "%{http_code}\n" BASE/docs
curl -s -X POST BASE/api/v1/contact \
  -H "Content-Type: application/json" \
  -H "Origin: https://alphariseinnovation.com" \
  -d "{\"full_name\":\"Test User\",\"email\":\"test@example.com\",\"phone\":\"+919168020295\",\"company\":\"ALPHARISE\",\"subject\":\"Checklist\",\"message\":\"Production verification message.\"}"
```

---

## F. Vercel

- [ ] `NEXT_PUBLIC_API_URL` = Render URL (no trailing slash)
- [ ] `NEXT_PUBLIC_SITE_URL` = `https://alphariseinnovation.com`
- [ ] Production **Redeploy** completed
- [ ] Live form https://alphariseinnovation.com/contact succeeds
- [ ] Network tab shows `201` to Render `/api/v1/contact`

---

## G. Rollback ready

- [ ] Know how to Rollback deploy in Render (`RENDER_SETUP.md` §7)
- [ ] Know how to restore previous `NEXT_PUBLIC_API_URL` in Vercel

---

## H. Sign-off

| Item | Pass |
|------|------|
| Render Connected | [ ] |
| Supabase Connected | [ ] |
| Gmail SMTP Working | [ ] |
| PostgreSQL Working | [ ] |
| Contact API Working | [ ] |
| Health OK | [ ] |
| Swagger OK | [ ] |
| Vercel Connected | [ ] |
| Production Ready | [ ] |

When all boxes are checked, mark `FINAL_DEPLOYMENT_REPORT.md` as live-verified.
