import { Link } from "react-router-dom";
import { Phone, Wrench, Clock, Shield, Zap, Settings, Gauge, Cog, ThermometerSun, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamWork from "@/assets/team-work.jpeg";

const services = [
  { icon: Settings, name: "Engine Service & Repair" },
  { icon: Shield, name: "Brake Systems & ABS" },
  { icon: Zap, name: "Electrical & Computer Diagnostics" },
  { icon: Cog, name: "Transmission & Drivetrain" },
  { icon: Wrench, name: "Oil Changes & Quick-Lube" },
  { icon: Gauge, name: "Suspension & Steering" },
  { icon: Wrench, name: "Welding & Fabrication" },
  { icon: Settings, name: "Hydraulic Systems" },
  { icon: ThermometerSun, name: "Radiators, Cooling & A/C" },
  { icon: CheckCircle, name: "DOT Compliance Inspections" },
];

const SEOContentSection = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div>
            <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Wrench className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">
                Phoenix's Trusted Fleet Partner
              </span>
            </span>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Commercial Fleet & Semi-Truck{" "}
              <span className="text-gradient">Repair Experts</span>
            </h2>

            <div className="space-y-4 text-primary-foreground/80 mb-8">
              <p>
                <strong className="text-primary-foreground">CT Truck & Trailer Shop</strong> keeps 
                commercial fleets moving throughout{" "}
                <Link to="/locations" className="text-accent hover:underline">Phoenix, Glendale, Tempe, Mesa</Link>, and the surrounding 
                Arizona metro area with comprehensive in-shop and{" "}
                <Link to="/mobile-repair" className="text-accent hover:underline">mobile repair services</Link>.
              </p>
              <p>
                Our experienced technicians handle everything from routine{" "}
                <Link to="/services" className="text-accent hover:underline font-medium">preventive maintenance</Link> to complex{" "}
                <Link to="/services/engine-repair" className="text-accent hover:underline font-medium">emergency repairs</Link>, using state-of-the-art 
                diagnostic tools and high-quality parts. Read our{" "}
                <Link to="/blog" className="text-accent hover:underline">latest blog posts</Link> for maintenance tips.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {services.map((service) => (
                <div 
                  key={service.name} 
                  className="flex items-center gap-2 p-2 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/30 transition-colors group"
                >
                  <service.icon className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>

            <a href="tel:6028303232">
              <Button variant="hero" size="lg">
                <Phone className="h-5 w-5 mr-2" />
                Call (602) 830-3232
              </Button>
            </a>
          </div>

          {/* Image Side with Futuristic Frame */}
          <div className="relative">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 via-accent/20 to-accent/50 rounded-2xl blur-sm" />
            
            <div className="relative bg-primary rounded-2xl overflow-hidden border border-accent/30">
              <img
                src={teamWork}
                alt="CT Truck Shop team working together"
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
              
              {/* Floating info card */}
              <div className="absolute bottom-4 left-4 right-4 bg-primary/90 backdrop-blur-sm rounded-xl p-4 border border-accent/30">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-primary-foreground">
                      24/7 Emergency Roadside
                    </h4>
                    <p className="text-sm text-primary-foreground/70">
                      Fast dispatch on I-10, I-17 & Loop 101
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-accent rounded-tl-lg" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-accent rounded-tr-lg" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-accent rounded-bl-lg" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-accent rounded-br-lg" />
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-primary-foreground/70 max-w-3xl mx-auto">
            We service tractors, trailers, and complete commercial fleets using only quality parts and modern 
            diagnostic equipment. Whether you operate a single truck or manage an entire fleet,{" "}
            <Link to="/contact" className="text-accent hover:underline font-medium">
              contact CT Truck & Trailer Shop
            </Link>{" "}
            today for fast, reliable service you can count on.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SEOContentSection;
