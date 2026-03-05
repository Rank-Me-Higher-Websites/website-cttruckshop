import { Star, CheckCircle, Shield } from "lucide-react";

const HeroTrustBadges = () => {
  return (
    <div className="mt-6 pt-4 border-t border-primary-foreground/20 flex items-center gap-3 sm:gap-6 flex-nowrap">
      {/* Google Rating */}
      <a
        href="https://maps.app.goo.gl/XFyDXt5avVXvvDPr5"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform"
      >
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 ${
                i < 4 ? "text-accent fill-accent" : "text-accent fill-accent/50"
              }`}
            />
          ))}
        </div>
        <div className="text-left">
          <p className="font-bold text-primary-foreground text-[10px] sm:text-xs leading-tight">4.5 Rating</p>
          <p className="text-[8px] sm:text-[10px] text-primary-foreground/60 leading-tight">61 Reviews</p>
        </div>
      </a>

      {/* Divider */}
      <div className="w-px h-6 sm:h-8 bg-primary-foreground/20 flex-shrink-0" />

      {/* DOT Certified */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <CheckCircle className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
        <div className="text-left">
          <p className="font-bold text-primary-foreground text-[10px] sm:text-xs leading-tight">DOT Certified</p>
          <p className="text-[8px] sm:text-[10px] text-primary-foreground/60 leading-tight">Inspections</p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-px h-6 sm:h-8 bg-primary-foreground/20 flex-shrink-0" />

      {/* Fast Response */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <Shield className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
        <div className="text-left">
          <p className="font-bold text-primary-foreground text-[10px] sm:text-xs leading-tight">Fast Response</p>
          <p className="text-[8px] sm:text-[10px] text-primary-foreground/60 leading-tight">Roadside</p>
        </div>
      </div>
    </div>
  );
};

export default HeroTrustBadges;
