# Vercel Environment Setup — Connect Frontend to Render API

The ALPHARISE Next.js site is already on Vercel.  
After Render is live, point the Contact Form at the Render API URL.

**Do not change UI or Contact Form code** — only update environment variables.

---

## 1. Get your Render API URL

From Render → Web Service → copy the public URL, for example:

```text
https://<your-render-service>.onrender.com
```

Use the exact URL Render shows. The service name in Render can differ from the `alpharise-api` name in `render.yaml`, so check it before pasting (a wrong name returns 404 with `x-render-routing: no-server`). No trailing slash.

Do not use `https://api.alphariseinnovation.com` for this API unless you point that hostname (CNAME) at this Render service. Today it serves a different AlphaRise backend (Sinchan Mitra), which has no `/api/v1/contact` and rejects this site's CORS origin.

Render Free sleeps when idle, so the first request after a pause can take up to about a minute. The site's forms wait 60 seconds before they report a timeout.

---

## 2. Exact Vercel update steps

1. Open [https://vercel.com](https://vercel.com) → your ALPHARISE project.
2. Go to **Settings → Environment Variables**.
3. Set (Production, and Preview if you use preview Contact tests):

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_API_URL` | `https://<your-render-service>.onrender.com` |
| `NEXT_PUBLIC_SITE_URL` | `https://www.alphariseinnovation.com` |

4. Confirm there is **no** trailing slash on `NEXT_PUBLIC_API_URL`.
5. Confirm the value is a real URL — not the literal text `NEXT_PUBLIC_API_URL`.
6. Click **Save**.
7. Go to **Deployments** → open the latest production deployment → **Redeploy**  
   (required so `NEXT_PUBLIC_*` values are baked into the client bundle).

---

## 3. What the frontend calls

The Contact form posts to:

```text
${NEXT_PUBLIC_API_URL}/api/v1/contact
```

The Newsletter form on `/blog` posts to:

```text
${NEXT_PUBLIC_API_URL}/api/v1/newsletter
```

Example:

```text
https://<your-render-service>.onrender.com/api/v1/contact
```

---

## 4. CORS (already configured on backend)

Backend allows:

- `https://alphariseinnovation.com`
- `https://www.alphariseinnovation.com`
- `https://*.vercel.app` (preview deployments)

If you test from a Vercel preview URL, Contact should still work.

---

## 5. Verify from the live site

1. Open https://www.alphariseinnovation.com/contact
2. Submit the form with a real test message.
3. Expect success message in the UI.
4. Confirm:
   - Row in Supabase `contact_inquiries`
   - Email at `admin@alphariseinnovation.com`

Browser DevTools → Network → `contact` request:

| Expect | Value |
|--------|--------|
| URL | `https://…onrender.com/api/v1/contact` |
| Status | `201` |
| No CORS error | Pass |

---

## 6. Rollback (Vercel env)

1. Vercel → Settings → Environment Variables.
2. Restore previous `NEXT_PUBLIC_API_URL` (e.g. old API host) if needed.
3. Redeploy production.

---

## 7. Common mistakes

| Mistake | Fix |
|---------|-----|
| Forgot to redeploy after env change | Redeploy production |
| Trailing slash on API URL | Remove it |
| Used `http://localhost:8000` in Production | Use Render HTTPS URL |
| Typed variable name as the value | Paste the real `https://…` URL |
