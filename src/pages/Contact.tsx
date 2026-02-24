import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import GoogleMap from "@/components/GoogleMap";
import facility from "@/assets/facility.jpg";

const serviceOptions = [
  "Truck Repair",
  "Trailer Repair",
  "Roadside Assistance",
  "Fleet Maintenance Request",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible. For urgent needs, please call us directly.",
    });
    setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Contact CT Truck & Trailer Shop in Phoenix, AZ. Call (602) 830-3232 for truck and trailer repair, 24/7 emergency roadside assistance, or to request a quote."
        keywords="contact truck repair, Phoenix truck shop phone, commercial fleet service contact"
      />

      {/* Hero with futuristic styling */}
      <section className="relative min-h-[60vh] flex items-center text-primary-foreground overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${facility})` }}
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
        
        <div className="container-custom relative z-10 py-20 md:py-28">
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
            <p className="text-xl text-primary-foreground/80">
              Have a question or need service? Reach out by phone, email, or the form below. 
              For emergencies, call us directly for fastest response.
            </p>
          </div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-accent/30 rounded-tl-lg hidden sm:block" />
        <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-accent/30 rounded-tr-lg hidden sm:block" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-accent/30 rounded-bl-lg hidden sm:block" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-accent/30 rounded-br-lg hidden sm:block" />
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
            <div className="pb-20 lg:pb-0">
              <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-8 text-center lg:text-left">
                Contact <span className="text-gradient">Information</span>
              </h2>
              
              <div className="space-y-4 mb-10 overflow-hidden">
                <a
                  href="tel:6028303232"
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-primary-foreground/5 border border-accent/20 hover:border-accent/50 transition-all group overflow-hidden"
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
                      24/7 Emergency Line Available
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:service@clevertranscoshop.com"
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-primary-foreground/5 border border-accent/20 hover:border-accent/50 transition-all group overflow-hidden"
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

                <a href="https://maps.app.goo.gl/XFyDXt5avVXvvDPr5" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-primary-foreground/5 border border-accent/20 hover:border-accent/40 transition-colors overflow-hidden">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">Location</p>
                    <p className="text-primary-foreground">3883 N 36th Ave</p>
                    <p className="text-primary-foreground">Phoenix, AZ 85019</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-accent/20">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">Hours</p>
                    <p className="text-primary-foreground">Mon-Fri: 8:00 AM - 5:00 PM</p>
                    <p className="text-primary-foreground/70">Sat & Sun: Closed</p>
                    <p className="text-accent font-medium">24/7 Emergency Service</p>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="relative bg-accent/10 rounded-xl p-6 border border-accent/30 overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-accent/5 rounded-xl blur-sm" />
                <div className="relative z-10">
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
            <div>
              <div className="relative bg-primary-foreground/5 rounded-2xl p-8 border border-accent/20 overflow-hidden">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl blur-sm" />
                
                <div className="relative z-10">
                  <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-2">
                    Service Request
                  </h2>
                  <p className="text-primary-foreground/70 mb-6 text-sm">
                    We'd love to hear from you – Truck not hauling up the hill like it used to? Knocking sound coming from the engine? Whatever you need, our team is here to help!
                  </p>
                  <p className="text-primary-foreground/60 text-xs mb-4">Fields marked with <span className="text-accent">*</span> are required</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-primary-foreground mb-2">
                          First Name <span className="text-accent">*</span>
                        </label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="John"
                          required
                          className="bg-primary-foreground/5 border-accent/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-primary-foreground mb-2">
                          Last Name <span className="text-accent">*</span>
                        </label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Doe"
                          required
                          className="bg-primary-foreground/5 border-accent/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-primary-foreground mb-2">
                          Phone Number <span className="text-accent">*</span>
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(602) 555-1234"
                          required
                          className="bg-primary-foreground/5 border-accent/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary-foreground mb-2">
                          Email <span className="text-accent">*</span>
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          required
                          className="bg-primary-foreground/5 border-accent/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-primary-foreground mb-2">
                        Services Needed <span className="text-accent">*</span>
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        required
                        className="flex h-10 w-full rounded-md border bg-primary-foreground/5 border-accent/30 px-3 py-2 text-sm text-primary-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      >
                        <option value="" className="bg-primary text-primary-foreground">Select a service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-primary text-primary-foreground">{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary-foreground mb-2">
                        Additional Details
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your service needs..."
                        rows={4}
                        className="bg-primary-foreground/5 border-accent/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
                      />
                    </div>
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Send className="h-5 w-5 mr-2" />
                      Submit Service Request
                    </Button>
                  </form>
                </div>
              </div>
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
              <div className="p-6 rounded-xl bg-card border border-border">
                <p className="font-heading text-3xl font-bold text-accent mb-1">24/7</p>
                <p className="text-muted-foreground text-sm">Emergency response any time of day or night</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <p className="font-heading text-3xl font-bold text-accent mb-1">2,500+</p>
                <p className="text-muted-foreground text-sm">Repairs completed for Phoenix-area fleets</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <p className="font-heading text-3xl font-bold text-accent mb-1">4.4★</p>
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
