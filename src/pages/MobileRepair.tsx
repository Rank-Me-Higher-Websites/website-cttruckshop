import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin, Truck, Wrench, Zap, CheckCircle } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import nightTowing from "@/assets/night-towing.jpg";

const mobileServices = [
  "Battery & charging system issues",
  "Air brake leaks & repairs",
  "Tire service & changes",
  "Electrical diagnostics",
  "Fuel delivery",
  "Jump starts",
  "Coolant leaks",
  "Minor mechanical repairs",
  "DOT light repairs",
  "Air system leaks",
];

const MobileRepair = () => {
  return (
    <Layout>
      <SEO
        title="Mobile Truck Repair"
        description="Emergency roadside assistance for semi-trucks in Phoenix, AZ. Fast mobile repair service throughout the Phoenix metro area. Call (602) 830-3232 for quick response."
        keywords="mobile truck repair, roadside assistance, emergency truck repair, fast truck service, Phoenix mobile mechanic"
      />

      {/* Hero with futuristic styling */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${nightTowing})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Glow effects */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-center md:text-left">
            <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm mx-auto md:mx-0">
              <Clock className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">
                24/7 Emergency Service
              </span>
            </span>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Mobile Truck Repair <span className="text-gradient">When You Need It</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-8">
              Stranded on the highway? Our mobile technicians come to you with 
              fully-equipped service vehicles for on-site diagnostics and repairs 
              throughout the Phoenix metro area.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="tel:6028303232">
                <Button variant="hero" size="xl">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (602) 830-3232
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-accent/30 rounded-tl-lg hidden sm:block" />
        <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-accent/30 rounded-tr-lg hidden sm:block" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-accent/30 rounded-bl-lg hidden sm:block" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-accent/30 rounded-br-lg hidden sm:block" />
      </section>

      {/* How It Works with futuristic styling */}
      <section className="section-padding bg-primary relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              How Our Mobile Service <span className="text-gradient">Works</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              Fast, reliable roadside assistance in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center relative bg-primary-foreground/5 rounded-2xl p-8 border border-accent/20 hover:border-accent/50 transition-all group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">
                  1. Call Us
                </h3>
                <p className="text-primary-foreground/70">
                  Call our 24/7 dispatch line and describe your issue and location
                </p>
              </div>
            </div>
            <div className="text-center relative bg-primary-foreground/5 rounded-2xl p-8 border border-accent/20 hover:border-accent/50 transition-all group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">
                  2. We Dispatch
                </h3>
                <p className="text-primary-foreground/70">
                  We send the nearest available mobile tech with a clear ETA
                </p>
              </div>
            </div>
            <div className="text-center relative bg-primary-foreground/5 rounded-2xl p-8 border border-accent/20 hover:border-accent/50 transition-all group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">
                  3. We Repair
                </h3>
                <p className="text-primary-foreground/70">
                  Our tech diagnoses and repairs your truck on-site to get you rolling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List with futuristic styling */}
      <section className="section-padding bg-primary relative overflow-hidden border-t border-accent/10">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6 mx-auto lg:mx-0">
                <Zap className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-primary-foreground">
                  On-Site Services
                </span>
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                What We Can Fix <span className="text-gradient">On The Road</span>
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-8">
                Our mobile units are equipped to handle many common roadside issues. 
                For more complex repairs, we can tow you to our{" "}
                <Link to="/locations" className="text-accent hover:underline">shop</Link> for{" "}
                <Link to="/services" className="text-accent hover:underline">full-service work</Link>.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {mobileServices.map((service) => (
                  <div key={service} className="flex items-center gap-2 p-2 rounded-lg bg-primary-foreground/5 border border-accent/20">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-primary-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative bg-accent/10 rounded-2xl p-8 border border-accent/30 overflow-hidden">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-sm" />
              
              <div className="relative z-10">
                <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-6">
                  Coverage Area
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Our mobile repair service covers the entire Phoenix metro area 
                  and major highways including:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 p-2 rounded-lg bg-primary-foreground/5 border border-accent/20">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-primary-foreground">I-10 (East & West)</span>
                  </li>
                  <li className="flex items-center gap-3 p-2 rounded-lg bg-primary-foreground/5 border border-accent/20">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-primary-foreground">I-17 (North & South)</span>
                  </li>
                  <li className="flex items-center gap-3 p-2 rounded-lg bg-primary-foreground/5 border border-accent/20">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-primary-foreground">Loop 101 & Loop 202</span>
                  </li>
                  <li className="flex items-center gap-3 p-2 rounded-lg bg-primary-foreground/5 border border-accent/20">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-primary-foreground">Phoenix Metro Industrial Areas</span>
                  </li>
                </ul>
                <a href="tel:6028303232">
                  <Button variant="hero" size="lg" className="w-full">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now: (602) 830-3232
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default MobileRepair;
