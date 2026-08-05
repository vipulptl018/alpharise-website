# Resend Email Setup — ALPHARISE Contact API

Contact emails use the **Resend HTTPS API** (works on Render Free).

## 1. Create a Resend account

1. Sign up at [https://resend.com](https://resend.com).
2. Create an API key → `RESEND_API_KEY`.
3. Tests: `RESEND_FROM=ALPHARISE <onboarding@resend.dev>`
4. Production: verify domain, then e.g. `RESEND_FROM=ALPHARISE <noreply@alphariseinnovation.com>`

## 2. Environment variables

| Key | Example |
|-----|---------|
| `RESEND_API_KEY` | `re_xxxxxxxx` |
| `RESEND_FROM` | `ALPHARISE <onboarding@resend.dev>` |
| `CONTACT_NOTIFY_EMAIL` | `admin@alphariseinnovation.com` |

## 3. Render Dashboard

```text
RESEND_API_KEY=re_...
RESEND_FROM=ALPHARISE <onboarding@resend.dev>
CONTACT_NOTIFY_EMAIL=admin@alphariseinnovation.com
```

## 4. Contact flow

`POST /api/v1/contact` → validate → save PostgreSQL → Resend →

```json
{ "success": true, "message": "Message sent successfully." }
```

On failure → HTTP **502** with `detail` = Resend exception text.
