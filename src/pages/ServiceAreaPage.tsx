import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, ArrowRight, ArrowLeft, Truck, Wrench, Shield, ChevronDown, Check, Navigation } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import { useQuoteModal } from "@/contexts/QuoteModalContext";
import { createBreadcrumbSchema, createServiceSchema, createFAQSchema, createLocalBusinessSchema, BASE_URL } from "@/lib/schema";
import { serviceAreas, getServiceArea } from "@/data/serviceAreas";
import { useState } from "react";

import shopBayOverview from "@/assets/shop-bay-overview.webp";
import truckYard from "@/assets/truck-yard.webp";
import towingRecovery from "@/assets/towing-recovery.webp";
import mechanicEngineWork from "@/assets/mechanic-engine-work.webp";
import fleetElectricalWork from "@/assets/fleet-electrical-work.webp";
import twoMechanicsPeterbilt from "@/assets/two-mechanics-peterbilt.webp";
import expertTechnician from "@/assets/expert-technician.webp";
import teamWork from "@/assets/team-work.webp";
import craneLift from "@/assets/crane-lift.webp";
import nightTowing from "@/assets/night-towing.webp";
import blueCascadiaRepair from "@/assets/blue-cascadia-repair.webp";
import aboutTowTruck from "@/assets/about-tow-truck.webp";
import kenworthShopFront from "@/assets/kenworth-shop-front.webp";
import mobileRepair from "@/assets/mobile-repair.webp";
import truckDiagLaptop from "@/assets/truck-diagnostics-laptop.webp";
import dieselEngine from "@/assets/diesel-engine-repair.webp";
import truckDiagnostics from "@/assets/truck-diagnostics.webp";
import shopInterior from "@/assets/shop-interior.webp";
import engineRepair from "@/assets/engine-repair.webp";
import transmissionRebuild from "@/assets/transmission-rebuild.webp";
import mechanicHubRepair from "@/assets/mechanic-hub-repair.webp";
import facility from "@/assets/facility.webp";
import trailerAxleRepair from "@/assets/trailer-axle-repair.webp";
import engineBrakeRepair from "@/assets/engine-brake-repair.webp";

const heroImageMap: Record<string, string> = {
  "shop-bay-overview": shopBayOverview,
  "truck-yard": truckYard,
  "towing-recovery": towingRecovery,
  "mechanic-engine-work": mechanicEngineWork,
  "fleet-electrical-work": fleetElectricalWork,
  "two-mechanics-peterbilt": twoMechanicsPeterbilt,
  "expert-technician": expertTechnician,
  "team-work": teamWork,
  "crane-lift": craneLift,
  "night-towing": nightTowing,
  "blue-cascadia-repair": blueCascadiaRepair,
  "about-tow-truck": aboutTowTruck,
};

