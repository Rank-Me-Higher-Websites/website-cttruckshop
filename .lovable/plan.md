

## Analysis: Missing Pages in Sitemap

After comparing all routes in `App.tsx` and data files against `public/sitemap.xml`, here's what's missing:

**Currently in sitemap (19 URLs):** Home, Services, About, Contact, Locations, Mobile Repair, Blog, 10 service pages, Privacy, Terms.

**Missing pages:**

1. **`/locations/phoenix`** — the only location detail page
2. **34 blog post URLs** (`/blog/{slug}`) — none are included

That's 35 missing URLs total.

## Plan

Update `public/sitemap.xml` to add:

- `/locations/phoenix` with priority 0.6, changefreq monthly
- All 34 blog post URLs with priority 0.5, changefreq monthly

Blog slugs to add:
- truck-and-trailer-repair-partner
- emergency-repair-services
- preventative-brake-maintenance
- semi-towing-sevice-tips
- semi-trailer-mechanic-services
- semi-ac-repair-and-cost
- semi-trailer-tires-types
- common-semi-truck-problems
- semi-truck-fuel-efficiency
- semi-trailer-maintenance-tips
- 24h-towing-services-benefits
- heavy-duty-towing-phoenix
- semi-trailer-electrical-repair
- semi-towing-frequently-asked-questions
- rollover-recovery-understanding
- semi-trailer-suspension-fix-tips
- semi-truck-towing-arizona
- tow-truck-near-me-arizona
- heavy-duty-truck-diagnostic-tips
- semi-truck-transmission-repair-guide
- open-deck-trailers-towing
- semi-trailer-suspension-repair-arizona
- tips-for-heavy-duty-drivers
- diesel-engine-mechanics
- clever-trans-towing-partnership
- semi-truck-full-diagnostics-tips
- semi-truck-prices-2023-guide
- trailer-repair-and-maintenance
- heavy-duty-and-medium-duty-towing-services
- synchronized-symphony-semi-towing
- overnight-heavy-duty-towing-challenges
- day-in-the-life-of-a-tow-truck-driver
- regular-pm-service-arizona
- trailer-air-system-issues
- trailer-lights-repairs
- reliable-semi-truck-service-in-phoenix-arizona
- local-truck-repair-partner-phoenix
- emergency-truck-repair-phoenix-arizona
- truck-diagnostics-guide-for-owner-operators
- emergency-truck-repair-solutions
- reliable-semi-truck-service-for-your-fleet
- reliable-trailer-repair-service-for-truck-drivers
- emergency-truck-repair
- fast-truck-repair-near-me
- mobile-truck-repair-keeping-your-rig-rolling-when-the-shop-comes-to-you
- truck-mechanic-near-me-phoeniz-az

This will bring the total sitemap URLs from 19 to ~65, covering every accessible page on the site.

