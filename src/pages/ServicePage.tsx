import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Check, ArrowLeft, Wrench, Clock, Shield, Award } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import truckDiagnostics from "@/assets/truck-diagnostics.jpg";
import mechanicsWork from "@/assets/mechanics-work.jpeg";
import expertTechnician from "@/assets/expert-technician.png";

// Service data with enhanced professional content
const servicesData: Record<string, {
  title: string;
  headline: string;
  description: string;
  longDescription: string;
  detailedContent: string[];
  features: string[];
  benefits: string[];
  whyChooseUs: string[];
  image: string;
  metaDescription: string;
  keywords: string;
  relatedServices: { title: string; href: string }[];
}> = {
  "engine-repair": {
    title: "Engine Repair",
    headline: "Diesel Engine Repair & Diagnostics",
    description: "Complete diesel engine diagnostics, repair, and maintenance for all commercial trucks. Our ASE-certified technicians deliver precision service to keep your fleet running at peak performance.",
    longDescription: "At CT Truck & Trailer Shop, we specialize in comprehensive diesel engine services that address everything from routine maintenance to complex overhauls. Our state-of-the-art diagnostic equipment allows us to quickly identify issues and implement effective solutions, minimizing your downtime and maximizing your fleet's productivity.",
    detailedContent: [
      "Our engine repair services cover all major diesel engine manufacturers including Cummins, Detroit Diesel, Caterpillar, Paccar, and International. We understand that every hour your truck is off the road costs you money, which is why we prioritize fast turnaround times without compromising on quality.",
      "Whether you're dealing with poor fuel economy, excessive smoke, loss of power, or warning lights, our experienced technicians have the expertise to diagnose and repair the issue efficiently. We use only OEM-quality parts and follow manufacturer specifications to ensure lasting repairs.",
    ],
    features: [
      "Advanced computer diagnostics for all diesel engines",
      "Fuel injection system repair and calibration",
      "Turbocharger inspection, repair, and replacement",
      "Cooling system diagnostics and maintenance",
      "Complete engine overhauls and rebuilds",
      "EGR and DPF system service",
      "Oil analysis and preventive maintenance",
      "Performance optimization and tuning",
    ],
    benefits: [
      "Fast turnaround to minimize downtime",
      "OEM and quality aftermarket parts",
      "ASE-certified diesel technicians",
      "Competitive and transparent pricing",
      "Warranty on all repairs",
      "24/7 emergency service available",
    ],
    whyChooseUs: [
      "Over 8 years of diesel engine expertise",
      "Latest diagnostic technology",
      "Fleet maintenance programs available",
      "Honest assessments and fair pricing",
    ],
    image: truckDiagnostics,
    metaDescription: "Professional diesel engine repair and diagnostics for semi-trucks and commercial fleets in Phoenix. Cummins, Detroit, CAT specialists. Fast turnaround, quality parts, expert technicians.",
    keywords: "diesel engine repair, truck engine service, Cummins repair, Detroit Diesel, commercial vehicle engine, Phoenix truck repair",
    relatedServices: [
      { title: "Transmission Repair", href: "/services/transmission" },
      { title: "Electrical Systems", href: "/services/electrical" },
      { title: "DOT Inspections", href: "/services/dot-inspections" },
    ],
  },
  "brake-service": {
    title: "Brake Service",
    headline: "Commercial Truck Brake Repair & Service",
    description: "DOT-compliant brake inspections, repairs, and replacements for trucks and trailers. Safety is our priority—we ensure your vehicles meet all federal and state compliance requirements.",
    longDescription: "Your braking system is the most critical safety component on your commercial vehicle. At CT Truck & Trailer Shop, we provide comprehensive brake services that keep your fleet safe, compliant, and operating at peak efficiency. Our technicians are experts in all aspects of commercial brake systems.",
    detailedContent: [
      "We service all types of commercial brake systems including air brakes, hydraulic brakes, and electric trailer brakes. Our thorough inspections identify potential issues before they become safety hazards or lead to costly roadside breakdowns.",
      "Every brake service includes a complete inspection of drums, rotors, shoes, pads, slack adjusters, air lines, and ABS components. We document all findings and provide detailed reports for your maintenance records and DOT compliance documentation.",
    ],
    features: [
      "Complete brake system inspections",
      "Drum and rotor resurfacing or replacement",
      "Air brake system service and repair",
      "ABS module diagnostics and repair",
      "Slack adjuster replacement and adjustment",
      "Brake chamber and valve service",
      "Air dryer and compressor maintenance",
      "Foundation brake rebuilds",
    ],
    benefits: [
      "DOT compliant service and documentation",
      "Same-day service for most repairs",
      "Quality brake components with warranty",
      "Experienced commercial brake specialists",
      "Fleet service programs available",
      "Mobile brake service for emergencies",
    ],
    whyChooseUs: [
      "Certified commercial brake technicians",
      "Complete documentation for audits",
      "Genuine and quality replacement parts",
      "Thorough multi-point inspections",
    ],
    image: mechanicsWork,
    metaDescription: "Professional brake repair and service for commercial trucks in Phoenix. DOT inspections, ABS repair, air brake systems. Same-day service available. Call (602) 830-3232.",
    keywords: "truck brake repair, commercial brake service, DOT brake inspection, air brake repair, ABS diagnostics, Phoenix",
    relatedServices: [
      { title: "Trailer Brakes", href: "/services/trailer-brakes" },
      { title: "DOT Inspections", href: "/services/dot-inspections" },
      { title: "Suspension Service", href: "/services/suspension" },
    ],
  },
  "electrical": {
    title: "Electrical Systems",
    headline: "Truck Electrical Diagnostics & Repair",
    description: "Full electrical system diagnostics, repair, and installation for commercial vehicles. From simple lighting repairs to complex ECM issues, our technicians have the expertise to solve any electrical problem.",
    longDescription: "Modern commercial trucks rely on sophisticated electrical and electronic systems. CT Truck & Trailer Shop has the advanced diagnostic equipment and trained technicians needed to accurately diagnose and repair electrical issues. We handle everything from basic wiring repairs to complex computer system troubleshooting.",
    detailedContent: [
      "Electrical problems can be among the most challenging to diagnose, but our systematic approach and advanced diagnostic tools allow us to quickly pinpoint issues and implement effective repairs. We work on all truck electrical systems including charging systems, starting systems, lighting, and onboard computers.",
      "Whether you're experiencing intermittent electrical faults, warning lights, starting problems, or computer-related issues, we have the expertise to get you back on the road quickly and reliably.",
    ],
    features: [
      "Complete electrical system diagnostics",
      "ECM/PCM programming and repair",
      "Wiring harness repair and fabrication",
      "Alternator and starter service",
      "Battery testing and replacement",
      "Lighting system repair and upgrades",
      "Trailer electrical connections",
      "Telematics and GPS installation",
    ],
    benefits: [
      "Advanced diagnostic equipment",
      "Factory-trained electrical technicians",
      "Rapid troubleshooting capabilities",
      "Quality electrical components",
      "Comprehensive system testing",
      "Mobile electrical service available",
    ],
    whyChooseUs: [
      "Latest diagnostic technology",
      "Experienced electrical specialists",
      "Complete system documentation",
      "Reliable permanent repairs",
    ],
    image: expertTechnician,
    metaDescription: "Commercial truck electrical repair in Phoenix. Expert diagnostics, ECM programming, wiring repair, alternators, starters. Fast service, experienced technicians.",
    keywords: "truck electrical repair, commercial vehicle electrical, diesel truck diagnostics, ECM repair, Phoenix truck electrician",
    relatedServices: [
      { title: "Engine Repair", href: "/services/engine-repair" },
      { title: "DOT Inspections", href: "/services/dot-inspections" },
      { title: "Preventive Maintenance", href: "/services/pm-maintenance" },
    ],
  },
  "transmission": {
    title: "Transmission Repair",
    headline: "Transmission & Drivetrain Service",
    description: "Complete transmission diagnostics, repair, and rebuilds for heavy-duty trucks. Our drivetrain specialists ensure smooth power delivery and optimal performance for your commercial vehicles.",
    longDescription: "The transmission and drivetrain are essential to your truck's performance and efficiency. CT Truck & Trailer Shop provides expert transmission services from fluid changes and minor repairs to complete rebuilds. Our technicians work on manual, automatic, and automated manual transmissions for all major truck manufacturers.",
    detailedContent: [
      "Transmission problems can range from minor adjustments to major overhauls. Our diagnostic process identifies the exact issue, allowing us to recommend the most cost-effective solution. We pride ourselves on honest assessments—we'll never recommend unnecessary repairs.",
      "Our drivetrain services extend beyond the transmission to include clutch systems, differentials, driveshafts, and U-joints. We ensure that power flows smoothly from your engine to the wheels with maximum efficiency.",
    ],
    features: [
      "Complete transmission diagnostics",
      "Clutch adjustment and replacement",
      "Differential service and repair",
      "Driveshaft balancing and repair",
      "U-joint and yoke replacement",
      "Transmission fluid service",
      "PTO installation and repair",
      "Complete transmission rebuilds",
    ],
    benefits: [
      "Factory-trained transmission specialists",
      "Warranty on all transmission work",
      "OEM and quality remanufactured units",
      "Competitive pricing on rebuilds",
      "Fast turnaround times",
      "Comprehensive drivetrain expertise",
    ],
    whyChooseUs: [
      "Specialized transmission expertise",
      "Honest repair recommendations",
      "Quality guaranteed work",
      "Extensive parts availability",
    ],
    image: mechanicsWork,
    metaDescription: "Heavy-duty truck transmission repair in Phoenix. Clutch replacement, differential service, drivetrain repair. Expert technicians, quality parts, warranty service.",
    keywords: "truck transmission repair, commercial transmission service, clutch replacement, drivetrain repair, differential service, Phoenix",
    relatedServices: [
      { title: "Engine Repair", href: "/services/engine-repair" },
      { title: "Preventive Maintenance", href: "/services/pm-maintenance" },
      { title: "Mobile Repair", href: "/mobile-repair" },
    ],
  },
  "trailer-brakes": {
    title: "Trailer Brakes",
    headline: "Trailer Brake System Service & Repair",
    description: "Expert air brake and ABS system repairs for all trailer types. We ensure your trailers meet DOT compliance standards with reliable, safe braking performance.",
    longDescription: "Trailer brake systems require specialized expertise to service properly. CT Truck & Trailer Shop provides comprehensive trailer brake services including air brake repairs, ABS diagnostics, and complete foundation brake overhauls. We work on dry vans, flatbeds, reefers, tankers, and specialty trailers.",
    detailedContent: [
      "Properly functioning trailer brakes are essential for safe operation and DOT compliance. Our technicians perform thorough inspections and provide reliable repairs that keep your trailers road-ready and compliant.",
      "We service all trailer brake components including chambers, slack adjusters, drums, shoes, air lines, and ABS modules. Our comprehensive approach ensures that all components work together for optimal braking performance.",
    ],
    features: [
      "Complete trailer brake inspections",
      "Air brake chamber replacement",
      "ABS module diagnostics and repair",
      "Slack adjuster service",
      "Brake drum and shoe replacement",
      "Air line repair and replacement",
      "Glad hand and coupling service",
      "Foundation brake rebuilds",
    ],
    benefits: [
      "DOT compliance expertise",
      "All trailer types serviced",
      "Same-day service available",
      "Quality brake components",
      "Detailed inspection reports",
      "Fleet maintenance programs",
    ],
    whyChooseUs: [
      "Specialized trailer expertise",
      "Complete documentation provided",
      "Reliable quality repairs",
      "Competitive service pricing",
    ],
    image: truckDiagnostics,
    metaDescription: "Professional trailer brake repair in Phoenix. Air brakes, ABS systems, DOT compliance. Expert service for all trailer types. Call (602) 830-3232.",
    keywords: "trailer brake repair, air brake service, ABS repair, DOT trailer inspection, Phoenix trailer service",
    relatedServices: [
      { title: "Brake Service", href: "/services/brake-service" },
      { title: "Suspension Service", href: "/services/suspension" },
      { title: "DOT Inspections", href: "/services/dot-inspections" },
    ],
  },
  "suspension": {
    title: "Suspension Service",
    headline: "Truck & Trailer Suspension Repair",
    description: "Complete suspension repairs and replacements for smooth, safe hauling. We service leaf springs, air ride systems, shocks, and all suspension components.",
    longDescription: "A properly functioning suspension system is crucial for safe handling, load protection, and driver comfort. CT Truck & Trailer Shop provides expert suspension services for trucks and trailers, including air ride systems, leaf springs, and heavy-duty shock absorbers.",
    detailedContent: [
      "Suspension problems can affect handling, tire wear, and cargo safety. Our technicians diagnose suspension issues accurately and provide lasting repairs that restore proper ride height and handling characteristics.",
      "We work on all suspension types including air ride, leaf spring, and combination systems. Our services cover alignment, ride height adjustment, and complete suspension overhauls.",
    ],
    features: [
      "Air ride system diagnostics and repair",
      "Leaf spring replacement",
      "Shock absorber service",
      "Air bag replacement",
      "Ride height adjustment",
      "Bushing and pin replacement",
      "Alignment services",
      "Fifth wheel adjustment",
    ],
    benefits: [
      "Improved handling and safety",
      "Extended tire life",
      "Better cargo protection",
      "Enhanced driver comfort",
      "DOT compliance support",
      "Quality suspension components",
    ],
    whyChooseUs: [
      "Experienced suspension specialists",
      "All system types serviced",
      "Quality parts and components",
      "Fast turnaround times",
    ],
    image: expertTechnician,
    metaDescription: "Truck and trailer suspension repair in Phoenix. Air ride systems, leaf springs, shocks. Expert service for safe, smooth hauling. Call (602) 830-3232.",
    keywords: "truck suspension repair, trailer suspension, air ride service, leaf spring replacement, Phoenix",
    relatedServices: [
      { title: "Trailer Brakes", href: "/services/trailer-brakes" },
      { title: "Wheel Alignment", href: "/services/alignment" },
      { title: "DOT Inspections", href: "/services/dot-inspections" },
    ],
  },
  "welding": {
    title: "Welding & Fabrication",
    headline: "Structural Welding & Fabrication",
    description: "Expert structural welding and custom fabrication for trailers and truck components. Our certified welders handle repairs and modifications to keep your equipment roadworthy.",
    longDescription: "CT Truck & Trailer Shop offers professional welding and fabrication services for commercial trucks and trailers. From repairing cracked frames to custom fabrication projects, our skilled welders deliver quality work that meets industry standards.",
    detailedContent: [
      "Structural damage to trailers and truck frames requires expert repair to maintain safety and integrity. Our certified welders have extensive experience with commercial vehicle repairs and custom fabrication.",
      "We work with steel, aluminum, and stainless steel to repair or fabricate components that keep your equipment operating safely and efficiently.",
    ],
    features: [
      "Frame crack repair",
      "Crossmember replacement",
      "Floor repair and replacement",
      "Door and hinge repair",
      "Custom bracket fabrication",
      "Landing gear repair",
      "Bumper repair and replacement",
      "Structural modifications",
    ],
    benefits: [
      "Certified commercial welders",
      "High-quality welds guaranteed",
      "Custom solutions available",
      "Fast turnaround on repairs",
      "Mobile welding for emergencies",
      "All metals serviced",
    ],
    whyChooseUs: [
      "Experienced commercial welders",
      "Quality workmanship guaranteed",
      "Custom fabrication capabilities",
      "Competitive pricing",
    ],
    image: mechanicsWork,
    metaDescription: "Commercial truck and trailer welding in Phoenix. Frame repair, structural welding, custom fabrication. Certified welders, quality work. Call (602) 830-3232.",
    keywords: "truck welding, trailer welding, frame repair, commercial fabrication, Phoenix welding service",
    relatedServices: [
      { title: "Suspension Service", href: "/services/suspension" },
      { title: "Hydraulics", href: "/services/hydraulics" },
      { title: "Trailer Brakes", href: "/services/trailer-brakes" },
    ],
  },
  "hydraulics": {
    title: "Hydraulic Systems",
    headline: "Hydraulic System Repair & Maintenance",
    description: "Complete hydraulic system diagnostics, repair, and maintenance for commercial equipment. We service dump trailers, lift gates, and all hydraulic-powered systems.",
    longDescription: "Hydraulic systems power critical functions on many commercial vehicles and trailers. CT Truck & Trailer Shop provides expert hydraulic services including troubleshooting, repairs, and preventive maintenance to keep your hydraulic equipment operating reliably.",
    detailedContent: [
      "From lift gates to dump trailers, hydraulic systems require specialized knowledge to service properly. Our technicians diagnose hydraulic issues efficiently and provide lasting repairs.",
      "We service all hydraulic components including pumps, cylinders, valves, hoses, and reservoirs. Our preventive maintenance programs help avoid costly breakdowns.",
    ],
    features: [
      "Hydraulic system diagnostics",
      "Pump repair and replacement",
      "Cylinder rebuilding",
      "Hose fabrication and replacement",
      "Valve repair and adjustment",
      "PTO service and repair",
      "Lift gate maintenance",
      "Complete system overhauls",
    ],
    benefits: [
      "Expert hydraulic technicians",
      "Fast troubleshooting",
      "Quality hydraulic components",
      "Custom hose fabrication",
      "Preventive maintenance programs",
      "Mobile service available",
    ],
    whyChooseUs: [
      "Specialized hydraulic expertise",
      "All systems serviced",
      "Quality parts and components",
      "Reliable lasting repairs",
    ],
    image: expertTechnician,
    metaDescription: "Hydraulic system repair for commercial trucks and trailers in Phoenix. Lift gates, dump trailers, PTOs. Expert service. Call (602) 830-3232.",
    keywords: "hydraulic repair, lift gate service, dump trailer hydraulics, PTO repair, Phoenix hydraulic service",
    relatedServices: [
      { title: "Welding & Fabrication", href: "/services/welding" },
      { title: "Electrical Systems", href: "/services/electrical" },
      { title: "Preventive Maintenance", href: "/services/pm-maintenance" },
    ],
  },
};

