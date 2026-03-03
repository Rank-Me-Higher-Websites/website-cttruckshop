

## Plan: Add New Shop Photos and Distribute Across Site

### Uploaded Images (10 total)
The user provided 10 real shop photos showing mechanics at work, diagnostics, engine repair, facility shots, and team members. These will be saved as new assets and distributed to replace repeating images.

### New Asset Files to Create
| File Name | Content |
|---|---|
| `src/assets/mechanic-hub-repair.jpg` | Mechanic working on hub/wheel assembly outdoors |
| `src/assets/engine-brake-repair.jpg` | Tech working on engine brake assembly in shop |
| `src/assets/truck-engine-wide.jpg` | Wide shot of tech under truck hood |
| `src/assets/blue-cascadia-repair.jpg` | Tech working on blue Freightliner Cascadia engine |
| `src/assets/fleet-electrical-work.jpg` | Two techs working between blue trucks (electrical/batteries) |
| `src/assets/truck-laptop-diagnostics.jpg` | Tech running laptop diagnostics at truck door |
| `src/assets/transmission-rebuild.jpg` | Mechanic working on transmission rebuild |
| `src/assets/shop-bay-overview.jpg` | Wide shot of shop bay with red and black trucks |
| `src/assets/tire-tech-thumbsup.jpg` | Mechanic by tire giving thumbs up |
| `src/assets/trailer-axle-repair.jpg` | Tech working on trailer axle/hub assembly |

### Files to Modify

**1. `src/components/ServicePageTemplate.tsx`** -- Update imageMap to use new unique photos per service page:
- `emergency-truck-repair-phoenix` → `shop-bay-overview.jpg` (shows urgency/busy shop)
- `truck-breakdown-service-phoenix` → `truck-laptop-diagnostics.jpg` (mobile diagnostics)
- `semi-truck-ac-repair-services` → `blue-cascadia-repair.jpg` (engine bay work)
- `semi-truck-tire-and-brake-repair-services-phoenix-az` → `mechanic-hub-repair.jpg` (hub/brake work)
- `semi-truck-diagnostics-in-phoenix-az` → `truck-laptop-diagnostics.jpg` -- actually keep `truckDiagLaptop` since it's already unique
- `semi-truck-engine-repairs-in-phoenix-az` → `transmission-rebuild.jpg` (engine/transmission)
- `semi-trailer-electrical-repair-services-phoenix-az` → `fleet-electrical-work.jpg` (electrical/battery)
- `semi-trailer-brake-and-tire-repair-services-in-phoenix-az` → `trailer-axle-repair.jpg` (axle repair)
- `semi-trailer-suspension-repair-services-phoenix-az` → `engine-brake-repair.jpg` (heavy mechanical)
- `full-body-semi-trailer-repair-in-phoenix-az` → `truck-engine-wide.jpg` (full truck work)

**2. `src/components/sections/GallerySection.tsx`** -- Add 4-5 of the new photos to the scrolling gallery to increase variety (replace some existing entries or add new ones).

**3. `src/pages/About.tsx`** -- Swap one or two images if any currently repeat with service pages (check `shopInterior` usage).

**4. `src/pages/Services.tsx`** -- Replace `mechanicsWork` hero with `tire-tech-thumbsup.jpg` or `shop-bay-overview.jpg` for a fresh look.

### Summary
- Save all 10 uploaded photos as project assets
- Give each of the 10 service pages a unique new photo
- Add new photos to the gallery carousel
- Swap a couple images on About/Services pages to reduce cross-page repetition
- No images will repeat between service pages

