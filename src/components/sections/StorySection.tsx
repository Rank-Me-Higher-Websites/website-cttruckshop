import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import facilityImage from "@/assets/facility.jpg";

const StorySection = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={facilityImage}
                alt="CT Truck & Trailer Shop facility"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            
            {/* Accent Decorations */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-4 border-accent/30 rounded-xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              More Than Just a Repair Shop
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              We Don't Just Fix Trucks — We Keep Businesses Moving
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                At CT Truck & Trailer Shop, we understand that every hour of downtime 
                costs you money. That's why we've built our operation around one 
                principle: <strong className="text-foreground">get you back on the road, fast.</strong>
              </p>
              <p>
                Our Phoenix facility is equipped with state-of-the-art diagnostic 
                tools and staffed by experienced technicians who specialize in 
                commercial vehicles. Whether it's a quick PM service or major 
                engine work, every truck receives the same attention to detail.
              </p>
              <p>
                When your fleet's uptime matters, you bring it to CT Truck Shop.
              </p>
            </div>
            <Link to="/about" className="inline-block mt-8">
              <Button variant="outline" size="lg">
                Learn Our Story
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
