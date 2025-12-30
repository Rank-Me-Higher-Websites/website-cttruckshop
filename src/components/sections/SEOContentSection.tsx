import { Link } from "react-router-dom";

const SEOContentSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <article className="max-w-4xl mx-auto prose prose-lg prose-slate">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 not-prose">
            Commercial Fleet & Semi-Truck Repair in Phoenix
          </h2>
          
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">CT Truck & Trailer Shop</strong> keeps commercial fleets 
            moving throughout Phoenix, Glendale, Tempe, Mesa, and the surrounding Arizona metro area. 
            As a trusted partner for fleet maintenance and heavy-duty truck repair, we provide comprehensive 
            in-shop and mobile repair services designed to minimize downtime and maximize your operational efficiency.
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            Our experienced technicians handle everything from routine <strong className="text-foreground">preventive maintenance</strong> to 
            complex <strong className="text-foreground">emergency repairs</strong>, using state-of-the-art diagnostic tools and 
            high-quality parts. Services include battery and charging system diagnostics, air and brake leak repairs, 
            tire services, electrical troubleshooting, fuel delivery, comprehensive PM schedules, and{" "}
            <Link to="/services/dot-inspections" className="text-accent hover:underline">DOT inspections</Link>.
          </p>

          <h3 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4 not-prose">
            24/7 Emergency Roadside Assistance
          </h3>
          
          <p className="text-muted-foreground leading-relaxed">
            When breakdowns happen, every minute counts. Our <Link to="/mobile-repair" className="text-accent hover:underline">mobile repair service</Link> provides 
            round-the-clock emergency roadside assistance throughout the Phoenix metro area. Whether you're 
            stranded on I-10, I-17, or Loop 101, our team dispatches quickly with clear ETAs and upfront 
            pricing to get you back on the road fast.
          </p>

          <h3 className="font-heading text-2xl font-bold text-foreground mt-10 mb-4 not-prose">
            Comprehensive Truck & Trailer Services
          </h3>
          
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-muted-foreground not-prose list-none pl-0">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
              <span>Engine Service & Repair</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
              <span>Brake Systems & ABS</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
              <span>Electrical & Computer Diagnostics</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
              <span>Transmission & Drivetrain</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
              <span>Oil Changes & Quick-Lube</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
              <span>Suspension & Steering</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
              <span>Welding & Fabrication</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
              <span>Hydraulic Systems</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
              <span>Radiators, Cooling & A/C</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
              <span>DOT Compliance Inspections</span>
            </li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mt-8">
            We service tractors, trailers, and complete commercial fleets using only quality parts 
            and modern diagnostic equipment. Whether you operate a single truck or manage an entire fleet, 
            CT Truck & Trailer Shop provides the reliable, professional service you need to keep your 
            business running smoothly.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Ready to experience Phoenix's premier truck repair service?</strong>{" "}
            <a href="tel:6028303232" className="text-accent hover:underline">Contact CT Truck & Trailer Shop</a> today 
            for fast, reliable, and affordable service you can count on.
          </p>
        </article>
      </div>
    </section>
  );
};

export default SEOContentSection;
