import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible. For urgent needs, please call us directly.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Contact CT Truck & Trailer Shop in Phoenix, AZ. Call (602) 830-3232 for truck and trailer repair, 24/7 emergency roadside assistance, or to request a quote."
        keywords="contact truck repair, Phoenix truck shop phone, commercial fleet service contact"
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom text-center">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Get In Touch
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Have a question or need service? Reach out by phone, email, or the form below. 
            For emergencies, call us directly for fastest response.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-10">
                <a
                  href="tel:6028303232"
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary hover:bg-accent/10 transition-colors group"
                >
                  <div className="icon-container flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      Phone
                    </p>
                    <p className="text-lg font-heading font-bold text-foreground">
                      (602) 830-3232
                    </p>
                    <p className="text-sm text-muted-foreground">
                      24/7 Emergency Line Available
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:service@clevertranscoshop.com"
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary hover:bg-accent/10 transition-colors group"
                >
                  <div className="icon-container flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      Email
                    </p>
                    <p className="text-foreground">
                      service@clevertranscoshop.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary">
                  <div className="icon-container flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-foreground">Phoenix, AZ</p>
                    <p className="text-sm text-muted-foreground">
                      Serving the entire Phoenix Metro Area
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary">
                  <div className="icon-container flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Hours</p>
                    <p className="text-foreground">Mon-Sat: 7:00 AM - 6:00 PM</p>
                    <p className="text-accent font-medium">24/7 Emergency Service</p>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <h3 className="font-heading text-xl font-bold mb-2">
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

            {/* Contact Form */}
            <div>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(602) 555-1234"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your service needs..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" variant="accent" size="lg" className="w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
