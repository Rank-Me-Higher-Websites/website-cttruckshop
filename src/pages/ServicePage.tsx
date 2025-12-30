import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Check, ArrowLeft } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";

// Service data - this would typically come from a CMS or API
const servicesData: Record<string, {
  title: string;
  headline: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  image: string;
  metaDescription: string;
  keywords: string;
}> = {
  "engine-repair": {
    title: "Engine Repair",
    headline: "Diesel Engine Repair & Diagnostics",
    description: "Complete diesel engine diagnostics, repair, and maintenance for all commercial trucks.",
    longDescription: "Our certified technicians use state-of-the-art diagnostic tools to quickly identify and repair engine issues. From minor tune-ups to major overhauls, we handle all aspects of diesel engine maintenance and repair to keep your fleet running at peak performance.",
    features: [
      "Comprehensive engine diagnostics",
      "Fuel system repair",
      "Turbocharger service",
      "Cooling system maintenance",
      "Engine overhauls",
      "Performance optimization",
    ],
    benefits: [
      "Fast turnaround times",
      "OEM quality parts",
      "Experienced diesel technicians",
      "Competitive pricing",
    ],
    image: "/images/engine-repair.jpg",
    metaDescription: "Professional diesel engine repair and diagnostics for semi-trucks and commercial fleets in Phoenix. Fast turnaround, quality parts, expert technicians.",
    keywords: "diesel engine repair, truck engine service, commercial vehicle engine, Phoenix truck repair",
  },
  "brake-service": {
    title: "Brake Service",
    headline: "Commercial Truck Brake Repair & Service",
    description: "DOT-compliant brake inspections, repairs, and replacements for trucks and trailers.",
    longDescription: "Safety is paramount when it comes to brake systems. Our technicians perform thorough inspections and repairs on all brake components including drums, rotors, shoes, pads, air systems, and ABS. We ensure your vehicles meet all DOT compliance requirements.",
    features: [
      "Complete brake inspections",
      "Drum and rotor replacement",
      "Air brake system service",
      "ABS diagnostics and repair",
      "Brake adjustment",
      "Emergency brake service",
    ],
    benefits: [
      "DOT compliant service",
      "Same-day service available",
      "Quality brake components",
      "Expert technicians",
    ],
    image: "/images/brake-service.jpg",
    metaDescription: "Professional brake repair and service for commercial trucks in Phoenix. DOT inspections, ABS repair, air brake systems. Fast, reliable service.",
    keywords: "truck brake repair, commercial brake service, DOT brake inspection, air brake repair Phoenix",
  },
  "electrical": {
    title: "Electrical Systems",
    headline: "Truck Electrical Diagnostics & Repair",
    description: "Full electrical system diagnostics, repair, and installation for commercial vehicles.",
    longDescription: "Modern trucks rely on complex electrical systems. Our technicians are skilled in diagnosing and repairing all electrical issues from simple lighting problems to complex computer system faults. We keep your trucks connected and operational.",
    features: [
      "Computer diagnostics",
      "Wiring repair",
      "Alternator & starter service",
      "Lighting systems",
      "Battery testing & replacement",
      "Electronic module repair",
    ],
    benefits: [
      "Advanced diagnostic equipment",
      "Experienced electrical technicians",
      "Quick troubleshooting",
      "Quality electrical components",
    ],
    image: "/images/electrical.jpg",
    metaDescription: "Commercial truck electrical repair in Phoenix. Expert diagnostics, wiring repair, alternators, starters, and computer systems.",
    keywords: "truck electrical repair, commercial vehicle electrical, diesel truck diagnostics, Phoenix truck electrician",
  },
  "transmission": {
    title: "Transmission Repair",
    headline: "Transmission & Drivetrain Service",
    description: "Complete transmission diagnostics, repair, and rebuilds for heavy-duty trucks.",
    longDescription: "Your transmission is critical to your truck's performance. We provide comprehensive transmission services from fluid changes and adjustments to complete rebuilds. Our experienced technicians work on manual and automatic transmissions for all truck makes.",
    features: [
      "Transmission diagnostics",
      "Clutch replacement",
      "Differential service",
      "Driveshaft repair",
      "U-joint replacement",
      "Transmission rebuilds",
    ],
    benefits: [
      "Factory-trained technicians",
      "Warranty on repairs",
      "OEM and quality aftermarket parts",
      "Competitive pricing",
    ],
    image: "/images/transmission.jpg",
    metaDescription: "Heavy-duty truck transmission repair in Phoenix. Clutch replacement, differential service, drivetrain repair. Expert technicians, quality parts.",
    keywords: "truck transmission repair, commercial transmission service, clutch replacement, drivetrain repair Phoenix",
  },
};

const defaultService = {
  title: "Our Services",
  headline: "Professional Truck & Trailer Services",
  description: "Comprehensive repair and maintenance services for your commercial fleet.",
  longDescription: "CT Truck & Trailer Shop provides complete repair and maintenance services for all types of commercial vehicles. Our experienced technicians are ready to help with any service you need.",
  features: ["Comprehensive diagnostics", "Quality repairs", "Preventive maintenance", "Emergency service"],
  benefits: ["Expert technicians", "Quality parts", "Fast turnaround", "Fair pricing"],
  image: "/images/services.jpg",
  metaDescription: "Professional truck and trailer repair services in Phoenix, AZ. Expert technicians, quality parts, fast service.",
  keywords: "truck repair phoenix, trailer repair, commercial vehicle service",
};

const ServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceSlug && servicesData[serviceSlug] ? servicesData[serviceSlug] : defaultService;

  return (
    <Layout>
      <SEO
        title={service.title}
        description={service.metaDescription}
        keywords={service.keywords}
      />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
          
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              {service.title}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {service.headline}
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:6028303232">
                <Button variant="hero" size="xl">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (602) 830-3232
                </Button>
              </a>
              <a href="mailto:service@clevertranscoshop.com">
                <Button variant="hero-outline" size="lg">
                  Request a Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                About This Service
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {service.longDescription}
              </p>

              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                What's Included
              </h3>
              <ul className="grid md:grid-cols-2 gap-3 mb-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Why Choose CT Truck Shop
              </h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-secondary rounded-xl p-6 sticky top-32">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Get a Quote
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contact us for fast, reliable {service.title.toLowerCase()} service.
                </p>
                <a href="tel:6028303232" className="block mb-4">
                  <Button variant="accent" size="lg" className="w-full">
                    <Phone className="h-5 w-5 mr-2" />
                    (602) 830-3232
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground text-center">
                  24/7 Emergency Service Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default ServicePage;
