import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Zap, Shield, Gauge, Truck, Settings, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import truckYard from "@/assets/truck-yard.webp";
import mechanicsWork from "@/assets/mechanics-work.webp";
import truckDiagnostics from "@/assets/truck-diagnostics.webp";
import shopInterior from "@/assets/shop-interior.webp";

const services = [
  {
    icon: Wrench,
    title: "Commercial Fleet Repair",
    description: "Preventive maintenance and fast turnarounds that keep your fleet on schedule.",
    href: "/services/fleet-repair",
    image: truckYard,
  },
  {
    icon: Zap,
    title: "Emergency Mobile Repair",
    description: "Fast roadside assistance with fully-equipped mobile service units.",
    href: "/mobile-repair",
    image: mechanicsWork,
  },
  {
    icon: Settings,
    title: "Engine Service & Repair",
    description: "Complete diesel engine diagnostics and repair for all major brands.",
    href: "/services/engine-repair",
    image: truckDiagnostics,
  },
  {
    icon: Gauge,
    title: "DOT Inspections",
    description: "Comprehensive DOT compliance inspections to keep your fleet road-legal.",
    href: "/services/dot-inspections",
    image: shopInterior,
  },
];

const ServicesGridSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Premium Protection & Repair for Your Fleet
          </h2>
          <p className="text-muted-foreground text-lg">
            Every service delivered with precision and care. From routine maintenance 
            to emergency repairs, we've got you covered.
          </p>
        </div>

        {/* Services Grid with Images */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group relative rounded-2xl overflow-hidden h-80 flex items-end"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
              
              {/* Content */}
              <div className="relative z-10 p-6 w-full">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-primary-foreground/80 mb-4 max-w-md">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-accent font-semibold">
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-7 w-7 text-accent" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
          <span className="hidden sm:block text-muted-foreground">|</span>
          <a href="tel:6028303232">
            <Button variant="accent" size="default">
              <Phone className="h-4 w-4 mr-2" />
              Call for Service
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesGridSection;
