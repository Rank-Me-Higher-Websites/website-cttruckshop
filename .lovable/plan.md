

## Blog Content Restoration: Remaining Truncated Posts

After checking all posts in `blogPosts.ts` against the live WordPress site, the **December 2025 and January 2026 posts have been successfully restored**. However, **8 posts from October-November 2025** still have significantly truncated content.

### Posts Still Needing Restoration

| # | Slug | Date | Current vs Original |
|---|---|---|---|
| 1 | `reliable-semi-truck-service-in-phoenix-arizona` | Oct 10, 2025 | ~30% -- missing service descriptions, "Best Semi Truck Service in Arizona" section, "Keep Your Fleet Running Strong" section, third image, "Regular Maintenance Saves You Time" paragraph |
| 2 | `local-truck-repair-partner-phoenix` | Oct 15, 2025 | ~25% -- missing full service descriptions, 2 images, "Why Choose CT" section (5 detailed points), "Your Local Truck Repair Partner" closing, 24/7 mobile repair mention |
| 3 | `emergency-truck-repair-phoenix-arizona` | Oct 21, 2025 | ~50% -- missing closing paragraphs |
| 4 | `truck-diagnostics-guide-for-owner-operators` | Oct 28, 2025 | ~25% -- missing "Why Every Owner-Operator Should Care" (4 bullet points), "Common Diagnostic Checks" (4 system descriptions), second image, closing section |
| 5 | `emergency-truck-repair-solutions` | Nov 5, 2025 | ~40% -- missing "We understand downtime costs money" intro, mobile units paragraph, "Stay Safe" section (4-step list), closing paragraph |
| 6 | `reliable-semi-truck-service-for-your-fleet` | Nov 13, 2025 | ~30% -- missing full service descriptions, second image, "Choosing the Right Provider" section with 5 tips, closing paragraph |
| 7 | `reliable-trailer-repair-service-for-truck-drivers` | Nov 19, 2025 | ~30% -- missing detailed breakdown list, second image, full PM checklist, closing section |
| 8 | `emergency-truck-repair` | Nov 24, 2025 | ~70% -- missing "If the issue can't be fixed roadside" paragraph, "If you're hauling through I-10" paragraph |

### 2023-2024 Posts Status

All 2023 and 2024 posts appear to match their WordPress originals. Some are naturally short posts on the source site (e.g., `semi-towing-sevice-tips` is a brief post on WordPress too).

### Implementation Plan

Update the `content` field for all 8 posts listed above in `src/data/blogPosts.ts` with the full HTML from the WordPress originals. Each post will be fetched from the live site and converted to clean HTML, preserving all headings, paragraphs, lists, images, links, and tables.

### Technical Details

- File: `src/data/blogPosts.ts`
- All 8 posts are between lines 364-442
- Each post's `content` string will be replaced with the complete article HTML
- No structural changes to the data format -- only content string replacements

