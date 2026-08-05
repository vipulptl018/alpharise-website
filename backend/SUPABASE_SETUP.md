# Supabase PostgreSQL Setup — ALPHARISE Contact API

Use **Supabase Free** as the production database for the Contact Form only.

---

## 1. Create project

1. Go to [https://supabase.com](https://supabase.com) and sign in.
2. Click **New project**.
3. Set:
   - **Name:** `alpharise-api` (or similar)
   - **Database password:** generate a strong password and save it
   - **Region:** closest to Render (e.g. Singapore / Mumbai)
4. Wait until the project is ready.

---

## 2. Get DATABASE_URL

1. Open **Project Settings → Database**.
2. Under **Connection string**, choose **URI**.
3. Prefer one of:

### Option A — Session pooler (recommended with Alembic)

Port **5432** on the pooler host.

```text
postgresql://postgres.[PROJECT-REF]:[YOUR-PASSWORD]@aws-0-[REGION].pooler.supabase.com:5432/postgres?sslmode=require
```

### Option B — Direct connection

```text
postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres?sslmode=require
```

### Do not use (for this app)

Transaction pooler on port **6543** — can break Alembic migrations.

---

## 3. Exact DATABASE_URL format for Render

Paste into Render as `DATABASE_URL` **exactly** like this (replace placeholders):

```text
postgresql://postgres.abcdefghijklmnop:YourPasswordHere@aws-0-ap-south-1.pooler.supabase.com:5432/postgres?sslmode=require
```

Rules:

| Rule | Detail |
|------|--------|
| Scheme | `postgresql://` or `postgres://` is fine |
| Driver | App auto-converts to `postgresql+psycopg2://` |
| SSL | Always include `?sslmode=require` |
| Password | URL-encode special chars (`@` → `%40`, `#` → `%23`, `%` → `%25`) |
| No quotes | Do not wrap the URL in quotes in Render UI |

---

## 4. What Alembic creates on first boot

When Render starts, Dockerfile runs:

```bash
alembic upgrade head
```

This creates tables including:

- `contact_inquiries` (Contact Form storage)

You do **not** need to create tables manually in the Supabase SQL editor.

---

## 5. Verify rows after a contact submit

1. Supabase → **Table Editor**
2. Open `contact_inquiries`
3. Confirm a new row after `POST /api/v1/contact`

Columns include: `full_name`, `email`, `phone`, `company`, `subject`, `message`, `ip_address`, `created_at`, `status`.

---

## 6. Troubleshooting

| Problem | Fix |
|---------|-----|
| Alembic fails on deploy | Use Session/Direct URI (port 5432), check password encoding |
| `SSL connection required` | Add `?sslmode=require` |
| Auth failed | Reset DB password in Supabase and update Render `DATABASE_URL` |
| Too many connections | Use Session pooler; keep Free tier load low |

---

## 7. Security

- Never commit `DATABASE_URL` to git.
- Set it only in **Render → Environment**.
- Rotate the database password if it was ever shared in chat or screenshots.