const defaultService = {
  title: "Our Services",
  headline: "Professional Truck & Trailer Services",
  description: "Comprehensive repair and maintenance services for your commercial fleet. CT Truck & Trailer Shop delivers expert solutions to keep your trucks running.",
  longDescription: "CT Truck & Trailer Shop provides complete repair and maintenance services for all types of commercial vehicles. Our experienced technicians are ready to help with any service you need, from routine maintenance to emergency repairs.",
  detailedContent: [
    "We understand that downtime costs you money. That's why we focus on fast, efficient service without sacrificing quality. Every repair is performed by experienced technicians using quality parts.",
    "Whether you need scheduled maintenance or emergency repairs, we're here to help keep your fleet moving. Contact us today to discuss your service needs.",
  ],
  features: ["Comprehensive diagnostics", "Quality repairs", "Preventive maintenance", "Emergency service", "Fleet programs", "Mobile service"],
  benefits: ["Expert technicians", "Quality parts", "Fast turnaround", "Fair pricing", "24/7 emergency service", "Warranty on repairs"],
  whyChooseUs: ["8+ years experience", "Customer-focused service", "Competitive pricing", "Reliable quality"],
  image: truckDiagnostics,
  metaDescription: "Professional truck and trailer repair services in Phoenix, AZ. Expert technicians, quality parts, fast service. Call (602) 830-3232.",
  keywords: "truck repair phoenix, trailer repair, commercial vehicle service",
  relatedServices: [
    { title: "Engine Repair", href: "/services/engine-repair" },
    { title: "Brake Service", href: "/services/brake-service" },
    { title: "Mobile Repair", href: "/mobile-repair" },
  ],
};

const ServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceSlug && servicesData[serviceSlug] ? servicesData[serviceSlug] : defaultService;

  return (
    <Layout>
      <SEO
        title={service.title}
        description={service.metaDescription}
        keywords={service.keywords}
      />

      {/* Futuristic Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
          
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Wrench className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">
                {service.title}
              </span>
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {service.headline.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-gradient">{service.headline.split(' ').slice(-1)}</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:6028303232">
                <Button variant="hero" size="xl">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (602) 830-3232
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="hero-outline" size="lg">
                  Request a Quote
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-accent/30 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-accent/30 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-accent/30 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-accent/30 rounded-br-lg" />
      </section>

      {/* Content Section with futuristic styling */}
      <section className="section-padding bg-primary relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* About Section */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-6">
                  About This <span className="text-gradient">Service</span>
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-6">
                  {service.longDescription}
                </p>
                {service.detailedContent.map((paragraph, index) => (
                  <p key={index} className="text-primary-foreground/70 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Image */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 via-accent/20 to-accent/50 rounded-2xl blur-sm" />
                <div className="relative rounded-2xl overflow-hidden border border-accent/30">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Decorative corner accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-accent rounded-tl-lg" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-accent rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-accent rounded-bl-lg" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-accent rounded-br-lg" />
              </div>

              {/* Features */}
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-6">
                  What's <span className="text-gradient">Included</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 p-3 rounded-lg bg-primary-foreground/5 border border-accent/20">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-primary-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-6">
                  Benefits of Choosing <span className="text-gradient">CT Truck Shop</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-primary-foreground/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="relative bg-accent/10 rounded-2xl p-8 border border-accent/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                <div className="relative z-10">
                  <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-6 flex items-center gap-3">
                    <Award className="h-6 w-6 text-accent" />
                    Why Choose Us
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.whyChooseUs.map((reason) => (
                      <div key={reason} className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-primary-foreground">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

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
                      <span className="text-primary-foreground group-hover:text-accent transition-colors font-medium">
                        {related.title}
                      </span>
                      <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* CTA Card */}
                <div className="relative bg-primary-foreground/5 rounded-2xl p-6 border border-accent/30 overflow-hidden">
                  <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-sm" />
                  <div className="relative z-10">
                    <h3 className="font-heading text-xl font-bold text-primary-foreground mb-4">
                      Get a Quote
                    </h3>
                    <p className="text-primary-foreground/70 mb-6">
                      Contact us for fast, reliable {service.title.toLowerCase()} service.
                    </p>
                    <a href="tel:6028303232" className="block mb-4">
                      <Button variant="hero" size="lg" className="w-full">
                        <Phone className="h-5 w-5 mr-2" />
                        (602) 830-3232
                      </Button>
                    </a>
                    <div className="flex items-center gap-2 justify-center text-primary-foreground/60 text-sm">
                      <Clock className="h-4 w-4 text-accent" />
                      <span>24/7 Emergency Service Available</span>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-primary-foreground/5 rounded-2xl p-6 border border-accent/20">
                  <h4 className="font-heading font-bold text-primary-foreground mb-4">
                    Quick Info
                  </h4>
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
                      <span className="text-primary-foreground/80">ASE-certified technicians</span>
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

      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default ServicePage;