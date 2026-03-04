

## Competition Analysis: Phoenix Truck Repair Market

**Key competitors identified:**

1. **Complete HTR** (completehtr.com) — Off I-17, fleet-focused, Mon-Fri 7-5, phone 623-745-5896. Webflow site, basic structure, no visible advanced schema.
2. **Emergency Roadside Truck & Trailer Repair** (emergencyroadsidetruckphoenix.com) — 3241 W Yuma St, 480-932-4860, Mon-Sat 7-7 + 24/7 emergency. Direct competitor in emergency/mobile space.
3. **Phoenix Heavy Towing and Repair** (phoenixheavytowingandrepair.com) — Two locations (Phoenix + Laveen), 24/7 roadside + towing + repair. Strong SEO with service area pages.
4. **Jesse's Truck Repair** (jessestruckrepair.com) — 602-296-9526, 24/7, 200-mile radius, basic DudaMobile site with no structured data.
5. **3A Automotive & Diesel Repair** (3aautorepair.com) — Diesel specialist in Phoenix area.

**Competitive advantage opportunity:** None of these competitors appear to have comprehensive structured data (multiple schema types per page). Implementing full schema markup across all pages will give CT Truck Shop a significant edge in rich snippets, AI answers, and local pack results.

---

## Schema Implementation Plan

### Current State
- Only the homepage (`Index.tsx`) has an `AutoRepair` schema
- No BreadcrumbList, FAQPage, Service, or Organization schema on any page
- The `SEO` component supports a single `structuredData` prop (object)

### Changes Required

#### 1. Update SEO component to support multiple schemas
Change `structuredData?: object` to `structuredData?: object | object[]` and render as an array of `<script>` tags (or a single `@graph` wrapper).

#### 2. Homepage (`Index.tsx`)
- Keep existing `AutoRepair` schema, enhance with full address (3883 N 36th Ave, Phoenix, AZ 85019)
- Add `Organization` schema with sameAs links (Facebook, Instagram, LinkedIn)
- Add `FAQPage` schema using the same Q&A from `FAQSection`
- Add `BreadcrumbList` (Home only)

#### 3. Services page (`Services.tsx`)
- `BreadcrumbList`: Home > Services
- `Service` schema array for all truck + trailer services listed
- `LocalBusiness` reference

#### 4. Each Service Page (`ServicePageTemplate.tsx`)
- `BreadcrumbList`: Home > Services > [Service Name]
- `Service` schema with name, description, provider (CT Shop), areaServed
- `FAQPage` schema from `service.faqs` data
- `LocalBusiness` reference

#### 5. About page (`About.tsx`)
- `BreadcrumbList`: Home > About
- `Organization` schema
- `FAQPage` schema from the about page FAQs

#### 6. Contact page (`Contact.tsx`)
- `BreadcrumbList`: Home > Contact
- `LocalBusiness` with full contact details, geo, hours

#### 7. Blog listing (`Blog.tsx`)
- `BreadcrumbList`: Home > Blog
- `CollectionPage` schema

#### 8. Blog posts (`BlogPost.tsx`)
- `BreadcrumbList`: Home > Blog > [Post Title]
- `Article` schema with datePublished, author, publisher, image

#### 9. Locations page (`Locations.tsx`)
- `BreadcrumbList`: Home > Locations
- `LocalBusiness` schema

#### 10. Location detail (`LocationPage.tsx`)
- `BreadcrumbList`: Home > Locations > Phoenix
- `AutoRepair` schema with full address, services, hours

#### 11. Mobile Repair (`MobileRepair.tsx`)
- `BreadcrumbList`: Home > Mobile Repair
- `Service` schema for mobile/roadside service

### Implementation Approach

1. **Create a shared schema helper** (`src/lib/schema.ts`) with reusable builder functions:
   - `createLocalBusinessSchema()` — base business info reused everywhere
   - `createOrganizationSchema()`
   - `createBreadcrumbSchema(items: {name, url}[])`
   - `createFAQSchema(faqs: {question, answer}[])`
   - `createServiceSchema(name, description)`
   - `createArticleSchema(post)`

2. **Update `SEO.tsx`** to accept `structuredData` as `object | object[]` and render multiple `<script type="application/ld+json">` tags.

3. **Update each page** to pass the appropriate schemas via the `structuredData` prop.

### Files to create/modify
- **New:** `src/lib/schema.ts` — schema builder helpers
- **Modify:** `src/components/SEO.tsx` — support array of schemas
- **Modify:** `src/pages/Index.tsx` — enhanced schema
- **Modify:** `src/pages/Services.tsx` — add schemas
- **Modify:** `src/components/ServicePageTemplate.tsx` — add schemas
- **Modify:** `src/pages/About.tsx` — add schemas
- **Modify:** `src/pages/Contact.tsx` — add schemas
- **Modify:** `src/pages/Blog.tsx` — add schemas
- **Modify:** `src/pages/BlogPost.tsx` — add schemas
- **Modify:** `src/pages/Locations.tsx` — add schemas
- **Modify:** `src/pages/LocationPage.tsx` — add schemas
- **Modify:** `src/pages/MobileRepair.tsx` — add schemas

