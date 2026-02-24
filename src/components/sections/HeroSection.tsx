import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Clock, Wrench } from "lucide-react";
import nightTowing from "@/assets/night-towing.jpg";
import LeadForm from "@/components/LeadForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${nightTowing})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl hidden sm:block" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl hidden sm:block" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">
                Trusted Fleet Maintenance Since 2015
              </span>
            </div>
            
            {/* Headline - smaller sizes */}
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-5 animate-fade-in-up">
              Phoenix's Premier{" "}
              <span className="text-gradient">Truck & Trailer</span>{" "}
              Repair Shop
            </h1>
            
            {/* Subheadline */}
            <p className="text-base md:text-lg text-primary-foreground/80 mb-7 max-w-xl animate-fade-in-up delay-200">
              From routine <Link to="/services" className="text-accent hover:underline">maintenance</Link> to complex{" "}
              <Link to="/services/engine-repair" className="text-accent hover:underline">engine repairs</Link>, our expert technicians ensure 
              minimal downtime and maximum efficiency for your commercial fleet. 
              <strong className="text-accent"> <Link to="/mobile-repair" className="hover:underline">24/7 Emergency Service</Link> Available.</strong>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <a href="tel:6028303232" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (602) 830-3232
                </Button>
              </a>
              <Link to="/services" className="w-full sm:w-auto">
                <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                  View Our Services
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-10 pt-6 border-t border-primary-foreground/10 animate-fade-in delay-500">
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                <div className="flex items-center gap-2">
                  <div className="icon-container-outline">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading text-lg font-bold text-primary-foreground">24/7</p>
                    <p className="text-xs text-primary-foreground/60">Emergency Service</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="icon-container-outline">
                    <Wrench className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading text-lg font-bold text-primary-foreground">2,500+</p>
                    <p className="text-xs text-primary-foreground/60">Repairs Completed</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="icon-container-outline">
                    <Shield className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading text-lg font-bold text-primary-foreground">DOT</p>
                    <p className="text-xs text-primary-foreground/60">Certified Inspections</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="animate-fade-in-up delay-300 hidden lg:block">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
