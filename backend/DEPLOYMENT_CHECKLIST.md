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
- [ ] Env: `BOOTSTRAP_ADMIN_PASSWORD` set to a strong unique value (the code default `ChangeMeAdmin123!` is public in the repo)

---

## E. Verify

- [ ] `GET /health` → 200
- [ ] `GET /docs` → 200
- [ ] `POST /api/v1/contact` → 201 + email received
- [ ] `POST /api/v1/newsletter` → 201 (second call with the same email → 409)
- [ ] Error responses (500 / 502 / `/health` when the DB is down) show generic text only; details are in the Render logs
- [ ] Vercel `NEXT_PUBLIC_API_URL` points to Render URL
