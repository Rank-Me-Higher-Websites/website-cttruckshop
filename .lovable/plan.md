

## Plan: Match Blog & Contact Hero Sizes to About Page

The About page hero has no extra padding on its inner container (`container-custom relative z-10`), while Blog and Contact both add `py-16 md:py-24` on their containers (on top of the section's `py-24 md:py-24`), making them taller.

### Changes

**Blog.tsx (line 61)**: Remove `py-16 md:py-24` from the container div
- Change: `container-custom relative z-10 py-16 md:py-24` → `container-custom relative z-10`

**Contact.tsx (line 51)**: Remove `py-16 md:py-24` from the container div
- Change: `container-custom relative z-10 py-16 md:py-24` → `container-custom relative z-10`

This makes all three pages use only the section-level `py-24 md:py-24` for spacing, matching the About page exactly.

