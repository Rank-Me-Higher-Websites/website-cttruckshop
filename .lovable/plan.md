

## Plan: Transfer All WordPress Blog Posts to React Blog

### What Was Found

The WordPress XML contains **28 published blog posts** (type `post`, status `publish`). The current site has 6 fake placeholder posts in `Blog.tsx` that will be completely replaced. No fake info will be added -- only exact content from the XML.

### Complete List of Blog Posts from XML (chronological)

1. **Wrecker Services** - Jun 22, 2023 - slug: `emergency-repair-services` - Emergency roadside assistance
2. **Preventative Brake Maintenance** - Jul 6, 2023 - slug: `preventative-brake-maintenance` - Truck&Trailer Maintenance Tips
3. **Semi Towing Service** - Jul 13, 2023 - slug: `semi-towing-sevice-tips` - Emergency roadside assistance
4. **Truck and Trailer Repair Partner** - Jun 16, 2023 - slug: `truck-and-trailer-repair-partner` - Truck&Trailer Maintenance Tips
5. **Semi Trailer Mechanic Services** - Jul 20, 2023 - slug: `semi-trailer-mechanic-services` - Common Truck and Trailer Repairs
6. **Semi AC Repair and Cost** - Jul 27, 2023 - slug: `semi-ac-repair-and-cost` - Common Truck and Trailer Repairs
7. **Semi Trailer Tire Repair Near Me** - Jul 27, 2023 - slug: `semi-trailer-tires-types` - Common Truck and Trailer Repairs
8. **Fuel Efficiency Tips for Semi Truck Operators** - Aug 2023 - slug: `fuel-efficiency-tips-for-semi-truck-operators` - Truck&Trailer Maintenance Tips
9. **Semi-Trailer Maintenance** - Aug 24, 2023 - slug: `semi-trailer-maintenance-tips` - Common Truck and Trailer Repairs
10. **Semi Trailer Electrical Repair Services** - Sep 2023 - slug: `semi-trailer-electrical-repair-services` - Common Truck and Trailer Repairs
11. **Semi Towing FAQ** - Sep 21, 2023 - slug: `semi-towing-frequently-asked-questions` - Common Truck and Trailer Repairs
12. **Rollover Recovery** - Sep 28, 2023 - slug: `rollover-recovery-understanding` - Common Truck and Trailer Repairs
13. **Heavy Duty Truck Diagnostic** - Oct 26, 2023 - slug: `heavy-duty-truck-diagnostic-tips` - Truck&Trailer Maintenance Tips
14. **Tow Truck Near Me: Arizona** - Oct 19, 2023 - slug: `tow-truck-near-me-arizona` - Emergency roadside assistance
15. **Semi Truck Transmission Repair Guide** - Nov 21, 2023 - slug: `semi-truck-transmission-repair-guide` (need to verify)
16. **How to Choose the Right Diesel Mechanic** - Nov 30, 2023 - slug: `diesel-engine-mechanics` - Truck&Trailer Maintenance Tips
17. **Clever Trans Towing Partnership** - Dec 7, 2023 - slug: `clever-trans-towing-partnership` - Emergency roadside assistance
18. **Semi Truck Diagnostics: Price and Tips** - Dec 14, 2023 - slug: `semi-truck-full-diagnostics-tips` - Common Truck and Trailer Repairs
19. **Semi-Truck Prices in 2023** - Dec 2023 - slug: `semi-truck-prices` (need to verify)
20. **Trailer Repair and Maintenance** - Dec 28, 2023 - slug: `trailer-repair-and-maintenance` (need to verify)
21. **The Synchronized Symphony of Semi-Towing** - Feb/Mar 2024 - slug: `semi-towing-two-trucks` (need to verify)
22. **The Challenges of Overnight Heavy-Duty Towing** - Mar 6, 2024 - slug: `overnight-heavy-duty-towing-challenges` - Emergency roadside assistance
23. **The Art of Decking: A Day in the Life** - Mar 13, 2024 - slug: `day-in-the-life-of-a-tow-truck-driver` - Emergency roadside assistance
24. **Regular PM Service Guide** - Jul 2024 - slug: `regular-pm-service-guide` (need to verify)
25. **Trailer Air System Issues** - Jul 26, 2024 - slug: `trailer-air-system-issues` (need to verify)
26. **Semi Truck Service Phoenix** - Oct 2025 - slug: `semi-truck-service` - Truck&Trailer Maintenance Tips
27. **Local Truck Repair** - Oct 15, 2025 - slug: `local-truck-repair-partner-phoenix` - Truck&Trailer Maintenance Tips
28. **Reliable Semi Truck Service** - Nov 13, 2025 - slug: `reliable-semi-truck-service-for-your-fleet` - Truck&Trailer Maintenance Tips
29. **Truck Mechanic Near Me Phoenix** - Dec 15, 2025 - slug: `truck-mechanic-near-me-phoeniz-az` - Emergency roadside assistance
30. **Semi Truck Repair Fast and Reliable** - Dec 23, 2025 - slug: `semi-truck-repair-fast-and-reliable` - Truck&Trailer Maintenance Tips

### Architecture

```text
New files:
  src/data/blogPosts.ts         -> All post data with full HTML content from XML
  src/pages/BlogPost.tsx        -> Individual post page component
  src/components/BlogContent.tsx -> Renders HTML content with proper styling

Modified files:
  src/pages/Blog.tsx            -> Replace fake data with real imported data
  src/App.tsx                   -> Route /blog/:slug to BlogPost component
  src/index.css                 -> Add prose-style CSS for blog HTML content
```

### Implementation Details

**1. `src/data/blogPosts.ts`** -- Large data file containing every post extracted exactly from the XML:
- Each post has: `slug`, `title`, `date`, `category`, `excerpt` (first paragraph from content), `featuredImage` (first image URL from content or thumbnail), `metaDescription` (from rank_math_description), `content` (full HTML body cleaned of WordPress block comments)
- All image URLs point to the original WordPress CDN (`cttruckshop.com/wp-content/uploads/...`)
- All internal links preserved as-is from WordPress
- No content added, removed, or modified -- strictly XML data only

**2. `src/components/BlogContent.tsx`** -- Simple component:
- Takes HTML string, renders with `dangerouslySetInnerHTML`
- Wrapped in a container with Tailwind prose-like styling classes

**3. `src/pages/BlogPost.tsx`** -- Individual post page:
- Uses `useParams()` to get slug, finds matching post from data
- Hero section with featured image and title
- Blog content rendered via BlogContent component
- Back to blog link, previous/next navigation
- SEO component with title, description, keywords from the XML

**4. `src/pages/Blog.tsx`** -- Updated listing page:
- Removes all 6 fake posts and their local image imports
- Imports real data from `blogPosts.ts`
- Uses first image from each post's content as the card thumbnail
- Keeps existing card grid layout and styling

**5. `src/App.tsx`** -- Route update:
- Import `BlogPost` component
- Change `/blog/:slug` route from `Blog` to `BlogPost`

**6. `src/index.css`** -- Blog content styles:
- Add `.blog-content` class with styles for h1-h6, p, ul, ol, li, blockquote, img, a, strong, em
- Images responsive with proper spacing
- Links styled with accent color

### Key Principles
- Zero fake or generated content -- everything comes directly from the WordPress XML
- All images use original WordPress CDN URLs
- All internal links preserved exactly as they appear in WordPress
- WordPress block comments (`<!-- wp:paragraph -->` etc.) stripped from rendered content
- SEO meta descriptions sourced from `rank_math_description` where available

