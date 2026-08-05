# Production Deployment Report — Contact API + Resend

Gmail mail-port delivery has been removed. Contact notifications use Resend over HTTPS.

## Env

```text
RESEND_API_KEY=re_...
RESEND_FROM=ALPHARISE <onboarding@resend.dev>
CONTACT_NOTIFY_EMAIL=admin@alphariseinnovation.com
DATABASE_URL=postgresql://...
SECRET_KEY=...
```

## Related code

| File | Role |
|------|------|
| `app/services/resend_service.py` | Resend HTTPS client |
| `app/services/contact_service.py` | Validate → DB → Resend |
| `app/api/v1/contact.py` | `POST /api/v1/contact` |

## Checklist

- [ ] Resend API key on Render  
- [ ] Supabase `DATABASE_URL`  
- [ ] `POST /api/v1/contact` returns 201  
- [ ] Email arrives at `CONTACT_NOTIFY_EMAIL`  
