import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import GoogleMap from "@/components/GoogleMap";
import LeadForm from "@/components/LeadForm";
import facility from "@/assets/facility.jpg";
import { createBreadcrumbSchema, createLocalBusinessSchema, BASE_URL } from "@/lib/schema";

const serviceOptions = [
  "Truck Repair",
  "Trailer Repair",
  "Roadside Assistance",
  "Fleet Maintenance Request",
];

const Contact = () => {

  return (
    <Layout>
      <SEO
        title="Contact CT Truck & Trailer Shop – Phoenix, AZ"
        description="Get in touch with CT Truck & Trailer Shop at (602) 830-3232. Located at 3883 N 36th Ave, Phoenix, AZ 85019. Request a quote for truck repair, trailer service, or emergency roadside help."
        keywords="contact truck repair phoenix, truck repair quote phoenix, truck shop near me, schedule truck repair, Phoenix truck shop phone, commercial fleet service contact"
        structuredData={[
          createBreadcrumbSchema([
            { name: "Home", url: BASE_URL },
            { name: "Contact", url: `${BASE_URL}/contact` },
          ]),
          createLocalBusinessSchema(),
        ]}
      />

      {/* Hero with futuristic styling */}
      <section className="relative min-h-[auto] flex items-center text-primary-foreground overflow-hidden py-20 md:py-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${facility})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl hidden sm:block" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl hidden sm:block" />
        
        <div className="container-custom relative z-10 py-16 md:py-24">
          <div className="max-w-3xl text-center md:text-left">
            <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6 mx-auto md:mx-0">
              <Phone className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">
                Get In Touch
              </span>
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Have a question or need service? Reach out by phone, email, or the form below. 
              For emergencies, call us directly for fastest response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="tel:6028303232">
                <Button variant="hero" size="lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (602) 830-3232
                </Button>
              </a>
              <a href="mailto:service@clevertranscoshop.com">
                <Button variant="hero-outline" size="lg">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with futuristic styling */}
      <section className="section-padding bg-primary relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="pb-20 lg:pb-0 w-full max-w-xl mx-auto lg:max-w-none">
              <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-8 text-center lg:text-left">
                Contact <span className="text-gradient">Information</span>
              </h2>
              
              <div className="space-y-4 mb-10 overflow-hidden">
                <a
                  href="tel:6028303232"
                  className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-primary-foreground/5 border border-accent/20 hover:border-accent/50 transition-all group overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-primary-foreground group-hover:text-accent transition-colors">
                      Phone
                    </p>
                    <p className="text-lg font-heading font-bold text-primary-foreground">
                      (602) 830-3232
                    </p>
                    <p className="text-sm text-primary-foreground/60">
                      Emergency Line Available
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:service@clevertranscoshop.com"
                  className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-primary-foreground/5 border border-accent/20 hover:border-accent/50 transition-all group overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-primary-foreground group-hover:text-accent transition-colors">
                      Email
                    </p>
                    <p className="text-primary-foreground break-all">
                      service@clevertranscoshop.com
                    </p>
                  </div>
                </a>

                <a href="https://maps.app.goo.gl/XFyDXt5avVXvvDPr5" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-primary-foreground/5 border border-accent/20 hover:border-accent/40 transition-colors overflow-hidden">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-primary-foreground">Location</p>
                    <p className="text-primary-foreground">3883 N 36th Ave</p>
                    <p className="text-primary-foreground">Phoenix, AZ 85019</p>
                  </div>
                </a>

                <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-primary-foreground/5 border border-accent/20 overflow-hidden">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-primary-foreground">Hours</p>
                    <p className="text-primary-foreground">Mon-Fri: 8:00 AM - 5:00 PM</p>
                    <p className="text-primary-foreground/70">Sat & Sun: Closed</p>
                    <p className="text-accent font-medium">Emergency Service Available</p>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="relative bg-accent/10 rounded-xl p-6 border border-accent/30 overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-accent/5 rounded-xl blur-sm" />
                <div className="relative z-10 text-center lg:text-left">
                  <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">
                    Need Immediate Help?
                  </h3>
                  <p className="text-primary-foreground/80 mb-4">
                    For the fastest response on emergencies, call us directly.
                  </p>
                  <a href="tel:6028303232">
                    <Button variant="hero" className="w-full">
                      <Phone className="h-5 w-5 mr-2" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full max-w-xl mx-auto lg:max-w-none">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why CT Truck Shop Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Why CT Truck Shop
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The Shop Drivers and Fleets Count On
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              When your truck breaks down, every minute counts. CT Truck and Trailer Shop has built its reputation on fast turnarounds, honest pricing, and experienced technicians who treat every rig like their own. From owner-operators to full commercial fleets, we deliver the same level of care and urgency on every job.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Whether you need a scheduled PM service, a complex engine repair, or emergency roadside help at 2 AM, we are ready. Our Phoenix shop is fully equipped with modern diagnostic tools, and our mobile units are dispatched around the clock to get you back on the road. No shortcuts, no surprises on the bill, just reliable work from a team that understands the trucking business.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border max-w-sm mx-auto w-full sm:max-w-none">
                <p className="font-heading text-3xl font-bold text-accent mb-1">Fast</p>
                <p className="text-muted-foreground text-sm">Emergency response when you need it most</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border max-w-sm mx-auto w-full sm:max-w-none">
                <p className="font-heading text-3xl font-bold text-accent mb-1">2,500+</p>
                <p className="text-muted-foreground text-sm">Repairs completed for Phoenix-area fleets</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border max-w-sm mx-auto w-full sm:max-w-none">
                <p className="font-heading text-3xl font-bold text-accent mb-1">4.5★</p>
                <p className="text-muted-foreground text-sm">Rated on Google by real customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-primary relative overflow-hidden border-t border-accent/10">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Find Us on the <span className="text-gradient">Map</span>
            </h2>
            <p className="text-primary-foreground/70">
              Visit our shop in Phoenix, AZ or call for mobile service anywhere in the metro area
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-accent/30">
            <GoogleMap className="shadow-lg" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
