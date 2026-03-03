import { Link } from "react-router-dom";
import LeadForm from "@/components/LeadForm";
import { useQuoteModal } from "@/contexts/QuoteModalContext";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ArrowLeft, Wrench, Clock, Shield, Award, Check, ChevronDown } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import { getServicePage } from "@/data/servicePages";
import truckDiagLaptop from "@/assets/truck-diagnostics-laptop.png";
import shopBayOverview from "@/assets/shop-bay-overview.jpg";
import truckLaptopDiag from "@/assets/truck-laptop-diagnostics.jpg";
import blueCascadiaRepair from "@/assets/blue-cascadia-repair.jpg";
import mechanicHubRepair from "@/assets/mechanic-hub-repair.jpg";
import transmissionRebuild from "@/assets/transmission-rebuild.jpg";
import fleetElectricalWork from "@/assets/fleet-electrical-work.jpg";
import trailerAxleRepair from "@/assets/trailer-axle-repair.jpg";
import engineBrakeRepair from "@/assets/engine-brake-repair.jpg";
import truckEngineWide from "@/assets/truck-engine-wide.jpg";
import towingRecovery from "@/assets/towing-recovery.jpg";
import nightTowing from "@/assets/night-towing.jpg";
import mechanicsWork from "@/assets/mechanics-work.jpeg";
import dieselEngine from "@/assets/diesel-engine-repair.png";
import shopInterior from "@/assets/shop-interior.jpg";
import mobileRepair from "@/assets/mobile-repair.jpg";
import facility from "@/assets/facility.jpg";
import craneLift from "@/assets/crane-lift.png";
import teamWork from "@/assets/team-work.jpeg";
import tireTechThumbsup from "@/assets/tire-tech-thumbsup.jpg";
import trailerWeldingRepair from "@/assets/trailer-welding-repair.jpg";
import trailerBrakeShop from "@/assets/trailer-brake-shop.jpg";

import { useState } from "react";

const imageMap: Record<string, string> = {
  "emergency-truck-repair-phoenix": towingRecovery,
  "truck-breakdown-service-phoenix": truckLaptopDiag,
  "semi-truck-ac-repair-services": blueCascadiaRepair,
  "semi-truck-tire-and-brake-repair-services-phoenix-az": mechanicHubRepair,
  "semi-truck-diagnostics-in-phoenix-az": truckDiagLaptop,
  "semi-truck-engine-repairs-in-phoenix-az": transmissionRebuild,
  "semi-trailer-electrical-repair-services-phoenix-az": trailerWeldingRepair,
  "semi-trailer-brake-and-tire-repair-services-in-phoenix-az": trailerAxleRepair,
  "semi-trailer-suspension-repair-services-phoenix-az": engineBrakeRepair,
  "full-body-semi-trailer-repair-in-phoenix-az": truckEngineWide,
};

