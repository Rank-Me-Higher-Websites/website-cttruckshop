import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield, Users, Award, Wrench, Heart } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import teamWork from "@/assets/team-work.jpeg";
import shopInterior from "@/assets/shop-interior.jpg";

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description: "We show up when we say we will and get the job done right the first time.",
  },
  {
    icon: Clock,
    title: "Speed",
    description: "We understand downtime costs money. We work efficiently to get you back on the road.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "We treat every customer like family, providing honest advice and fair pricing.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "We use quality parts and follow best practices for every repair.",
  },
];

const stats = [
  { number: "2,500+", label: "Trucks Repaired" },
  { number: "24/7", label: "Emergency Service" },
  { number: "4.4★", label: "Google Rating" },
  { number: "8+", label: "Years Experience" },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="Learn about CT Truck & Trailer Shop, Phoenix's trusted commercial truck repair service. Expert technicians, 24/7 emergency service, and a commitment to keeping your fleet moving."
        keywords="about CT Truck Shop, Phoenix truck repair company, commercial fleet service"
      />

      {/* Hero with futuristic styling */}
      <section className="relative min-h-[60vh] flex items-center text-primary-foreground overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${shopInterior})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-center md:text-left">
            <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6 mx-auto md:mx-0">
              <Users className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">
                About CT Truck & Trailer Shop
              </span>
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Keeping Phoenix Fleets Moving <span className="text-gradient">Since 2015</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We're a family-owned truck and trailer repair shop dedicated to providing 
              fast, reliable, and affordable service to commercial fleets in the Phoenix metro area.
            </p>
          </div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-accent/30 rounded-tl-lg hidden sm:block" />
        <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-accent/30 rounded-tr-lg hidden sm:block" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-accent/30 rounded-bl-lg hidden sm:block" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-accent/30 rounded-br-lg hidden sm:block" />
      </section>

      {/* Stats */}
      <section className="py-12 bg-accent relative overflow-hidden">
        {/* Background pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 45%, hsl(var(--accent-foreground)) 45%, hsl(var(--accent-foreground)) 55%, transparent 55%)`,
            backgroundSize: '20px 20px'
          }}
        />
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-4xl md:text-5xl font-bold text-accent-foreground">
                  {stat.number}
                </p>
                <p className="text-accent-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section with futuristic styling */}
      <section className="section-padding bg-primary relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6 mx-auto lg:mx-0">
                <Wrench className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-primary-foreground">
                  Our Story
                </span>
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Built on a Foundation of <span className="text-gradient">Service</span>
              </h2>
              <div className="space-y-4 text-primary-foreground/80">
                <p>
                  CT Truck & Trailer Shop was founded with a simple mission: to provide 
                  commercial truck operators with reliable, honest, and efficient{" "}
                  <Link to="/services" className="text-accent hover:underline">repair services</Link>. 
                  We understand that when your truck is down, your business suffers.
                </p>
                <p>
                  That's why we've built our operation around minimizing your downtime. 
                  Our team of experienced technicians works quickly without cutting corners, 
                  using quality parts and modern diagnostic tools to get the job done right.
                </p>
                <p>
                  From our <Link to="/locations" className="text-accent hover:underline">Phoenix shop</Link>, we serve fleets throughout the metro area with 
                  both in-shop repairs and <Link to="/mobile-repair" className="text-accent hover:underline">24/7 mobile roadside assistance</Link>. Whether you 
                  need a quick PM service or major <Link to="/services/engine-repair" className="text-accent hover:underline">engine work</Link>, we're here to help.
                </p>
              </div>
              <a href="tel:6028303232" className="inline-block mt-8">
                <Button variant="hero" size="lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Contact Us Today
                </Button>
              </a>
            </div>
            
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 via-accent/20 to-accent/50 rounded-2xl blur-sm" />
              
              <div className="relative rounded-2xl overflow-hidden border border-accent/30">
                <img
                  src={teamWork}
                  alt="CT Truck & Trailer Shop team in Phoenix"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-accent rounded-tl-lg hidden sm:block" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-accent rounded-tr-lg hidden sm:block" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-accent rounded-bl-lg hidden sm:block" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-accent rounded-br-lg hidden sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Values with futuristic styling */}
      <section className="section-padding bg-primary relative overflow-hidden border-t border-accent/10">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">
                Our Values
              </span>
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              What <span className="text-gradient">Drives Us</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              These core values guide everything we do at CT Truck & Trailer Shop
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="relative bg-primary-foreground/5 rounded-xl p-6 border border-accent/20 hover:border-accent/50 transition-all overflow-hidden group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-primary-foreground/70">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
