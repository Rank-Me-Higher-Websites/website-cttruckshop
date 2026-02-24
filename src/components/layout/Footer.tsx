import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ct-logo.webp";

const truckServices = [
  { name: "Emergency Truck Repair", href: "/emergency-truck-repair-phoenix" },
  { name: "Truck Breakdown Service", href: "/truck-breakdown-service-phoenix" },
  { name: "Engine Repairs", href: "/semi-truck-engine-repairs-in-phoenix-az" },
  { name: "AC Repair", href: "/semi-truck-ac-repair-services" },
  { name: "Truck Diagnostics", href: "/semi-truck-diagnostics-in-phoenix-az" },
  { name: "Tire & Brake Repair", href: "/semi-truck-tire-and-brake-repair-services-phoenix-az" },
];

const trailerServices = [
  { name: "Trailer Electrical Repair", href: "/semi-trailer-electrical-repair-services-phoenix-az" },
  { name: "Trailer Brake & Tire", href: "/semi-trailer-brake-and-tire-repair-services-in-phoenix-az" },
  { name: "Trailer Suspension", href: "/semi-trailer-suspension-repair-services-phoenix-az" },
  { name: "Full Body Trailer Repair", href: "/full-body-semi-trailer-repair-in-phoenix-az" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Mobile Repair", href: "/mobile-repair" },
  { name: "Locations", href: "/locations" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Emergency CTA Banner */}
      <div className="bg-accent">
        <div className="container-custom py-6 md:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-accent-foreground">
                Need Emergency Roadside Assistance?
              </h3>
              <p className="text-accent-foreground/80 text-sm md:text-base mt-1">
                Our mobile techs are ready to get you back on the road
              </p>
            </div>
            <a href="tel:6028303232" className="flex-shrink-0 w-full sm:w-auto">
              <Button variant="default" size="lg" className="font-bold text-base w-full sm:w-auto">
                <Phone className="h-5 w-5" />
                Call Now: (602) 830-3232
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom pt-12 pb-8 md:pt-16 md:pb-10">
        {/* Top: Logo + Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-10 border-b border-primary-foreground/10">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="CT Shop" className="h-12 md:h-14 brightness-0 invert" />
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-sm">
              Expert fleet maintenance and repair services for heavy-duty trucks and trailers 
              in Phoenix, AZ. From routine maintenance to emergency roadside assistance, 
              we keep your business moving.
            </p>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <a
                href="tel:6028303232"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors group"
              >
                <span className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <Phone className="h-4 w-4 text-accent" />
                </span>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-primary-foreground/40 block">Phone</span>
                  <span className="text-sm font-medium">(602) 830-3232</span>
                </div>
              </a>

              <a
                href="mailto:service@clevertranscoshop.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors group"
              >
                <span className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <Mail className="h-4 w-4 text-accent" />
                </span>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-primary-foreground/40 block">Email</span>
                  <span className="text-sm font-medium break-all">service@clevertranscoshop.com</span>
                </div>
              </a>

              <a
                href="https://maps.app.goo.gl/XFyDXt5avVXvvDPr5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors group"
              >
                <span className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <MapPin className="h-4 w-4 text-accent" />
                </span>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-primary-foreground/40 block">Address</span>
                  <span className="text-sm font-medium">3883 N 36th Ave, Phoenix, AZ 85019</span>
                </div>
              </a>

              <div className="flex items-center gap-3 text-primary-foreground/80">
                <span className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-4 w-4 text-accent" />
                </span>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-primary-foreground/40 block">Hours</span>
                  <span className="text-sm font-medium">Mon–Sat · Emergency Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-10 border-b border-primary-foreground/10">
          <div>
            <h4 className="font-heading text-xs font-semibold mb-4 text-accent uppercase tracking-widest">
              Truck Services
            </h4>
            <ul className="space-y-2.5">
              {truckServices.map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs font-semibold mb-4 text-accent uppercase tracking-widest">
              Trailer Services
            </h4>
            <ul className="space-y-2.5">
              {trailerServices.map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs font-semibold mb-4 text-accent uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs font-semibold mb-4 text-accent uppercase tracking-widest">
              Follow Us
            </h4>
            <div className="flex items-center gap-2.5">
              {[
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/clever.repairs/" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/clever.repairss/" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/ct-truck-and-trailer-shop/" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 pb-16 md:pb-0 text-xs text-primary-foreground/40">
          <p>© {currentYear} CT Truck & Trailer Shop. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <span className="text-primary-foreground/20">|</span>
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
