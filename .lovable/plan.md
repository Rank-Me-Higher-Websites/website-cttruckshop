

## SEO Meta Optimization Plan

### Current Issues Found

1. **Double branding bug**: The `SEO` component appends `" | CT Truck & Trailer Shop"` to every title. But service pages pass `metaTitle` which already includes `"| CT Truck & Trailer Shop"` — resulting in titles like *"Semi Truck AC Repair Services Phoenix, AZ | CT Truck & Trailer Shop | CT Truck & Trailer Shop"*. Same issue on the About page.

2. **Missing keywords**: Service pages (via `ServicePageTemplate`), blog posts, Privacy Policy, and Terms of Service have no `keywords` meta tag.

3. **Generic/weak titles**: "Services", "Contact Us", "Locations", "News & Blog" are too generic — they waste valuable title tag real estate.

4. **Descriptions need sharpening**: Some are decent but several lack geo-targeting, CTAs, or unique selling points.

---

### Changes

#### Fix 1: ServicePageTemplate — use `title` instead of `metaTitle` to avoid double branding, add keywords

```
title: service.title  (not service.metaTitle)
keywords: unique per service (constructed from slug context)
```

#### Fix 2: About page — clean title

```
title: "About Us – Phoenix Truck & Trailer Repair Experts"
```

#### Fix 3: Optimize all page titles, descriptions & keywords

| Page | New Title | New Description | Keywords |
|------|-----------|-----------------|----------|
| **Home** | `#1 Truck & Trailer Repair in Phoenix, AZ` | `CT Truck & Trailer Shop — Phoenix's trusted semi truck & trailer repair shop. Engine repair, brake service, DOT inspections, 24/7 emergency roadside assistance. Call (602) 830-3232.` | keep + add "semi truck service phoenix, heavy duty truck repair, diesel mechanic phoenix" |
| **Services** | `Truck & Trailer Repair Services in Phoenix, AZ` | `Full-service semi truck & trailer repair in Phoenix. Engine, brake, electrical, transmission, suspension, DOT inspections, and 24/7 emergency roadside assistance. Call CT Shop today.` | add "semi truck repair services, trailer repair services phoenix, DOT inspection phoenix" |
| **About** | `About Us – Phoenix Truck & Trailer Repair Experts` | `Meet CT Truck & Trailer Shop — Phoenix's experienced commercial truck repair team. Certified mechanics, 24/7 mobile service, fleet maintenance programs. Serving the Phoenix metro since day one.` | add relevant keywords |
| **Contact** | `Contact CT Truck & Trailer Shop – Phoenix, AZ` | `Get in touch with CT Truck & Trailer Shop at (602) 830-3232. Located at 3883 N 36th Ave, Phoenix, AZ 85019. Request a quote for truck repair, trailer service, or emergency roadside help.` | add "truck repair quote phoenix, truck shop near me, schedule truck repair" |
| **Blog** | `Truck Repair Tips & Industry News – Phoenix, AZ` | `Expert truck maintenance tips, diesel repair guides, and industry news from CT Truck & Trailer Shop in Phoenix. Stay informed about fleet management and semi truck care.` | add "truck maintenance blog, diesel repair tips, fleet management phoenix" |
| **Locations** | `Our Location – Phoenix Truck & Trailer Repair Shop` | `Visit CT Truck & Trailer Shop at 3883 N 36th Ave, Phoenix, AZ 85019. Full-service truck repair, mobile dispatch, and emergency roadside assistance across the Phoenix metro area.` | add "truck shop phoenix location, truck repair near me phoenix" |
| **LocationPage (Phoenix)** | `Phoenix Main Shop – CT Truck & Trailer Repair` | keep existing | enrich keywords |
| **Mobile Repair** | `24/7 Mobile Truck Repair & Roadside Assistance – Phoenix` | `Stuck on the road? CT Shop's mobile truck repair team comes to you anywhere in the Phoenix metro. Battery, brakes, tires, electrical & more. Call (602) 830-3232 now.` | add "emergency mobile mechanic phoenix, roadside truck service" |
| **Privacy** | `Privacy Policy` | keep (fine as-is) | add "privacy policy, data protection, CT Truck Shop" |
| **Terms** | `Terms of Service` | keep (fine as-is) | add "terms of service, terms and conditions, CT Truck Shop" |

#### Fix 4: Service pages — add keywords via `ServicePageTemplate`

Add a `keywords` field to each service in `servicePages.ts` data, or construct them dynamically in the template based on the service title and slug. Dynamic approach is cleaner:

```ts
keywords={`${service.title.toLowerCase()}, ${service.title.toLowerCase()} phoenix, truck repair phoenix az, CT Truck Shop`}
```

#### Fix 5: Blog posts — add keywords from post category + title

```ts
keywords={`${post.category.toLowerCase()}, ${post.title.toLowerCase().split(' ').slice(0,5).join(' ')}, truck repair blog, phoenix az`}
```

---

### Files to modify

- `src/pages/Index.tsx` — title, description, keywords
- `src/pages/Services.tsx` — title, description, keywords
- `src/pages/About.tsx` — title, description, keywords
- `src/pages/Contact.tsx` — title, description, keywords
- `src/pages/Blog.tsx` — title, description, keywords
- `src/pages/BlogPost.tsx` — add keywords
- `src/pages/Locations.tsx` — title, description, keywords
- `src/pages/LocationPage.tsx` — title, keywords
- `src/pages/MobileRepair.tsx` — title, description, keywords
- `src/pages/PrivacyPolicy.tsx` — add keywords
- `src/pages/TermsOfService.tsx` — add keywords
- `src/components/ServicePageTemplate.tsx` — use `service.title` instead of `service.metaTitle`, add keywords

