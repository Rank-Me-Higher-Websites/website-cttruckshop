# CT Truck & Trailer Shop — SEO Execution Plan

**Generated:** 2026-05-27
**Branch:** `seo/prerender-overhaul`
**Audit source:** `~/Desktop/cttruckshop-seo/ct-truck-trailer-shop-seo-20260527-2247.{pdf,html,json}`

---

## Where we stand right now

| Metric | Value |
|---|---|
| Clicks (last 90 days) | 33 |
| Impressions | 9,127 |
| CTR | 0.36 % (down from 0.46 % prior period) |
| Avg position | 24.9 |
| Sitemap URLs | 68 |
| Indexed by Google | 31 (45.6 %) |
| Missing from index | 37 |
| Orphan URLs (indexed but not in sitemap) | 12 |
| Mobile LCP (homepage) | 6.06 s |
| Mobile LCP (top service pages) | 4.5–5.7 s |

**Root cause #1 — React SPA with no SSR.** Every URL on the site returns the same 6,515-byte HTML shell (`/index.html`). Title, H1, meta description, JSON-LD schema, and copy are all injected by JavaScript *after* Google's first paint. That single fact explains:
- 37 of 68 pages not indexed (Google sees no unique content per URL)
- Slow LCP (browser must download + execute React before any text paints)
- Same JSON-LD served on every URL (Helmet doesn't fire until JS runs)
- Poor CTR — every URL has identical preview content

**Root cause #2 — content gaps for high-impression queries we already rank for.** We're getting 145 impressions for "semi truck repair shop" at position 48.9 with no dedicated landing page. 88 impressions for "commercial truck repair" at pos 17.4 with no dedicated page. 58 impressions for "semi truck brake pads in arizona" at pos 4.4 — *one good push* gets us to position 3 and ~10x the clicks.

**Root cause #3 — cannibalization.** Three different blog posts compete for "emergency truck repair":
- `/blog/emergency-repair-services`
- `/blog/emergency-truck-repair`
- `/blog/emergency-truck-repair-solutions`

Google is splitting our authority across them and ranking none of them well.

---

## Strategy

We're going to do four things, in this order:

1. **Make the site crawlable.** Every URL must return *real, unique* HTML before any JS runs.
2. **Sharpen the pages we already rank for.** "Striking distance" queries (positions 4–20) are 80 % of the upside.
3. **Build the 2–3 dedicated landing pages we're obviously missing.**
4. **Stop fighting ourselves** — consolidate the cannibalized blog posts and clean up orphan URLs.

---

## Phase 1 — Today (this PR)

### 1.1 Add static pre-rendering to the Vite build

**What:** Run a post-build crawler that visits every route, lets React render fully, then saves the resulting HTML to `dist/<route>/index.html`.

**Tooling:** `puppeteer` + a custom `scripts/prerender.ts` we control (no abandoned `react-snap`).

**Output:**
- `dist/index.html` — homepage with full content
- `dist/services/index.html` — services page rendered
- `dist/semi-truck-tire-and-brake-repair-services-phoenix-az/index.html` — etc.
- One static HTML file per route, ~25 routes total

**Impact:** Indexation should climb from 31 → 60+ within 2–4 weeks. LCP drops 2–3 s because the browser paints text on first byte instead of after the JS bundle loads.

### 1.2 Clean up `public/sitemap.xml`

- Remove truncated URL: `/blog/dot-inspection-in-phoenix-az-what-every-fleet-owner-needs-to-know-before-the-ins`
- Add 12 indexed orphan URLs (or 301-redirect them to canonical — see 1.3)
- Add the two new landing pages from phase 2 once they ship

### 1.3 Set up 301 redirects for orphan URLs

The following 12 URLs are indexed by Google but not in our sitemap (or no longer exist). We 301 them so the link equity flows to current pages:

| Orphan URL | Redirect target |
|---|---|
| `/blog/commercial-truck-repair` | `/commercial-truck-repair-phoenix-az` (new) |
| `/blog/semi-truck-repair-fast-and-reliable` | `/semi-truck-repair-shop-phoenix-az` (new) |
| `/mobile-truck-repair-keeping-your-rig-rolling-when-the-shop-comes-to-you` | `/blog/mobile-truck-repair-keeping-your-rig-rolling-when-the-shop-comes-to-you` |
| `/privacy-policy-terms-and-conditions` | `/privacy` |
| `/reliable-semi-truck-service-for-your-fleet` | `/blog/reliable-semi-truck-service-for-your-fleet` |
| `/reliable-semi-truck-service-in-phoenix-arizona` | `/blog/reliable-semi-truck-service-in-phoenix-arizona` |
| ...additional 6 from audit | per audit doc |

These go into `public/_redirects` (Netlify-style) and into Caddy on the VPS.

### 1.4 Sharpen the brake-pads page (highest-leverage fix)

**Current:** `/semi-truck-tire-and-brake-repair-services-phoenix-az`, position 4.4 for "semi truck brake pads in arizona", 58 impressions, 0 clicks.

**Why no clicks at position 4.4?** Title and meta description don't say "brake pads" or "Arizona" prominently. Google's still indexing the old generic copy.

**Fix:**
- New H1: `Semi Truck Brake Pads & Brake Repair in Phoenix, Arizona`
- New `<title>`: `Semi Truck Brake Pads in Arizona — Phoenix Brake Repair Shop`
- New meta description: highlight "brake pads", "Arizona", and price/availability
- Add a focused "Brake Pads" section above the fold with a price/specs table
- Add 4 FAQ items targeting brake-pad queries

**Expected impact:** position 4.4 → 2–3, CTR 0 % → 5–8 %, 4–5 clicks/month new traffic.

### 1.5 Consolidate the 3 cannibalized emergency-repair blog posts

Keep one canonical: `/blog/emergency-truck-repair-phoenix-arizona` (best metadata, has location).
301 the others:
- `/blog/emergency-repair-services` → keeper
- `/blog/emergency-truck-repair` → keeper
- `/blog/emergency-truck-repair-solutions` → keeper

Then update internal links to point at the keeper.

---

## Phase 2 — This week

### 2.1 Build `/commercial-truck-repair-phoenix-az`

**Why:** 88 impressions/month at position 17.4 with the *homepage* ranking. We don't even have a dedicated page. Build one and we should hit page 1.

**Structure:**
- H1: `Commercial Truck Repair in Phoenix, AZ`
- Service grid: fleet contracts, DOT inspections, emergency response, parts inventory
- Trust block: years in business, fleet client logos, 24/7 availability
- 6 FAQ items
- LocalBusiness + Service schema
- Internal links from homepage hero + footer

### 2.2 Build `/semi-truck-repair-shop-phoenix-az`

**Why:** 145 impressions/month at position 48.9 — biggest single missed opportunity. Broad commercial-intent query with no dedicated page.

**Structure:** same template as 2.1 but focused on the *shop* aspect — "you bring the truck to us, we fix it." Include shop photos, hours, diagnostic capabilities, paid-while-you-wait amenities.

### 2.3 Fix `/services` page (currently zero impressions)

The page exists in our sitemap with priority 0.9 but Google never shows it. Why? Generic title, generic copy, no unique value vs. dedicated service pages.

**Fix:** rebrand as a "Service catalog hub" — short blurbs + clear deep-links into each dedicated service page. Add ItemList schema. This makes it a useful hub, not a competing copy.

### 2.4 Per-page JSON-LD schema audit

Right now every page serves the same Organization + LocalBusiness schema (because Helmet runs the same default). After pre-rendering kicks in (1.1), the per-page `structuredData` prop on `<SEO>` will actually fire. Audit every service page to ensure it has:
- Service schema (with `provider`, `areaServed`, `serviceType`)
- LocalBusiness schema (NAP from Phase 0 sweep — already done)
- FAQ schema where there are FAQ blocks
- BreadcrumbList schema

---

## Phase 3 — This month

### 3.1 Image optimization

- All hero images → AVIF + WebP fallback, `<picture>` tag
- Add `loading="lazy"` + explicit `width`/`height` to every non-hero image
- Preload the hero image of each page via `<link rel="preload" as="image">`
- Add real alt text everywhere (audit ~50 images)

Expected LCP improvement: another 1–1.5 s on mobile.

### 3.2 Bundle split + lazy-load

The current React bundle includes every Radix UI component and all 25 pages. With pre-rendering already shipped, we can also:
- Split vendor bundle by route
- Lazy-load Radix dialog/menu primitives that aren't above the fold
- Drop unused Recharts (only used on Dashboard which isn't on this site? — verify)

### 3.3 Internal linking pass

- Homepage hero → links to top 3 high-intent service pages
- Every service page → links to 3 related service pages + the location page
- Every blog post → links to the service page it most aligns with
- Footer → "Popular Services" with the 6 highest-converting URLs

### 3.4 Submit clean sitemap to Search Console + re-request indexing

Once Phases 1+2 ship and Google has re-crawled (give it ~2 weeks):
- Re-submit sitemap
- "Validate fix" on every page in the "Not indexed" report
- Use URL Inspection → Request Indexing for the 5 most-important new pages

---

## Phase 4 — Ongoing (weekly cadence)

### 4.1 New blog content — 2 posts/week targeting striking-distance queries

Priority queue (ordered by impressions × position):
1. "best place to get semi trailer brakes in arizona" (36 impressions, pos 8.5)
2. "emergency mobile truck repair phoenix az" (63 impressions, pos 19.8)
3. "truck repair phoenix" (58 impressions, pos 20.7)
4. "heavy duty truck repair phoenix" — long-tail expansion
5. "semi truck transmission repair phoenix" — gap in service catalog

### 4.2 GBP integration

We already have the NAP unified (Phase 0). Next:
- Weekly GBP posts (auto-publish from blog content)
- Photo cadence — 2 photos/week
- Review velocity — 4 reviews/month minimum
- Q&A seeding — pre-answer the top 10 brake/engine/emergency questions

### 4.3 Backlink building

Currently no inbound link strategy. Quick wins:
- Submit to Arizona Trucking Association directory
- Get listed on AAA truck repair directory
- Reach out to 5 fleet operator clients for a "preferred vendor" mention
- Submit to local Phoenix chamber + 8 Phoenix business directories

---

## What you need to do (the human)

1. **Approve this plan** (right now). If anything is wrong, flag it before I push the branch.
2. **GSC: Open `https://search.google.com/search-console` once Phase 1 ships.** Click "Validate fix" on every page in the "Crawled - currently not indexed" report. This pings Google to re-crawl.
3. **GBP: Post 1 photo + 1 update per week.** Pick the 4 best photos from your phone of recent truck repair work and have them ready.
4. **Reviews: Send the GBP review link to 5 happy fleet customers this week.** Aim for 1 new review per week from now on.
5. **Backlinks: Forward me 3 fleet customers who would publicly say "we use CT Truck Shop"** — I'll handle the outreach.
6. **Brake-pads page (1.4): Send me 2–3 photos of brake pads + brake repair in progress** for the new hero section. Phone snaps are fine.
7. **New pages (2.1, 2.2): Send me 2–3 photos of your shop interior + 2–3 photos of a fleet truck being worked on.**

That's it for the human-side. Everything else is execution on my end.

---

## How we'll measure success

Re-run the SEO pipeline weekly. Targets at +30 days:

| Metric | Today | Target +30 days | Target +90 days |
|---|---|---|---|
| Clicks/month | 33 | 80 | 200 |
| Indexed pages | 31 | 55 | 65+ |
| Avg position | 24.9 | 20 | 14 |
| Mobile LCP (homepage) | 6.06 s | 2.5 s | < 2.0 s |
| "semi truck brake pads in arizona" | pos 4.4 | pos 2 | pos 1 |
| "commercial truck repair" | pos 17.4 | pos 8 | pos 4 |
| "semi truck repair shop" | pos 48.9 | pos 15 | pos 6 |

If we hit the +30 day numbers, we're on track. If we don't, the diagnostic data tells us exactly where the gap is and we adjust.
