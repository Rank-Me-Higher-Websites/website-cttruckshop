import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import { createBreadcrumbSchema, createLocalBusinessSchema, BASE_URL } from "@/lib/schema";
import { serviceAreas } from "@/data/serviceAreas";

const ServiceAreas = () => {
  return (
    <Layout>
      <SEO
        title="Service Areas – Phoenix Metro Truck & Trailer Repair"
        description="CT Truck & Trailer Shop serves the entire Phoenix metro area including Glendale, Tempe, Mesa, Chandler, Gilbert, Scottsdale, Peoria, Surprise, Avondale, Goodyear, and Buckeye. Mobile dispatch available."
        keywords="truck repair near me phoenix, semi truck repair phoenix metro, trailer repair arizona, mobile truck repair phoenix area"
        structuredData={[
          createBreadcrumbSchema([
            { name: "Home", url: BASE_URL },
            { name: "Service Areas", url: `${BASE_URL}/service-areas` },
          ]),
          createLocalBusinessSchema(),
        ]}
      />

      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-4">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-medium text-primary-foreground">Phoenix Metro Coverage</span>
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              Areas We <span className="text-gradient">Serve</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-4">
              Full-service semi truck and trailer repair across the entire Phoenix metro area. 
              Shop service at our central Phoenix location plus mobile dispatch to your breakdown.
            </p>
            <a href="tel:6028303232">
              <Button variant="hero" size="lg" data-testid="button-call-areas">
                <Phone className="h-4 w-4 mr-2" />
                (602) 830-3232
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-primary border-t border-accent/10">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                to={`/service-areas/${area.slug}`}
                className="bg-primary-foreground/5 border border-accent/20 rounded-xl p-5 hover:border-accent/50 transition-all group"
                data-testid={`link-area-${area.slug}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h2 className="font-heading text-lg font-bold text-primary-foreground group-hover:text-accent transition-colors">
                    {area.name}
                  </h2>
                  <ArrowRight className="h-4 w-4 text-primary-foreground/30 group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
                </div>
                <p className="text-primary-foreground/50 text-xs mb-2">{area.distance} · Pop. {area.population}</p>
                <p className="text-primary-foreground/70 text-sm line-clamp-2">{area.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {area.highways.slice(0, 3).map((hw) => (
                    <span key={hw} className="bg-accent/10 text-primary-foreground/60 text-[10px] font-medium px-2 py-0.5 rounded-full">
                      {hw}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-primary-foreground/50 text-sm">
              Plus coverage along I-10, I-17, Loop 101, Loop 202, Loop 303, and surrounding highways.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServiceAreas;
