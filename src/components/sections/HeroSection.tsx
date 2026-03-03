import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Clock, Wrench } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import LeadForm from "@/components/LeadForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-[auto] lg:min-h-[75vh] flex items-center overflow-hidden py-6 lg:py-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl hidden sm:block" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl hidden sm:block" />
      
      <div className="container-custom max-w-[1400px] 2xl:max-w-[1600px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-3 py-1.5 mb-3 lg:mb-6 animate-fade-in mx-auto lg:mx-0">
              <Shield className="h-3 w-3 lg:h-4 lg:w-4 text-accent" />
              <span className="text-xs lg:text-sm xl:text-base font-medium text-primary-foreground">
                Trusted Fleet Maintenance Since 2015
              </span>
            </div>
            
            {/* Headline - smaller sizes */}
            <h1 className="font-heading text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-primary-foreground leading-tight mb-3 lg:mb-5 animate-fade-in-up">
              Phoenix's Premier{" "}
              <span className="text-gradient">Truck & Trailer</span>{" "}
              Repair Shop
            </h1>
            
            {/* Subheadline */}
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-primary-foreground mb-4 lg:mb-7 max-w-xl xl:max-w-2xl mx-auto lg:mx-0 animate-fade-in-up delay-200">
              From routine <Link to="/services" className="text-accent hover:underline">maintenance</Link> to complex{" "}
              <Link to="/services/engine-repair" className="text-accent hover:underline">engine repairs</Link>, our expert technicians ensure 
              minimal downtime and maximum efficiency for your commercial fleet. 
              <strong className="text-accent"> No. #1 Phoenix Repair Shop Since 2022.</strong>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300 justify-center lg:justify-start">
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
            <div className="mt-6 lg:mt-10 pt-4 lg:pt-6 border-t border-primary-foreground/20 animate-fade-in delay-500 hidden md:block">
              <div className="grid grid-cols-3 gap-3 md:gap-8">
                <div className="flex items-center gap-2">
                  <div className="icon-container-outline w-10 h-10 sm:w-14 sm:h-14">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading text-base sm:text-lg xl:text-xl font-bold text-primary-foreground">Fast</p>
                     <p className="text-[10px] sm:text-xs xl:text-sm text-primary-foreground">Response Time</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="icon-container-outline w-10 h-10 sm:w-14 sm:h-14">
                    <Wrench className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading text-base sm:text-lg xl:text-xl font-bold text-primary-foreground">2,500+</p>
                     <p className="text-[10px] sm:text-xs xl:text-sm text-primary-foreground">Repairs Completed</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="icon-container-outline w-10 h-10 sm:w-14 sm:h-14">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading text-base sm:text-lg xl:text-xl font-bold text-primary-foreground">DOT</p>
                     <p className="text-[10px] sm:text-xs xl:text-sm text-primary-foreground">Certified Inspections</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="animate-fade-in-up delay-300">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
