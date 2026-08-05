# ALPHARISE API — Contact backend (Render Free + Resend)

Lightweight FastAPI service for the corporate website **Contact Form** only.

**Production:** Render Free + Supabase PostgreSQL + **Resend** (HTTPS)

**Not used:** Gmail mail ports, Docker Compose, Nginx/VPS, Redis, Celery, Android APIs

## Deploy docs

- **[RESEND_SETUP.md](./RESEND_SETUP.md)** — Resend API keys
- **[RENDER_SETUP.md](./RENDER_SETUP.md)** — Render Free steps
- **[SUPABASE_SETUP.md](./SUPABASE_SETUP.md)** — Database URL
- **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)** — Checklist

## Local run

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Set SECRET_KEY, DATABASE_URL, RESEND_API_KEY, RESEND_FROM
alembic upgrade head
uvicorn app.main:app --reload --port 8000
```

## License

Proprietary — ALPHARISE INNOVATION PRIVATE LIMITED
