import { Link } from "react-router-dom";
import HeroTrustBadges from "@/components/HeroTrustBadges";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Wrench, Zap, Settings, Gauge, Truck, Shield, Cog, Hammer } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import shopBayOverview from "@/assets/shop-bay-overview.jpg";
import { createBreadcrumbSchema, createServiceSchema, createLocalBusinessSchema, BASE_URL } from "@/lib/schema";

const truckServices = [
  { icon: Settings, title: "Emergency Truck Repair", description: "Fast emergency roadside truck repair services in Phoenix and surrounding areas.", href: "/emergency-truck-repair-phoenix" },
  { icon: Truck, title: "Truck Breakdown Service", description: "Fast mobile breakdown service with certified technicians ready day or night.", href: "/truck-breakdown-service-phoenix" },
  { icon: Settings, title: "Engine Repairs", description: "Diesel engine diagnostics, repair, and optimization for all semi-truck models.", href: "/semi-truck-engine-repairs-in-phoenix-az" },
  { icon: Zap, title: "AC Repair", description: "Semi truck AC system service to keep drivers comfortable in Arizona heat.", href: "/semi-truck-ac-repair-services" },
  { icon: Gauge, title: "Truck Diagnostics", description: "Advanced dealer-level diagnostics for engine, electrical, and emissions systems.", href: "/semi-truck-diagnostics-in-phoenix-az" },
  { icon: Shield, title: "Tire & Brake Repair", description: "Professional semi truck tire and brake service for safety and compliance.", href: "/semi-truck-tire-and-brake-repair-services-phoenix-az" },
];

const trailerServices = [
  { icon: Zap, title: "Trailer Electrical Repair", description: "Electrical system diagnostics, wiring repair, and lighting services.", href: "/semi-trailer-electrical-repair-services-phoenix-az" },
  { icon: Shield, title: "Trailer Brake & Tire", description: "Brake and tire service for semi trailers to ensure road safety.", href: "/semi-trailer-brake-and-tire-repair-services-in-phoenix-az" },
  { icon: Cog, title: "Trailer Suspension", description: "Air suspension, leaf spring, and shock absorber repair services.", href: "/semi-trailer-suspension-repair-services-phoenix-az" },
  { icon: Hammer, title: "Full Body Trailer Repair", description: "Body repair, welding, panel replacement, and full restoration.", href: "/full-body-semi-trailer-repair-in-phoenix-az" },
];

const Services = () => {
  return (
    <Layout>
      <SEO
        title="Truck & Trailer Repair Services in Phoenix, AZ"
        description="Full-service semi truck & trailer repair in Phoenix. Engine, brake, electrical, transmission, suspension, DOT inspections, and 24/7 emergency roadside assistance. Call CT Shop today."
        keywords="semi truck repair services phoenix, trailer repair services phoenix, DOT inspection phoenix, engine repair, brake service, truck shop phoenix az, diesel truck repair, fleet repair services"
        structuredData={[
          createBreadcrumbSchema([
            { name: "Home", url: BASE_URL },
            { name: "Services", url: `${BASE_URL}/services` },
          ]),
          createLocalBusinessSchema(),
          ...[...truckServices, ...trailerServices].map((s) =>
            createServiceSchema(s.title, s.description, `${BASE_URL}${s.href}`)
          ),
        ]}
      />

      {/* Hero with futuristic styling */}
      <section className="relative min-h-[50vh] md:min-h-[auto] flex items-center text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${shopBayOverview})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl hidden sm:block" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl hidden sm:block" />
        
        <div className="container-custom relative z-10 py-20 md:py-16">
          <div className="max-w-3xl text-center md:text-left">
            <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6 mx-auto md:mx-0">
              <Wrench className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">
                Our Services
              </span>
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Complete Truck & Trailer <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              From routine maintenance to emergency repairs, our expert technicians 
              provide comprehensive services for your commercial fleet.
            </p>
            <a href="tel:6028303232">
              <Button variant="hero" size="xl">
                <Phone className="h-5 w-5 mr-2" />
                Call (602) 830-3232
              </Button>
            </a>
            <HeroTrustBadges />
          </div>
        </div>
      </section>

      {/* Truck Services with futuristic styling */}
      <section className="section-padding bg-primary relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Truck Repair <span className="text-gradient">Services</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              Comprehensive repair and maintenance for semi-trucks and commercial vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {truckServices.map((service) => (
              <Link key={service.title} to={service.href} className="group">
                <article className="relative bg-primary-foreground/5 border border-accent/20 rounded-2xl p-6 h-full hover:border-accent/50 transition-all duration-300 overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-primary-foreground/70 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-accent font-medium text-sm">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trailer Services */}
      <section className="section-padding bg-primary relative overflow-hidden border-t border-accent/10">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Trailer Repair <span className="text-gradient">Services</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              Expert trailer repairs including brakes, suspension, welding, and hydraulics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trailerServices.map((service) => (
              <Link key={service.title} to={service.href} className="group">
                <article className="relative bg-primary-foreground/5 border border-accent/20 rounded-2xl p-6 h-full hover:border-accent/50 transition-all duration-300 overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-primary-foreground/70 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-accent font-medium text-sm">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service Banner */}
      <section className="py-12 bg-accent relative overflow-hidden">
        {/* Background pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 45%, hsl(var(--accent-foreground)) 45%, hsl(var(--accent-foreground)) 55%, transparent 55%)`,
            backgroundSize: '20px 20px'
          }}
        />
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent-foreground">
                Emergency Roadside Assistance
              </h3>
              <p className="text-accent-foreground/80 mt-1">
                Stranded on the highway? Our mobile techs are ready to help.
              </p>
            </div>
            <Link to="/mobile-repair">
              <Button variant="default" size="xl" className="font-bold bg-primary text-primary-foreground hover:bg-primary/90">
                Learn About Mobile Repair
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Services;
