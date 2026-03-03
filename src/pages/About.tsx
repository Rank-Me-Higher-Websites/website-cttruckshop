import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, Users, Award, Truck, MapPin, BadgeDollarSign, MessageSquare } from "lucide-react";
import { useQuoteModal } from "@/contexts/QuoteModalContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CTASection from "@/components/sections/CTASection";
import aboutTowTruck from "@/assets/about-tow-truck.jpg";
import aboutEngineRepair from "@/assets/about-engine-repair.png";
import aboutRepairShop from "@/assets/about-repair-shop.jpg";
import aboutTeam from "@/assets/about-team.png";
import ctShopTeam from "@/assets/ct-shop-team.jpg";

const aboutCards = [
  {
    label: "Our Services",
    image: aboutTowTruck,
    alt: "CT Shop tow truck in Phoenix",
    description: "We're dedicated to keeping Arizona's trucking community moving. With years of experience in heavy-duty truck and trailer repairs, our certified technicians deliver reliable, fast, and professional service to ensure your fleet stays road-ready.",
  },
  {
    label: "Our Values",
    image: aboutEngineRepair,
    alt: "Diesel truck engine repair at CT Shop",
    description: "Every repair is done with care and precision because we know that every mile matters. At CT Shop, our values drive everything we do: reliability, transparency, and commitment to excellence in every service we provide.",
  },
  {
    label: "Our Mission",
    image: aboutRepairShop,
    alt: "Heavy duty repair shop CT Shop Phoenix",
    description: "Our mission is simple — to keep drivers safe, fleets efficient, and trucks in top condition. We believe in honesty, quality workmanship, and customer-first service.",
  },
];

const differentiators = [
  {
    icon: Truck,
    title: "24/7 Mobile Repair",
    href: "/mobile-repair",
    description: "Breakdowns don't wait, and neither do we. CT Shop offers 24/7 mobile truck repair in Phoenix and surrounding areas — so whether you're stuck roadside or in your yard, our mobile team gets you back on the road fast.",
  },
  {
    icon: BadgeDollarSign,
    title: "Large Fleet Discounts",
    description: "We value our fleet partners with exclusive discounts and priority service. Keep your entire fleet running smoothly while saving on essential maintenance and repair costs.",
  },
  {
    icon: Award,
    title: "ASE-Certified Mechanics",
    description: "Our mechanics bring expert knowledge and precision to every job. Whether it's a full engine rebuild or routine maintenance, your truck is in the hands of professionals.",
  },
  {
    icon: MapPin,
    title: "Convenient Phoenix Location",
    description: "Located in the heart of Phoenix, CT Shop is easily accessible from I-10 and major trucking routes. Our central location makes it simple for drivers and fleets to stop by for fast service.",
  },
];

const faqs = [
  {
    question: "Where is CT Shop located, and do you serve nearby areas?",
    answer: "Our Truck Repair Shop is conveniently located in Phoenix, AZ, easily accessible from I-10, I-17, and Loop 202. We proudly serve drivers and fleets across the Phoenix metro area, including Glendale, Tolleson, Goodyear, and surrounding industrial zones.",
  },
  {
    question: "What services does CT Truck and Trailer Shop provide?",
    answer: "We provide a full range of truck and trailer repair services, including engine diagnostics, brake repair, welding and fabrication, suspension work, body repair, and preventive maintenance. We also offer 24/7 mobile repair service for emergency roadside assistance across the Phoenix area.",
  },
  {
    question: "Why should drivers and fleet owners trust CT Truck and Trailer Shop?",
    answer: "Our reputation as a trusted Truck Repair Shop in Phoenix comes from our dedication to quality, honesty, and customer satisfaction. We believe in building long-term relationships with drivers and fleet operators by delivering reliable repairs, transparent pricing, and dependable service every time.",
  },
  {
    question: "Does CT Shop handle both small repairs and major overhauls?",
    answer: "Absolutely. Whether you need a quick tire replacement, DOT inspection, or a complete trailer body restoration, our experienced team can handle it all. CT Truck and Trailer Shop is the go-to destination for drivers looking for the best truck repair shop that offers both efficiency and expertise.",
  },
];

