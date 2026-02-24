

## Fix: Sticky Sidebar Not Scrolling on Service Pages

### Problem
The "Quick Info" and "Need Roadside Help?" sidebar cards on service pages have `sticky top-28` but are not sticking when you scroll. They disappear instead of following along.

### Root Cause
The `overflow-x: hidden` applied to the `html` element in `src/index.css` (line 151) breaks `position: sticky` behavior. This is a well-known CSS issue: when any ancestor has an overflow property set (other than `visible`), it can prevent sticky positioning from working correctly.

### Fix
In `src/index.css`, change `overflow-x: hidden` on `html` to `overflow-x: clip`. The `clip` value prevents horizontal scrollbar/overflow the same way `hidden` does, but it does **not** create a new scroll container, so `position: sticky` continues to work.

**File: `src/index.css`**
- Line 151: Change `overflow-x: hidden;` to `overflow-x: clip;` on `html`
- Line 155: Change `overflow-x: hidden;` to `overflow-x: clip;` on `body`

This is a one-line-each change that preserves the horizontal overflow prevention while restoring sticky sidebar behavior across all service pages.

