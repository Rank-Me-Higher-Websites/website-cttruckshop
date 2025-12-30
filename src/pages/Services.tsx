import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Wrench, Zap, Settings, Gauge, Truck, Shield, Cog, Hammer } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";

const truckServices = [
  {
    icon: Settings,
    title: "Engine Repair",
    description: "Complete diesel engine diagnostics, repair, and maintenance with state-of-the-art tools.",
    href: "/services/engine-repair",
  },
  {
    icon: Shield,
    title: "Brake Service",
    description: "DOT-compliant brake inspections, repairs, and replacements for trucks and trailers.",
    href: "/services/brake-service",
  },
  {
    icon: Zap,
    title: "Electrical Systems",
    description: "Full electrical diagnostics, wiring repair, alternators, starters, and computer systems.",
    href: "/services/electrical",
  },
  {
    icon: Cog,
    title: "Transmission Repair",
    description: "Complete transmission diagnostics, clutch replacement, and drivetrain service.",
    href: "/services/transmission",
  },
  {
    icon: Gauge,
    title: "DOT Inspections",
    description: "Comprehensive DOT compliance inspections to keep your fleet road-legal and safe.",
    href: "/services/dot-inspections",
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    description: "Regular PM services including oil changes, quick-lube, and comprehensive check-ups.",
    href: "/services/pm-maintenance",
  },
];

const trailerServices = [
  {
    icon: Shield,
    title: "Trailer Brakes",
    description: "Air brake systems, ABS diagnostics and repair for all trailer types.",
    href: "/services/trailer-brakes",
  },
  {
    icon: Truck,
    title: "Suspension",
    description: "Complete suspension repairs and replacements for smooth hauling.",
    href: "/services/suspension",
  },
  {
    icon: Hammer,
    title: "Welding",
    description: "Structural welding and fabrication for trailers and truck components.",
    href: "/services/welding",
  },
  {
    icon: Cog,
    title: "Hydraulics",
    description: "Hydraulic system diagnostics, repair, and maintenance.",
    href: "/services/hydraulics",
  },
];

const Services = () => {
  return (
    <Layout>
      <SEO
        title="Services"
        description="Complete truck and trailer repair services in Phoenix. Engine repair, brake service, DOT inspections, transmission, electrical, welding, and 24/7 emergency roadside assistance."
        keywords="truck repair services, trailer repair, DOT inspection, engine repair, brake service, Phoenix truck shop"
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom text-center">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Complete Truck & Trailer Services
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            From routine maintenance to emergency repairs, our expert technicians 
            provide comprehensive services for your commercial fleet.
          </p>
          <a href="tel:6028303232">
            <Button variant="hero" size="xl">
              <Phone className="h-5 w-5 mr-2" />
              Call (602) 830-3232
            </Button>
          </a>
        </div>
      </section>

      {/* Truck Services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Truck Repair Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive repair and maintenance for semi-trucks and commercial vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {truckServices.map((service) => (
              <Link key={service.title} to={service.href} className="group">
                <article className="service-card p-6 h-full">
                  <div className="icon-container mb-5 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-accent font-medium text-sm">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trailer Services */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trailer Repair Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Expert trailer repairs including brakes, suspension, welding, and hydraulics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trailerServices.map((service) => (
              <Link key={service.title} to={service.href} className="group">
                <article className="service-card p-6 h-full">
                  <div className="icon-container mb-5 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-accent font-medium text-sm">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service Banner */}
      <section className="py-12 bg-accent">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent-foreground">
                24/7 Emergency Roadside Assistance
              </h3>
              <p className="text-accent-foreground/80 mt-1">
                Stranded on the highway? Our mobile techs are ready to help.
              </p>
            </div>
            <Link to="/mobile-repair">
              <Button variant="default" size="xl" className="font-bold">
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
