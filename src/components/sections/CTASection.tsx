import { Phone, ArrowRight, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { useQuoteModal } from "@/contexts/QuoteModalContext";
import towingRecovery from "@/assets/towing-recovery.jpg";

const CTASection = () => {
  const { open } = useQuoteModal();
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${towingRecovery})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" className="text-center lg:text-left">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Keep Your Business Moving — Contact Us Today
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Whether you need emergency roadside assistance, scheduled maintenance, 
              or comprehensive fleet services, CT Truck & Trailer Shop is here to help. 
              Get fast, reliable service from Phoenix's trusted truck repair experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="tel:6028303232">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  <Phone className="h-4 w-4 mr-2" />
                  Call (602) 830-3232
                </Button>
              </a>
              <button onClick={open}>
                <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                  Request a Quote
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </button>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ScrollReveal delay={200}>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 h-full">
                <Clock className="h-10 w-10 text-accent mb-4" />
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">
                  Fast Emergency Response
                </h3>
                <p className="text-primary-foreground/70">
                  Our mobile techs are ready to respond quickly for roadside emergencies
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={350}>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 h-full">
                <MapPin className="h-10 w-10 text-accent mb-4" />
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">
                  Phoenix Metro Area
                </h3>
                <p className="text-primary-foreground/70">
                  Serving Phoenix, Glendale, Tempe, Mesa, and surrounding areas
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
