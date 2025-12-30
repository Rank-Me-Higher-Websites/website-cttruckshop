import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

const locations = [
  {
    slug: "phoenix",
    name: "Phoenix Main Shop",
    address: "Phoenix, AZ",
    phone: "(602) 830-3232",
    hours: "Mon-Sat: 7AM-6PM",
    emergency: true,
    services: ["Full-Service Repairs", "DOT Inspections", "Mobile Dispatch"],
  },
];

const serviceAreas = [
  "Phoenix",
  "Glendale",
  "Tempe",
  "Mesa",
  "Chandler",
  "Gilbert",
  "Scottsdale",
  "Peoria",
  "Surprise",
  "Avondale",
  "Goodyear",
  "Buckeye",
];

const Locations = () => {
  return (
    <Layout>
      <SEO
        title="Locations"
        description="Find CT Truck & Trailer Shop locations in Phoenix, AZ. Full-service truck and trailer repair, 24/7 emergency roadside assistance throughout the Phoenix metro area."
        keywords="truck repair near me, Phoenix truck shop, trailer repair Arizona, commercial truck service locations"
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom text-center">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Our Locations
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find Us in Phoenix
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Visit our shop or let us come to you with our mobile repair service. 
            We serve the entire Phoenix metro area.
          </p>
        </div>
      </section>

      {/* Locations List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.map((location) => (
              <div key={location.slug} className="card-elevated p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="icon-container">
                    <MapPin className="h-6 w-6 text-accent-foreground" />
                  </div>
                  {location.emergency && (
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      24/7 Emergency
                    </span>
                  )}
                </div>
                
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                  {location.name}
                </h2>
                <p className="text-muted-foreground mb-4">{location.address}</p>
                
                <div className="space-y-2 mb-6">
                  <a
                    href={`tel:${location.phone.replace(/[^\d]/g, "")}`}
                    className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                  >
                    <Phone className="h-4 w-4 text-accent" />
                    <span className="font-medium">{location.phone}</span>
                  </a>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>{location.hours}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {location.services.map((service) => (
                    <span
                      key={service}
                      className="bg-secondary px-3 py-1 rounded-full text-xs font-medium text-foreground"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                
                <Link to={`/locations/${location.slug}`}>
                  <Button variant="outline" className="w-full">
                    View Location Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}

            {/* Mobile Repair Card */}
            <div className="card-elevated p-8 bg-primary text-primary-foreground">
              <div className="icon-container mb-6">
                <Phone className="h-6 w-6 text-accent-foreground" />
              </div>
              
              <h2 className="font-heading text-2xl font-bold mb-2">
                Mobile Repair Service
              </h2>
              <p className="text-primary-foreground/70 mb-6">
                Can't make it to the shop? Our mobile techs come to you for on-site 
                diagnostics and repairs throughout the Phoenix metro area.
              </p>
              
              <a href="tel:6028303232">
                <Button variant="hero" className="w-full">
                  Call for Mobile Service
                  <Phone className="h-4 w-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Areas We Serve
            </h2>
            <p className="text-muted-foreground text-lg">
              Our shop and mobile repair service covers the entire Phoenix metro area
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-card px-5 py-2 rounded-full font-medium text-foreground border border-border hover:border-accent hover:text-accent transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-8">
            Plus coverage along I-10, I-17, Loop 101, Loop 202, and surrounding highways
          </p>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Locations;
