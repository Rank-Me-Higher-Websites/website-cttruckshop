import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, ArrowRight, Truck, Wrench, Shield, Navigation } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import { createBreadcrumbSchema, createServiceSchema, createLocalBusinessSchema, BASE_URL } from "@/lib/schema";
import { serviceAreas } from "@/data/serviceAreas";

const services = [
  "Engine Repair",
  "Brake & Tire Service",
  "Electrical Diagnostics",
  "Transmission Repair",
  "DOT Inspections",
  "AC Repair",
  "Suspension & Steering",
  "Welding & Fabrication",
];

const ServiceAreaPage = () => {
  const { areaSlug } = useParams<{ areaSlug: string }>();
  const area = serviceAreas.find((a) => a.slug === areaSlug);

  if (!area) {
    return (
      <Layout>
        <SEO title="Area Not Found" description="The service area you're looking for doesn't exist." />
        <section className="section-padding bg-primary text-center">
          <div className="container-custom">
            <h1 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Area Not Found</h1>
            <Link to="/service-areas">
              <Button variant="hero">View All Service Areas</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const nearbyAreas = serviceAreas.filter((a) => a.slug !== area.slug).slice(0, 4);

  return (
    <Layout>
      <SEO
        title={area.metaTitle}
        description={area.metaDescription}
        keywords={area.keywords}
        structuredData={[
          createBreadcrumbSchema([
            { name: "Home", url: BASE_URL },
            { name: "Service Areas", url: `${BASE_URL}/service-areas` },
            { name: area.name, url: `${BASE_URL}/service-areas/${area.slug}` },
          ]),
          createServiceSchema(
            `Semi Truck Repair in ${area.name}, AZ`,
            area.metaDescription,
            `${BASE_URL}/service-areas/${area.slug}`
          ),
          createLocalBusinessSchema(),
        ]}
      />

      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container-custom">
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 hover:text-accent transition-colors mb-4"
            data-testid="link-back-areas"
          >
            <Navigation className="h-3.5 w-3.5" />
            All Service Areas
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-accent/20 text-accent text-xs font-semibold px-2.5 py-1 rounded-full border border-accent/30">
                {area.county}
              </span>
              <span className="text-primary-foreground/50 text-xs">{area.distance}</span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              Semi Truck Repair in <span className="text-gradient">{area.name}</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-6" data-testid="text-area-description">
              {area.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:6028303232">
                <Button variant="hero" size="lg" data-testid="button-call-area">
                  <Phone className="h-4 w-4 mr-2" />
                  (602) 830-3232
                </Button>
              </a>
              <a href="https://maps.app.goo.gl/XFyDXt5avVXvvDPr5" target="_blank" rel="noopener noreferrer">
                <Button variant="hero-outline" size="lg" data-testid="button-directions-area">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-primary border-t border-accent/10">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="bg-primary-foreground/5 border border-accent/20 rounded-xl p-5">
              <Truck className="h-6 w-6 text-accent mb-2" />
              <h3 className="font-heading text-sm font-bold text-primary-foreground mb-1">Mobile Dispatch</h3>
              <p className="text-primary-foreground/60 text-sm">
                Can't make it to the shop? We dispatch mobile techs to {area.name} for on-site repairs.
              </p>
            </div>
            <div className="bg-primary-foreground/5 border border-accent/20 rounded-xl p-5">
              <Clock className="h-6 w-6 text-accent mb-2" />
              <h3 className="font-heading text-sm font-bold text-primary-foreground mb-1">Fast Turnaround</h3>
              <p className="text-primary-foreground/60 text-sm">
                {area.distance === "Home base" ? "Walk-ins welcome at our main Phoenix shop." : `Only ${area.distance} – get back on the road fast.`}
              </p>
            </div>
            <div className="bg-primary-foreground/5 border border-accent/20 rounded-xl p-5">
              <Shield className="h-6 w-6 text-accent mb-2" />
              <h3 className="font-heading text-sm font-bold text-primary-foreground mb-1">Emergency Service</h3>
              <p className="text-primary-foreground/60 text-sm">
                Roadside breakdowns near {area.name}? Call us for emergency dispatch.
              </p>
            </div>
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
            About Trucking in {area.name}
          </h2>
          <p className="text-primary-foreground/70 mb-3" data-testid="text-local-info">{area.localInfo}</p>
          <p className="text-primary-foreground/70 mb-8" data-testid="text-truck-activity">{area.truckActivity}</p>

          <div className="flex flex-wrap gap-2 mb-2">
            <span className="text-xs font-semibold text-primary-foreground/50 uppercase tracking-wider mr-1 self-center">Key highways:</span>
            {area.highways.map((hw) => (
              <span key={hw} className="bg-accent/10 border border-accent/20 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                {hw}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-primary border-t border-accent/10">
        <div className="container-custom">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
            Services Available Near {area.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {services.map((service) => (
              <div key={service} className="flex items-center gap-2 bg-primary-foreground/5 border border-accent/15 rounded-lg p-3">
                <Wrench className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-primary-foreground">{service}</span>
              </div>
            ))}
          </div>
          <p className="text-primary-foreground/50 text-sm mt-4">
            All services available at our Phoenix shop. Mobile repair for select services.
          </p>
        </div>
      </section>

      {nearbyAreas.length > 0 && (
        <section className="py-10 md:py-14 bg-primary border-t border-accent/10">
          <div className="container-custom">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
              Nearby Service Areas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {nearbyAreas.map((nearby) => (
                <Link
                  key={nearby.slug}
                  to={`/service-areas/${nearby.slug}`}
                  className="bg-primary-foreground/5 border border-accent/20 rounded-lg p-4 hover:border-accent/50 transition-colors group"
                  data-testid={`link-area-${nearby.slug}`}
                >
                  <h3 className="font-heading text-sm font-bold text-primary-foreground group-hover:text-accent transition-colors">
                    {nearby.name}
                  </h3>
                  <p className="text-primary-foreground/50 text-xs mt-1">{nearby.distance}</p>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link to="/service-areas" data-testid="link-all-areas">
                <Button variant="hero-outline" size="sm">
                  View All Areas
                  <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </Layout>
  );
};

export default ServiceAreaPage;