const contentImageMap: Record<string, string> = {
  "kenworth-shop-front": kenworthShopFront,
  "mobile-repair": mobileRepair,
  "truck-diagnostics-laptop": truckDiagLaptop,
  "diesel-engine-repair": dieselEngine,
  "truck-diagnostics": truckDiagnostics,
  "shop-interior": shopInterior,
  "engine-repair": engineRepair,
  "transmission-rebuild": transmissionRebuild,
  "mechanic-hub-repair": mechanicHubRepair,
  "facility": facility,
  "trailer-axle-repair": trailerAxleRepair,
  "engine-brake-repair": engineBrakeRepair,
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-accent/20 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-primary-foreground/5 transition-colors"
      >
        <span className="font-heading font-semibold text-sm text-primary-foreground pr-4">{question}</span>
        <ChevronDown className={`h-4 w-4 text-accent flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-4 pb-3">
          <p className="text-primary-foreground/70 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const ServiceAreaPage = () => {
  const { areaSlug } = useParams<{ areaSlug: string }>();
  const area = getServiceArea(areaSlug || "");
  const { open: openQuote } = useQuoteModal();

  if (!area) {
    return (
      <Layout>
        <SEO title="Area Not Found" description="The service area you're looking for doesn't exist." />
        <section className="py-16 bg-primary text-center">
          <div className="container-custom">
            <h1 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Area Not Found</h1>
            <Link to="/service-areas">
              <Button variant="hero">View All Service Areas</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const heroImg = heroImageMap[area.heroImage] || shopBayOverview;
  const contentImg = contentImageMap[area.contentImage] || kenworthShopFront;
  const nearbyAreas = serviceAreas.filter((a) => a.slug !== area.slug).slice(0, 6);

  return (
    <Layout>
      <SEO
        title={area.metaTitle}
        description={area.metaDescription}
        keywords={area.keywords}
        structuredData={[
          createBreadcrumbSchema([
            { name: "Home", url: BASE_URL },
            { name: "Service Areas", url: `${BASE_URL}/service-areas` },
            { name: area.name, url: `${BASE_URL}/service-areas/${area.slug}` },
          ]),
          createServiceSchema(
            `Semi Truck Repair in ${area.name}, AZ`,
            area.metaDescription,
            `${BASE_URL}/service-areas/${area.slug}`
          ),
          createLocalBusinessSchema(),
          ...(area.faqs.length > 0 ? [createFAQSchema(area.faqs)] : []),
        ]}
      />

      <section className="relative flex items-center text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-black/50" />

        <div className="container-custom relative z-10 py-12 md:py-14">
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-1.5 text-primary-foreground/60 hover:text-accent transition-colors text-sm mb-3"
            data-testid="link-back-areas"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Service Areas
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 bg-accent/20 border border-accent/30 rounded-full px-2.5 py-0.5">
              <MapPin className="h-3 w-3 text-accent" />
              <span className="text-[11px] font-medium text-primary-foreground">{area.county}</span>
            </span>
            <span className="text-primary-foreground/40 text-xs">{area.distance}</span>
          </div>

          <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-2 max-w-2xl">
            {area.heroHeadline}
          </h1>
          <p className="text-primary-foreground/75 text-sm md:text-base mb-5 max-w-xl">
            {area.heroSub}
          </p>

          <div className="flex flex-wrap gap-2.5">
            <a href="tel:6028303232">
              <Button variant="hero" size="default" data-testid="button-call-area">
                <Phone className="h-4 w-4 mr-1.5" />
                (602) 830-3232
              </Button>
            </a>
            <Button variant="hero-outline" size="default" onClick={openQuote} data-testid="button-quote-area">
              Request a Quote
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-5 md:py-6 bg-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-6 items-start">
            <div className="lg:col-span-3">
              {area.intro.map((p, i) => (
                <p key={i} className="text-primary-foreground/80 text-sm leading-relaxed mb-3 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
            <div className="lg:col-span-2 relative rounded-lg overflow-hidden aspect-[3/2]">
              <img
                src={contentImg}
                alt={`CT Truck & Trailer Shop serving ${area.name}, AZ`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 md:py-6 bg-primary border-t border-accent/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div>
              <span className="text-accent font-semibold text-xs uppercase tracking-wider">Why CT Truck & Trailer Shop</span>
              <h2 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground mt-1 mb-4">
                What {area.name} Operators Get
              </h2>
              <div className="space-y-2">
                {area.whyUs.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-2.5 w-2.5 text-accent" />
                    </div>
                    <span className="text-primary-foreground/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-primary-foreground/5 border border-accent/15 rounded-lg p-4">
                <Truck className="h-5 w-5 text-accent mb-2" />
                <h3 className="font-heading text-xs font-bold text-primary-foreground mb-1">Mobile Dispatch</h3>
                <p className="text-primary-foreground/60 text-xs leading-relaxed">
                  On-site repairs at your {area.name} location.
                </p>
              </div>
              <div className="bg-primary-foreground/5 border border-accent/15 rounded-lg p-4">
                <Clock className="h-5 w-5 text-accent mb-2" />
                <h3 className="font-heading text-xs font-bold text-primary-foreground mb-1">Fast Turnaround</h3>
                <p className="text-primary-foreground/60 text-xs leading-relaxed">
                  {area.distance === "Home base" ? "Walk-ins welcome. Same-day diagnostics." : `Only ${area.distance}. Minimize downtime.`}
                </p>
              </div>
              <div className="bg-primary-foreground/5 border border-accent/15 rounded-lg p-4">
                <Shield className="h-5 w-5 text-accent mb-2" />
                <h3 className="font-heading text-xs font-bold text-primary-foreground mb-1">Emergency Service</h3>
                <p className="text-primary-foreground/60 text-xs leading-relaxed">
                  Breakdowns near {area.name}? Call for dispatch.
                </p>
              </div>
              <div className="bg-primary-foreground/5 border border-accent/15 rounded-lg p-4">
                <Wrench className="h-5 w-5 text-accent mb-2" />
                <h3 className="font-heading text-xs font-bold text-primary-foreground mb-1">Full-Service Shop</h3>
                <p className="text-primary-foreground/60 text-xs leading-relaxed">
                  8 bays, cranes, diesel diagnostics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 md:py-6 bg-primary border-t border-accent/10">
        <div className="container-custom">
          <span className="text-accent font-semibold text-xs uppercase tracking-wider">Local Context</span>
          <h2 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground mt-1 mb-4">
            {area.localContext.heading}
          </h2>
          <div className="grid lg:grid-cols-2 gap-4">
            {area.localContext.paragraphs.map((p, i) => (
              <p key={i} className="text-primary-foreground/70 text-sm leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 md:py-6 bg-primary border-t border-accent/10">
        <div className="container-custom">
          <span className="text-accent font-semibold text-xs uppercase tracking-wider">Common Repairs</span>
          <h2 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground mt-1 mb-4">
            Issues We See from {area.name} Trucks
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {area.commonIssues.map((issue, i) => (
              <div key={i} className="bg-primary-foreground/5 border border-accent/10 rounded-lg p-4">
                <h3 className="font-heading text-xs font-bold text-primary-foreground mb-1.5">{issue.title}</h3>
                <p className="text-primary-foreground/60 text-xs leading-relaxed">{issue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 md:py-6 bg-primary border-t border-accent/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-primary-foreground/5 border border-accent/15 rounded-lg p-5">
              <h3 className="font-heading text-sm font-bold text-primary-foreground mb-3">Shop Info</h3>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm text-primary-foreground">3883 N 36th Ave, Phoenix, AZ 85019</p>
                    <p className="text-primary-foreground/50 text-xs">{area.distance} from {area.name}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm text-primary-foreground">Mon–Sat: 7AM–6PM</p>
                    <p className="text-accent text-xs">Emergency service available</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Navigation className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm text-primary-foreground mb-1">Key Highways</p>
                    <div className="flex flex-wrap gap-1">
                      {area.highways.map((hw) => (
                        <span key={hw} className="bg-accent/10 border border-accent/20 text-primary-foreground text-[10px] font-medium px-1.5 py-0.5 rounded-full">
                          {hw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <a href="https://maps.app.goo.gl/XFyDXt5avVXvvDPr5" target="_blank" rel="noopener noreferrer" className="block mt-3">
                <Button variant="accent" size="sm" className="w-full" data-testid="button-directions-area">
                  <MapPin className="h-3.5 w-3.5 mr-1.5" />
                  Get Directions
                </Button>
              </a>
            </div>

            {area.faqs.length > 0 && (
              <div>
                <h3 className="font-heading text-sm font-bold text-primary-foreground mb-3">
                  Questions About {area.name} Service
                </h3>
                <div className="space-y-2">
                  {area.faqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-5 md:py-6 bg-primary border-t border-accent/10">
        <div className="container-custom">
          <h2 className="font-heading text-lg font-bold text-primary-foreground mb-3">
            Other Areas We Serve
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            {nearbyAreas.map((nearby) => (
              <Link
                key={nearby.slug}
                to={`/service-areas/${nearby.slug}`}
                className="bg-primary-foreground/5 border border-accent/15 rounded-lg px-3 py-2.5 hover:border-accent/40 transition-colors group text-center"
                data-testid={`link-area-${nearby.slug}`}
              >
                <h3 className="font-heading text-xs font-bold text-primary-foreground group-hover:text-accent transition-colors">
                  {nearby.name}
                </h3>
                <p className="text-primary-foreground/40 text-[10px] mt-0.5">{nearby.distance}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServiceAreaPage;