const About = () => {
  const { open: openQuote } = useQuoteModal();
  return (
    <Layout>
      <SEO
        title="About Us | Truck Repair Shop Phoenix"
        description="Expert fleet maintenance and repair for heavy-duty & semi-trucks in Phoenix, AZ. 24/7 emergency roadside service. ASE-certified mechanics. Learn about CT Truck and Trailer Shop."
        keywords="about CT Truck Shop, Phoenix truck repair company, commercial fleet service, truck repair shop phoenix"
      />

      {/* Hero */}
      <section className="relative min-h-[auto] flex items-center text-primary-foreground overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${ctShopTeam})` }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl hidden sm:block" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl hidden sm:block" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-center md:text-left">
            <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6 mx-auto md:mx-0">
              <Users className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">About CT Truck and Trailer Shop</span>
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Truck Repair Shop <span className="text-gradient">Phoenix</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Expert fleet maintenance and repair for heavy-duty & semi-trucks in Phoenix, AZ. 24/7 emergency roadside service in Phoenix & surroundings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold" onClick={openQuote}>
                <MessageSquare className="mr-2 h-5 w-5" />
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="tel:+16234653737">
                  <Phone className="mr-2 h-5 w-5" />
                  (623) 465-3737
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Cards - Services / Values / Mission */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Best Truck Shop <span className="text-gradient">Near Me</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {aboutCards.map((card) => (
              <div key={card.label} className="relative bg-primary-foreground/5 rounded-xl border border-accent/20 overflow-hidden group hover:border-accent/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img src={card.image} alt={card.alt} className="w-full h-56 object-cover" />
                <div className="relative z-10 p-6">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3">{card.label}</span>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team + What Makes Us Different */}
      <section className="section-padding bg-primary relative overflow-hidden border-t border-accent/10">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Team Photo */}
            <div className="order-2 lg:order-1">
              <img
                src={aboutTeam}
                alt="CT Truck & Trailer Shop team in Phoenix, AZ"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <p className="text-primary-foreground/60 uppercase tracking-widest text-sm mb-2">What Makes Us Different</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Top Reasons Truckers Trust <span className="text-gradient">CT Shop</span> in Phoenix, AZ
              </h2>
              <p className="text-primary-foreground/70 mb-8">
                Our experienced team is committed to keeping your fleet on the road with fast, professional service you can count on.
              </p>
              <div className="space-y-5">
                {differentiators.map((item) => (
                  <div key={item.title} className="flex gap-4 text-left">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-primary-foreground mb-1">
                        {item.href ? (
                          <Link to={item.href} className="hover:text-accent transition-colors">{item.title}</Link>
                        ) : item.title}
                      </h3>
                      <p className="text-primary-foreground/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold" onClick={openQuote}>
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Request a Quote
                </Button>
                <Button size="lg" variant="outline" className="border-accent/30 text-primary-foreground hover:bg-accent/10" asChild>
                  <Link to="/services">
                    View All Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-primary relative overflow-hidden border-t border-accent/10">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary-foreground/60 uppercase tracking-widest text-sm mb-2">Common Questions</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Truck Repair Shop <span className="text-gradient">Phoenix</span>
              </h2>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 via-accent/20 to-accent/50 rounded-2xl blur-sm" />
                <div className="relative rounded-2xl overflow-hidden border border-accent/30">
                  <img src={aboutTowTruck} alt="CT Shop tow truck Phoenix AZ" className="w-full h-auto" />
                </div>
              </div>
            </div>
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="bg-primary-foreground/5 border border-accent/20 rounded-xl px-6 overflow-hidden"
                  >
                    <AccordionTrigger className="text-primary-foreground font-heading text-lg font-semibold hover:text-accent py-5 [&[data-state=open]]:text-accent">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-primary-foreground/70 pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
