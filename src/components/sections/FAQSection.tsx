import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "What types of trucks do you service?",
    answer: "We service all types of heavy-duty commercial vehicles including semi-trucks, tractor-trailers, box trucks, flatbeds, refrigerated trailers, and full commercial fleets. Our technicians are experienced with all major manufacturers including Freightliner, Peterbilt, Kenworth, Volvo, International, and Mack.",
  },
  {
    question: "Do you offer emergency roadside assistance?",
    answer: "Yes! We provide emergency roadside assistance throughout Phoenix, AZ and surrounding areas including Glendale, Tempe, Mesa, and along major routes like I-10, I-17, and Loop 101. Our mobile techs are equipped to handle most common breakdowns on-site.",
  },
  {
    question: "What services do you provide?",
    answer: "We offer comprehensive truck and trailer services including: engine repair and diagnostics, brake service, electrical systems, transmission and drivetrain repair, DOT inspections, preventive maintenance (PM), oil changes, quick-lube, welding, ABS repairs, suspension, hydraulics, A/C and cooling systems, and more.",
  },
  {
    question: "How quickly can you respond to an emergency call?",
    answer: "For emergency roadside assistance, we provide clear ETAs when you call. Response times vary based on your location and current demand, but we prioritize getting you back on the road as quickly as possible. We serve the greater Phoenix metro area including major highways.",
  },
  {
    question: "Do you offer fleet maintenance programs?",
    answer: "Yes, we offer customized fleet maintenance programs designed to reduce downtime and control costs. Fleet customers receive priority scheduling, preventive maintenance reminders, and consistent service from our experienced team. Contact us to discuss a program tailored to your fleet's needs.",
  },
  {
    question: "What are your rates and payment options?",
    answer: "We provide upfront, transparent pricing with no hidden fees. Rates vary by service type. We accept all major credit cards, cash, and can work with fleet billing accounts. Contact us for a quote specific to your service needs.",
  },
  {
    question: "Are your technicians certified?",
    answer: "Yes, our technicians are skilled professionals with extensive experience in commercial truck and trailer repair. We perform DOT-compliant inspections and repairs using modern diagnostic tools and quality parts.",
  },
  {
    question: "Where are you located?",
    answer: "We're located in Phoenix, AZ and serve the entire Phoenix metro area including Glendale, Tempe, Mesa, Chandler, Gilbert, Scottsdale, and surrounding communities. Our mobile repair service covers major highways and industrial areas throughout the region.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Header */}
          <div className="text-center lg:text-left">
            <ScrollReveal direction="left">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3 mx-auto lg:mx-0">
                FAQ
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Got questions about our truck and trailer repair services? 
                Find answers to common questions below, or contact us directly for personalized assistance.
              </p>
              <a href="tel:6028303232" className="inline-block">
                <Button variant="accent" size="lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (602) 830-3232
                </Button>
              </a>
            </ScrollReveal>
          </div>

          {/* FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <ScrollReveal key={index} delay={index * 80}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
