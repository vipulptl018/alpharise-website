# Render Free Setup — ALPHARISE Contact API (Resend)

**Root Directory:** `backend`  
**Stack:** Render Free + Supabase PostgreSQL + Resend HTTPS  

---

## 1. Deploy

1. New → Web Service → connect repo  
2. Root Directory = `backend`  
3. Runtime = Docker, Health Check = `/health`, Plan = Free  
4. Set environment variables below  
5. Deploy  

## 2. Environment variables

| Key | Value |
|-----|--------|
| `SECRET_KEY` | Generate (≥32 chars) |
| `DATABASE_URL` | Supabase URI |
| `RESEND_API_KEY` | `re_...` |
| `RESEND_FROM` | `ALPHARISE <onboarding@resend.dev>` |
| `CONTACT_NOTIFY_EMAIL` | `admin@alphariseinnovation.com` |
| `APP_ENV` | `production` |
| `APP_DEBUG` | `false` |
| `CORS_ORIGINS` | `https://alphariseinnovation.com,https://www.alphariseinnovation.com` |
| `CORS_ORIGIN_REGEX` | `https://.*\.vercel\.app` |

Do **not** set `PORT`. Do **not** set any Gmail / legacy mail-port variables.

## 3. Smoke tests

```bash
curl -s BASE/health
curl -s -X POST BASE/api/v1/contact -H "Content-Type: application/json" \
  -d "{\"full_name\":\"Test\",\"email\":\"test@example.com\",\"phone\":\"+919168020295\",\"subject\":\"Hi\",\"message\":\"Resend production test message.\"}"
```

Expect `201` and `{ "success": true, "message": "Message sent successfully." }`
