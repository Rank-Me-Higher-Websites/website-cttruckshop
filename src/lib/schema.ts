const BUSINESS = {
  name: "CT Truck & Trailer Shop",
  url: "https://cttruckshop.com",
  phone: "+1-602-830-3232",
  email: "service@clevertranscoshop.com",
  logo: "https://cttruckshop.com/logo.png",
  image: "https://cttruckshop.com/og-image.jpg",
  address: {
    "@type": "PostalAddress" as const,
    streetAddress: "3883 N 36th Ave",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    postalCode: "85019",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates" as const,
    latitude: 33.4734,
    longitude: -112.1328,
  },
  openingHours: [
    {
      "@type": "OpeningHoursSpecification" as const,
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    "Phoenix", "Glendale", "Tempe", "Mesa", "Chandler", "Gilbert",
    "Scottsdale", "Peoria", "Surprise", "Avondale", "Goodyear", "Buckeye",
  ],
  sameAs: [
    "https://www.facebook.com/cttruckshop",
    "https://www.instagram.com/cttruckshop",
    "https://www.linkedin.com/company/cttruckshop",
  ],
};

export const createLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: BUSINESS.name,
  image: BUSINESS.image,
  "@id": BUSINESS.url,
  url: BUSINESS.url,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: BUSINESS.address,
  geo: BUSINESS.geo,
  openingHoursSpecification: BUSINESS.openingHours,
  areaServed: BUSINESS.areaServed.map((city) => ({
    "@type": "City",
    name: city,
  })),
  sameAs: BUSINESS.sameAs,
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "61",
  },
});

export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BUSINESS.name,
  url: BUSINESS.url,
  logo: BUSINESS.logo,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: BUSINESS.address,
  sameAs: BUSINESS.sameAs,
});

export const createBreadcrumbSchema = (
  items: { name: string; url: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});

export const createFAQSchema = (
  faqs: { question: string; answer: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const createServiceSchema = (
  name: string,
  description: string,
  url: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url,
  provider: {
    "@type": "AutoRepair",
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    address: BUSINESS.address,
  },
  areaServed: BUSINESS.areaServed.map((city) => ({
    "@type": "City",
    name: city,
  })),
});

export const createArticleSchema = (post: {
  title: string;
  metaDescription: string;
  date: string;
  featuredImage: string;
  slug: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.metaDescription,
  image: post.featuredImage,
  datePublished: post.date,
  url: `${BUSINESS.url}/blog/${post.slug}`,
  author: {
    "@type": "Organization",
    name: BUSINESS.name,
  },
  publisher: {
    "@type": "Organization",
    name: BUSINESS.name,
    logo: {
      "@type": "ImageObject",
      url: BUSINESS.logo,
    },
  },
});

export const createCollectionPageSchema = (
  name: string,
  description: string,
  url: string
) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name,
  description,
  url,
  publisher: {
    "@type": "Organization",
    name: BUSINESS.name,
  },
});

export const BASE_URL = BUSINESS.url;
