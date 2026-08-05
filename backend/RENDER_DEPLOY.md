# ALPHARISE Contact API — Render Free Deployment Guide

Lightweight production stack for the corporate website Contact Form only.

| Layer | Service | Notes |
|-------|---------|--------|
| Frontend | Vercel (already live) | No backend UI |
| Backend | Render Free Web Service (Docker) | Contact API only |
| Database | Supabase PostgreSQL Free | Stores contact inquiries |
| Email | Gmail SMTP | Notifies `admin@alphariseinnovation.com` |

**Not used in this deployment:** Redis, Upstash, Docker Compose, Nginx/VPS, auth product features, payments, background workers, Android APIs.

Docker Compose and Nginx were **removed** from this package. Production runs only on Render’s Docker Web Service.


**Repo Root Directory on Render:** `backend`

---

## 1. Supabase PostgreSQL setup

1. Create a project at [https://supabase.com](https://supabase.com).
2. Open **Project Settings → Database**.
3. Copy a connection URI:

**Prefer Session pooler (port 5432) or Direct connection.**

```text
postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:5432/postgres?sslmode=require
```

or Direct:

```text
postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres?sslmode=require
```

4. URL-encode special characters in the password (`@` → `%40`, `#` → `%23`).
5. Paste the URI into Render as `DATABASE_URL` (no `+psycopg2` needed — the app adds it).

Avoid Transaction pooler port `6543` for Alembic migrations.

---

## 2. Gmail SMTP setup

1. Use Google account: `alphariseinnovations@gmail.com`.
2. Enable **2-Step Verification**.
3. Create an **App Password** (Google Account → Security → App passwords).
4. In Render set:

```text
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USE_TLS=true
SMTP_USE_SSL=false
SMTP_USERNAME=alphariseinnovations@gmail.com
SMTP_PASSWORD=<paste-app-password-here>
SMTP_FROM=alphariseinnovations@gmail.com
CONTACT_NOTIFY_EMAIL=admin@alphariseinnovation.com
```

Never commit the App Password.

---

## 3. Deploy on Render (no docker-compose)

1. [dashboard.render.com](https://dashboard.render.com) → **New → Web Service**.
2. Connect this Git repo.
3. Configure:

| Setting | Value |
|---------|--------|
| Name | `alpharise-api` |
| Region | Singapore (or nearest to Supabase) |
| Root Directory | `backend` |
| Runtime | **Docker** |
| Dockerfile Path | `./Dockerfile` |
| Instance | **Free** |
| Health Check Path | `/health` |

4. Add environment variables (section 4).
5. Deploy and wait until healthy.
6. Copy the service URL, e.g. `https://alpharise-api.onrender.com`.

Optional Blueprint: `backend/render.yaml` (same Root Directory = `backend`).

### Startup command (inside Dockerfile)

```text
alembic upgrade head && gunicorn -k uvicorn.workers.UvicornWorker -w 1 -b 0.0.0.0:$PORT app.main:app
```

Docker Compose is not part of this project anymore. Render runs the Dockerfile directly.

---

## 4. Render environment variables

### Required

| Key | Value |
|-----|--------|
| `SECRET_KEY` | Auto-generate in Render (≥32 chars) |
| `DATABASE_URL` | Supabase PostgreSQL URI |
| `SMTP_PASSWORD` | Gmail App Password |
| `APP_ENV` | `production` |
| `APP_DEBUG` | `false` |

### SMTP

| Key | Value |
|-----|--------|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USE_TLS` | `true` |
| `SMTP_USE_SSL` | `false` |
| `SMTP_USERNAME` | `alphariseinnovations@gmail.com` |
| `SMTP_FROM` | `alphariseinnovations@gmail.com` |
| `SMTP_FROM_NAME` | `ALPHARISE` |
| `CONTACT_NOTIFY_EMAIL` | `admin@alphariseinnovation.com` |

### CORS

| Key | Value |
|-----|--------|
| `CORS_ORIGINS` | `https://alphariseinnovation.com,https://www.alphariseinnovation.com` |
| `CORS_ORIGIN_REGEX` | `https://.*\.vercel\.app` |

### Recommended

| Key | Value |
|-----|--------|
| `APP_NAME` | `ALPHARISE API` |
| `APP_VERSION` | `1.0.0` |
| `API_V1_PREFIX` | `/api/v1` |
| `LOG_LEVEL` | `INFO` |
| `HOST` | `0.0.0.0` |
| `WEB_CONCURRENCY` | `1` |
| `BOOTSTRAP_ADMIN_EMAIL` | `admin@alphariseinnovation.com` |
| `BOOTSTRAP_ADMIN_PASSWORD` | strong unique password |
| `BOOTSTRAP_ADMIN_FULL_NAME` | `ALPHARISE Admin` |

### Do not set

| Key | Reason |
|-----|--------|
| `PORT` | Render injects automatically |
| `REDIS_URL` | Not required for Contact-only Free stack |

---

## 5. Contact API behavior

`POST /api/v1/contact`

1. Validates body (`full_name`, `email`, `phone`, `company?`, `subject`, `message`)
2. Saves row to PostgreSQL (`contact_inquiries`)
3. Sends Gmail notification to `admin@alphariseinnovation.com`
4. Returns `201` success message
5. On SMTP failure after DB save → `502` with clear error (inquiry still stored)

Swagger: `/docs`  
Health: `/health` (expects `database` + `smtp` ok; `redis` = `disabled` when unset)

---

## 6. Post-deploy checks

```bash
curl -s https://YOUR-SERVICE.onrender.com/health
curl -s -o /dev/null -w "%{http_code}\n" https://YOUR-SERVICE.onrender.com/docs

curl -s -X POST https://YOUR-SERVICE.onrender.com/api/v1/contact \
  -H "Content-Type: application/json" \
  -H "Origin: https://alphariseinnovation.com" \
  -d "{\"full_name\":\"Test User\",\"email\":\"test@example.com\",\"phone\":\"+919168020295\",\"company\":\"ALPHARISE\",\"subject\":\"Render check\",\"message\":\"Contact API production test.\"}"
```

Expect HTTP `201` and an email in the admin inbox.

---

## 7. Vercel frontend wiring

In Vercel env (already deployed site):

```text
NEXT_PUBLIC_API_URL=https://YOUR-SERVICE.onrender.com
```

No trailing slash. Redeploy frontend after changing this value.

---

## 8. Uploads & logs

- `uploads/` exists in the image for future file features.
- Contact Form does **not** require file uploads.
- Render Free disk is **ephemeral** — files do not persist across deploys.
- Request logs go to stdout (`X-Request-ID`, path, status) → visible in Render → Logs.

---

## 9. Free-tier notes

- Render Free sleeps after idle; first request may take 30–60s.
- Supabase Free has connection limits — production pool is kept small.
- Gmail has daily send limits on consumer accounts.

---

## 10. Production checklist

- [ ] Supabase project + `DATABASE_URL` with `sslmode=require`
- [ ] Gmail App Password in `SMTP_PASSWORD`
- [ ] `SECRET_KEY` set
- [ ] CORS origins + Vercel regex set
- [ ] `/health` green (`database`/`smtp` ok, redis disabled)
- [ ] `/docs` loads
- [ ] `POST /api/v1/contact` → 201 + email
- [ ] Vercel `NEXT_PUBLIC_API_URL` points to Render URL
- [ ] Live form on https://alphariseinnovation.com/contact works

---

## Related files

| File | Role |
|------|------|
| `Dockerfile` | Render image + Alembic + Gunicorn |
| `requirements.txt` | Includes `gunicorn` |
| `render.yaml` | Optional Blueprint |
| `PRODUCTION_DEPLOYMENT_REPORT.md` | Full production report |
| `app/core/config.py` | Env, CORS, Supabase URL normalize, SMTP |
