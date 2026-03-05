

# Fix Broken Blog Images

## Problem
All 321 image references in `src/data/blogPosts.ts` point to `https://cttruckshop.com/wp-content/uploads/...` — the WordPress site is no longer active, so every blog featured image and inline content image is broken.

## Approach
Since we cannot download images from the dead WordPress site, we will replace all broken image URLs with relevant local assets from `src/assets/`. The project already has ~40 truck/trailer repair photos that cover the blog topics well.

### Two types of image references to fix:

1. **`featuredImage` fields** (47 posts) — Used as card thumbnails on `/blog` and hero images on `/blog/:slug`. Each will be mapped to an appropriate local asset based on the post's topic/category.

2. **Inline `<img>` tags inside `content` HTML** (~270+ references) — Images embedded in blog post bodies. These will be replaced with relevant local assets, or removed where they add no value (decorative duplicates).

### Image mapping strategy by topic:
- **Engine/diagnostics posts** → `engine-repair.jpg`, `diesel-engine-repair.png`, `truck-diagnostics.jpg`, `mechanic-engine-work.jpg`
- **Brake/tire posts** → `engine-brake-repair.jpg`, `trailer-brake-shop.jpg`, `tire-tech-thumbsup.jpg`
- **Towing/emergency posts** → `towing-recovery.jpg`, `night-towing.jpg`, `tow-service.png`, `about-tow-truck.jpg`
- **Trailer repair posts** → `trailer-axle-repair.jpg`, `trailer-welding-repair.jpg`, `trailer-brake-shop.jpg`
- **General shop/maintenance** → `shop-interior.jpg`, `shop-bay-overview.jpg`, `facility.jpg`, `ct-shop-team.jpg`
- **Mobile repair** → `mobile-repair.jpg`
- **Electrical** → `fleet-electrical-work.jpg`
- **Blog-specific images** → 6 existing images in `src/assets/blog/`

### Implementation
Since `featuredImage` is used in React components (via `<img src={post.featuredImage}>`), and `content` HTML uses raw `<img src="...">` tags rendered via `dangerouslySetInnerHTML`, we need two approaches:

1. **For `featuredImage`**: Import local assets at the top of `blogPosts.ts` and assign them to each post's `featuredImage` field.

2. **For inline `content` images**: Since these are raw HTML strings, we'll replace WordPress URLs with the imported asset variables won't work directly. Instead, we'll create a utility that maps old WordPress URLs to local imports, and update `BlogContent.tsx` to process the HTML and replace image sources at render time.

### Technical detail

**New utility** (`src/lib/blogImageMap.ts`):
- Export a mapping of WordPress URL patterns to imported local asset paths
- Export a function `replaceContentImages(html: string): string` that swaps all WordPress URLs in content HTML with local assets

**Update `BlogContent.tsx`**:
- Import and apply `replaceContentImages` before rendering

**Update `blogPosts.ts`**:
- Import local assets and assign to `featuredImage` fields for all 47 posts

This is a large data file change but straightforward — systematic find-and-replace of URLs with local asset references.

