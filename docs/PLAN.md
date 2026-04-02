# PLAN

## Objective

Add a **Studio Location card** and a **Chat / DM link** to `index.html` so first-time visitors can immediately see where Soul Fire Tattoo Studio is and open a direct Instagram conversation with Taylor Helman.

---

## Scope

What is included:
- A new `content-card` section in `index.html` showing studio name, address, and a tap-to-map button
- An "Chat on Instagram" DM button added to the existing `.cta-stack` in `index.html`
- Wrap the existing plain-text address in `policies.html` FAQ with a tap-to-map anchor link

What is NOT included:
- Third-party live chat widgets (Intercom, Crisp, Tawk, etc.)
- Back-end or server changes
- Changes to `availability.html` or `portfolio.html`
- Any Google Maps embed iframe (link-out only, no API key needed)

---

## Relevant Files

| File | Role |
|---|---|
| `index.html` | Main landing page — location card and Instagram DM button inserted here |
| `policies.html` | FAQ address block (lines ~508–513) — wrap with tap-to-map link |
| `docs/TASKS.md` | Builder task checklist |
| `docs/ACCEPTANCE.md` | Acceptance criteria |
| `docs/RISKS.md` | Risk register and rollback plan |

---

## Proposed Changes

### 1. `index.html` — Studio Location card (new `content-card`)

Insert after the availability card, before the "Save Taylor's Email" `intro-card`:

```html
<div class="content-card">
  <div class="section-label">Studio Location</div>
  <p class="location-name">Soul Fire Tattoo Studio</p>
  <p class="location-address">
    227 Wharncliffe Road South<br>
    London, Ontario, Canada
  </p>
  <a class="btn btn-dark"
     href="https://www.google.com/maps/search/?api=1&query=Soul+Fire+Tattoo+Studio+London+Ontario"
     target="_blank" rel="noopener noreferrer">Open in Maps</a>
</div>
```

Add to the `<style>` block:

```css
.location-name    { font-weight: 700; font-size: 15px; margin: 0 0 2px; }
.location-address { font-size: 14px; color: var(--text-soft); line-height: 1.55; margin: 0 0 14px; }
```

### 2. `index.html` — Instagram DM button

Append inside the `.cta-stack` in `.cta-card`, after the "View My Work" `<a>` button:

```html
<a class="btn btn-dark"
   href="https://ig.me/m/taylorhelmantattoo"
   target="_blank" rel="noopener noreferrer">Chat on Instagram</a>
```

### 3. `policies.html` — Tap-to-map address

Wrap the existing plain-text address in the FAQ section with an anchor:

```html
<a href="https://www.google.com/maps/search/?api=1&query=Soul+Fire+Tattoo+Studio+London+Ontario"
   target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:underline;">
  Soul Fire Tattoo Studio<br>
  227 Wharncliffe Road South<br>
  London, Ontario, Canada
</a>
```

---

## Order of Operations

1. Read exact insertion line numbers in `index.html` (before intro-card; inside .cta-stack)
2. Add `.location-name` and `.location-address` CSS inside `<style>` block of `index.html`
3. Insert location card HTML in `index.html`
4. Insert Instagram DM `<a>` button in `index.html` `.cta-stack`
5. Wrap address text in `policies.html` with tap-to-map anchor
6. Validate in browser (desktop + 375px mobile viewport)

---

## Validation Strategy

How we confirm this works:
- Open `index.html` locally — location card renders with correct name and address
- "Open in Maps" resolves to Google Maps results for Soul Fire Tattoo Studio, London ON
- "Chat on Instagram" opens `https://ig.me/m/taylorhelmantattoo`
- Open `policies.html` — address is underlined/tappable and resolves to Maps
- No layout overflow at 375px or 760px viewport widths
- No DevTools console errors on either page

---

## Rollback Strategy

How we undo changes safely:
- `git checkout -- index.html policies.html` reverts all changes instantly
- No third-party scripts added, no build step, no server restart required
- Manual fallback: remove the location card `<div>` from `index.html`, remove the Instagram `<a>` from `.cta-stack`, remove the wrapping `<a>` from the address in `policies.html`