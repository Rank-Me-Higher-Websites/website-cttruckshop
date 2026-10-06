# cttruckshop.com — CT Truck & Trailer Shop (Phoenix)

Vite + React SPA. Push to `main` auto-deploys (VPS 2.24.92.100 pulls, builds, Caddy serves `dist/`; Cloudflare in front, 4h edge cache — never request a URL before its deploy is live or Cloudflare caches the SPA fallback for it). Deploy details: `deploy/README.md`.

## Languages (en / es / ru)
- English is unprefixed (`/about`); Spanish/Russian live under `/es/...` and `/ru/...`. `src/i18n/lang.ts` reads the prefix once and the router runs with that basename, so `<Link>`/`navigate()` stay in-language. Switching = full page load (`LanguageSwitcher.tsx`).
- Page text is NOT in components as keys: `src/i18n/domTranslator.ts` swaps rendered English text using `src/i18n/dict/{es,ru}.json` (keys = whitespace-collapsed English). Text split by inline highlights (`Foo <span>Bar</span> Baz`) uses one key of slots joined by ` ⟦|⟧ `, value with the same slot count/order.
- **Any new or changed English copy (incl. SEO titles/descriptions, blog titles) needs entries in both dicts**, otherwise it shows in English on /es and /ru. Find gaps: open `/es/...` and read `window.__i18nMissing` in the console. Note: Helmet titles only update when the tab is visible (rAF) — in a hidden preview pane, patch `requestAnimationFrame` first.
- Blog bodies are translated whole: `src/i18n/blog/{es,ru}/<slug>.json` (`{content}`), loaded by `BlogContent`. New n8n auto-posts have no translation → English body on /es and /ru until one is added. Add `data-no-translate` to anything the DOM translator must skip.
- Build: `scripts/inject-meta.ts` writes per-route HTML for all 3 languages (translated title/description from the dicts, hreflang alternates, `<html lang>`); `scripts/generate-sitemap.ts` adds `/es` + `/ru` URLs.
- Leads (`LeadForm.tsx` → n8n) carry `language` (en/es/ru); the service value stays English.
- Top-level menu labels use short es/ru versions (`SHORT_NAV_LABELS` in `Header.tsx`), not the dicts — full translations wrap the fixed header to 3 lines and hide the top of every page (`main` has a fixed `lg:pt-28`). Keep new menu labels short in all languages.