const contentImageMap: Record<string, string> = {
  "emergency-truck-repair-phoenix": nightTowing,
  "truck-breakdown-service-phoenix": mechanicHubRepair,
  "semi-truck-ac-repair-services": mechanicsWork,
  "semi-truck-tire-and-brake-repair-services-phoenix-az": facility,
  "semi-truck-diagnostics-in-phoenix-az": dieselEngine,
  "semi-truck-engine-repairs-in-phoenix-az": shopInterior,
  "semi-trailer-electrical-repair-services-phoenix-az": craneLift,
  "semi-trailer-brake-and-tire-repair-services-in-phoenix-az": teamWork,
  "semi-trailer-suspension-repair-services-phoenix-az": mobileRepair,
  "full-body-semi-trailer-repair-in-phoenix-az": tireTechThumbsup,
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-accent/20 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-primary-foreground/5 transition-colors"
      >
        <span className="font-heading font-semibold text-primary-foreground pr-4">{question}</span>
        <ChevronDown className={`h-5 w-5 text-accent flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-primary-foreground/70 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

interface ServicePageTemplateProps {
  slug: string;
}

const ServicePageTemplate = ({ slug }: ServicePageTemplateProps) => {
  const service = getServicePage(slug);
  const { open: openQuote } = useQuoteModal();
  if (!service) return null;

  const heroImage = imageMap[service.slug] || shopBayOverview;
  const contentImage = contentImageMap[service.slug] || heroImage;

  return (
    <Layout>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
      />

      {/* Hero Section */}
      <section className="relative min-h-[auto] lg:min-h-[55vh] flex items-center text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        <div className="container-custom relative z-10 py-20 md:py-28">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6 mx-auto lg:mx-0">
                <Wrench className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-primary-foreground">CT Truck & Trailer Shop</span>
              </span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {service.heroHeadline}
              </h1>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href="tel:6028303232" className="w-full sm:w-auto">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    <Phone className="h-4 w-4 mr-2" />
                    Call (602) 830-3232
                  </Button>
                </a>
                <button onClick={openQuote} className="w-full sm:w-auto">
                  <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                    Request a Quote
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </button>
              </div>
            </div>

            {/* Right Side - Lead Form */}
            <div className="hidden lg:block">
              <LeadForm />
            </div>
          </div>
        </div>

        {/* Decorative corners - hidden on mobile */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-accent/30 rounded-tl-lg hidden sm:block" />
        <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-accent/30 rounded-tr-lg hidden sm:block" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-accent/30 rounded-bl-lg hidden sm:block" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-accent/30 rounded-br-lg hidden sm:block" />
      </section>

      {/* Content Section */}
      <section className="section-padding bg-primary relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Intro */}
              {service.introParagraphs.length > 0 && (
                <div>
                  <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-6">
                    {service.introHeading}
                  </h2>
                  {service.introParagraphs.map((p, i) => (
                    <p key={i} className="text-primary-foreground/80 text-lg mb-4 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {/* Image */}
              <div className="relative max-h-96 overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 via-accent/20 to-accent/50 rounded-2xl blur-sm" />
                <div className="relative rounded-2xl overflow-hidden border border-accent/30">
                  <img
                    src={contentImage}
                    alt={service.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-accent rounded-tl-lg hidden sm:block" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-accent rounded-tr-lg hidden sm:block" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-accent rounded-bl-lg hidden sm:block" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-accent rounded-br-lg hidden sm:block" />
              </div>

              {/* Additional Sections */}
              {service.sections.map((section, i) => (
                <div key={i}>
                  <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
                    {section.heading}
                  </h3>
                  {section.content.map((p, j) => (
                    <p key={j} className="text-primary-foreground/80 mb-4 leading-relaxed">
                      {p}
                    </p>
                  ))}
                  {section.listItems && (
                    <ul className="space-y-3 mt-4">
                      {section.listItems.map((item, k) => (
                        <li key={k} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-primary-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Highlights */}
              {service.highlights.length > 0 && (
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-6">
                    Why Choose <span className="text-gradient">CT Shop</span>
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="p-5 rounded-xl bg-primary-foreground/5 border border-accent/20">
                        <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-3">
                          {i === 0 ? <Clock className="h-5 w-5 text-accent" /> :
                           i === 1 ? <Award className="h-5 w-5 text-accent" /> :
                           <Shield className="h-5 w-5 text-accent" />}
                        </div>
                        <h4 className="font-heading font-bold text-primary-foreground mb-2">{h.title}</h4>
                        <p className="text-primary-foreground/70 text-sm leading-relaxed">{h.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {service.faqs.length > 0 && (
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-6">
                    Frequently Asked <span className="text-gradient">Questions</span>
                  </h3>
                  <div className="space-y-3">
                    {service.faqs.map((faq, i) => (
                      <FAQItem key={i} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                </div>
              )}

              {/* Related Services */}
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-6">
                  Related <span className="text-gradient">Services</span>
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {service.relatedServices.map((related) => (
                    <Link
                      key={related.href}
                      to={related.href}
                      className="flex items-center justify-between p-4 rounded-xl bg-primary-foreground/5 border border-accent/20 hover:border-accent/50 transition-all group"
                    >
                      <span className="text-primary-foreground group-hover:text-accent transition-colors font-medium text-sm">
                        {related.title}
                      </span>
                      <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Quick Info */}
                <div className="bg-primary-foreground/5 rounded-2xl p-6 border border-accent/20">
                  <h4 className="font-heading font-bold text-primary-foreground mb-4">Quick Info</h4>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-accent" />
                      <span className="text-primary-foreground/80">Same-day service available</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-accent" />
                      <span className="text-primary-foreground/80">Warranty on all repairs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-accent" />
                      <span className="text-primary-foreground/80">Certified technicians</span>
                    </div>
                  </div>
                </div>

                {/* Mobile Repair CTA */}
                <Link to="/mobile-repair" className="block">
                  <div className="bg-accent/10 rounded-2xl p-6 border border-accent/30 hover:border-accent/50 transition-all group">
                    <h4 className="font-heading font-bold text-primary-foreground mb-2 group-hover:text-accent transition-colors">
                      Need Roadside Help?
                    </h4>
                    <p className="text-primary-foreground/70 text-sm mb-4">
                      Our mobile technicians can come to you.
                    </p>
                    <span className="flex items-center gap-2 text-accent font-medium text-sm">
                      Learn about mobile repair
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Service */}
      <section className="py-12 pb-20 md:pb-12 bg-accent">
        <div className="container-custom text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-accent-foreground mb-4">
            Request Service
          </h2>
          <p className="text-accent-foreground/80 mb-6">
            Click the button to call for service
          </p>
          <a href="tel:6028303232" className="block w-full sm:w-auto sm:inline-block">
            <Button variant="default" size="xl" className="font-bold w-full sm:w-auto whitespace-normal sm:whitespace-nowrap">
              <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
              Call For Service: (602) 830-3232
            </Button>
          </a>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServicePageTemplate;
