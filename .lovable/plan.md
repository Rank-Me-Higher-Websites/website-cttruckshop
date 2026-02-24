

## Problem

On large screens (1440px+), the hero content looks small because `container-custom` caps at `max-w-7xl` (1280px). The text sizes also max out at `lg:text-5xl` which doesn't scale up for ultra-wide monitors.

## Fix

Scale up hero text sizes and optionally widen the container for the hero section on extra-large screens.

### Changes to `src/components/sections/HeroSection.tsx`

1. **Headline**: Change from `lg:text-5xl` to `lg:text-5xl xl:text-6xl 2xl:text-7xl` so the heading grows on large screens.

2. **Subheadline**: Change from `md:text-lg` to `md:text-lg xl:text-xl` for better readability at scale.

3. **Badge text**: Bump to `xl:text-base` from `text-sm`.

4. **Trust indicators text**: Scale the stats numbers from `sm:text-lg` to `sm:text-lg xl:text-xl` and labels from `sm:text-xs` to `sm:text-xs xl:text-sm`.

5. **Container override**: Replace `container-custom` with `container-custom max-w-[1400px] 2xl:max-w-[1600px]` on the hero's inner wrapper so the two-column layout (text + form) spreads wider on big screens, making content fill more of the viewport.

### Changes to `src/components/LeadForm.tsx` (if needed)

May need to check if the form scales well at larger sizes -- likely fine since it's in a grid column.

### No other files affected

Desktop, tablet, and mobile layouts remain unchanged since all additions use `xl:` and `2xl:` breakpoints.

