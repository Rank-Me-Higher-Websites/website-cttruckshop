

## Blog Content Audit: 2025-2026 Posts

After comparing every 2025-2026 blog post in `blogPosts.ts` against the live WordPress site, nearly all of them are **severely truncated** -- most contain only 20-40% of the original content.

### Posts with Missing Content (2025-2026)

| # | Post (Date) | Current State | Missing Content |
|---|---|---|---|
| 1 | **truck-and-trailer-repair-near-me-shop-tips** (Feb 24, 2026) | Complete | None -- this one is good |
| 2 | **commercial-truck-repair** (Jan 22, 2026) | ~30% of original | Missing: detail paragraphs under "Commercial Truck Repair Near Me", "Reliable Commercial Truck Repair Service" section, entire FAQ section (6 Q&As) |
| 3 | **trailer-repair-near-me-in-phoenix-fast-reliable** (Jan 13, 2026) | ~40% of original | Missing: "Quick Tip" callout, "Uneven Tire Wear" section, "Full Body Trailer Repairs" detail, "How to Choose the Right Shop" section, "Ask This One Question" section |
| 4 | **local-truck-repair-phoenix-complete-guide** (Dec 30, 2025) | ~15% of original | Missing: "When quick becomes expensive", "What Good Local Truck Repair Looks Like" (process list, communication, documentation), "Most Common Local Truck Repairs" (brakes, diagnostics, electrical, cooling), "Local Trailer Repair" section, "Why Drivers Choose CT Shop", 3 images |
| 5 | **semi-truck-repair-fast-and-reliable** (Dec 23, 2025) | ~25% of original | Missing: "At CT Truck & Trailer Shop" intro paragraph, "Engine Diagnostics" detail with common repairs list, "Brake Repair & Safety Inspections" section, "Electrical & Computer System Repairs" section, "Why Truck Drivers Trust CT Shop" (4 subsections), images |
| 6 | **truck-mechanic-near-me-phoeniz-az** (Dec 15, 2025) | ~20% of original | Missing: "Emergency Roadside From a Trusted Truck Mechanic" (full paragraph), "Why a Phoenix Truck Mechanic Near Me Is Your Smartest Choice" section, "Your Trusted Truck Mechanic" closing section, additional image |
| 7 | **mobile-truck-repair** (Dec 10, 2025) | ~10% of original | **Most severely truncated.** Original is 206 lines. Missing: "How Mobile Service Differs" comparison details, "Minimizing Downtime" section, "Safety and Compliance" section, entire "Common Mobile Truck Repair Services" (Engine/Aftertreatment, Brake/Air, Electrical/Battery, Tire/Wheel/Suspension subsections), "Emergency Roadside Truck Repair" section, "Keeping Trucks Moving" conclusion, 3 images |
| 8 | **fast-truck-repair-near-me** (Dec 2, 2025) | ~20% of original | Missing: "Quick Accurate Diagnostics" detail (engine codes, aftertreatment, electrical, ABS), "Same-Day Repairs" with service list, "Emergency & Roadside Assistance" section, "Transparent Communication" section, "Common Fast Truck Repair Services" paragraph, "Why Drivers Trust CT Shop" with 4 points, "Get Fast Truck Repair in Phoenix" closing, 2 images |
| 9 | **emergency-truck-repair** (Nov 24, 2025) | ~70% of original | Missing: "If the issue can't be fixed roadside" paragraph, "If you're hauling through I-10..." paragraph, night-towing image |
| 10 | **reliable-trailer-repair-service** (Nov 19, 2025) | ~30% of original | Missing: out-of-service citations/rapid tire wear/freight damage list, second image (local-truck-repair-shop), full PM checklist (DOT, brake, tire, suspension, electrical), "A Trailer Breakdown Costs More Than a Repair" closing section |
| 11 | **reliable-semi-truck-service-for-your-fleet** (Nov 13, 2025) | ~30% of original | Missing: full service descriptions (not just bullet items), second image (phoenix-semi-shop), "Choosing the Right Provider" section with 5 tips, "Keep Your Truck Running Strong" closing paragraph |
| 12 | **emergency-truck-repair-solutions** (Nov 5, 2025) | ~40% of original | Missing: "We understand that downtime costs money" intro, mobile units paragraph, "Fast Response" detail, "Stay Safe - What to Do Before Help Arrives" section (4-step list), closing paragraph, closing image |
| 13 | **truck-diagnostics-guide** (Oct 28, 2025) | ~25% of original | Missing: "Why Every Owner-Operator Should Care" (4 bullet points with descriptions), second diagnostic image, "Common Diagnostic Checks" (4 detailed system descriptions: Engine, Aftertreatment, Electrical, Transmission/ABS), "Keep Your Truck Running Strong" closing |
| 14 | **emergency-truck-repair-phoenix-arizona** (Oct 21, 2025) | ~50% of original | Missing: "Always Ready -- Always Reliable" paragraph, "Contact CT" closing paragraph |
| 15 | **local-truck-repair-partner-phoenix** (Oct 15, 2025) | ~25% of original | Missing: full service descriptions (not just bullets), second image (local-truck-repair-phoenix), third image (semi-truck-mechanics), "Why Choose CT" section (5 detailed points), "Your Local Truck Repair Partner" closing section, 24/7 mobile repair mention |
| 16 | **reliable-semi-truck-service-in-phoenix-arizona** (Oct 10, 2025) | ~30% of original | Missing: service descriptions (not just bullets), "Why Choose" descriptions (not just bullets), "Best Semi Truck Service in Arizona" section, second image, "Keep Your Fleet Running Strong" section, "Regular Maintenance Saves You Time" paragraph |

### Summary

- **16 posts** from Oct 2025 - Jan 2026 need content restoration
- **1 post** (Feb 2026 - newest) is complete
- The most severely truncated is **mobile-truck-repair** (~10% of original content)
- Most posts are missing 50-80% of their original text

### Implementation Plan

**Step 1**: Update all 16 posts in `src/data/blogPosts.ts` with full HTML content from the WordPress originals. Each post's `content` field will be replaced with the complete article text, preserving all headings, lists, images, links, tables, and paragraphs exactly as they appear on the live site.

The file is large (523 lines), so this will require careful line-by-line replacement of each post's `content` field. Posts will be updated in reverse chronological order starting from Jan 2026 back to Oct 2025.

