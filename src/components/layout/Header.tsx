import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import logo from "@/assets/ct-logo.webp";
import xxiiLogo from "@/assets/xxii-logo.webp";
import paddockLogo from "@/assets/paddock-logo.webp";
const truckServices = [
  { title: "Engine Repair", href: "/services/engine-repair", description: "Complete diesel engine diagnostics and repair" },
  { title: "Brake Service", href: "/services/brake-service", description: "DOT compliant brake inspections and repairs" },
  { title: "Electrical Systems", href: "/services/electrical", description: "Full electrical diagnostics and repairs" },
  { title: "Transmission Repair", href: "/services/transmission", description: "Transmission and drivetrain service" },
];

const trailerServices = [
  { title: "Trailer Brakes", href: "/services/trailer-brakes", description: "Air brake and ABS system repairs" },
  { title: "Suspension", href: "/services/suspension", description: "Suspension repairs and replacements" },
  { title: "Welding", href: "/services/welding", description: "Structural welding and fabrication" },
  { title: "Hydraulics", href: "/services/hydraulics", description: "Hydraulic system repairs" },
];

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

  return (
    <div className="sticky top-0 z-50">
      {/* Partner Logos Bar */}
      <div className={cn("hidden lg:block bg-background border-b border-border transition-all duration-300", isScrolled ? "max-h-0 overflow-hidden py-0" : "max-h-20 py-3")}>
        <div className="container-custom flex items-center justify-center gap-0">
          {/* XXII Century Logo */}
          <a 
            href="https://goxxii.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 group"
          >
            <img 
              src={xxiiLogo} 
              alt="XXII Century" 
              className="h-10 w-auto opacity-60 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0" 
            />
          </a>
          
          {/* Divider */}
          <div className="h-10 w-px bg-border mx-8" />
          
          {/* CT Shop Logo (center) */}
          <Link to="/" className="flex items-center justify-center px-8">
            <img src={logo} alt="CT Shop Logo" className="h-10 w-auto" />
          </Link>
          
          {/* Divider */}
          <div className="h-10 w-px bg-border mx-8" />
          
          {/* Paddock Parking Logo */}
          <a 
            href="https://paddockparking.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 group"
          >
            <img 
              src={paddockLogo} 
              alt="Paddock Parking" 
              className="h-8 w-auto opacity-60 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0" 
            />
          </a>
        </div>
      </div>

      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container-custom flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:6028303232" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span>(602) 830-3232</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>3883 N 36th Ave, Phoenix, AZ 85019</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" />
            <span>24/7 Emergency Service Available</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 relative",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md py-2"
            : "bg-background py-4"
        )}
      >
        {/* Futuristic accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="CT Shop Logo" className="h-12 md:h-14 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link
                      to="/"
                      className={cn(
                        "px-4 py-2 text-sm font-medium transition-colors hover:text-accent",
                        location.pathname === "/" ? "text-accent" : "text-foreground"
                      )}
                    >
                      Home
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium">
                      Truck Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        {truckServices.map((service) => (
                          <li key={service.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={service.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10"
                              >
                                <div className="text-sm font-medium leading-none">{service.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {service.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium">
                      Trailer Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        {trailerServices.map((service) => (
                          <li key={service.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={service.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10"
                              >
                                <div className="text-sm font-medium leading-none">{service.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {service.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      to="/mobile-repair"
                      className={cn(
                        "px-4 py-2 text-sm font-medium transition-colors hover:text-accent",
                        location.pathname === "/mobile-repair" ? "text-accent" : "text-foreground"
                      )}
                    >
                      Mobile Repair
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      to="/locations"
                      className={cn(
                        "px-4 py-2 text-sm font-medium transition-colors hover:text-accent",
                        location.pathname.includes("/locations") ? "text-accent" : "text-foreground"
                      )}
                    >
                      Locations
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      to="/about"
                      className={cn(
                        "px-4 py-2 text-sm font-medium transition-colors hover:text-accent",
                        location.pathname === "/about" ? "text-accent" : "text-foreground"
                      )}
                    >
                      About
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      to="/contact"
                      className={cn(
                        "px-4 py-2 text-sm font-medium transition-colors hover:text-accent",
                        location.pathname === "/contact" ? "text-accent" : "text-foreground"
                      )}
                    >
                      Contact
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      to="/blog"
                      className={cn(
                        "px-4 py-2 text-sm font-medium transition-colors hover:text-accent",
                        location.pathname.includes("/blog") ? "text-accent" : "text-foreground"
                      )}
                    >
                      Blog
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
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
                      <Link
                        to="/"
                        className="block px-4 py-3 rounded-lg font-medium hover:bg-accent/10 transition-colors"
                      >
                        Home
                      </Link>
                      
                      <div className="py-2">
                        <p className="px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          Truck Services
                        </p>
                        {truckServices.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="block px-4 py-2 text-sm hover:bg-accent/10 rounded-lg transition-colors"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>

                      <div className="py-2">
                        <p className="px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          Trailer Services
                        </p>
                        {trailerServices.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="block px-4 py-2 text-sm hover:bg-accent/10 rounded-lg transition-colors"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>

                      <Link
                        to="/mobile-repair"
                        className="block px-4 py-3 rounded-lg font-medium hover:bg-accent/10 transition-colors"
                      >
                        Mobile Repair
                      </Link>
                      <Link
                        to="/locations"
                        className="block px-4 py-3 rounded-lg font-medium hover:bg-accent/10 transition-colors"
                      >
                        Locations
                      </Link>
                      <Link
                        to="/about"
                        className="block px-4 py-3 rounded-lg font-medium hover:bg-accent/10 transition-colors"
                      >
                        About Us
                      </Link>
                      <Link
                        to="/contact"
                        className="block px-4 py-3 rounded-lg font-medium hover:bg-accent/10 transition-colors"
                      >
                        Contact
                      </Link>
                      <Link
                        to="/blog"
                        className="block px-4 py-3 rounded-lg font-medium hover:bg-accent/10 transition-colors"
                      >
                        Blog
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
    </>
  );
};

export default Header;
