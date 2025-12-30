import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const truckServices = [
    { name: "Engine Repair", href: "/services/engine-repair" },
    { name: "Brake Service", href: "/services/brake-service" },
    { name: "Electrical Systems", href: "/services/electrical" },
    { name: "Transmission Repair", href: "/services/transmission" },
    { name: "DOT Inspections", href: "/services/dot-inspections" },
  ];

  const trailerServices = [
    { name: "Trailer Brakes", href: "/services/trailer-brakes" },
    { name: "Suspension", href: "/services/suspension" },
    { name: "Welding", href: "/services/welding" },
    { name: "Hydraulics", href: "/services/hydraulics" },
    { name: "ABS Systems", href: "/services/abs-systems" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Mobile Repair", href: "/mobile-repair" },
    { name: "Locations", href: "/locations" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="bg-accent text-accent-foreground py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold">
                Need Emergency Roadside Assistance?
              </h3>
              <p className="text-accent-foreground/80 mt-1">
                Our mobile techs are ready 24/7 to get you back on the road
              </p>
            </div>
            <a href="tel:6028303232">
              <Button variant="default" size="xl" className="font-bold">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: (602) 830-3232
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-padding-sm">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <img src={logo} alt="CT Shop" className="h-16 brightness-0 invert" />
              </Link>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                CT Truck & Trailer Shop provides expert fleet maintenance and repair services 
                for heavy-duty trucks and trailers in Phoenix, AZ. From routine maintenance 
                to emergency roadside assistance, we keep your business moving.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:6028303232"
                  className="flex items-center gap-3 text-primary-foreground/90 hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 text-accent" />
                  <span>(602) 830-3232</span>
                </a>
                <a
                  href="mailto:service@clevertranscoshop.com"
                  className="flex items-center gap-3 text-primary-foreground/90 hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5 text-accent" />
                  <span>service@clevertranscoshop.com</span>
                </a>
                <div className="flex items-start gap-3 text-primary-foreground/90">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Phoenix, AZ & Surrounding Areas</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/90">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>24/7 Emergency Service Available</span>
                </div>
              </div>
            </div>

            {/* Truck Services */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4 text-accent">
                Truck Services
              </h4>
              <ul className="space-y-2">
                {truckServices.map((service) => (
                  <li key={service.href}>
                    <Link
                      to={service.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trailer Services */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4 text-accent">
                Trailer Services
              </h4>
              <ul className="space-y-2">
                {trailerServices.map((service) => (
                  <li key={service.href}>
                    <Link
                      to={service.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4 text-accent">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="mt-6">
                <h5 className="font-heading text-sm font-semibold mb-3 text-accent">
                  Follow Us
                </h5>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} CT Truck & Trailer Shop. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
