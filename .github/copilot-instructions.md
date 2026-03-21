# Taylor Helman Tattoo — Copilot Instructions

## What this project is

Link-in-bio site for a tattoo artist. Every visitor comes from Instagram on mobile.
The whole site exists to convert that Instagram traffic into booked clients and saved contacts.

**Live site:** https://taylorhelmantattoo.com  
**Hosted:** GitHub Pages — pushing to `main` auto-deploys in ~60 s. No build step.

---

## Stack

**Plain HTML + CSS + inline JS only.** No frameworks, no npm, no build tools. Do not introduce
any dependencies, bundlers, or transpilers. Inline `<style>` and `<script>` tags are fine given
the single-file-per-page structure.

---

## File map

| File | Purpose |
|------|---------|
| `index.html` | Main landing page — availability widget, booking CTAs, email save, contact card |
| `availability.html` | Full availability calendar, powered by Cloudflare Worker |
| `portfolio.html` | Instagram feed (Behold widget), filterable by style |
| `policies.html` | Policies & FAQ |
| `release-form.html` | Links to `release.taylorhelmantattoo.com` (separate PHP server) |
| `taylor-helman-tattoo.vcf` | vCard contact (VERSION 3.0) |
| `cloudflare-worker/worker.js` | Availability Worker source |
| `cloudflare-worker/wrangler.toml` | Wrangler config (non-sensitive vars only) |

---

## Mobile-first (non-negotiable)

All visitors are on phones inside Instagram's in-app browser. Desktop is secondary.

- Min tap target: **44×44 px**
- Min body text: **14 px**, line-height >= 1.6
- Design at 390-430 px width first
- No hover-only interactions -- everything must work with touch
- **Never remove or deprioritize the sticky bottom bar** (`sticky-cta`) -- it keeps all primary
  CTAs visible at all times and is the main conversion driver
- Use `env(safe-area-inset-bottom)` on any fixed bottom element (iPhone home indicator)

---

## Conversion priority

1. Start a tattoo request -> inkde.sk booking form
2. Book a touch-up evaluation -> inkde.sk booking form
3. Save Taylor's email / contact card -> `.vcf` file

---

## Key URLs and identifiers -- copy exactly, never alter

| Item | Value |
|------|-------|
| Tattoo request booking | `https://inkde.sk/taylorhelmantattoo/book/018f9c9c-d2b6-50dc-5765-f9b922db88c8` |
| Touch-up booking | `https://inkde.sk/taylorhelmantattoo/book/018fa78c-7cac-733b-7204-d86cf7051d08` |
| Email address | `taylorhelmantattoo@inkde.sk` |
| Availability Worker API | `https://taylorhelmantattoo-availability.taylorhelmantattoo.workers.dev/api/availability` |
| Release form subdomain | `https://release.taylorhelmantattoo.com` |

---

## Color palette -- do not introduce new colors without a design reason

```css
--bg: #9f6d67;                          /* muted rose/terracotta -- Taylor's brand */
--surface: rgba(255,255,255,0.20);
--surface-strong: rgba(255,255,255,0.26);
--surface-border: rgba(255,255,255,0.30);
--text-dark: #1f2937;
--text-soft: rgba(31,41,55,0.82);
--text-light: #ffffff;
--btn-request: #eddecf;
--btn-touchup: #d1aa99;
--btn-email: #7a867f;
--btn-dark: #3e4442;
```

---

## Instagram in-app browser (IAB) -- critical UX constraint

Instagram's WebView **blocks `.vcf` downloads**. Five workarounds are layered in -- all must stay:

1. `download` attribute on all VCF links (correct practice everywhere; no effect in IAB)
2. UA-detected banner -> "Tap ... -> Open in Safari/Chrome" -- the most reliable path
3. "Copy Email Address" clipboard button -- works inside the IAB
4. QR code -- scanned by iPhone camera from Control Center; triggers Add to Contacts
5. `mailto:` link -- last resort, always works

Detect Instagram: `navigator.userAgent.indexOf('Instagram') !== -1`  
Android check: `/android/i.test(navigator.userAgent)`

---

## Availability system

Cloudflare Worker (`taylorhelmantattoo-availability`) queries Google Calendar free/busy and
returns sanitized JSON. Privacy guarantee: free/busy returns only opaque time blocks -- no event
titles, attendees, or descriptions.

- Edit `CONFIG` in `worker.js` to change schedule, add special days, or adjust thresholds
- Deploy with `npx wrangler deploy` from the `cloudflare-worker/` directory
- `GOOGLE_SERVICE_ACCOUNT_JSON` is a **Cloudflare encrypted secret** -- never commit it
- Working hours: **Wed-Sat, 11 AM-7 PM ET** | Cache TTL: **15 min**

Special day override format:
```js
specialDays: {
  "2026-04-12": { status: "closed",    label: "Convention" },
  "2026-05-17": { status: "flash-day", label: "Flash Day"  },
}
```

---

## Portfolio

`portfolio.html` embeds an Instagram feed via Behold (`<behold-widget>`).
Filter tabs for Micro Realism, Fine-Line Florals, Pet Portraits, and Flash are present but only
**All Work** is live -- the others are marked coming soon.

---

## Release form

Hosted at `release.taylorhelmantattoo.com` on InfinityFree (PHP + DOMPDF + PHPMailer).
Local source: `C:\TaylorHelmanTattoo\release\`  
`smtp_config.php` contains Gmail credentials -- **never commit it**.

---

## Accessibility

- Semantic heading hierarchy: `h1` -> `h2` -> `h3`
- Never remove `alt` attributes from images
- Maintain sufficient contrast on all text

---

## Deployment

```bash
# Site
git add .
git commit -m "describe change"
git push origin main        # GitHub Pages deploys in ~60 s

# Worker (after editing cloudflare-worker/worker.js)
cd cloudflare-worker
npx wrangler deploy
```
