
## What is actually happening (why it still looks off on mobile)

You’re right to call this out. The issue is inside the Contact page content section itself, not desktop/tablet, and not just text alignment.

From the current `src/pages/Contact.tsx`, the “square” blocks (contact cards + CTA/form cards) look off on mobile because of a combination of layout choices:

1. **Double horizontal padding** in that section:
   - Section has `px-4 sm:px-6 lg:px-8`
   - Inside it, `.container-custom` also adds `px-4 sm:px-6 lg:px-8`
   - On small screens this makes spacing feel uneven and visually “pushed”/compressed.

2. **Cards are full-width row layouts with left-anchored content**
   - Each contact card uses `flex items-start` and left text block.
   - On mobile, this makes the cards feel left-heavy instead of centered “squares”.

3. **Column wrappers are not width-constrained on mobile**
   - The two major blocks (contact info side, form side) are not given `max-w-* + mx-auto` constraints on mobile.
   - So visually they don’t read as centered card groups.

## Implementation plan (mobile-only, desktop/tablet unchanged)

### 1) Normalize horizontal spacing in Contact content section
**File:** `src/pages/Contact.tsx`  
**Section:** Contact section wrapper (current line around 97)

- Remove extra section-level horizontal padding from:
  - `section className="section-padding bg-primary relative overflow-hidden px-4 sm:px-6 lg:px-8"`
- Keep spacing controlled by `.container-custom` only.
- Result: cards no longer feel clipped/compressed from double-padding.

### 2) Center the “square groups” themselves on mobile
**File:** `src/pages/Contact.tsx`  
**Section:** two grid columns inside contact section

- Contact-info column wrapper:
  - from `className="pb-20 lg:pb-0"`
  - to something like `className="pb-20 lg:pb-0 w-full max-w-xl mx-auto lg:max-w-none"`
- Form column wrapper:
  - add `w-full max-w-xl mx-auto lg:max-w-none`
- Result: both card groups are visually centered on mobile while preserving desktop grid layout.

### 3) Convert contact info cards to true mobile-centered card layout
**File:** `src/pages/Contact.tsx`  
**Section:** Phone / Email / Location / Hours cards

For each card:
- Keep desktop/tablet row alignment.
- On mobile use vertical centered arrangement:
  - `flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left`
- Keep each card `w-full`.
- Keep `min-w-0` on text wrappers; add where missing (Location/Hours currently missing).
- Use `break-words` for long text (email/address) to prevent hard overflow.

Result:
- Each “square” looks centered and balanced on mobile.
- No right-edge clipping for long content.

### 4) Center content inside the “Need Immediate Help?” square on mobile
**File:** `src/pages/Contact.tsx`  
**Section:** quick CTA block

- Add `text-center lg:text-left` to CTA inner wrapper.
- Keep button full-width.
- Result: CTA square content is visually centered on mobile.

### 5) Center the Service Request square header and control internal spacing
**File:** `src/pages/Contact.tsx`  
**Section:** form card

- Add `text-center lg:text-left` to header wrapper (heading + intro text).
- Adjust form card padding for smaller phones:
  - e.g. `p-5 sm:p-8` instead of always `p-8`.
- Keep labels/inputs left-aligned for usability unless you want fully centered labels too.
- Result: card frame is centered and no cramped/cut-off appearance on narrow phones.

### 6) Ensure lower “squares” are centered too (Why CT Truck Shop stats cards)
**File:** `src/pages/Contact.tsx`  
**Section:** stats cards at bottom

- On mobile each stat card can be constrained with:
  - `max-w-sm mx-auto`
- Keep current grid behavior for `sm+`.
- Result: the three lower squares also read centered on mobile.

## Verification plan (must run after implementation)

Test on `/contact` with widths **320, 360, 375, 390**:

1. Hero unchanged (already centered on mobile).
2. Contact information cards:
   - equal left/right visual spacing
   - icon + text centered on mobile
   - no clipped borders/content
3. Quick CTA square centered
4. Service Request square centered, no text clipping
5. Stats squares centered and consistent width
6. Desktop/tablet unchanged (`lg:` behavior intact)

## Technical details (for implementation precision)

Use this responsive class pattern across contact cards:

```text
Mobile first:
- centered: text-center, items-center, mx-auto, max-w-*
Desktop/tablet restore:
- sm:flex-row sm:items-start sm:text-left
- lg:max-w-none
```

Primary class-level changes will be contained to one file:

- `src/pages/Contact.tsx` (contact section wrapper, two column wrappers, 4 info cards, quick CTA card, form card header/padding, stats cards)

No routing, logic, or shared component behavior changes are required.
