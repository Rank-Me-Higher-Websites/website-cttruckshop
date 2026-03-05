

## Plan: Add Trust Badges to All Non-Homepage Hero Sections

Add a compact row of trust badges (matching the homepage TrustSection style) at the bottom of every hero section except the homepage. The badges will show: **4.5★ Google Rating**, **DOT Certified**, and **Fast Response** — the same three items from the existing TrustSection component.

### Implementation

**Create a reusable `HeroTrustBadges` component** (`src/components/HeroTrustBadges.tsx`)
- A simple row of 3 trust indicators with star icons, shield, and checkmark
- Styled for both mobile and desktop with the same compact layout as the homepage trust bar
- Uses semi-transparent background to blend with hero overlays
- Separated by vertical dividers

**Add `HeroTrustBadges` to 6 pages' hero sections:**

1. **ServicePageTemplate.tsx** — after the CTA buttons (line ~164), before the closing hero div
2. **Services.tsx** — after the CTA button (line ~77)
3. **About.tsx** — after the CTA buttons (line ~120 area)
4. **Contact.tsx** — after the CTA buttons (line ~77)
5. **Blog.tsx** — after the hero description text
6. **MobileRepair.tsx** — after the CTA buttons (line ~80 area)

### HeroTrustBadges Component Design
- Row of 3 items: Google Rating (with stars), DOT Certified (checkmark), Fast Response (shield)
- `mt-6 pt-4 border-t border-primary-foreground/20` for spacing
- Mobile: smaller text/icons, horizontal layout that stays in one row
- The Google rating links to the Google Maps listing (same as TrustSection)

