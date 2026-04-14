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

      <section className="bg-primary text-primary-foreground py-8 md:py-10">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 bg-accent/20 border border-accent/30 rounded-full px-3 py-1 mb-3">
              <MapPin className="h-3 w-3 text-accent" />
              <span className="text-[11px] font-medium text-primary-foreground">Phoenix Metro Coverage</span>
            </span>
            <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              Areas We <span className="text-gradient">Serve</span>
            </h1>
            <p className="text-primary-foreground/75 text-sm md:text-base mb-4">
              Full-service semi truck and trailer repair across the Phoenix metro. 
              Shop service at our central location plus mobile dispatch to your breakdown.
            </p>
            <a href="tel:6028303232">
              <Button variant="hero" size="default" data-testid="button-call-areas">
                <Phone className="h-4 w-4 mr-1.5" />
                (602) 830-3232
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 bg-primary border-t border-accent/10">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                to={`/service-areas/${area.slug}`}
                className="bg-primary-foreground/5 border border-accent/15 rounded-lg p-4 hover:border-accent/40 transition-all group"
                data-testid={`link-area-${area.slug}`}
              >
                <div className="flex items-start justify-between mb-1">
                  <h2 className="font-heading text-base font-bold text-primary-foreground group-hover:text-accent transition-colors">
                    {area.name}
                  </h2>
                  <ArrowRight className="h-3.5 w-3.5 text-primary-foreground/20 group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
                </div>
                <p className="text-primary-foreground/40 text-[11px] mb-1.5">{area.distance} · Pop. {area.population}</p>
                <p className="text-primary-foreground/65 text-xs leading-relaxed line-clamp-2">{area.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {area.highways.slice(0, 3).map((hw) => (
                    <span key={hw} className="bg-accent/10 text-primary-foreground/50 text-[10px] font-medium px-1.5 py-0.5 rounded-full">
                      {hw}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <p className="text-primary-foreground/40 text-xs text-center mt-6">
            Plus coverage along I-10, I-17, Loop 101, Loop 202, Loop 303, and surrounding highways.
          </p>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServiceAreas;
