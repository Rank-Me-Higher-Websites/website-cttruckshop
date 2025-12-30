import GoogleMap from "@/components/GoogleMap";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const MapSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Find Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Visit Our Shop
          </h2>
          <p className="text-muted-foreground text-lg">
            Conveniently located in Phoenix, AZ with easy access from major highways
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <GoogleMap className="h-full min-h-[400px]" />
          </div>

          {/* Contact Card */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-card h-fit">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">
              CT Truck & Trailer Shop
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground text-sm">Phoenix, AZ</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a href="tel:6028303232" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                    (602) 830-3232
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Hours</p>
                  <p className="text-muted-foreground text-sm">Mon-Sat: 7AM-6PM</p>
                  <p className="text-accent text-sm font-medium">24/7 Emergency Service</p>
                </div>
              </div>
            </div>

            <a href="tel:6028303232">
              <Button variant="accent" className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
