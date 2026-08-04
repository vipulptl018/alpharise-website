# ALPHARISE Production API

Enterprise FastAPI backend for **ALPHARISE INNOVATION PRIVATE LIMITED**.

Powers:

- Corporate website integrations
- TechRise Academy leads
- Careers / Host / Creator registrations
- Blog CMS APIs
- Admin dashboard analytics
- Social Voice Phase 2 data model (calling deferred)

## Stack

Python 3.13 · FastAPI · PostgreSQL · SQLAlchemy 2 · Alembic · Pydantic v2 · JWT · Redis (optional) · Docker · Nginx

## Architecture

Clean architecture layers:

- `app/api/v1` — HTTP adapters
- `app/schemas` — Pydantic contracts
- `app/services` — business logic
- `app/repositories` — persistence
- `app/models` — SQLAlchemy ORM
- `app/core` — config, security, logging
- `app/deps` — dependency injection

## Quick start (Docker)

```bash
cd backend
cp .env.example .env
# edit SECRET_KEY and SMTP settings
docker compose up --build
```

- API: http://localhost:8000  
- Nginx: http://localhost:8080  
- Swagger: http://localhost:8000/docs  
- ReDoc: http://localhost:8000/redoc  

Bootstrap admin (from `.env`):

- Email: `BOOTSTRAP_ADMIN_EMAIL`
- Password: `BOOTSTRAP_ADMIN_PASSWORD`

## Local development

```bash
python -m venv .venv
# Windows
.venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
alembic upgrade head
uvicorn app.main:app --reload --port 8000
pytest
```

## Key endpoints

| Method | Path | Auth |
|--------|------|------|
| POST | `/api/v1/contact` | Public |
| POST | `/api/v1/newsletter` | Public |
| POST | `/api/v1/academy/enquiries` | Public |
| POST | `/api/v1/careers/applications` | Public (multipart) |
| POST | `/api/v1/hosts/register` | Public |
| POST | `/api/v1/creators/register` | Public |
| GET/POST | `/api/v1/blog/*` | Public read / staff write |
| POST | `/api/v1/auth/login` | Public |
| GET | `/api/v1/dashboard/stats` | Staff |
| GET | `/health` | Public |

Website contact form expects:

`POST ${NEXT_PUBLIC_API_URL}/api/v1/contact`

CORS allows:

- `http://localhost:3000`
- `https://alphariseinnovation.com`
- `https://www.alphariseinnovation.com`

## Social Voice Phase 2

Database models are ready for profiles, wallets, coin packages, transactions, gifts, leaderboard, notifications, reports, blocks, withdrawals, call history, and community reports.

Calling functionality is intentionally not implemented yet. See `/api/v1/social-voice/status`.

## Production checklist

1. Set a long random `SECRET_KEY`
2. Configure real SMTP credentials
3. Change bootstrap admin password after first login
4. Put TLS termination in front of Nginx
5. Back up PostgreSQL regularly
6. Keep `uploads/` on persistent volume

## License

Proprietary — ALPHARISE INNOVATION PRIVATE LIMITED
