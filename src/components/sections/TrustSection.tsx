import { Shield, Star, Award, Users, CheckCircle } from "lucide-react";

const TrustSection = () => {
  const stats = [
    { number: "2,500+", label: "Trucks Repaired", icon: Shield },
    { number: "4.5★", label: "Google Rating", icon: Star },
    { number: "8+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Fleet Customers", icon: Users },
  ];

  return (
    <section className="py-8 bg-card border-y border-border">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
          {/* Trust Badge */}
          <a
            href="https://maps.app.goo.gl/XFyDXt5avVXvvDPr5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform"
          >
            <div className="flex items-center gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-3 w-3 sm:h-5 sm:w-5 ${i < 4 ? 'text-sky-500 fill-sky-500' : 'text-sky-500 fill-sky-500/50'}`} />
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-foreground text-xs sm:text-base">4.5 Rating</p>
              <p className="text-[10px] sm:text-sm text-muted-foreground">61 Google Reviews</p>
            </div>
          </a>

          {/* Divider */}
          <div className="w-px h-8 sm:h-12 bg-border" />

          {/* DOT Certified Badge */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="h-4 w-4 sm:h-6 sm:w-6 text-accent" />
            </div>
            <div className="text-left">
              <p className="font-bold text-foreground text-xs sm:text-base">DOT Certified</p>
              <p className="text-[10px] sm:text-sm text-muted-foreground">Compliance Inspections</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-8 sm:h-12 bg-border" />

          {/* Emergency Badge */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Shield className="h-4 w-4 sm:h-6 sm:w-6 text-accent" />
            </div>
            <div className="text-left">
              <p className="font-bold text-foreground text-xs sm:text-base">Fast Response</p>
              <p className="text-[10px] sm:text-sm text-muted-foreground">Roadside Assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
