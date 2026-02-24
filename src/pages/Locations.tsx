import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin, Clock, Truck } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import truckYard from "@/assets/truck-yard.png";

const locations = [
  {
    slug: "phoenix",
    name: "Phoenix Main Shop",
    address: "3883 N 36th Ave, Phoenix, AZ 85019",
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

      {/* Hero with futuristic styling */}
      <section className="relative min-h-[60vh] flex items-center text-primary-foreground overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${truckYard})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="container-custom relative z-10 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">
                Our Locations
              </span>
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find Us in <span className="text-gradient">Phoenix</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Visit our shop or let us come to you with our mobile repair service. 
              We serve the entire Phoenix metro area.
            </p>
          </div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-accent/30 rounded-tl-lg hidden sm:block" />
        <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-accent/30 rounded-tr-lg hidden sm:block" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-accent/30 rounded-bl-lg hidden sm:block" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-accent/30 rounded-br-lg hidden sm:block" />
      </section>

      {/* Locations List with futuristic styling */}
      <section className="section-padding bg-primary relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.map((location) => (
              <div key={location.slug} className="relative bg-primary-foreground/5 border border-accent/20 rounded-2xl p-8 hover:border-accent/50 transition-all overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-50" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                      <MapPin className="h-7 w-7 text-accent" />
                    </div>
                    {location.emergency && (
                      <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium border border-accent/30">
                        24/7 Emergency
                      </span>
                    )}
                  </div>
                  
                  <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-2">
                    {location.name}
                  </h2>
                  <a href="https://maps.app.goo.gl/XFyDXt5avVXvvDPr5" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 mb-4 hover:text-accent transition-colors block">{location.address}</a>
                  
                  <div className="space-y-2 mb-6">
                    <a
                      href={`tel:${location.phone.replace(/[^\d]/g, "")}`}
                      className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors"
                    >
                      <Phone className="h-4 w-4 text-accent" />
                      <span className="font-medium">{location.phone}</span>
                    </a>
                    <div className="flex items-center gap-2 text-primary-foreground/70">
                      <Clock className="h-4 w-4 text-accent" />
                      <span>{location.hours}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {location.services.map((service) => (
                      <span
                        key={service}
                        className="bg-accent/10 border border-accent/20 px-3 py-1 rounded-full text-xs font-medium text-primary-foreground"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  
                  <Link to={`/locations/${location.slug}`}>
                    <Button variant="hero-outline" className="w-full">
                      View Location Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}

            {/* Mobile Repair Card */}
            <div className="relative bg-accent/10 border border-accent/30 rounded-2xl p-8 overflow-hidden">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-sm" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <Truck className="h-7 w-7 text-accent-foreground" />
                </div>
                
                <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-2">
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
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-primary relative overflow-hidden border-t border-accent/10">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Areas We <span className="text-gradient">Serve</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              Our shop and mobile repair service covers the entire Phoenix metro area
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-primary-foreground/5 px-5 py-2 rounded-full font-medium text-primary-foreground border border-accent/20 hover:border-accent/50 hover:text-accent transition-all cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
          
          <p className="text-center text-primary-foreground/60 mt-8">
            Plus coverage along I-10, I-17, Loop 101, Loop 202, and surrounding highways
          </p>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Locations;
