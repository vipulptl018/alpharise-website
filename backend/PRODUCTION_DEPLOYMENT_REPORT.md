# ALPHARISE Contact API — Production Deployment Report

**Company:** ALPHARISE INNOVATION PRIVATE LIMITED  
**Scope:** Corporate website Contact Form backend only  
**Date:** 2026-08-05  

| Layer | Platform | Status |
|-------|----------|--------|
| Frontend | Vercel (live) | Ready — do not modify |
| Backend | Render Free Web Service (Docker) | Ready |
| Database | Supabase PostgreSQL Free | Ready |
| Email | Gmail SMTP | Ready |

**Out of scope (do not deploy / do not add):** login, JWT product flows, payments, admin UI, Android APIs, Redis, Celery, RabbitMQ, background workers, VPS, Nginx, Docker Compose.

---

## 1. Audit summary

| Check | Result |
|-------|--------|
| Contact API `POST /api/v1/contact` | Present |
| Flow: validate → PostgreSQL → Gmail → success | Present |
| Supabase-compatible `DATABASE_URL` | Normalized to `postgresql+psycopg2://` |
| Gmail STARTTLS (587) | Configured via env |
| CORS production + Vercel previews | Origins + `https://.*\.vercel\.app` regex |
| Swagger `/docs` | Enabled |
| Health `/health` | Enabled (DB + SMTP; Redis disabled when unset) |
| Alembic on boot | `alembic upgrade head` in Dockerfile |
| Gunicorn startup | `uvicorn.workers.UvicornWorker`, `-w 1`, `$PORT` |
| VPS Nginx | **Removed** |
| Docker Compose | **Removed** (not used on Render) |
| Redis required | **No** |

---

## 2. Render build settings

| Setting | Value |
|---------|--------|
| Root Directory | `backend` |
| Runtime | **Docker** |
| Dockerfile Path | `./Dockerfile` |
| Docker Context | `.` (relative to Root Directory) |
| Instance type | **Free** |
| Health Check Path | `/health` |
| Region | Singapore (or nearest to Supabase) |
| Auto-Deploy | On (recommended) |

Blueprint file: `backend/render.yaml`

### Startup command (inside Dockerfile)

```bash
alembic upgrade head && gunicorn -k uvicorn.workers.UvicornWorker -w 1 -b 0.0.0.0:$PORT app.main:app
```

Render injects `PORT`. Do not set `PORT` manually.

---

## 3. Required Render environment variables

### Must set in Render Dashboard

| Key | Example / notes |
|-----|-----------------|
| `SECRET_KEY` | Generate in Render (≥ 32 characters) |
| `DATABASE_URL` | Supabase PostgreSQL URI (see §5) |
| `SMTP_PASSWORD` | Gmail App Password only (never commit) |
| `APP_ENV` | `production` |
| `APP_DEBUG` | `false` |
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USERNAME` | `alphariseinnovations@gmail.com` |
| `SMTP_FROM` | `alphariseinnovations@gmail.com` |
| `CONTACT_NOTIFY_EMAIL` | `admin@alphariseinnovation.com` |
| `CORS_ORIGINS` | `https://alphariseinnovation.com,https://www.alphariseinnovation.com` |

### Recommended (also in `render.yaml`)

| Key | Value |
|-----|--------|
| `SMTP_USE_TLS` | `true` |
| `SMTP_USE_SSL` | `false` |
| `SMTP_FROM_NAME` | `ALPHARISE` |
| `CORS_ORIGIN_REGEX` | `https://.*\.vercel\.app` |
| `APP_NAME` | `ALPHARISE API` |
| `API_V1_PREFIX` | `/api/v1` |
| `LOG_LEVEL` | `INFO` |
| `HOST` | `0.0.0.0` |

### Do not set

| Key | Reason |
|-----|--------|
| `PORT` | Injected by Render |
| `REDIS_URL` | Not required for Contact-only stack |
| Docker Compose / Nginx vars | Removed from production path |

---

## 4. Contact API contract

**Endpoint:** `POST /api/v1/contact`

**Body:**

```json
{
  "full_name": "...",
  "email": "...",
  "phone": "...",
  "company": "...",
  "subject": "...",
  "message": "..."
}
```

**Flow:**

1. Request validation (Pydantic) → `422` on failure  
2. Save to PostgreSQL `contact_inquiries`  
3. Gmail notification via `EmailService` → `admin@alphariseinnovation.com`  
4. Success → `201` with thank-you message  
5. SMTP failure after save → `502` (row still stored)

**Public docs:** `/docs`  
**Health:** `/health`

---

## 5. Supabase setup guide

