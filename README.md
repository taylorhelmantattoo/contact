# Taylor Helman Tattoo — Website

**Live site:** [taylorhelmantattoo.github.io](https://taylorhelmantattoo.github.io)  
**Hosted via:** GitHub Pages

---

## Purpose

This site is the link-in-bio destination for Taylor Helman's tattoo Instagram account. Every visitor arrives from a mobile device inside Instagram's in-app browser. The entire site exists to convert that Instagram traffic into booked clients and saved contacts.

---

## Development Priorities

### 1. Mobile-first, always
The overwhelming majority of visitors tap through from Instagram on their phone. Every layout decision, font size, tap target, and interaction must be designed for a 390px–430px screen first. Desktop is secondary.

- Minimum tap target size: **44×44px**
- Body text minimum: **14px**
- Line height minimum: **1.6** for readability on small screens
- No hover-only interactions — everything must work with touch
- Use `env(safe-area-inset-bottom)` for sticky elements so they clear the iPhone home indicator

### 2. Conversion-focused
The goal of every page is to drive one of three actions:

| Priority | Action | Link |
|----------|--------|------|
| 1 | Start a tattoo request | inkde.sk booking form |
| 2 | Book a touch-up evaluation | inkde.sk booking form |
| 3 | Save Taylor's email / contact card | `.vcf` file |

The sticky bottom bar keeps all three CTAs visible at all times. Do not remove or deprioritize it.

### 3. Reduce friction at every step
- Keep copy short and direct — users are on Instagram, not reading a blog
- Inline the most important information (email address visible, not hidden behind a click)
- Provide fallback paths for every action (e.g. if VCF fails, offer Copy Email)

---

## Known Issue: Instagram In-App Browser (IAB) Blocks VCF Downloads

### Problem
When a user clicks "Save Taylor's Email" from inside Instagram, the link opens in Instagram's built-in browser (WebView). This browser does **not** handle `.vcf` (vCard) file downloads — the tap either does nothing or fails silently.

This affects the most important user action on the page.

### Root cause
Instagram's IAB is a stripped-down WebView that intentionally blocks file downloads to keep users inside the app. It does not invoke the native file-save or Contacts flow that Safari and Chrome trigger when a `.vcf` is served.

### Implemented workarounds (layered approach)

**Layer 1 — `download` attribute on all VCF links**  
`<a href="/taylor-helman-tattoo.vcf" download="taylor-helman-tattoo.vcf">`  
This signals download intent to compliant browsers. Has no effect in the IG IAB but is correct practice everywhere else.

**Layer 2 — Detect Instagram's UA and show an "Open in Browser" banner**  
Instagram injects `Instagram` into the User Agent string. On detection, a dismissible banner appears at the top of the page that says:
- iPhone: "Tap ··· → Open in Safari"
- Android: "Tap ··· → Open in Chrome"

This is the most reliable path to a successful VCF save — once the user is in their native browser, the contact card works normally.

**Layer 3 — "Copy Email Address" clipboard button**  
A fallback that works inside the IAB. Uses `navigator.clipboard.writeText()` with a `document.execCommand('copy')` fallback. The button label changes to "Copied!" on success so the user gets clear confirmation.

**Layer 4 — `mailto:` link (already present)**  
`mailto:taylorhelmantattoo@inkde.sk` opens the device's native mail app directly from within the IG IAB. This is a reliable last resort for users who cannot or will not switch browser.

### What doesn't work
- JavaScript `Blob` + `URL.createObjectURL()` downloads are also blocked by the IG IAB
- `window.location` redirects to the `.vcf` are also blocked
- There is no known way to make a VCF save work *natively inside* Instagram's browser — the open-in-browser path is the only reliable solution

---

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Main landing page — email save, booking CTAs, contact details |
| `policies.html` | Policies & FAQ |
| `taylor-helman-tattoo.vcf` | vCard contact card (VERSION 3.0) |
| `CNAME` | Custom domain config for GitHub Pages |

---

## Deployment

This site is deployed automatically via **GitHub Pages** from the `main` branch. Pushing to `main` deploys within ~60 seconds.

```bash
git add .
git commit -m "describe your change"
git push origin main
```

There is no build step — everything is plain HTML/CSS/JS.

---

## Editing Guidelines

- **No frameworks, no build tools.** The site is intentionally plain HTML/CSS/JavaScript. Keep it that way — zero dependencies means zero breakage and instant load times on mobile.
- **Inline styles/scripts are acceptable** given the single-page nature of each file.
- **Test in Chrome mobile emulation AND in an actual Instagram browser** (paste the URL in an IG DM to yourself and tap it) before pushing changes to the VCF/save-email flow.
- **Color palette is intentional** — the muted rose/terracotta tones match Taylor's brand. Do not introduce new colors without a design reason.
- **Accessibility:** maintain sufficient contrast, use semantic heading hierarchy (`h1` → `h2` → `h3`), and never remove `alt` attributes from images.

---

## Testing the Instagram IAB

To test a change in the Instagram in-app browser:
1. Open Instagram DMs and send yourself a message with the site URL
2. Tap the link — it opens in the IG IAB
3. Verify the "Open in Safari/Chrome" banner appears and dismisses correctly
4. Verify the "Copy Email" button works and shows the confirmation state
5. Verify `mailto:` opens the native mail app

Alternatively use the **Kiwi Browser** on Android (allows installing Chrome extensions, easier to spoof UAs for testing).
