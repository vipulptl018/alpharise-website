# Render Free Setup — ALPHARISE Contact API

Deploy the FastAPI Contact backend on **Render Free** using Docker.

**Root Directory:** `backend`  
**Stack:** Render + Supabase PostgreSQL + Gmail SMTP  
**Not included:** Redis, auth, payments, workers, Android APIs

---

## 1. Prerequisites

- [ ] GitHub/GitLab repo pushed with latest `backend/`
- [ ] Supabase project created — see `SUPABASE_SETUP.md`
- [ ] Gmail App Password ready for `alphariseinnovations@gmail.com`
- [ ] Frontend already on Vercel

---

## 2. Exact Render deployment steps

1. Open [https://dashboard.render.com](https://dashboard.render.com).
2. Click **New → Web Service**.
3. Connect the ALPHARISE repository.
4. Configure:

| Setting | Exact value |
|---------|-------------|
| Name | `alpharise-api` |
| Region | Singapore (or nearest to Supabase) |
| **Root Directory** | `backend` |
| Runtime | **Docker** |
| Dockerfile Path | `./Dockerfile` |
| Docker Context | `.` |
| Instance type | **Free** |
| Health Check Path | `/health` |
| Auto-Deploy | Yes (optional) |

5. Open **Environment** and add variables from §3.
6. Click **Create Web Service**.
7. Wait for build + deploy (first build can take several minutes).
8. Copy the service URL, e.g.:

```text
https://alpharise-api.onrender.com
```

### Optional: Blueprint

Use `backend/render.yaml` via **New → Blueprint**.  
Still set secrets: `DATABASE_URL`, `SMTP_PASSWORD`.

---

## 3. Render environment variables

### Required

| Key | Value |
|-----|--------|
| `SECRET_KEY` | Click **Generate** in Render (≥ 32 chars) |
| `DATABASE_URL` | Supabase URI from `SUPABASE_SETUP.md` |
| `SMTP_PASSWORD` | Gmail App Password |
| `APP_ENV` | `production` |
| `APP_DEBUG` | `false` |
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USERNAME` | `alphariseinnovations@gmail.com` |
| `SMTP_FROM` | `alphariseinnovations@gmail.com` |
| `CONTACT_NOTIFY_EMAIL` | `admin@alphariseinnovation.com` |
| `CORS_ORIGINS` | `https://alphariseinnovation.com,https://www.alphariseinnovation.com` |

### Recommended

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
| `PORT` | Render injects automatically |
| `REDIS_URL` | Not used |

---

## 4. Dockerfile / Gunicorn (already configured)

Startup inside the image:

```bash
alembic upgrade head && gunicorn -k uvicorn.workers.UvicornWorker -w 1 -b 0.0.0.0:$PORT app.main:app
```

Verified in `backend/Dockerfile`.

---

## 5. After deploy — smoke tests

Replace `BASE` with your Render URL.

```bash
curl -s BASE/health
curl -s -o /dev/null -w "%{http_code}\n" BASE/docs

curl -s -X POST BASE/api/v1/contact \
  -H "Content-Type: application/json" \
  -H "Origin: https://alphariseinnovation.com" \
  -d "{\"full_name\":\"Test User\",\"email\":\"test@example.com\",\"phone\":\"+919168020295\",\"company\":\"ALPHARISE\",\"subject\":\"Render smoke\",\"message\":\"Contact API production smoke test.\"}"
```

Expect:

| Check | Result |
|-------|--------|
| `/health` | 200 — application ok, database ok (SMTP is not probed) |
| `/docs` | 200 |
| Contact POST | **201 Created** |
| Supabase | New row in `contact_inquiries` |
| Gmail | Email to `admin@alphariseinnovation.com` |

---

## 6. Free tier behavior

- Service may sleep after ~15 minutes idle.
- First request after sleep can take 30–60 seconds.
- This is normal on Render Free.

---

## 7. Rollback steps

1. Render → your Web Service → **Events** / **Deploys**.
2. Open the last known good deploy.
3. Click **Rollback** (or redeploy the previous commit).
4. Confirm `/health` returns 200.
5. If env vars caused the failure, fix `DATABASE_URL` / `SMTP_PASSWORD` and **Manual Deploy**.

Git rollback (if needed):

```bash
git revert HEAD
git push
```

(Render auto-deploys the new commit if Auto-Deploy is on.)

---

## 8. Logs

Render → Service → **Logs**

Look for:

- Alembic migration success
- Gunicorn / Uvicorn worker start
- `request completed` with `path=/api/v1/contact` and `status_code=201`
- `Email sent to=admin@alphariseinnovation.com`
