# RISKS

## Known risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Instagram DM URL `ig.me/m/taylorhelmantattoo` does not resolve if handle changes | Low | Low | URL is a static string — easy to update; no JS dependency |
| Google Maps search URL returns wrong result if studio moves or name changes | Low | Medium | Use address in URL as well as name; verify before deploy |
| `target="_blank"` link opens in IG in-app browser, which may block Maps | Low | Low | User can tap "Open in Safari/Chrome" from IG browser; expected behaviour |
| Location card shifts sticky CTA layout on very small screens | Low | Low | Sticky CTA is fixed-position; not affected by document flow |
| Existing `index.html` bio section already shows London, Ontario — duplication concern | Medium | Low | New card adds actionable tap-to-map; bio line is decorative context only |

## Edge cases

- **IG in-app browser**: External links opened inside the Instagram WebView may prompt "Open in Safari" — acceptable and expected; no workaround needed.
- **No Maps app installed**: Google Maps search URL opens in browser even without the native app installed.
- **Private Instagram account**: If `@taylorhelmantattoo` goes private, `ig.me/m/…` still resolves for users; DM functionality depends on account settings.
- **Address line variation**: `policies.html` uses "227 Wharncliffe Road South" while some external sources use "227 Wharncliffe Rd S" — both resolve in Maps. Keep consistent with the full form.

## Rollback plan

1. **Git revert** (preferred): `git checkout -- index.html policies.html`
2. **Manual edit**: Remove the inserted location card `<div>` block and the Instagram DM `<a>` from `index.html`; remove the wrapping `<a>` from the address in `policies.html`
3. No server restart, no database change, no build step required — rollback is immediate on file restore
4. No third-party script tags were added, so no CDN or external dependency to clean up
