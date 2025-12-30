import GoogleMap from "@/components/GoogleMap";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const MapSection = () => {
  return (
    <section className="py-20 bg-[#1a2332] relative overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-accent/20 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            ✦ Find Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Wherever Your Jobs Are, <span className="text-accent">We're Close</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Phoenix Metro Area. Easy access from I-10, I-17, and Loop 101.
          </p>
        </div>

        {/* Map Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#232d3f] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Map */}
            <div className="relative">
              <GoogleMap className="h-[350px] md:h-[400px]" />
              
              {/* Location badge overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-800">CT Truck & Trailer Shop</span>
                </div>
              </div>
            </div>

            {/* Info Footer */}
            <div className="p-6 md:p-8 bg-gradient-to-r from-[#232d3f] to-[#1a2332]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Location Info */}
                <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Phoenix, AZ</p>
                      <p className="text-gray-400 text-sm">Main Shop Location</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-white font-medium">24/7 Emergency</p>
                      <p className="text-gray-400 text-sm">Mon-Sat: 7AM-6PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <a href="tel:6028303232" className="text-white font-medium hover:text-accent transition-colors">
                        (602) 830-3232
                      </a>
                      <p className="text-gray-400 text-sm">Call Anytime</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a 
                  href="https://www.google.com/maps/dir//CT+Truck+and+Trailer+Shop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="accent" size="lg" className="w-full md:w-auto gap-2">
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
