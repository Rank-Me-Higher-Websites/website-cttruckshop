import { Link } from "react-router-dom";
import { CheckCircle, Clock, Shield, Wrench, Users, Award } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import expertTechnician from "@/assets/expert-technician.png";

const benefits = [
  {
    icon: Clock,
    title: "Fast Emergency Response",
    description: "Quick roadside assistance to minimize your downtime",
  },
  {
    icon: Shield,
    title: "DOT Certified",
    description: "All inspections and repairs meet DOT compliance standards",
  },
  {
    icon: Wrench,
    title: "Expert Technicians",
    description: "Skilled mechanics with decades of commercial truck experience",
  },
  {
    icon: Users,
    title: "Fleet-Focused",
    description: "Special programs and priority service for regular fleet customers",
  },
  {
    icon: Award,
    title: "Quality Parts",
    description: "We use only high-quality OEM and aftermarket parts",
  },
  {
    icon: CheckCircle,
    title: "Upfront Pricing",
    description: "Clear ETAs and honest pricing with no hidden surprises",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <ScrollReveal direction="left" className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={expertTechnician}
                alt="Expert technician working on semi truck engine"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-6 bg-card rounded-xl shadow-xl p-4 sm:p-6 border border-border max-w-[200px] sm:max-w-xs">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="icon-container w-10 h-10 sm:w-14 sm:h-14">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-heading text-xl sm:text-2xl font-bold text-foreground">4.5★</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Google Reviews</p>
                </div>
              </div>
            </div>
            
            {/* Accent Decorations - hidden on mobile to prevent overflow */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-xl -z-10 hidden sm:block" />
          </ScrollReveal>

          {/* Content Side */}
          <ScrollReveal direction="right" className="order-1 lg:order-2 text-center lg:text-left">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Phoenix's Most Trusted Fleet Maintenance Partner
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              CT Truck & Trailer Shop combines skilled technicians with state-of-the-art 
              diagnostic tools to handle everything from{" "}
              <Link to="/services" className="text-accent hover:underline">routine maintenance</Link> to{" "}
              <Link to="/services/engine-repair" className="text-accent hover:underline">complex repairs</Link>. 
              We keep your fleet running smoothly with fast, efficient, and reliable service.{" "}
              <Link to="/about" className="text-accent hover:underline">Learn more about our team</Link>.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={benefit.title} delay={index * 100}>
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <benefit.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
