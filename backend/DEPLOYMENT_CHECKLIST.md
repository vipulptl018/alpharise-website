# Deployment Checklist — ALPHARISE Contact API (Resend)

Lightweight Contact-only stack: **Vercel + Render Free + Supabase Free + Resend**.

---

## A. Pre-flight

- [x] Dockerfile present
- [x] `render.yaml` present
- [x] Gunicorn + Alembic on boot
- [x] Contact API `POST /api/v1/contact`
- [x] Resend HTTPS email (api.resend.com)
- [x] CORS: production domains + `*.vercel.app`
- [x] `/health` and `/docs` enabled

---

## B. Supabase

- [ ] Create project + `DATABASE_URL` with `sslmode=require`

---

## C. Resend

- [ ] Create API key at https://resend.com
- [ ] Set `RESEND_API_KEY`
- [ ] Set `RESEND_FROM` (`ALPHARISE <onboarding@resend.dev>` for tests, or verified domain)
- [ ] Set `CONTACT_NOTIFY_EMAIL=admin@alphariseinnovation.com`
- [ ] Remove any legacy Gmail mail-port env vars from Render (if present)

---

## D. Render

- [ ] Root Directory = `backend`, Docker, Health = `/health`, Free
- [ ] Env: `SECRET_KEY`, `DATABASE_URL`, `RESEND_API_KEY`, `RESEND_FROM`, `CONTACT_NOTIFY_EMAIL`, `APP_ENV=production`, `CORS_ORIGINS`

---

## E. Verify

- [ ] `GET /health` → 200
- [ ] `GET /docs` → 200
- [ ] `POST /api/v1/contact` → 201 + email received
- [ ] Vercel `NEXT_PUBLIC_API_URL` points to Render URL
