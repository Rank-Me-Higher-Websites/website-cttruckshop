# CT Truck and Trailer Shop — Local SEO Fix Report

**Date:** 2026-05-26
**Previous score:** 59 / 100 (May 15, 2026 audit)
**Branch:** `fix/local-seo-nap-schema-sweep`

---

## What the previous report flagged

| Priority | Issue | Status |
|---|---|---|
| HIGH | NAP mismatch — business name `&` vs `and`, address missing unit `A` | **Fixed on-site** |
| HIGH | Not appearing in local pack for 4 queries (diesel, mobile, heavy-duty, DOT) | **On-page targeting strengthened** (pack ranking also needs GBP-side work — see below) |
| MEDIUM | LocalBusiness schema missing `openingHours` | **Fixed** |
| MEDIUM | 1–2 secondary GBP categories | *GBP-side — see action list* |
| MEDIUM | Review response rate 45% | *GBP-side — see action list* |

---

## What changed on the website (this PR)

### 1. NAP unified to match the Google Business Profile

The GBP is the authoritative source. The site now matches it exactly.

- **Legal name:** `CT Truck and Trailer Shop` (was `CT Truck & Trailer Shop`)
- **Alternate name retained for branding:** `CT Truck & Trailer Shop` (via Schema.org `alternateName`)
- **Street address:** `3883 N 36th Ave A` (added the unit `A`)
- **Phone:** `(602) 830-3232` (unchanged — was already matching)

Updated in:
- `index.html` JSON-LD (LocalBusiness + Organization)
- `src/lib/schema.ts` (single source of truth for runtime schema)
- `src/components/layout/Footer.tsx` (visible site-wide footer NAP)
- `src/components/sections/MapSection.tsx` (homepage map block)
- `src/pages/Contact.tsx`, `src/pages/Locations.tsx`, `src/pages/LocationPage.tsx` (visible NAP + meta description)
- `src/pages/PrivacyPolicy.tsx`, `src/pages/TermsOfService.tsx` (legal page citations)
- `src/data/serviceAreas.ts` Phoenix `metaDescription`
- `src/pages/Index.tsx` and `src/components/sections/FAQSection.tsx` "Where are you located?" FAQ
- `src/pages/LocationPage.tsx` ZIP code corrected (`85000` → `85019`)

### 2. LocalBusiness schema completed

Added the fields the audit flagged as missing:

- `openingHours` short-form array (`["Mo-Fr 08:00-17:00"]`) alongside the existing `openingHoursSpecification`. Some parsers only look at one or the other — we now serve both.
- `alternateName` for `CT Truck & Trailer Shop`.
- `hasMap`, `currenciesAccepted`, `paymentAccepted` for richer LocalBusiness coverage.
- Updated `reviewCount` from `61` → `62` to match GBP.

### 3. Homepage targeting strengthened for the 4 missing pack queries

The previous report flagged that we don't appear in the 3-pack for:
- `diesel truck repair phoenix`
- `mobile truck repair`
- `heavy duty truck repair`
- `dot inspection phoenix`

On-page changes that improve topical relevance for these queries:

- Homepage `<title>` rewritten — now leads with `Phoenix Diesel & Heavy-Duty Truck Repair`.
- Homepage meta description rewritten to lead with `diesel truck repair`, `heavy-duty truck repair`, `mobile dispatch`, `DOT inspection`.
- `index.html` keywords meta updated with these exact phrases (front-loaded).
- OG/Twitter title and description updated to match.
- Homepage `SEOContentSection.tsx` rewritten — bold mentions of `diesel truck repair` + `heavy-duty truck repair` + `mobile truck repair`; new internal link to `/dot-inspections-phoenix-az`.
- Homepage `FAQSection.tsx` — added 4 new FAQs answering "Do you provide diesel truck repair?", "heavy-duty?", "mobile?", "DOT inspections?". These also feed the FAQPage schema so they're eligible for rich results.
- `Index.tsx` `homeFaqs` (FAQ schema) mirrors the new questions.

### 4. Sitemap fixes

- Added 14 URLs that exist as routes but were not in the sitemap (most consequential: `/commercial-fleet-repair-phoenix-az`, `/dot-inspections-phoenix-az`, `/service-areas`, and all 12 city pages under `/service-areas/:slug`).
- Bumped every `<lastmod>` to today's date so search engines re-crawl the changed pages.
- Raised priority for `/mobile-repair`, `/dot-inspections-phoenix-az`, and `/emergency-truck-repair-phoenix` (the high-intent service pages).

---

## What still needs to happen on the GBP side

These items can't be fixed in code — they live in the Google Business Profile dashboard. They're the remaining points blocking the 59 → 80+ score jump:

1. **Reply to every review** (current response rate 45%). Past + future. Even a one-line "Thanks, [name] — appreciate you choosing us!" counts. Reply within 48 hours.
2. **Add 1–2 secondary GBP categories.** Suggested: `Diesel engine repair service`, `Mobile mechanic`. Both target queries we're currently missing from the pack.
3. **Push for reviews on the 4 missing-pack queries.** Ask satisfied diesel / heavy-duty / mobile / DOT customers to mention the service type in their review wording (e.g. "got my DOT inspection done same day"). Service-mention reviews are one of the strongest local-pack signals.
4. **Photos.** 129 is healthy but keep adding — especially shop-floor photos of diesel engine work, DOT inspection stickers, and mobile dispatch trucks on-site at job locations. Tag photos with locations across the metro.
5. **Local citations.** Quick audit of Yelp, Yellow Pages, BBB, Truckers Report directory, and Manta — anywhere the business is listed, make sure it now reads exactly `CT Truck and Trailer Shop` and `3883 N 36th Ave A, Phoenix, AZ 85019`.

---

## Expected impact

| Metric | Before | After (this PR) | After GBP follow-through |
|---|---|---|---|
| NAP consistency (website ↔ GBP) | Mismatch | **Match** | Match |
| Schema completeness | 90% | **100%** | 100% |
| Sitemap coverage | 45 URLs (14 routes missing) | **59 URLs** | 59 URLs |
| Homepage targets all 4 missing pack queries in meta | No | **Yes** | Yes |
| Review response rate | 45% | 45% | **≥ 90%** (manual) |
| GBP secondary categories | 2 | 2 | **3–4** (manual) |
| Projected score | 59 | ~70 | **80+** |

The website changes resolve every code-level finding from the May 15 audit. Re-running the audit after this PR merges should reflect the NAP and schema fixes immediately. The local-pack rank movement will follow once GBP-side work lands and Google re-crawls (typically 2–4 weeks).
