import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";

const serviceOptions = [
  "Engine Repair",
  "Brake Service",
  "DOT Inspection",
  "Transmission Repair",
  "Electrical Diagnostics",
  "Oil Change & Lube",
  "Suspension & Steering",
  "Welding & Fabrication",
  "Towing & Recovery",
  "Mobile Repair",
  "Other",
];

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const LeadForm = ({
  title = "Request a Free Quote",
  subtitle = "Fill out the form and we'll get back to you ASAP.",
  className = "",
}: LeadFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Service Request: ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Needed: ${formData.service}`
    );
    window.location.href = `mailto:info@cttruckshop.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-1 bg-gradient-to-br from-accent/40 via-accent/10 to-accent/40 rounded-2xl blur-sm" />
      <div className="relative bg-primary/90 backdrop-blur-md rounded-2xl p-6 border border-accent/30">
        <h3 className="font-heading text-xl font-bold text-primary-foreground mb-1">
          {title.includes("Free Quote") ? (
            <>Request a <span className="text-accent">Free Quote</span></>
          ) : (
            <span>{title}</span>
          )}
        </h3>
        <p className="text-sm text-primary-foreground/60 mb-5">
          {subtitle}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              maxLength={100}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              maxLength={255}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
            />
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              maxLength={20}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
            />
          </div>
          <div>
            <Select
              value={formData.service}
              onValueChange={(value) => setFormData({ ...formData, service: value })}
              required
            >
              <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground focus:border-accent [&>span]:text-primary-foreground/40 [&[data-state=open]>span]:text-primary-foreground data-[placeholder]:text-primary-foreground/40">
                <SelectValue placeholder="Service Needed" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full">
            <Send className="h-4 w-4 mr-2" />
            Get Your Free Quote
          </Button>
        </form>

        <p className="text-xs text-primary-foreground/40 mt-3 text-center">
          Or call us directly at{" "}
          <a href="tel:6028303232" className="text-accent hover:underline">
            (602) 830-3232
          </a>
        </p>
      </div>
    </div>
  );
};

export default LeadForm;
