

## Goal
Center all section text, headings, and buttons on mobile across every page, while keeping left-aligned or layout-specific alignment on desktop (`lg:`/`md:` breakpoints).

## Scope of Changes

After reviewing all pages and shared components, here are the sections that currently have left-aligned content on mobile and need `text-center md:text-left` (or similar) treatment:

### 1. `src/components/sections/CTASection.tsx`
- **Line 22**: The left grid column (`ScrollReveal`) — h2, p, and button row are all left-aligned on mobile
- Fix: Add `text-center lg:text-left` to the left column wrapper; center buttons with `items-center sm:items-start` on the flex container

### 2. `src/components/sections/HeroSection.tsx`
- **Line 26**: The left content `<div>` — h1, paragraph, badge, buttons, trust indicators all left-aligned on mobile
- Fix: Add `text-center lg:text-left` and center the badge/buttons with `mx-auto lg:mx-0` / `items-center lg:items-start`

### 3. `src/components/ServicePageTemplate.tsx` (hero, lines 92-113)
- Left column content — badge, h1, buttons left-aligned on mobile
- Fix: Add `text-center lg:text-left`, center badge and button row on mobile

### 4. `src/pages/About.tsx`
- **Hero** (line 74): `max-w-3xl` div — badge, h1, p all left-aligned on mobile
- **Story section** (line 133): Left column — badge, h2, paragraphs, button left-aligned on mobile
- Fix: Add `text-center md:text-left` and center inline elements on mobile

### 5. `src/pages/Services.tsx`
- **Hero** (line 60): `max-w-3xl` — badge, h1, p, button left-aligned on mobile
- Fix: Same pattern

### 6. `src/pages/MobileRepair.tsx`
- **Hero** (line 54): `max-w-3xl` — badge, h1, p, buttons left-aligned on mobile
- **"What We Can Fix"** (line 158-184): Left column — badge, h2, p left-aligned on mobile
- Fix: Same pattern

### 7. `src/pages/Contact.tsx`
- **Hero** (line 71-86): `max-w-3xl` — badge, h1, p left-aligned on mobile
- **Contact info header** (line 108): h2 left-aligned on mobile
- Fix: Same pattern

### 8. `src/components/sections/FAQSection.tsx`
- **Left column** (line 52-71): Section title, h2, p, button all left-aligned on mobile
- Fix: Add `text-center lg:text-left` and center button on mobile

### Pattern for Each Fix
For every affected section, apply this consistent pattern:
- Add `text-center md:text-left` or `text-center lg:text-left` (depending on grid breakpoint) to the content wrapper
- Add `mx-auto md:mx-0` or `mx-auto lg:mx-0` to inline-flex badges so they center on mobile
- Add `justify-center md:justify-start` or `items-center` to button flex containers
- Add `mx-auto md:mx-0` to `max-w-xl` paragraph wrappers if present

### Files Modified (8 files)
1. `src/components/sections/CTASection.tsx`
2. `src/components/sections/HeroSection.tsx`
3. `src/components/sections/FAQSection.tsx`
4. `src/components/ServicePageTemplate.tsx`
5. `src/pages/About.tsx`
6. `src/pages/Services.tsx`
7. `src/pages/MobileRepair.tsx`
8. `src/pages/Contact.tsx`

### What Won't Change
- Sections that are already centered (stats bars, "Why Choose CT Shop", values grid headers, map sections)
- Desktop/tablet layout — all changes are mobile-first with responsive overrides
- Footer layout — already handles mobile centering appropriately

