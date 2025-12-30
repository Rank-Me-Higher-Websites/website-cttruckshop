import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Clock, Wrench } from "lucide-react";
import ScrollIndicator from "@/components/ScrollIndicator";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">
              Trusted Fleet Maintenance Since 2015
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Phoenix's Premier{" "}
            <span className="text-gradient">Truck & Trailer</span>{" "}
            Repair Shop
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in-up delay-200">
            From routine maintenance to complex repairs, our expert technicians ensure 
            minimal downtime and maximum efficiency for your commercial fleet. 
            <strong className="text-accent"> 24/7 Emergency Service Available.</strong>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <a href="tel:6028303232">
              <Button variant="hero" size="xl">
                <Phone className="h-5 w-5 mr-2" />
                Call (602) 830-3232
              </Button>
            </a>
            <Link to="/services">
              <Button variant="hero-outline" size="xl">
                View Our Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/10 animate-fade-in delay-500">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
              <div className="flex items-center gap-3">
                <div className="icon-container-outline">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-heading text-xl font-bold text-primary-foreground">24/7</p>
                  <p className="text-sm text-primary-foreground/60">Emergency Service</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="icon-container-outline">
                  <Wrench className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-heading text-xl font-bold text-primary-foreground">2,500+</p>
                  <p className="text-sm text-primary-foreground/60">Repairs Completed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="icon-container-outline">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-heading text-xl font-bold text-primary-foreground">DOT</p>
                  <p className="text-sm text-primary-foreground/60">Certified Inspections</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
