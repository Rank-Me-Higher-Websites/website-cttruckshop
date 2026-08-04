import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";
import { reviewsAggregate } from "@/data/reviews";
import awardPlaque from "@/assets/best-of-2026-award.webp";

const AwardSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background border-b border-border">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
            <img
              src={awardPlaque}
              alt="Best of 2026 Award Winner plaque from BusinessRate for CT Truck and Trailer Shop, Truck Repair Shop in Maryvale Village, Phoenix, AZ — powered by Google Reviews"
              className="w-52 sm:w-60 md:w-64 h-auto rounded-lg shadow-xl flex-shrink-0"
              width={1022}
              height={1280}
              loading="eager"
            />

            <div className="text-center md:text-left">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                Award Winning Shop
              </span>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Best of 2026 Award Winner
              </h2>
              <p className="text-muted-foreground mb-5 max-w-xl">
                CT Truck and Trailer Shop was named a <strong className="text-foreground font-semibold">BusinessRate
                Best of 2026 Award Winner</strong> in the Truck Repair Shop category for Maryvale Village, Phoenix,
                AZ — an award powered by verified Google Reviews from the drivers, owner-operators, and fleets we
                keep on the road.
              </p>

              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < 4 ? "text-sky-500 fill-sky-500" : "text-sky-500 fill-sky-500/50"}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">{reviewsAggregate.rating.toFixed(1)}</span> from{" "}
                  <span className="font-bold text-foreground">{reviewsAggregate.count}</span> Google reviews
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AwardSection;
