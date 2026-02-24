import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import logo from "@/assets/ct-logo.webp";
import xxiiLogo from "@/assets/xxii-logo.webp";
import paddockLogo from "@/assets/paddock-logo.webp";

const mobileRepairServices = [
  { title: "Emergency Truck Repair", href: "/emergency-truck-repair-phoenix" },
  { title: "Truck Breakdown Service Phoenix", href: "/truck-breakdown-service-phoenix" },
];

const truckServices = [
  { title: "AC Service for Semi Trucks", href: "/semi-truck-ac-repair-services" },
  { title: "Semi Truck Brake and Tire Service", href: "/semi-truck-tire-and-brake-repair-services-phoenix-az" },
  { title: "Semi Truck Full Diagnostics", href: "/semi-truck-diagnostics-in-phoenix-az" },
  { title: "Semi Truck Engine Repairs", href: "/semi-truck-engine-repairs-in-phoenix-az" },
];

const trailerServices = [
  { title: "Semi Trailer Electrical Repair", href: "/semi-trailer-electrical-repair-services-phoenix-az" },
  { title: "Trailer Brake and Tire Service", href: "/semi-trailer-brake-and-tire-repair-services-in-phoenix-az" },
  { title: "Semi Trailer Suspension Service", href: "/semi-trailer-suspension-repair-services-phoenix-az" },
  { title: "Semi Trailer Full Body Repairs", href: "/full-body-semi-trailer-repair-in-phoenix-az" },
];

const aboutLinks = [
  { title: "News and Publications", href: "/blog" },
];

interface NavDropdownProps {
  label: string;
  items: { title: string; href: string }[];
  isActive: boolean;
}

const NavDropdown = ({ label, items, isActive }: NavDropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={cn(
          "flex items-center gap-1.5 px-4 py-3 text-[15px] font-semibold tracking-wide transition-colors",
          isActive ? "text-accent" : "text-foreground hover:text-accent"
        )}
      >
        {label}
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>

      {/* Active underline */}
      {(isActive || open) && (
        <div className="absolute bottom-0 left-4 right-4 h-[3px] bg-accent rounded-full" />
      )}

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full left-0 pt-1 z-50">
          <div className="bg-background border border-border rounded-lg shadow-xl min-w-[280px] py-2">
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-5 py-3 text-[15px] text-foreground hover:text-accent hover:bg-accent/5 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isMobileRepairActive = location.pathname === "/mobile-repair" ||
    mobileRepairServices.some((s) => location.pathname === s.href);
  const isTruckActive = truckServices.some((s) => location.pathname === s.href);
  const isTrailerActive = trailerServices.some((s) => location.pathname === s.href);
  const isAboutActive = location.pathname === "/about" || location.pathname.includes("/blog");

  return (
    <div className="sticky top-0 z-50">
      {/* Partner Logos Bar */}
      <div className={cn("hidden lg:block bg-background border-b border-border transition-all duration-300", isScrolled ? "max-h-0 overflow-hidden py-0" : "max-h-20 py-3")}>
        <div className="container-custom flex items-center justify-center gap-0">
          <a href="https://goxxii.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 group">
            <img src={xxiiLogo} alt="XXII Century" className="h-10 w-auto opacity-60 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0" />
          </a>
          <div className="h-10 w-px bg-border mx-8" />
          <Link to="/" className="flex items-center justify-center px-8">
            <img src={logo} alt="CT Shop Logo" className="h-10 w-auto" />
          </Link>
          <div className="h-10 w-px bg-border mx-8" />
          <a href="https://paddockparking.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 group">
            <img src={paddockLogo} alt="Paddock Parking" className="h-8 w-auto opacity-60 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0" />
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "w-full transition-all duration-300 relative",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md py-2"
            : "bg-background py-3"
        )}
      >
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <img src={logo} alt="CT Shop Logo" className="h-12 md:h-14 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <NavDropdown
                label="Mobile Repair Service Arizona"
                items={mobileRepairServices}
                isActive={isMobileRepairActive}
              />
              <NavDropdown
                label="Truck Repair Services"
                items={truckServices}
                isActive={isTruckActive}
              />
              <NavDropdown
                label="Trailer Repair Services"
                items={trailerServices}
                isActive={isTrailerActive}
              />
              <NavDropdown
                label="About Us"
                items={aboutLinks}
                isActive={isAboutActive}
              />
              <Link
                to="/contact"
                className={cn(
                  "px-4 py-3 text-[15px] font-semibold tracking-wide transition-colors",
                  location.pathname === "/contact" ? "text-accent" : "text-foreground hover:text-accent"
                )}
              >
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <a href="tel:6028303232">
                <Button variant="nav-cta" size="default">
                  <Phone className="h-4 w-4 mr-2" />
                  Get a Quote
                </Button>
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-border">
                    <img src={logo} alt="CT Shop" className="h-12" />
                  </div>
                  <nav className="flex-1 overflow-y-auto py-6">
                    <div className="space-y-1 px-4">
                      <Link to="/" className="block px-4 py-3 rounded-lg font-medium hover:bg-accent/10 transition-colors">
                        Home
                      </Link>

                      <div className="py-2">
                        <p className="px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          Mobile Repair Service
                        </p>
                        {mobileRepairServices.map((service) => (
                          <Link key={service.href} to={service.href} className="block px-4 py-2 text-sm hover:bg-accent/10 rounded-lg transition-colors">
                            {service.title}
                          </Link>
                        ))}
                      </div>

                      <div className="py-2">
                        <p className="px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          Truck Repair Services
                        </p>
                        {truckServices.map((service) => (
                          <Link key={service.href} to={service.href} className="block px-4 py-2 text-sm hover:bg-accent/10 rounded-lg transition-colors">
                            {service.title}
                          </Link>
                        ))}
                      </div>

                      <div className="py-2">
                        <p className="px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          Trailer Repair Services
                        </p>
                        {trailerServices.map((service) => (
                          <Link key={service.href} to={service.href} className="block px-4 py-2 text-sm hover:bg-accent/10 rounded-lg transition-colors">
                            {service.title}
                          </Link>
                        ))}
                      </div>

                      <Link to="/about" className="block px-4 py-3 rounded-lg font-medium hover:bg-accent/10 transition-colors">
                        About Us
                      </Link>
                      <Link to="/blog" className="block px-4 py-2 text-sm pl-8 hover:bg-accent/10 rounded-lg transition-colors">
                        News and Publications
                      </Link>
                      <Link to="/contact" className="block px-4 py-3 rounded-lg font-medium hover:bg-accent/10 transition-colors">
                        Contact
                      </Link>
                    </div>
                  </nav>
                  <div className="p-6 border-t border-border space-y-4">
                    <a href="tel:6028303232" className="block">
                      <Button variant="accent" className="w-full" size="lg">
                        <Phone className="h-4 w-4 mr-2" />
                        (602) 830-3232
                      </Button>
                    </a>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                      <Clock className="h-4 w-4" />
                      <span>24/7 Emergency Service</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
