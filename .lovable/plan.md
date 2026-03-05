

## Plan: Improve Mobile Hero Sections (All Pages Except Homepage)

### Current State
The hero sections across non-homepage pages have inconsistent mobile padding and some feel cramped:

| Page | Section padding | Container padding |
|------|----------------|-------------------|
| ServicePageTemplate | `py-14 md:py-10` | — |
| Services | — | `py-12 md:py-16` |
| About | `py-24 md:py-24` | — |
| Contact | `py-24 md:py-24` | `py-16 md:py-24` |
| Blog | `py-24 md:py-24` | `py-16 md:py-24` |
| MobileRepair | `py-20 md:py-16` | — |

### Changes

**1. ServicePageTemplate.tsx** (service detail pages)
- Increase section mobile padding from `py-14` to `py-20` (keep `md:py-10`)
- Bump h1 mobile size from `text-2xl` to `text-3xl`
- Increase subheadline bottom margin from `mb-4` to `mb-6`

**2. Services.tsx** (services listing)
- Increase container mobile padding from `py-12` to `py-20` (keep `md:py-16`)
- Add `min-h-[50vh] md:min-h-[auto]` to section for more visual presence on mobile

**3. About.tsx**
- Already has good padding (`py-24`), add `min-h-[50vh] md:min-h-[auto]` for more height on mobile

**4. Contact.tsx**
- Already has good padding, add `min-h-[50vh] md:min-h-[auto]` for more height on mobile

**5. Blog.tsx**
- Already has good padding, add `min-h-[50vh] md:min-h-[auto]` for more height on mobile

**6. MobileRepair.tsx**
- Increase from `py-20` to `py-24` on mobile (keep `md:py-16`)
- Add `min-h-[50vh] md:min-h-[auto]`

### Summary
- Use `min-h-[50vh] md:min-h-[auto]` across all non-homepage heroes to give them more visual presence on mobile without over-padding
- Standardize mobile padding to be generous (`py-20`+)
- Slightly upsize mobile heading text on service pages where it's currently small

