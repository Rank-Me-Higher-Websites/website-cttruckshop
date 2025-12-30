import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield, Users, Award, Wrench, Target, Heart } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import facilityImage from "@/assets/facility.jpg";

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
  { number: "5.0★", label: "Google Rating" },
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

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              About CT Truck & Trailer Shop
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Keeping Phoenix Fleets Moving Since 2015
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We're a family-owned truck and trailer repair shop dedicated to providing 
              fast, reliable, and affordable service to commercial fleets in the Phoenix metro area.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-accent">
        <div className="container-custom">
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

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built on a Foundation of Service
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  CT Truck & Trailer Shop was founded with a simple mission: to provide 
                  commercial truck operators with reliable, honest, and efficient repair services. 
                  We understand that when your truck is down, your business suffers.
                </p>
                <p>
                  That's why we've built our operation around minimizing your downtime. 
                  Our team of experienced technicians works quickly without cutting corners, 
                  using quality parts and modern diagnostic tools to get the job done right.
                </p>
                <p>
                  From our Phoenix shop, we serve fleets throughout the metro area with 
                  both in-shop repairs and 24/7 mobile roadside assistance. Whether you 
                  need a quick PM service or major engine work, we're here to help.
                </p>
              </div>
              <a href="tel:6028303232" className="inline-block mt-8">
                <Button variant="accent" size="lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Contact Us Today
                </Button>
              </a>
            </div>
            
            <div className="relative">
              <img
                src={facilityImage}
                alt="CT Truck & Trailer Shop facility in Phoenix"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-accent rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Our Values
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-muted-foreground text-lg">
              These core values guide everything we do at CT Truck & Trailer Shop
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-xl p-6 border border-border">
                <div className="icon-container mb-4">
                  <value.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
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
