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
                Our mobile techs are ready 24/7 to get you back on the road
              </p>
            </div>
            <a href="tel:6028303232" className="flex-shrink-0">
              <Button variant="default" size="lg" className="font-bold text-base">
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
                  <span className="text-sm font-medium">24/7 Emergency Service</span>
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
              <a
                href="https://www.yelp.com/biz/ct-truck-and-trailer-shop-phoenix-5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-200"
                aria-label="Yelp"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M21.111 18.226c-.141.969-2.119 3.483-3.029 3.847-.311.124-.611.094-.85-.09-.154-.12-.314-.291-2.85-3.927l-.001-.001c-.527-.754-.758-1.091-.758-1.091-.382-.549-.409-1.164-.075-1.689.376-.587.998-.876 1.767-.821.258.019.504.064.727.128 0 0 .424.111 1.254.349l.003.001c2.439.703 3.002.875 3.205.993.306.178.488.44.529.757a.957.957 0 0 1 .078.344zM11.019 12.778c-.21-.46-.455-.804-.455-.804l-.003-.004a1.63 1.63 0 0 0-1.456-.793c-.56.022-1.069.309-1.385.793-.104.161-.189.339-.25.527 0 0-.156.444-.438 1.327l-.002.005c-.833 2.6-.996 3.201-1.032 3.417-.053.326.035.626.254.862.77.837 3.891 1.98 4.893 1.793.343-.064.606-.253.758-.546.098-.188.178-.409.682-3.389.171-1.013.332-1.968.38-2.28a3.092 3.092 0 0 0 .054-.908zm-.812-4.607c.213-.104.39-.249.506-.418l.002-.003c.405-.591.281-1.22.156-1.893-.064-.344-.155-.741-.155-.741-.299-1.213-.374-1.496-.452-1.706-.244-.649-.641-1.021-1.08-1.021-.151 0-.31.038-.475.113-.884.401-2.548 3.089-2.579 4.114-.011.349.122.654.385.882.169.147.399.276.618.359 0 0 .375.159 1.14.455l.001.001c.757.293 1.106.427 1.195.454.309.093.569.059.738-.096zM11.073 2.3c-.005-.327.183-.62.537-.843C11.985 1.222 14.877.003 15.972 0c.374-.001.687.138.905.401.14.169.25.379 1.251 3.793l.004.012c.34 1.157.504 1.72.533 1.876.082.466-.076.879-.431 1.134-.315.226-.715.335-1.213.339-.162.001-.336-.009-.515-.032 0 0-.442-.048-1.305-.159l-.003-.001c-2.527-.328-3.106-.407-3.314-.494-.314-.131-.539-.354-.649-.644a.952.952 0 0 1-.069-.267 10.04 10.04 0 0 1-.093-1.658zM6.97 9.374c.087-.798-.36-1.413-1.154-1.594-.271-.063-.549-.09-.809-.088 0 0-.465.005-1.377.03h-.004C1.142 7.8.527 7.825.33 7.881A.975.975 0 0 0 .004 8.2c-.047.336.059.716.165.987.452 1.152 2.122 3.266 2.912 3.592.271.112.546.12.795.023.16-.063.332-.17 3.082-1.756.938-.541 1.003-.582 1.003-.582.297-.173.546-.413.648-.708.049-.141.119-.395.119-.395a2.43 2.43 0 0 0-.758.013z"/></svg>
              </a>
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
