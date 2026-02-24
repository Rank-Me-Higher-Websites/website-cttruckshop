

## Problem

The contact page's contact information section (Phone, Email, Location, Hours cards) is partially cut off on mobile. The floating "Call Now" button overlaps the bottom of the Hours card, and the overall section feels cramped at the bottom on narrow screens.

## Root Cause

1. The contact info cards section (`div.space-y-4.mb-10`, lines 112-172 in Contact.tsx) does not account for the sticky floating "Call Now" button at `bottom-6 right-4` on mobile.
2. The floating button sits over the last card (Hours) because there is no extra bottom clearance in that column before the "Need Immediate Help?" CTA box.
3. The "Call Now" floating button is right-aligned (`right-4`), not centered on mobile, which looks off-balance relative to the full-width card layout.

## Plan

### 1. Center the mobile floating "Call Now" button
**File:** `src/components/StickyContactBar.tsx`
- Change the mobile button container positioning from `right-4` to `right-1/2 translate-x-1/2` (or use `left-1/2 -translate-x-1/2`) to center it horizontally on mobile screens.
- This makes it visually balanced with the full-width content cards above.

### 2. Add bottom spacing to the contact info column on mobile
**File:** `src/pages/Contact.tsx`
- Add `pb-20 md:pb-0` to the contact info column wrapper (`<div>` at line 107) so the Hours card and "Need Immediate Help?" box are not hidden behind the floating button on mobile.

### Technical Details
- The floating button is `fixed bottom-6 right-4 z-40 md:hidden` — centering it requires switching from `right-4` to a centered approach using `left-1/2 -translate-x-1/2`.
- The contact info grid is `lg:grid-cols-2`, so on mobile it stacks vertically. The left column's last visible element before the fold can collide with the sticky button.
- Both changes are CSS-only and scoped, no structural or behavioral changes needed.

