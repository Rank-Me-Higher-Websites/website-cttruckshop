import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, ArrowLeft, Check, Wrench, Shield, Zap } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";

const locationsData: Record<string, {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: string;
  emergency: boolean;
  services: string[];
  features: string[];
  description: string;
  metaDescription: string;
}> = {
  phoenix: {
    name: "Phoenix Main Shop",
    address: "Phoenix",
    city: "Phoenix",
    state: "AZ",
    zip: "85000",
    phone: "(602) 830-3232",
    hours: "Mon-Sat: 7AM-6PM",
    emergency: true,
    services: [
      "Engine Repair",
      "Brake Service",
      "Electrical Systems",
      "Transmission Repair",
      "DOT Inspections",
      "Preventive Maintenance",
      "Welding",
      "Hydraulics",
    ],
    features: [
      "Full-service repair bays",
      "State-of-the-art diagnostics",
      "Secure truck parking",
      "24/7 access for fleet customers",
      "Mobile repair dispatch",
    ],
    description: "Our Phoenix location serves as the headquarters for CT Truck & Trailer Shop, providing comprehensive repair and maintenance services for the entire Phoenix metro area.",
    metaDescription: "CT Truck & Trailer Shop in Phoenix, AZ. Full-service truck and trailer repair, DOT inspections, 24/7 emergency service. Call (602) 830-3232.",
  },
};

const defaultLocation = {
  name: "CT Truck & Trailer Shop",
  address: "Phoenix Metro Area",
  city: "Phoenix",
  state: "AZ",
  zip: "",
  phone: "(602) 830-3232",
  hours: "Mon-Sat: 7AM-6PM",
  emergency: true,
  services: ["Engine Repair", "Brake Service", "Electrical", "Transmission", "DOT Inspections"],
  features: ["Full-service repairs", "Mobile service", "24/7 emergency"],
  description: "CT Truck & Trailer Shop provides professional truck and trailer repair services throughout the Phoenix metro area.",
  metaDescription: "CT Truck & Trailer Shop - Professional truck and trailer repair in Phoenix, AZ. 24/7 emergency service available.",
};

// Pricing plans
const pricingPlans = [
  {
    id: "basic",
    title: "Basic PM Service",
    price: "Starting at $199",
    description: "Essential preventive maintenance",
    features: [
      "Oil & filter change",
      "Multi-point inspection",
      "Fluid top-off",
      "Tire pressure check",
    ],
    popular: false,
  },
  {
    id: "standard",
    title: "Standard PM Service",
    price: "Starting at $349",
    description: "Comprehensive preventive maintenance",
    features: [
      "Everything in Basic",
      "Brake inspection",
      "Air system check",
      "Electrical system test",
      "Detailed report",
    ],
    popular: true,
  },
  {
    id: "fleet",
    title: "Fleet Program",
    price: "Custom Pricing",
    description: "Tailored for fleet customers",
    features: [
      "Priority scheduling",
      "Volume discounts",
      "PM reminders",
      "Dedicated account manager",
      "24/7 emergency priority",
    ],
    popular: false,
  },
];

const LocationPage = () => {
  const { locationSlug } = useParams<{ locationSlug: string }>();
  const location = locationSlug && locationsData[locationSlug] ? locationsData[locationSlug] : defaultLocation;

  return (
    <Layout>
      <SEO
        title={`${location.name} - Truck Repair`}
        description={location.metaDescription}
        keywords={`truck repair ${location.city}, trailer repair ${location.city}, semi truck service ${location.state}`}
      />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom">
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            All Locations
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                {location.city}, {location.state}
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {location.name}
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                {location.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${location.phone.replace(/[^\d]/g, "")}`}>
                  <Button variant="hero" size="xl">
                    <Phone className="h-5 w-5 mr-2" />
                    {location.phone}
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-primary-foreground/10 rounded-xl p-6 border border-primary-foreground/20">
              <h3 className="font-heading text-xl font-bold mb-4">Location Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{location.address}</p>
                    <p className="text-primary-foreground/70">{location.city}, {location.state}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{location.hours}</p>
                    {location.emergency && (
                      <p className="text-accent">24/7 Emergency Service Available</p>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <a href={`tel:${location.phone.replace(/[^\d]/g, "")}`} className="font-medium hover:text-accent transition-colors">
                    {location.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services at Location */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
            Services at This Location
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {location.services.map((service) => (
              <div key={service} className="bg-card rounded-lg p-4 text-center border border-border">
                <Wrench className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="font-medium text-foreground">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
            Location Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {location.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 p-4 rounded-lg bg-secondary">
                <Check className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Pricing
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Maintenance Programs
            </h2>
            <p className="text-muted-foreground text-lg">
              Keep your fleet running with our preventive maintenance programs
            </p>
          </div>

          {/* Pricing Cards - Button Alignment Pattern */}
          <div className="grid gap-8 md:grid-cols-3 items-stretch max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.id}
                className={`h-full flex flex-col ${plan.popular ? "pricing-card-featured" : "pricing-card"}`}
              >
                {plan.popular && (
                  <div className="bg-accent text-accent-foreground text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className="flex flex-col flex-1 p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {plan.title}
                  </h3>
                  <div className="mb-2">
                    <span className="font-heading text-3xl font-bold text-foreground">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">
                    {plan.description}
                  </p>

                  <ul className="flex-1 space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="tel:6028303232" className="mt-auto">
                    <Button
                      variant={plan.popular ? "accent" : "outline"}
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default LocationPage;
