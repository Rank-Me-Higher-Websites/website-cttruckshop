import { useEffect, useRef } from "react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const ReviewsSection = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current || !widgetRef.current) return;
    scriptLoaded.current = true;

    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/loader.js?238c26a65a4a652ab72673dc0c6";
    script.defer = true;
    script.async = true;
    widgetRef.current.appendChild(script);
  }, []);

  return (
    <section className="pt-6 pb-16 md:pb-20 lg:pb-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Customer Reviews
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What Our Customers Say
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div ref={widgetRef} className="max-w-5xl mx-auto" />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ReviewsSection;
