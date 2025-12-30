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
        title="24/7 Mobile Truck Repair"
        description="24/7 emergency roadside assistance for semi-trucks in Phoenix, AZ. Mobile repair service throughout the Phoenix metro area. Call (602) 830-3232 for fast response."
        keywords="mobile truck repair, roadside assistance, emergency truck repair, 24/7 truck service, Phoenix mobile mechanic"
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${nightTowing})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
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
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:6028303232">
                <Button variant="hero" size="xl">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (602) 830-3232
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Our Mobile Service Works
            </h2>
            <p className="text-muted-foreground text-lg">
              Fast, reliable roadside assistance in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                1. Call Us
              </h3>
              <p className="text-muted-foreground">
                Call our 24/7 dispatch line and describe your issue and location
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                2. We Dispatch
              </h3>
              <p className="text-muted-foreground">
                We send the nearest available mobile tech with a clear ETA
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                3. We Repair
              </h3>
              <p className="text-muted-foreground">
                Our tech diagnoses and repairs your truck on-site to get you rolling
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                On-Site Services
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                What We Can Fix On The Road
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our mobile units are equipped to handle many common roadside issues. 
                For more complex repairs, we can tow you to our shop for full-service work.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {mobileServices.map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="font-heading text-2xl font-bold mb-6">
                Coverage Area
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Our mobile repair service covers the entire Phoenix metro area 
                and major highways including:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>I-10 (East & West)</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>I-17 (North & South)</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>Loop 101 & Loop 202</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>Phoenix Metro Industrial Areas</span>
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
      </section>

      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default MobileRepair;
