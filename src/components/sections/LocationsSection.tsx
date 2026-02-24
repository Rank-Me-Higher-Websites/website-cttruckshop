import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    name: "Phoenix Main Shop",
    address: "Phoenix, AZ",
    phone: "(602) 830-3232",
    hours: "Mon-Sat: 7AM-6PM",
    emergency: "Emergency Service Available",
    href: "/locations/phoenix",
  },
  {
    name: "Mobile Repair Unit",
    address: "Serving Greater Phoenix Metro",
    phone: "(602) 830-3232",
    hours: "24/7 Availability",
    emergency: "On-Site Repairs",
    href: "/mobile-repair",
  },
];

const serviceAreas = [
  "Phoenix",
  "Glendale", 
  "Tempe",
  "Mesa",
  "Chandler",
  "Gilbert",
  "Scottsdale",
  "Peoria",
];

const LocationsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Our Locations
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conveniently Located in Phoenix
          </h2>
          <p className="text-muted-foreground text-lg">
            With our shop location and mobile repair service, we cover the entire 
            Phoenix metro area and major highways including I-10, I-17, and Loop 101.
          </p>
        </div>

        {/* Locations Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {locations.map((location) => (
            <div key={location.name} className="card-elevated p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="icon-container">
                  <MapPin className="h-6 w-6 text-accent-foreground" />
                </div>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  {location.emergency}
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                {location.name}
              </h3>
              <p className="text-muted-foreground mb-4">{location.address}</p>
              
              <div className="space-y-2 mb-6">
                <a
                  href={`tel:${location.phone.replace(/[^\d]/g, "")}`}
                  className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  <span className="font-medium">{location.phone}</span>
                </a>
                <p className="text-muted-foreground text-sm">{location.hours}</p>
              </div>
              
              <Link to={location.href}>
                <Button variant="outline" className="w-full">
                  View Details
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Service Areas */}
        <div className="bg-secondary rounded-2xl p-8 md:p-10">
          <h3 className="font-heading text-xl font-bold text-foreground mb-6 text-center">
            Areas We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-card px-4 py-2 rounded-full text-sm font-medium text-foreground border border-border hover:border-accent hover:text-accent transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6">
            Plus coverage along I-10, I-17, Loop 101, and surrounding highways
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
