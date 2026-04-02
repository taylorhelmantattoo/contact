# ACCEPTANCE

## Functional acceptance
- [ ] `index.html` displays a Studio Location card with Soul Fire Tattoo Studio name and address
- [ ] "Open in Maps" button on `index.html` opens Google Maps to Soul Fire Tattoo Studio, London, Ontario
- [ ] "Chat on Instagram" button on `index.html` resolves to `https://ig.me/m/taylorhelmantattoo`
- [ ] Address in `policies.html` FAQ is tappable and opens Google Maps to the same location
- [ ] No regression to existing booking buttons, availability card, or email-save flow

## UX / visual acceptance
- [ ] Location card matches existing `content-card` styling (frosted glass surface, border, border-radius, shadow)
- [ ] "Chat on Instagram" button visually consistent with other `btn btn-dark` buttons in the CTA stack
- [ ] No layout overflow or wrapping issues at 375px viewport width (mobile)
- [ ] No layout overflow at 760px max-width (desktop)

## Technical acceptance
- [ ] All external links use `target="_blank" rel="noopener noreferrer"` (security requirement)
- [ ] No JavaScript changes required — pure HTML/CSS additions
- [ ] No console errors in DevTools on either file
- [ ] No broken internal links or missing assets introduced
- [ ] Maps URL uses the `search` API form (no API key required): `https://www.google.com/maps/search/?api=1&query=…`
- [ ] Instagram DM URL uses `https://ig.me/m/` scheme (no login-wall for mobile)
