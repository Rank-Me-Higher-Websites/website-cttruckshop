import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ServicesGridSection from "@/components/sections/ServicesGridSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import GallerySection from "@/components/sections/GallerySection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import StorySection from "@/components/sections/StorySection";

import MapSection from "@/components/sections/MapSection";
import FAQSection from "@/components/sections/FAQSection";
import SEOContentSection from "@/components/sections/SEOContentSection";
import CTASection from "@/components/sections/CTASection";
import StickyContactBar from "@/components/StickyContactBar";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "CT Truck & Trailer Shop",
  image: "https://cttruckshop.com/logo.png",
  "@id": "https://cttruckshop.com",
  url: "https://cttruckshop.com",
  telephone: "+1-602-830-3232",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.4484,
    longitude: -112.074,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  sameAs: [],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "22",
  },
};

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Truck & Trailer Repair Phoenix"
        description="CT Truck & Trailer Shop offers expert fleet maintenance, semi-truck repair, and 24/7 emergency roadside assistance in Phoenix, AZ. DOT inspections, brake service, engine repair & more."
        keywords="truck repair phoenix, trailer repair, semi truck repair, fleet maintenance, DOT inspection, roadside assistance, commercial truck service"
        structuredData={structuredData}
      />
      <HeroSection />
      <TrustSection />
      <ServicesGridSection />
      <BenefitsSection />
      <GallerySection />
      <ReviewsSection />
      <StorySection />
      <MapSection />
      <FAQSection />
      <SEOContentSection />
      <CTASection />
      <StickyContactBar />
    </Layout>
  );
};

export default Index;
