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
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12.271 6.724c-.109.272-.226.562-.353.876-1.127 2.807-1.194 2.982-1.595 3.477-.578.714-1.245.673-1.458.638a1.246 1.246 0 0 1-.2-.058c-.081-.032-.124-.049-.37-.171L3.07 8.696c-.333-.168-.7-.42-.867-.814a1.285 1.285 0 0 1 .124-1.22c.641-.889 2.36-2.283 4.11-3.067 1.064-.476 1.474-.476 1.731-.366.178.076.365.228.437.311l3.481 3.003c.055.045.098.089.13.126l.005.006.003.003.001.002s.087.101.046.044zm-1.178 8.899c.03.092.065.226.065.398.001.218-.051.485-.256.726-.463.543-1.727.956-3.131 1.263-1.077.236-1.46.18-1.685.037a1.238 1.238 0 0 1-.509-.793c-.061-.31-.015-.652.07-.946l1.588-5.204c.079-.242.228-.47.34-.575.364-.34.741-.382 1.009-.358.1.009.197.032.265.057l.004.001c.127.046 2.229 1.31 2.229 1.31.211.126.5.303.534.328l.012.01c.226.179.62.492.573.988-.012.14-.053.278-.08.358l-.004.014-.001.003a92.86 92.86 0 0 1-1.023 2.383zm1.466.399c.006-.107.007-.183.026-.311.029-.193.094-.36.191-.509.284-.436.84-.623.84-.623l4.956-1.765c.377-.127.766-.21 1.14-.134.223.046.48.17.621.42.248.436.196 1.693-.043 3.239-.291 1.884-.657 2.55-1.097 2.79-.178.097-.53.177-.831.063l-5.322-2.053c-.259-.107-.455-.223-.455-.223s-.385-.226-.42-.617a2.003 2.003 0 0 1 .009-.17l.002-.026c.001-.014.003-.029.004-.042l.004-.039zm.567-4.625c.092.057.185.12.26.181.18.147.314.341.382.552l.005.017 1.622 5.218c.122.411.132.854-.05 1.19-.236.434-.652.565-.854.616-1.808.46-3.54.594-4.536.358a1.283 1.283 0 0 1-.874-.7c-.131-.324-.077-.688.031-1.028l2.071-5.016.013-.029a1.457 1.457 0 0 1 .613-.67c.469-.291.937-.241 1.117-.197.057.013.116.032.147.043l.004.002.049.015zm1.064-1.852c-.028-.099-.066-.254-.077-.434-.012-.191.01-.415.116-.636.073-.152.187-.35.462-.514.498-.299 2.07-.602 3.64-.66 1.164-.043 1.548.132 1.732.333.191.21.315.519.305.856-.014.483-.148.887-.324 1.312l-1.906 4.807c-.104.259-.232.518-.406.68-.362.337-.807.35-1.097.279-.159-.04-.291-.103-.353-.138l-.005-.003c-.115-.065-2.168-1.56-2.168-1.56-.177-.128-.41-.308-.456-.34l-.009-.007c-.198-.161-.542-.443-.614-.879-.023-.141-.016-.279-.006-.371l.002-.015v-.005l.001-.003c.023-.294.148-1.024.148-1.024.038-.189.072-.379.093-.48l.006-.031c.046-.24.065-.513-.091-.869a1.433 1.433 0 0 0-.346-.453c-.104-.092-.227-.174-.322-.233l-.003-.002-.048-.03z"/></svg>
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
