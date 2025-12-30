import { Shield, Star, Award, Users, CheckCircle } from "lucide-react";

const TrustSection = () => {
  const stats = [
    { number: "2,500+", label: "Trucks Repaired", icon: Shield },
    { number: "5.0★", label: "Google Rating", icon: Star },
    { number: "8+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Fleet Customers", icon: Users },
  ];

  return (
    <section className="py-8 bg-card border-y border-border">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {/* Trust Badge */}
          <a
            href="https://www.google.com/maps/place/CT+Truck+and+Trailer+Shop"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:scale-105 transition-transform"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-foreground">5.0 Rating</p>
              <p className="text-sm text-muted-foreground">22 Google Reviews</p>
            </div>
          </a>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-border" />

          {/* DOT Certified Badge */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-accent" />
            </div>
            <div className="text-left">
              <p className="font-bold text-foreground">DOT Certified</p>
              <p className="text-sm text-muted-foreground">Compliance Inspections</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-border" />

          {/* 24/7 Badge */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Shield className="h-6 w-6 text-accent" />
            </div>
            <div className="text-left">
              <p className="font-bold text-foreground">24/7 Emergency</p>
              <p className="text-sm text-muted-foreground">Roadside Assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
