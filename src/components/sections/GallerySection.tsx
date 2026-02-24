import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import shopInterior from "@/assets/shop-interior.jpg";
import truckYard from "@/assets/truck-yard.png";
import craneLift from "@/assets/crane-lift.png";
import towService from "@/assets/tow-service.png";
import towingRecovery from "@/assets/towing-recovery.jpg";
import nightTowing from "@/assets/night-towing.jpg";
import mechanicsWork from "@/assets/mechanics-work.jpeg";
import expertTechnician from "@/assets/expert-technician.png";
import truckDiagnostics from "@/assets/truck-diagnostics.jpg";
import teamWork from "@/assets/team-work.jpeg";

const images = [
  { src: shopInterior, alt: "CT Truck Shop interior with truck" },
  { src: truckYard, alt: "Truck yard at sunset" },
  { src: craneLift, alt: "Crane lifting truck for repair" },
  { src: towService, alt: "Tow service in action" },
  { src: towingRecovery, alt: "Towing and recovery service" },
  { src: nightTowing, alt: "Night towing operation" },
  { src: mechanicsWork, alt: "Mechanics working under truck" },
  { src: expertTechnician, alt: "Expert technician at work" },
  { src: truckDiagnostics, alt: "Truck computer diagnostics" },
  { src: teamWork, alt: "Team working together" },
];

// Duplicate for infinite scroll effect
const duplicatedImages = [...images, ...images];

const GallerySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPos += 0.5;
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
          scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="section-padding bg-primary overflow-hidden">
      <ScrollReveal>
        <div className="container-custom mb-10">
          <div className="text-center">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Our Work
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Real Results, Real Trucks
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Every vehicle receives our signature attention to detail. See the quality 
              of work that has earned us a 4.4-star reputation.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Scrolling Gallery */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-hidden cursor-grab"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 md:w-96 h-64 md:h-72 rounded-xl overflow-hidden group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* CTA below gallery */}
      <ScrollReveal delay={200}>
        <div className="container-custom mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:6028303232">
              <Button variant="hero" size="lg">
                <Phone className="h-5 w-5 mr-2" />
                Call (602) 830-3232
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="hero-outline" size="lg">
                Request a Quote
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default GallerySection;
