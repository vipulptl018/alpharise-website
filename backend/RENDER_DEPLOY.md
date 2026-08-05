# Render Free Deployment Guide — Contact API + Resend

| Layer | Service |
|-------|---------|
| Frontend | Vercel |
| Backend | Render Free (Docker) |
| Database | Supabase PostgreSQL |
| Email | **Resend** (HTTPS → api.resend.com) |

See also: `RESEND_SETUP.md`, `RENDER_SETUP.md`, `SUPABASE_SETUP.md`.

## Contact flow

Validate → PostgreSQL save → Resend email →  
`{ "success": true, "message": "Message sent successfully." }`

## Required secrets

```text
SECRET_KEY=
DATABASE_URL=
RESEND_API_KEY=
RESEND_FROM=ALPHARISE <onboarding@resend.dev>
CONTACT_NOTIFY_EMAIL=admin@alphariseinnovation.com
```
