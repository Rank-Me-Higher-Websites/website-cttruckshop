
Goal
- Fix the mobile cutoff and button-centering issue in the “Request Service” section (current route: /truck-breakdown-service-phoenix), and prevent the same overflow pattern on Contact/footer CTAs.

What I found
- The problematic button is in `src/components/ServicePageTemplate.tsx`:
  - `Button variant="default" size="xl"` with long label: `Call For Service: (602) 830-3232`
- The shared `Button` base in `src/components/ui/button.tsx` enforces `whitespace-nowrap`.
- `size="xl"` currently uses large desktop spacing globally:
  - `h-14 rounded-lg px-10 text-lg`
- On narrow mobile widths (especially 320px), the long no-wrap label + large horizontal padding can exceed available width, causing visual cutoff and off-center appearance.
- Contact page complaints are likely from footer CTA behavior on mobile (`src/components/layout/Footer.tsx`) where a long “Call Now: (602) 830-3232” button is rendered without mobile-width constraints.

Implementation plan

1) Make XL buttons mobile-safe globally (small-screen first)
- File: `src/components/ui/button.tsx`
- Update `size.xl` to be responsive instead of desktop-sized at all breakpoints:
  - from: `h-14 rounded-lg px-10 text-lg`
  - to: mobile-first values (smaller text/padding), then upscale on `sm+` (e.g. `h-12 sm:h-14 px-4 sm:px-10 text-sm sm:text-lg`).
- Why:
  - Prevents overflow on all existing `size="xl"` usages (Service pages, Services page hero CTA, Location page hero CTA, etc.) without duplicating one-off fixes everywhere.

2) Fix the specific Request Service section layout so button is centered and constrained on mobile
- File: `src/components/ServicePageTemplate.tsx`
- In the “Request Service” section:
  - Make the `<a>` wrapper block-level and full-width on mobile (`block w-full`) so centering is deterministic.
  - Add button classes to force mobile fit and centering (`w-full`, controlled max width + `mx-auto`, smaller mobile typography/padding if needed).
  - Keep desktop look unchanged via `sm:` overrides.
- Optional copy tweak (only if needed after testing):
  - Shorten label to `Call (602) 830-3232` to guarantee clean one-line fit on very narrow widths.

3) Fix Contact-page-related long CTA overflow in footer banner
- File: `src/components/layout/Footer.tsx`
- Emergency CTA banner button:
  - Make anchor responsive (`w-full sm:w-auto`)
  - Make button responsive (`w-full sm:w-auto`, smaller mobile text/padding)
- Why:
  - Addresses prior “contact page mobile cut off” reports without relying only on bottom padding hacks.

4) Quick hardening pass for same pattern
- Verify other long CTA buttons with `size="xl"` and/or long labels still align cleanly after step 1:
  - `src/pages/Services.tsx`
  - `src/pages/MobileRepair.tsx`
  - `src/pages/LocationPage.tsx`
- Only apply targeted class adjustments if any remaining overflow is observed.

Validation plan (must pass)
- Test on mobile viewports: 320x568, 375x812, 390x844.
- Check these routes:
  - `/truck-breakdown-service-phoenix` (Request Service section)
  - `/contact` (footer emergency CTA)
  - `/services`, `/mobile-repair`, and one location page (XL CTA sanity)
- Confirm:
  - No horizontal clipping
  - No horizontal page scroll introduced by CTAs
  - CTA buttons are visually centered
  - Sticky mobile call button no longer visually collides with section CTAs

Technical details
- Root cause is not just page padding; it is CTA intrinsic width pressure from:
  - global `whitespace-nowrap` in Button base
  - large `xl` padding/text on mobile
  - long phone labels
- The robust fix is responsive sizing + width constraints on long CTA instances, instead of repeatedly increasing page bottom padding.
- Existing sticky/footer spacing changes (`pb-24`) can remain; they solve overlap, but not horizontal clipping.

Expected result
- The Request Service button will stay centered and fully visible on mobile.
- Contact/footer CTA will no longer appear cut off on narrow devices.
- Similar CTA regressions across other pages are reduced by updating `size="xl"` behavior globally.
