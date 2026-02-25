

## Findings: Major Issues with Current Blog Implementation

### Problem 1: Blog Grid Not Rendering
The `/blog` page shows the hero section but the blog card grid is invisible -- it goes straight to the footer. The `blogPosts.ts` file has 17 entries and the code maps over them, but they are not appearing. This is likely caused by a runtime error in the data file (possibly an unescaped character in the HTML template literals) that silently prevents the array from loading.

### Problem 2: Only 17 Posts Exist -- Should Be 30+
The WordPress XML contains significantly more published posts than the 17 currently in `blogPosts.ts`. The following posts from the XML are **completely missing**:

1. Semi AC Repair and Cost (Jul 27, 2023)
2. Semi Trailer Tire Types (Jul 27, 2023)
3. Common Semi-Trailer Issues (Aug 10, 2023)
4. Semi-Trailer Maintenance (Aug 24, 2023)
5. Semi Towing Frequently Asked Questions (Sep 21, 2023)
6. Semi Truck Towing Arizona (Oct 5, 2023)
7. Tow Truck Near Me: Arizona (Oct 19, 2023)
8. Towing of Open Deck (Nov 9, 2023)
9. Essential Tips for Truck Drivers (Nov 23, 2023)
10. How to Choose the Right Diesel Mechanic (Nov 30, 2023)
11. Clever Trans Towing Partnership (Dec 7, 2023)
12. Semi-Truck Prices in 2023 (Dec 2023)
13. Trailer Repair and Maintenance (Dec 28, 2023)
14. Heavy-Duty Towing Arizona (Feb/Mar 2024)
15. The Art of Decking: Day in the Life (Mar 13, 2024)
16. Regular PM Service Guide (Jul 2024)
17. Trailer Air System Issues (Jul 26, 2024)
18. Trailer Lights (Jul 29, 2024)
19. Reliable Local Truck Repair (Oct 15, 2025)
20. Fast Truck Repair (Dec 2, 2025)
21. Mobile Truck Repair (Dec 10, 2025)
22. Truck Mechanic Near Me Phoenix (Dec 15, 2025)
23. Semi Truck Repair That Keeps You Moving (Dec 23, 2025)
24. Commercial Truck Repair (Jan 22, 2026)
25. Trailer Repair Near Me (this one IS there but may have wrong date)

### Problem 3: Fabricated/Modified Titles and Slugs
Several existing posts have titles and slugs that don't match the WordPress XML:

| Current in blogPosts.ts | Actual from XML |
|---|---|
| slug: `semi-truck-fuel-efficiency` | Should be: `fuel-efficiency-tips-for-semi-truck-operators` |
| slug: `semi-trailer-electrical-repair` | Should be: `semi-trailer-electrical-repair-services` |
| title: "No More Downtime: Fast and Effective Semi-Trailer Suspension Fix Tips" | Fabricated -- real XML title is different |
| title: "Maximizing Fuel Efficiency: Tips for Semi Truck Operators" | Real XML title may differ |
| Some `featuredImage` URLs may not match actual WordPress thumbnails | Need verification |

### Problem 4: Featured Images May Be Wrong
Some posts use `featuredImage` URLs that appear to be the first image from content rather than the actual WordPress `_thumbnail_id` featured image. The XML has specific attachment/thumbnail mappings that were not properly followed.

---

### Implementation Plan

**Step 1: Completely rewrite `src/data/blogPosts.ts`**
- Re-extract ALL published posts from the XML (expected 30+ posts)
- Use exact titles, slugs, dates, and categories from the XML
- Use correct featured image URLs from WordPress `_thumbnail_id` metadata
- Use exact HTML content stripped of WordPress block comments only
- Use meta descriptions from `rank_math_description` fields
- Zero fabricated content -- strictly XML data

**Step 2: Debug the rendering issue**
- Ensure no unescaped backticks or `${` expressions exist in template literal content
- Verify the array exports correctly and renders in the blog grid
- Test that all blog cards show with proper images and titles

**Step 3: Verify individual blog post pages work**
- Confirm `/blog/:slug` routes resolve correctly for all posts
- Check content renders with proper formatting

### Technical Note
The `blogPosts.ts` file will be large (30+ posts with full HTML content). Each post needs: slug, title, date, category, excerpt, featuredImage, metaDescription, and content -- all extracted verbatim from the XML.

