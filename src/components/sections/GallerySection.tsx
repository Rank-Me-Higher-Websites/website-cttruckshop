import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import mobileRepair from "@/assets/mobile-repair.jpg";
import facility from "@/assets/facility.jpg";
import engineRepair from "@/assets/engine-repair.jpg";

const images = [
  { src: heroBg, alt: "Commercial truck repair shop interior" },
  { src: mobileRepair, alt: "Mobile roadside repair service" },
  { src: facility, alt: "CT Truck Shop facility exterior" },
  { src: engineRepair, alt: "Diesel engine repair work" },
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
            of work that has earned us a 5-star reputation.
          </p>
        </div>
      </div>

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
    </section>
  );
};

export default GallerySection;