1. Create a project at [https://supabase.com](https://supabase.com).
2. Open **Project Settings → Database**.
3. Copy **Session pooler** (port **5432**) or **Direct** URI.
4. Append `?sslmode=require` if missing.
5. URL-encode special characters in the password.
6. Paste into Render as `DATABASE_URL`.

Example:

```text
postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:5432/postgres?sslmode=require
```

**Avoid** Transaction pooler port `6543` for Alembic.

The app rewrites `postgresql://` / `postgres://` → `postgresql+psycopg2://` automatically.

On first boot, Alembic runs `upgrade head` and creates tables including `contact_inquiries`.

---

## 6. Gmail SMTP setup guide

1. Account: `alphariseinnovations@gmail.com`
2. Enable **2-Step Verification**
3. Create a Google **App Password**
4. Set on Render only:

```text
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USE_TLS=true
SMTP_USE_SSL=false
SMTP_USERNAME=alphariseinnovations@gmail.com
SMTP_FROM=alphariseinnovations@gmail.com
SMTP_PASSWORD=<app-password>
CONTACT_NOTIFY_EMAIL=admin@alphariseinnovation.com
```

Password is read from environment only — never hardcoded.

---

## 7. Render deployment guide

1. Push this repository to GitHub/GitLab.
2. [Render Dashboard](https://dashboard.render.com) → **New → Web Service**.
3. Connect the repo.
4. Set **Root Directory** = `backend`.
5. Runtime = **Docker**, Health Check = `/health`, Plan = **Free**.
6. Add environment variables from §3.
7. Deploy and wait until the service is healthy.
8. Copy the public URL, e.g. `https://alpharise-api.onrender.com`.
9. In **Vercel** set:

```text
NEXT_PUBLIC_API_URL=https://alpharise-api.onrender.com
```

(No trailing slash.) Redeploy the frontend after changing the env var.

Optional: deploy via Blueprint using `backend/render.yaml`.

---

## 8. Production verification checklist

Replace `BASE` with your Render URL.

```bash
# Health
curl -s BASE/health

# Swagger UI
curl -s -o /dev/null -w "%{http_code}\n" BASE/docs

# Contact API
curl -s -X POST BASE/api/v1/contact \
  -H "Content-Type: application/json" \
  -H "Origin: https://alphariseinnovation.com" \
  -d "{\"full_name\":\"Test User\",\"email\":\"test@example.com\",\"phone\":\"+919168020295\",\"company\":\"ALPHARISE\",\"subject\":\"Production check\",\"message\":\"Render contact verification message.\"}"
```

| Step | Pass criteria |
|------|----------------|
| `/health` | HTTP 200; `database` ok; `smtp` ok; `redis` disabled |
| `/docs` | HTTP 200 |
| `POST /api/v1/contact` | HTTP 201 |
| PostgreSQL | New row in `contact_inquiries` (Supabase Table Editor) |
| Gmail | Email received at `admin@alphariseinnovation.com` |
| Live site | https://alphariseinnovation.com/contact submits successfully |

---

## 9. CORS

Allowed exact origins:

- `https://alphariseinnovation.com`
- `https://www.alphariseinnovation.com`

Allowed preview pattern:

- `https://*.vercel.app` via regex `https://.*\.vercel\.app`

---

## 10. Free-tier notes

- Render Free sleeps after idle; cold start may take 30–60s.
- Supabase Free has connection limits; production pool is kept small.
- Gmail consumer accounts have daily send limits.
- Disk under `uploads/` is ephemeral on Render Free (Contact Form does not need persistent files).

---

## 11. Local development (no Compose)

```bash
cd backend
python -m venv .venv
# Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Set SECRET_KEY, DATABASE_URL, SMTP_PASSWORD
alembic upgrade head
uvicorn app.main:app --reload --port 8000
```

Docker Compose and Nginx were removed from this backend package so production cannot accidentally depend on a VPS layout.

---

## 12. Related files

| File | Purpose |
|------|---------|
| `backend/Dockerfile` | Render image + Alembic + Gunicorn |
| `backend/requirements.txt` | Includes `gunicorn` |
| `backend/render.yaml` | Render Blueprint |
| `backend/RENDER_DEPLOY.md` | Extended deploy notes |
| `backend/.env.example` | Env template |
| `backend/app/api/v1/contact.py` | Contact route |
| `backend/app/services/contact_service.py` | Save + email orchestration |
| `backend/app/services/email_service.py` | Contact notification |
| `backend/app/services/smtp_client.py` | Gmail STARTTLS client |

---

## 13. Final readiness

| Item | Status |
|------|--------|
| Render Ready | Pass |
| Supabase Ready | Pass |
| SMTP Ready | Pass |
| Contact API Ready | Pass |
| PostgreSQL Ready | Pass |
| Swagger Ready | Pass |
| Health Ready | Pass |
| Production Ready | Pass |

**Next action for you:** create Supabase + set Render env vars (especially `DATABASE_URL` and `SMTP_PASSWORD`) → deploy → set Vercel `NEXT_PUBLIC_API_URL` → run §8 checks.
