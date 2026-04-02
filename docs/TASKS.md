# TASKS

## TASK-001 — CSS additions (`index.html`)

Description:
- Add `.location-name` and `.location-address` CSS rules to the `<style>` block

Steps:
- [ ] Open `index.html` and locate the `<style>` block
- [ ] Insert after the last existing rule (before `</style>`): `.location-name { font-weight: 700; font-size: 15px; margin: 0 0 2px; }` and `.location-address { font-size: 14px; color: var(--text-soft); line-height: 1.55; margin: 0 0 14px; }`

Acceptance Criteria:
- CSS rules are present and do not conflict with existing selectors

Status: PENDING

---

## TASK-002 — Location card (`index.html`)

Description:
- Insert a new `content-card` div for the studio location after the availability section and before the `intro-card` ("Save Taylor's Email" heading)

Steps:
- [ ] Locate the `intro-card` div with heading "Save Taylor's Email" in `index.html`
- [ ] Insert location card block immediately before that div
- [ ] Card must contain: `section-label` "Studio Location", `.location-name`, `.location-address`, `btn btn-dark` "Open in Maps" anchor
- [ ] Maps URL: `https://www.google.com/maps/search/?api=1&query=Soul+Fire+Tattoo+Studio+London+Ontario`
- [ ] Link must have `target="_blank" rel="noopener noreferrer"`

Acceptance Criteria:
- Card renders with correct name, address, and working Maps link
- Style matches existing `content-card` appearance

Status: PENDING

---

## TASK-003 — Instagram DM button (`index.html`)

Description:
- Add "Chat on Instagram" DM button to the `.cta-stack` in `.cta-card`

Steps:
- [ ] Locate the `.cta-stack` inside `.cta-card` in `index.html`
- [ ] Append after the "View My Work" `<a>` button: `<a class="btn btn-dark" href="https://ig.me/m/taylorhelmantattoo" target="_blank" rel="noopener noreferrer">Chat on Instagram</a>`

Acceptance Criteria:
- Button appears in CTA stack, styled as `btn btn-dark`
- Link opens `https://ig.me/m/taylorhelmantattoo`

Status: PENDING

---

## TASK-004 — Tap-to-map address (`policies.html`)

Description:
- Make the plain-text studio address in the FAQ section tappable by wrapping it in an anchor

Steps:
- [ ] Locate the address block containing "Soul Fire Tattoo Studio" and "227 Wharncliffe Road South" in `policies.html`
- [ ] Wrap the address lines in `<a href="https://www.google.com/maps/search/?api=1&query=Soul+Fire+Tattoo+Studio+London+Ontario" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:underline;">...</a>`

Acceptance Criteria:
- Address is tappable and opens Google Maps to the correct location

Status: PENDING

---

## TASK-005 — Validation

Description:
- Confirm all changes work correctly at desktop and mobile viewport widths

Steps:
- [ ] Open `index.html` in browser — confirm location card and Maps link work
- [ ] Confirm Instagram DM button is visible and link is correct
- [ ] Open `policies.html` — confirm address is tappable and opens Maps
- [ ] Check 375px mobile viewport — no layout overflow
- [ ] Confirm no DevTools console errors on either page

Acceptance Criteria:
- All acceptance criteria in `docs/ACCEPTANCE.md` are met

Status: PENDING

---

## TASK-006 — Record handoff

Description:
- Update `docs/HANDOFF.md` with completed work

Steps:
- [ ] List files changed
- [ ] List validation performed
- [ ] Note any deviations from plan

Acceptance Criteria:
- `docs/HANDOFF.md` reflects actual changes made

Status: PENDING