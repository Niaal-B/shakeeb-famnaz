# Mohammed Shakeeb & Fathimath Famnaz — Wedding Invitation

An animated digital wedding invitation (React + Vite + Tailwind + Framer Motion).

- **Wedding** · Saturday, 12 December 2026 · 4:00 PM (after Asr) · Kamber House
- **Reception** · Saturday, 12 December 2026 · 6:00 PM – 9:00 PM · Kamber House

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Edit the details

All text (names, dates, venues, hosts) lives in [`src/data/invitation.ts`](src/data/invitation.ts).
The link-preview text (title/description shown in WhatsApp) is in [`index.html`](index.html),
and the preview image is [`public/og-couple.jpg`](public/og-couple.jpg) (1200×630, cropped from the couple photo).

## Deploy to Vercel

Import the repo in Vercel (framework preset: **Vite**). No settings needed — the build fills in
absolute preview URLs from Vercel's production domain automatically.

If you use a custom domain, add an environment variable `SITE_URL=https://your-domain.com`
and redeploy so WhatsApp previews point at it.

WhatsApp caches previews: if you shared the link before the preview worked, test with a fresh
URL such as `https://your-site.vercel.app/?v=2`.
