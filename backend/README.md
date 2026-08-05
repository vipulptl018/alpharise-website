# ALPHARISE API — Contact backend (Render Free)

Lightweight FastAPI service for the corporate website **Contact Form** only.

**Production:** Render Free + Supabase PostgreSQL + Gmail SMTP  
**Not used:** Docker Compose, Nginx/VPS, Redis, Celery, Android APIs

## Deploy docs

- **[FINAL_DEPLOYMENT_REPORT.md](./FINAL_DEPLOYMENT_REPORT.md)** — final status board
- **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)** — ordered checklist
- **[SUPABASE_SETUP.md](./SUPABASE_SETUP.md)** — database URL
- **[RENDER_SETUP.md](./RENDER_SETUP.md)** — Render Free steps + rollback
- **[VERCEL_ENV_SETUP.md](./VERCEL_ENV_SETUP.md)** — frontend env wiring

## Render settings

| Setting | Value |
|---------|--------|
| Root Directory | `backend` |
| Runtime | Docker |
| Health Check | `/health` |
| Startup | `alembic upgrade head && gunicorn -k uvicorn.workers.UvicornWorker -w 1 -b 0.0.0.0:$PORT app.main:app` |

## Local run (no Compose)

```bash
python -m venv .venv
# Windows
.venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Set SECRET_KEY, DATABASE_URL, SMTP_PASSWORD
alembic upgrade head
uvicorn app.main:app --reload --port 8000
```

- API: http://localhost:8000  
- Swagger: http://localhost:8000/docs  
- Health: http://localhost:8000/health  

Website Contact Form expects:

`POST ${NEXT_PUBLIC_API_URL}/api/v1/contact`

## License

Proprietary — ALPHARISE INNOVATION PRIVATE LIMITED
