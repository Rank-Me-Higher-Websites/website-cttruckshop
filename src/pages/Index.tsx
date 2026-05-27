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
import {
  createLocalBusinessSchema,
  createOrganizationSchema,
  createBreadcrumbSchema,
  createFAQSchema,
  BASE_URL,
} from "@/lib/schema";

const homeFaqs = [
  { question: "What types of trucks do you service?", answer: "We service all types of heavy-duty commercial vehicles including semi-trucks, tractor-trailers, box trucks, flatbeds, refrigerated trailers, and full commercial fleets." },
  { question: "Do you provide diesel truck repair in Phoenix?", answer: "Yes — diesel truck repair is one of our core specialties. Our Phoenix shop handles diesel engine diagnostics, fuel system repairs, turbocharger work, EGR and DPF service, cooling system repairs, and full diesel engine rebuilds for Freightliner, Peterbilt, Kenworth, Volvo, International, and Mack trucks." },
  { question: "Do you handle heavy-duty truck repair?", answer: "Absolutely. CT Truck and Trailer Shop is built for heavy-duty truck repair — Class 7 and Class 8 commercial vehicles. Our shop has the bay clearance, lifting capacity, and diesel diagnostic equipment required for full-size semi-trucks and heavy commercial trailers." },
  { question: "Do you offer mobile truck repair in Phoenix?", answer: "Yes. Our mobile truck repair service covers the entire Phoenix metro — Glendale, Tempe, Mesa, Chandler, Goodyear, Avondale, Peoria, and along the I-10, I-17, Loop 101 and Loop 202 corridors. We bring diagnostic tools, air systems, welding, and common parts directly to your truck." },
  { question: "Do you do DOT inspections in Phoenix?", answer: "Yes. We are a certified Federal Annual Inspection station (FMCSA 49 CFR Part 396). We perform full DOT inspections for trucks and trailers at our Phoenix shop, document the results, and issue your inspection sticker on the spot when you pass." },
  { question: "Do you offer emergency roadside assistance?", answer: "Yes! We provide emergency roadside assistance throughout Phoenix, AZ and surrounding areas including Glendale, Tempe, Mesa, and along major routes like I-10, I-17, and Loop 101." },
  { question: "What services do you provide?", answer: "We offer comprehensive truck and trailer services including: diesel engine repair and diagnostics, brake service, electrical systems, transmission and drivetrain repair, DOT inspections, preventive maintenance, welding, ABS repairs, suspension, hydraulics, A/C and cooling systems, and more." },
  { question: "How quickly can you respond to an emergency call?", answer: "For emergency roadside assistance, we provide clear ETAs when you call. Response times vary based on your location and current demand, but we prioritize getting you back on the road as quickly as possible." },
  { question: "Do you offer fleet maintenance programs?", answer: "Yes, we offer customized fleet maintenance programs designed to reduce downtime and control costs. Fleet customers receive priority scheduling, preventive maintenance reminders, and consistent service." },
  { question: "What are your rates and payment options?", answer: "We provide upfront, transparent pricing with no hidden fees. We accept all major credit cards, cash, and can work with fleet billing accounts." },
  { question: "Are your technicians certified?", answer: "Yes, our technicians are skilled professionals with extensive experience in commercial truck and trailer repair. We perform DOT-compliant inspections and repairs using modern diagnostic tools." },
  { question: "Where are you located?", answer: "We're located at 3883 N 36th Ave A, Phoenix, AZ 85019 and serve the entire Phoenix metro area." },
];

const structuredData = [
  createLocalBusinessSchema(),
  createOrganizationSchema(),
  createBreadcrumbSchema([{ name: "Home", url: BASE_URL }]),
  createFAQSchema(homeFaqs),
];

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Phoenix Semi Truck & Diesel Repair | Heavy-Duty & Mobile"
        description="CT Truck and Trailer Shop — Phoenix's full-service diesel truck repair, heavy-duty truck repair, mobile dispatch, and DOT inspection station. 24/7 emergency roadside. Call (602) 830-3232."
        keywords="diesel truck repair phoenix, heavy duty truck repair phoenix, mobile truck repair phoenix, dot inspection phoenix, semi truck repair phoenix, trailer repair phoenix az, fleet maintenance phoenix, roadside assistance phoenix, commercial truck service, diesel mechanic phoenix, truck shop phoenix"
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
