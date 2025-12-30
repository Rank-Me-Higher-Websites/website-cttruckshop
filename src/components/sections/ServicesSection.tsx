import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Zap, Settings, Gauge, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Commercial Fleet Repair",
    description: "Preventive maintenance and fast turnarounds that keep your fleet on schedule and costs down.",
    href: "/services/fleet-repair",
  },
  {
    icon: Zap,
    title: "Emergency Truck Repair",
    description: "Our mobile techs come to you for on-site diagnostics and repairs to get you moving fast.",
    href: "/mobile-repair",
  },
  {
    icon: Truck,
    title: "Semi Truck & Trailer Repair",
    description: "Full-service repairs for semis and trailers - brakes, suspension, electrical & air systems.",
    href: "/services/semi-truck-repair",
  },
  {
    icon: Settings,
    title: "Engine Service & Repair",
    description: "Complete diesel engine diagnostics, repair, and maintenance with state-of-the-art tools.",
    href: "/services/engine-repair",
  },
  {
    icon: Gauge,
    title: "DOT Inspections",
    description: "Comprehensive DOT compliance inspections to keep your fleet road-legal and safe.",
    href: "/services/dot-inspections",
  },
  {
    icon: Shield,
    title: "Preventive Maintenance",
    description: "Regular PM services including oil changes, quick-lube, and comprehensive check-ups.",
    href: "/services/pm-maintenance",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Complete Truck & Trailer Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From routine maintenance to <Link to="/mobile-repair" className="text-accent hover:underline">emergency repairs</Link>, we provide comprehensive services 
            for all your commercial fleet needs in <Link to="/locations" className="text-accent hover:underline">Phoenix and surrounding areas</Link>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link key={service.title} to={service.href} className="group">
              <article className="service-card p-6 h-full">
                <div className="icon-container mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-1">
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

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="default" size="lg">
              View All Services
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
