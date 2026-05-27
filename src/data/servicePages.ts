export interface ServicePageData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline?: string;
  introHeading: string;
  introParagraphs: string[];
  sections: {
    heading: string;
    content: string[];
    listItems?: string[];
  }[];
  highlights: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: { title: string; href: string }[];
}

export const servicePages: Record<string, ServicePageData> = {
  "emergency-truck-repair-phoenix": {
    slug: "emergency-truck-repair-phoenix",
    title: "Emergency Truck Repair Phoenix, AZ",
    metaTitle: "Emergency Truck Repair Phoenix, AZ | CT Truck & Trailer Shop",
    metaDescription: "Emergency truck repair in Phoenix, AZ. Fast response, certified mechanics, roadside assistance. CT Truck & Trailer Shop gets you back on the road quickly.",
    heroHeadline: "#1 Emergency Truck Repair Phoenix, AZ",
    heroSubheadline: "Fast response, certified mechanics & roadside assistance across the Phoenix metro area.",
    introHeading: "Fast Emergency Truck Repair in Phoenix, AZ",
    introParagraphs: [
      "When your truck breaks down on the road, every minute counts. CT Truck & Trailer Shop provides emergency truck repair in Phoenix, AZ, helping drivers get back on the road quickly and safely. Our certified mechanics are always on standby, ready to handle any roadside issue—from engine failure to brake or tire problems. With fully equipped service trucks and years of experience in the heavy-duty repair industry, we deliver fast response times and reliable workmanship that keep your truck running strong.",
    ],
    sections: [
      {
        heading: "Emergency Truck Repair Services in Phoenix & Nearby",
        content: [
          "When your rig is down, CT Shop brings the repair shop directly to you. Our emergency truck repair in Phoenix, AZ covers all types of breakdowns and fleet emergencies, ensuring minimal downtime and maximum safety for every driver.",
          "Whether you're an owner-operator, fleet manager, or local hauler, trust CT Truck & Trailer Shop for dependable emergency truck repair that gets you moving again—fast.",
        ],
        listItems: [
          "Mobile diagnostics and on-site repairs",
          "Engine, brake, and electrical troubleshooting",
          "Tire replacement and air leak repair",
          "Roadside assistance anywhere in the Phoenix area",
          "Heavy-duty service trucks equipped for fast response",
        ],
      },
    ],
    highlights: [
      { title: "Fast Response", description: "Quick emergency service for any breakdown situation." },
      { title: "Fast Response", description: "Quick dispatch with fully equipped service trucks." },
      { title: "Certified Mechanics", description: "Experienced technicians ready for any roadside issue." },
    ],
    faqs: [
      {
        question: "Do you offer Emergency Truck Repair and roadside help?",
        answer: "Yes. We provide Emergency Truck Repair across the Phoenix metro and major corridors (I-10, I-17, Loop 101). We triage your call and dispatch the nearest unit; arrival times vary by distance and traffic. Call now or submit the service form for immediate assistance.",
      },
      {
        question: "What areas do you cover for Mobile Truck Repair Near Me?",
        answer: "We serve Greater Phoenix and nearby cities—Glendale, Tempe, Mesa, Chandler, Tolleson, Goodyear, Avondale—and common freight hubs and distribution yards. If you're within this radius and search \"Mobile Truck Repair Near Me,\" our technicians can come to you.",
      },
      {
        question: "How much does Mobile Truck Repair cost, and how do I book?",
        answer: "Pricing depends on the issue, parts, and travel distance. We provide clear hourly rates and parts quotes before work begins—no surprises. To schedule Mobile Truck Repair or request Emergency Truck Repair, call our team or book online through the service request form.",
      },
      {
        question: "What is Mobile Truck Repair and when should I use it?",
        answer: "Mobile Truck Repair brings a certified diesel tech to your location—yard, jobsite, or roadside—so you skip the tow. It's ideal for no-starts, air/brake leaks, batteries/alternators, tires, electrical faults, fuel delivery/priming, and quick diagnostics. Our team comes to you fast in the Phoenix area.",
      },
      {
        question: "How do pricing, estimates, and warranties work?",
        answer: "You'll get an upfront estimate and approval before work begins. We source quality parts and provide standard parts-and-labor warranty details with your quote.",
      },
    ],
    relatedServices: [
      { title: "Truck Breakdown Service", href: "/truck-breakdown-service-phoenix" },
      { title: "Semi Truck Diagnostics", href: "/semi-truck-diagnostics-in-phoenix-az" },
      { title: "Semi Truck Engine Repairs", href: "/semi-truck-engine-repairs-in-phoenix-az" },
    ],
  },

  "truck-breakdown-service-phoenix": {
    slug: "truck-breakdown-service-phoenix",
    title: "Truck Breakdown Service Phoenix",
    metaTitle: "Truck Breakdown Service Phoenix | CT Truck & Trailer Shop",
    metaDescription: "Fast truck breakdown service and repair in Phoenix, AZ. Quick mobile response, certified technicians, roadside assistance. CT Truck and Trailer Shop.",
    heroHeadline: "Truck Breakdown Service and Repair",
    heroSubheadline: "Mobile breakdown repair with quick dispatch to get your rig back on the road.",
    introHeading: "Reliable Truck Breakdown Service & Roadside Repair in Phoenix",
    introParagraphs: [
      "When your rig breaks down on the road, every minute counts. That's why CT Truck and Trailer Shop provides fast truck breakdown service and repair throughout Phoenix and nearby areas. Our certified mobile technicians are always ready to respond to get you back on the road fast. Whether it's an engine issue, electrical failure, tire blowout, or brake problem, we bring the tools and expertise directly to you.",
      "From emergency roadside repairs to full-service shop diagnostics, we ensure your downtime stays minimal and your truck stays reliable. When you need truck repair you can trust, call CT Truck and Trailer Shop — where help is always just a phone call away.",
    ],
    sections: [
      {
        heading: "Reliable Truck Breakdown Service",
        content: [
          "At CT Shop, we take pride in delivering fast, dependable truck breakdown service for drivers across Phoenix and nearby cities. Our expert technicians are equipped to handle any roadside emergency, from minor repairs to complex fixes, ensuring your truck runs safely and efficiently. Whether you're an owner-operator or managing a fleet, we're your trusted partner when the unexpected happens on the road.",
        ],
        listItems: [
          "Skilled & certified technicians",
          "Competitive pricing with no hidden fees",
          "Complete diagnostics and repair solutions",
          "Mobile repair & roadside assistance",
        ],
      },
    ],
    highlights: [
      { title: "Fast Response", description: "Our mobile technicians are always ready to respond quickly." },
      { title: "Fast Response", description: "In most cases, our technicians arrive within the hour." },
      { title: "Full-Service", description: "From roadside repairs to complete shop diagnostics." },
    ],
    faqs: [
      {
        question: "How fast can CT Shop respond to a breakdown service request?",
        answer: "Our Mobile Truck Repair Phoenix Near Me service is designed for fast response times. In most cases, our technicians arrive within the hour, depending on your location in the Phoenix area. We prioritize emergency calls to minimize downtime and ensure efficient repairs on-site.",
      },
      {
        question: "What types of repairs are included in CT Shop's breakdown service?",
        answer: "CT Truck and Trailer Shop handles a wide range of services—engine diagnostics, air system repairs, brake and suspension work, electrical issues, and more. Our mobile units come fully equipped to perform professional repairs wherever your truck is.",
      },
      {
        question: "Why choose CT Truck and Trailer Shop for semi breakdown services in Arizona?",
        answer: "CT Shop stands out as the Best Mobile Truck Repair in Phoenix because of our certified technicians, fast availability, and commitment to high-quality service. We bring the shop to you, saving time, towing costs, and helping your truck stay road-ready across Arizona highways.",
      },
      {
        question: "What should I do if I need emergency truck repair in Phoenix?",
        answer: "If you experience a breakdown or mechanical issue, call CT Truck and Trailer Shop for Emergency Truck Repair in Phoenix. Our mobile service team is available to provide roadside assistance, including diagnostics, tire replacement, air leak repair, and more—getting you back on the road quickly and safely.",
      },
    ],
    relatedServices: [
      { title: "Emergency Truck Repair", href: "/emergency-truck-repair-phoenix" },
      { title: "Semi Truck Diagnostics", href: "/semi-truck-diagnostics-in-phoenix-az" },
      { title: "Semi Truck Engine Repairs", href: "/semi-truck-engine-repairs-in-phoenix-az" },
    ],
  },

  "semi-truck-ac-repair-services": {
    slug: "semi-truck-ac-repair-services",
    title: "Semi Truck AC Repair and Services Phoenix, AZ",
    metaTitle: "Semi Truck AC Repair Services Phoenix, AZ | CT Truck & Trailer Shop",
    metaDescription: "Professional semi truck AC repair and services in Phoenix, AZ. Expert mechanics, comprehensive evaluation, reliable AC solutions. CT Shop.",
    heroHeadline: "Semi Air Conditioning Repairs",
    heroSubheadline: "Beat the Arizona heat with expert AC diagnostics, repair & recharge services.",
    introHeading: "Expert Semi Truck AC Repair & Service in Phoenix, AZ",
    introParagraphs: [
      "Maintaining a well-functioning air conditioning system is essential for heavy-duty trucks operating in hot and demanding conditions. To ensure your comfort and confidence in the reliability of your semi truck's AC system throughout your job, it is crucial to maintain its maximum efficiency. It's equally important to have a skilled team of mechanics available in case any issues arise. At CT Shop, our experienced mechanics are capable of addressing any concerns you may have for your semi truck's AC system.",
      "Neglecting to have your AC unit inspected when you notice any of the check indicators can exacerbate the problem and eventually lead to a complete AC failure. In addition to offering AC repairs, our mechanics can conduct a comprehensive evaluation of your system to ensure seamless operation.",
    ],
    sections: [],
    highlights: [
      { title: "Fast Response", description: "We understand the importance of a properly functioning AC system in heavy-duty trucks, and our goal is to deliver solutions that meet or exceed customer expectations." },
      { title: "Expert Knowledge", description: "Our extensive knowledge of various truck models and AC systems equips us to diagnose and resolve issues efficiently. With CT Shop, you can trust that your truck's AC system is in capable hands." },
      { title: "Comprehensive Solutions", description: "From inspecting and cleaning filters to replacing major components, our comprehensive approach ensures that your AC system operates at peak performance, promoting driver comfort and minimizing downtime." },
    ],
    faqs: [],
    relatedServices: [
      { title: "Semi Truck Engine Repairs", href: "/semi-truck-engine-repairs-in-phoenix-az" },
      { title: "Semi Truck Diagnostics", href: "/semi-truck-diagnostics-in-phoenix-az" },
      { title: "Trailer Electrical Repair", href: "/semi-trailer-electrical-repair-services-phoenix-az" },
    ],
  },

  "semi-truck-tire-and-brake-repair-services-phoenix-az": {
    slug: "semi-truck-tire-and-brake-repair-services-phoenix-az",
    title: "Semi Truck Brake Pads & Tire Repair in Phoenix, Arizona",
    metaTitle: "Semi Truck Brake Pads in Arizona — Phoenix Brake & Tire Repair Shop",
    metaDescription: "Semi truck brake pads & full brake repair in Phoenix, Arizona. Same-day brake pad replacement, DOT-compliant inspections, all major brands stocked. Call (602) 830-3232.",
    heroHeadline: "Semi Truck Brake Pads & Brake Repair in Phoenix, Arizona",
    heroSubheadline: "Same-day brake pad replacement, DOT-compliant brake inspections, and tire service for Class 8 trucks. Bendix, Meritor, Haldex & more — in stock.",
    introHeading: "Arizona's Trusted Shop for Semi Truck Brake Pads & Brake Repair",
    introParagraphs: [
      "Looking for semi truck brake pads in Arizona? CT Truck & Trailer Shop stocks brake pads for every major Class 8 truck — Freightliner Cascadia, Peterbilt 579, Kenworth T680, Volvo VNL, International LT and more — and we install them the same day in our Phoenix shop. Whether you need a quick brake pad swap before your next haul or a full S-cam, drum, slack adjuster, ABS sensor and air system inspection, our DOT-certified brake technicians handle it in one stop.",
      "We're the brake shop that fleets and owner-operators across Arizona send their trucks to when brake failure is not an option. Every brake job starts with a 21-point DOT brake inspection, includes a documented out-of-service inspection report, and comes with a warranty on parts and labor. Same-day brake pad installation, walk-ins welcome, and emergency 24/7 mobile brake service available across Phoenix, Mesa, Tempe, Chandler, Glendale and the wider Valley.",
      "Need brake pads now? Call (602) 830-3232 — most semi truck brake pad jobs are completed in 2 to 4 hours.",
    ],
    sections: [
      {
        heading: "Semi Truck Brake Pads We Stock & Install",
        content: [
          "We carry brake pads in our Phoenix warehouse for every major Class 8 application — meaning we can usually install your brake pads the same day you bring the truck in. We stock pads from the brake brands real fleets trust:",
        ],
        listItems: [
          "Bendix MA, MV3, ADB, EX225 air disc brake pads",
          "Meritor EX+ L, EX225L2, EX225H2 air disc brake pads",
          "Haldex air disc brake pads (DBT, ModulX series)",
          "Knorr-Bremse / Bendix replacement pads",
          "Standard drum brake shoes & linings (4707, 4709, 4515Q)",
          "Haldex/Bendix slack adjusters & S-cam kits",
          "ABS sensors, brake chambers, air dryers, governors",
        ],
      },
      {
        heading: "What's Included With Every Semi Truck Brake Pad Job",
        content: [
          "Brake pad replacement at CT Shop is never just \"swap and go.\" Every job includes:",
        ],
        listItems: [
          "21-point DOT brake inspection (drums, rotors, hoses, ABS, air system)",
          "Brake pad / lining thickness measurement on every axle",
          "S-cam, slack adjuster and chamber inspection",
          "Air system leak-down test (1 psi/min max)",
          "Written inspection report — DOT-ready",
          "Warranty on parts (12 months) and labor (90 days)",
          "Optional rotor / drum machining or replacement",
        ],
      },
      {
        heading: "Mobile Brake Service Across the Phoenix Valley",
        content: [
          "Truck won't move because of brake failure? Don't risk towing — we'll come to you. Our mobile brake response unit covers Phoenix, Glendale, Mesa, Tempe, Chandler, Scottsdale, Gilbert, Peoria, Avondale, Goodyear, Buckeye and Surprise. Stocked with brake pads, S-cams, slack adjusters and a portable lift, our mobile techs handle most brake jobs on-site so you don't lose a load.",
        ],
      },
    ],
    highlights: [
      { title: "Same-Day Brake Pads", description: "Most Class 8 brake pad jobs completed in 2–4 hours. Walk-ins welcome, fleets prioritized. Brake pads in stock for every major truck application." },
      { title: "DOT-Certified Brake Techs", description: "Every brake repair includes a documented 21-point DOT inspection. Our brake technicians are trained on Bendix, Meritor, Haldex and Knorr-Bremse systems." },
      { title: "Mobile Brake Response", description: "Brake failure in the yard or on the side of the road? Our mobile brake unit covers the entire Phoenix metro 24/7. Air leaks, frozen S-cams, blown chambers — we come to you." },
    ],
    faqs: [
      {
        question: "How much do semi truck brake pads cost in Arizona?",
        answer: "Semi truck brake pad pricing in Arizona depends on the brake system. Air disc brake pads (Bendix ADB22X, Meritor EX+ L) typically run $180–$320 per wheel installed. Drum brake shoes run $140–$240 per wheel installed. Full tractor brake job (steer + drives) averages $1,400–$2,800. Trailer-only brake jobs $900–$1,800. Call (602) 830-3232 for a same-day quote on your specific truck.",
      },
      {
        question: "How long does a semi truck brake pad replacement take?",
        answer: "Most semi truck brake pad replacements at CT Shop take 2–4 hours. Single-axle brake pad jobs are usually done in 90 minutes. Full tractor + trailer brake replacement is typically a same-day job. We give you a written ETA before we start the work.",
      },
      {
        question: "How often should semi truck brake pads be replaced?",
        answer: "Semi truck brake pads should be replaced when lining thickness drops below 1/4 inch (or per the manufacturer's wear indicator). For most over-the-road Class 8 trucks, that's every 100,000–150,000 miles for steer axle, 200,000–300,000 miles for drive axles. Heavy hauling, mountain driving, or stop-and-go operation shortens that significantly. We measure pad thickness on every visit free of charge.",
      },
      {
        question: "Do you stock brake pads for my truck?",
        answer: "Almost certainly yes. We stock brake pads in our Phoenix warehouse for Freightliner Cascadia, Peterbilt 579/389/567, Kenworth T680/W900/T880, Volvo VNL/VNR, Mack Anthem/Granite, International LT/HV and Western Star 5700/4900 — covering the vast majority of Class 8 trucks on Arizona roads. If we don't stock it, we can usually source it same-day from local Bendix, Meritor or Haldex distributors.",
      },
      {
        question: "Can you do a DOT brake inspection before my next haul?",
        answer: "Yes — and it's free with any brake repair. Our DOT-certified inspectors do a full 21-point brake inspection including pad/lining thickness, drums, rotors, slack adjuster travel, brake chamber stroke, air system leak-down (1 psi/min max), ABS warning light operation, parking brake hold, and trailer brake balance. You leave with a signed inspection report. Walk-in DOT brake inspections start at $95.",
      },
      {
        question: "Do you offer mobile brake repair in Phoenix?",
        answer: "Yes — 24/7 mobile brake repair across the entire Phoenix Valley. Our mobile brake unit is stocked with the most common semi truck brake pads, S-cams, slack adjusters, brake chambers and air system components. If your truck is stuck because of a brake failure in Phoenix, Mesa, Tempe, Chandler, Glendale, Scottsdale, Gilbert, Peoria, Avondale, Goodyear, Buckeye or Surprise — call (602) 830-3232 and we'll come to you.",
      },
    ],
    relatedServices: [
      { title: "Trailer Brake & Tire Repair", href: "/semi-trailer-brake-and-tire-repair-services-in-phoenix-az" },
      { title: "Semi Truck Diagnostics", href: "/semi-truck-diagnostics-in-phoenix-az" },
      { title: "Emergency Truck Repair", href: "/emergency-truck-repair-phoenix" },
    ],
  },

  "semi-truck-diagnostics-in-phoenix-az": {
    slug: "semi-truck-diagnostics-in-phoenix-az",
    title: "Truck Diagnostics in Phoenix, AZ",
    metaTitle: "Semi Truck Diagnostics Phoenix, AZ | CT Truck & Trailer Shop",
    metaDescription: "Fast, accurate semi truck diagnostics in Phoenix, AZ. Dealer-level software, certified technicians. Engine, electrical, emissions testing. CT Shop.",
    heroHeadline: "Semi Truck Diagnostics",
    heroSubheadline: "Dealer-level diagnostic software for accurate engine, electrical & emissions testing.",
    introHeading: "Advanced Semi Truck Diagnostics in Phoenix, AZ",
    introParagraphs: [
      "CT Shop delivers fast, accurate Semi Truck Diagnostics to keep your rig running at peak performance. Our certified technicians use advanced dealer-level software to identify engine faults, electrical issues, aftertreatment problems, sensor failures, and performance irregularities with precision. Whether your truck is showing an active fault code, losing power, or burning extra fuel, we pinpoint the root cause—not just the symptom. With quick turnaround times, clear repair recommendations, and transparent communication, CT Shop is the go-to destination in Phoenix for reliable Semi Truck Diagnostics near me. Get back on the road faster, safer, and with confidence.",
      "CT Shop provides comprehensive Semi Truck Diagnostics, including detailed engine performance analysis, transmission and drivetrain evaluation, electrical and electronic system testing, emissions control verification, and complete brake system inspections. Our technicians use advanced diagnostic tools to accurately identify faults, improve performance, and keep your truck road-ready and compliant.",
    ],
    sections: [],
    highlights: [
      { title: "Prevent Costly Breakdowns", description: "Professional diagnostics detect early signs of engine, brake, emissions, or electrical failures before they cause road breakdowns or failed inspections. By catching problems early, CT Shop helps drivers avoid expensive emergency repairs & downtime." },
      { title: "Expert Knowledge", description: "Our extensive knowledge of various truck models equips us to diagnose and resolve issues efficiently. With CT Shop, you can trust that your truck is in capable hands." },
      { title: "Optimize Performance", description: "Accurate diagnostics reveal hidden inefficiencies—such as bad sensors, regen issues, fuel system irregularities, or clogged aftertreatment components—that reduce performance. Addressing these issues early helps your truck run more smoothly, burn less fuel, and remain reliable for both long-haul & local operations." },
    ],
    faqs: [
      {
        question: "What does truck diagnostics include at CT Shop?",
        answer: "Our truck diagnostics cover all major systems, including engine, aftertreatment, electrical, transmission, ABS, and emissions components. We use dealer-level software to read fault codes, test components, run regen cycles, and pinpoint the exact cause of performance issues. This helps prevent costly breakdowns and keeps your truck DOT-compliant.",
      },
      {
        question: "How long does a full semi-truck diagnostic usually take?",
        answer: "Most diagnostic tests at CT Shop take 30–60 minutes, depending on the number of active or stored fault codes and the complexity of the issue. For trucks with multiple system alerts, deeper testing may be required. We provide clear timelines upfront so you know exactly what to expect.",
      },
      {
        question: "Can truck diagnostics prevent roadside breakdowns?",
        answer: "Yes. Professional diagnostics can detect early signs of engine failures, turbo issues, DPF/DEF system problems, electrical shorts, and air leaks before they turn into roadside emergencies. Regular diagnostics at CT Shop help improve uptime, fuel efficiency, and long-term truck performance.",
      },
      {
        question: "Do you offer diagnostic reports for fleets?",
        answer: "Absolutely. CT Shop provides detailed diagnostic reports for fleet owners, including fault history, actionable repair recommendations, estimated timelines, and maintenance insights. This helps fleet managers make data-driven decisions and reduce total cost of ownership.",
      },
      {
        question: "Why choose CT Shop for Truck Diagnostics in Phoenix?",
        answer: "CT Shop combines advanced diagnostic software, skilled technicians, and fast turnaround times to deliver accurate results every time. We specialize in Class 8 trucks and all major engine brands—including Cummins, Detroit, CAT, Volvo, and PACCAR—making us one of the most trusted shops for Truck Diagnostics near me in the Phoenix area.",
      },
    ],
    relatedServices: [
      { title: "Semi Truck Engine Repairs", href: "/semi-truck-engine-repairs-in-phoenix-az" },
      { title: "Trailer Electrical Repair", href: "/semi-trailer-electrical-repair-services-phoenix-az" },
      { title: "Emergency Truck Repair", href: "/emergency-truck-repair-phoenix" },
    ],
  },

  "semi-truck-engine-repairs-in-phoenix-az": {
    slug: "semi-truck-engine-repairs-in-phoenix-az",
    title: "Semi Truck Engine Repairs in Phoenix, AZ",
    metaTitle: "Semi Truck Engine Repairs Phoenix, AZ | CT Truck & Trailer Shop",
    metaDescription: "Professional semi truck engine repair services in Phoenix, AZ. Diesel & gas engine diagnostics, repair, and optimization. CT Shop.",
    heroHeadline: "Semi Engine Repair Services",
    heroSubheadline: "Full diesel & gas engine diagnostics, rebuild and performance optimization.",
    introHeading: "Certified Semi Truck Engine Repair in Phoenix, AZ",
    introParagraphs: [
      "We understand the crucial role that engines play in the performance and profitability of your fleet. Whether you're dealing with a minor issue or a major breakdown, our experts are here to diagnose, repair, and optimize your semi-truck engines efficiently and effectively.",
      "Our technicians have extensive experience working with a wide range of semi-truck engines, including diesel engines, gas engines, and more. They stay up to date with the latest advancements in engine technology to provide you with the most accurate diagnoses and efficient repairs.",
      "We believe in using only high-quality, semi truck parts for all engine repairs. This ensures the longevity and reliability of your semi-truck engines. Our semi repair shop is conveniently located near you in Phoenix, AZ right off the major freeways.",
    ],
    sections: [],
    highlights: [
      { title: "Fast Response", description: "We understand the importance of a properly functioning engine in heavy-duty trucks, and our goal is to deliver solutions that meet or exceed customer expectations." },
      { title: "Expert Knowledge", description: "Our extensive knowledge of various truck models and engine systems equips us to diagnose and resolve issues efficiently. With CT Shop, you can trust that your truck's engine is in capable hands." },
      { title: "Comprehensive Solutions", description: "From inspecting and diagnosing issues to replacing major components, our comprehensive approach ensures that your engine operates at peak performance, promoting reliability and minimizing downtime." },
    ],
    faqs: [],
    relatedServices: [
      { title: "Semi Truck Diagnostics", href: "/semi-truck-diagnostics-in-phoenix-az" },
      { title: "Emergency Truck Repair", href: "/emergency-truck-repair-phoenix" },
      { title: "Semi Truck AC Repair", href: "/semi-truck-ac-repair-services" },
    ],
  },

  "semi-trailer-electrical-repair-services-phoenix-az": {
    slug: "semi-trailer-electrical-repair-services-phoenix-az",
    title: "Semi Trailer Electrical Repair Services Phoenix, AZ",
    metaTitle: "Semi Trailer Electrical Repair Phoenix, AZ | CT Truck & Trailer Shop",
    metaDescription: "Professional semi trailer electrical repair services in Phoenix, AZ. Expert diagnostics, wiring repair, lighting systems. CT Shop.",
    heroHeadline: "Trailer Electrical Repair",
    heroSubheadline: "Wiring, lighting, ABS & complete electrical diagnostics for all trailer types.",
    introHeading: "Semi Trailer Electrical Repair & Diagnostics in Phoenix",
    introParagraphs: [
      "Similar to the circuitry and wires running to the correct terminals in your home, your truck's electrical system comprises interconnected components that ensure smooth operation. However, if the battery powering your engine encounters any issues, it can bring your truck to a halt. Therefore, it's essential to pay attention to potential signs of electrical system trouble, such as flickering truck lights, problems starting the truck, uneven or dim lighting, sudden decrease in fuel efficiency, etc.",
      "Don't let electrical issues compromise your truck's performance. Contact CT Truck and Trailer Repair Shop today to schedule an appointment and experience our exceptional semi-trailer electrical repair services.",
    ],
    sections: [],
    highlights: [
      { title: "Fast Response", description: "We understand the importance of a properly functioning electrical system in heavy-duty trucks, and our goal is to deliver solutions that meet or exceed customer expectations." },
      { title: "Expert Knowledge", description: "Our extensive knowledge of various truck models and electrical systems equips us to diagnose and resolve issues efficiently. With CT Shop, you can trust that your truck's electrical system is in capable hands." },
      { title: "Comprehensive Solutions", description: "From inspecting and cleaning connections to replacing major components, our comprehensive approach ensures that your electrical system operates at peak performance, promoting driver safety and minimizing downtime." },
    ],
    faqs: [],
    relatedServices: [
      { title: "Semi Truck Diagnostics", href: "/semi-truck-diagnostics-in-phoenix-az" },
      { title: "Semi Truck Engine Repairs", href: "/semi-truck-engine-repairs-in-phoenix-az" },
      { title: "Trailer Suspension Repair", href: "/semi-trailer-suspension-repair-services-phoenix-az" },
    ],
  },

  "semi-trailer-brake-and-tire-repair-services-in-phoenix-az": {
    slug: "semi-trailer-brake-and-tire-repair-services-in-phoenix-az",
    title: "Semi Trailer Brake and Tire Repair Services in Phoenix, AZ",
    metaTitle: "Semi Trailer Brake & Tire Repair Phoenix, AZ | CT Truck & Trailer Shop",
    metaDescription: "Professional semi trailer brake and tire repair services in Phoenix, AZ. Expert technicians, comprehensive inspections. CT Shop.",
    heroHeadline: "Trailer Brake & Tire Repair Services",
    heroSubheadline: "Comprehensive trailer brake & tire service to keep your fleet road-ready.",
    introHeading: "Semi Trailer Brake & Tire Repair Services in Phoenix, AZ",
    introParagraphs: [],
    sections: [
      {
        heading: "Trailer Brake Repair Services",
        content: [
          "The braking system of a semi trailer plays a crucial role in controlling the vehicle's speed and stopping it safely. Regular brake service ensures optimal functionality and reduces the risk of accidents caused by brake failure. Here are some key maintenance practices for semi trailers from CT Shop: comprehensive inspections of the brake system, including brake pads, rotors, calipers, and brake lines, at recommended intervals. Look for signs of wear, leaks, or damage that might compromise the braking performance.",
        ],
      },
      {
        heading: "Trailer Tire Repair Services",
        content: [
          "Tires are the only point of contact between a semi trailer and the road surface. Regular tire service is essential for maintaining traction, stability, and fuel efficiency. CT Shop stands out as the preferred destination for brake and tire service for semi trailers in Phoenix. Our technicians have extensive knowledge and experience in servicing semi trailers.",
        ],
      },
    ],
    highlights: [
      { title: "Fast Response", description: "We understand the importance of properly functioning brakes and tires in semi trailers, and our goal is to deliver solutions that meet or exceed customer expectations." },
      { title: "Expert Knowledge", description: "Our extensive knowledge of various trailer models and braking systems equips us to diagnose and resolve issues efficiently. With CT Shop, you can trust that your trailer is in capable hands." },
      { title: "Comprehensive Solutions", description: "From brake inspections to complete tire service, our comprehensive approach ensures that your trailer operates safely, promoting compliance and minimizing downtime." },
    ],
    faqs: [],
    relatedServices: [
      { title: "Semi Truck Brake & Tire Repair", href: "/semi-truck-tire-and-brake-repair-services-phoenix-az" },
      { title: "Trailer Suspension Repair", href: "/semi-trailer-suspension-repair-services-phoenix-az" },
      { title: "Full Body Trailer Repair", href: "/full-body-semi-trailer-repair-in-phoenix-az" },
    ],
  },

  "semi-trailer-suspension-repair-services-phoenix-az": {
    slug: "semi-trailer-suspension-repair-services-phoenix-az",
    title: "Semi Trailer Suspension Repair Services Phoenix, AZ",
    metaTitle: "Semi Trailer Suspension Repair Phoenix, AZ | CT Truck & Trailer Shop",
    metaDescription: "Professional semi trailer suspension repair services in Phoenix, AZ. Air suspension, leaf springs, shock absorbers. CT Shop.",
    heroHeadline: "Trailer Suspension Repair",
    heroSubheadline: "Air ride, leaf spring & shock absorber repair for smoother, safer hauling.",
    introHeading: "Semi Trailer Suspension Repair & Service in Phoenix, AZ",
    introParagraphs: [
      "With our comprehensive range of trailer suspension services, we are here to provide you with top-notch solutions that keep your trailer in optimal condition. Our team of skilled technicians specializes in air suspension repairs, offering a wide array of services to address any issues you may encounter.",
      "Our expert technicians are well-equipped to handle various aspects of air suspension repairs, including airbag repairs, airline replacements, shock absorber repairs, leaf spring and hanger repairs, bushing repairs, and much more. Whether your trailer requires a simple fix or a complex repair, we have the knowledge and expertise to get the job done right.",
    ],
    sections: [],
    highlights: [
      { title: "Fast Response", description: "We understand the importance of a properly functioning suspension system in semi trailers, and our goal is to deliver solutions that meet or exceed customer expectations." },
      { title: "Expert Knowledge", description: "Our extensive knowledge of various trailer models and suspension systems equips us to diagnose and resolve issues efficiently. With CT Shop, you can trust that your trailer's suspension is in capable hands." },
      { title: "Comprehensive Solutions", description: "From airbag repairs to complete leaf spring replacement, our comprehensive approach ensures that your suspension system operates at peak performance, promoting safety and minimizing downtime." },
    ],
    faqs: [],
    relatedServices: [
      { title: "Trailer Brake & Tire Repair", href: "/semi-trailer-brake-and-tire-repair-services-in-phoenix-az" },
      { title: "Full Body Trailer Repair", href: "/full-body-semi-trailer-repair-in-phoenix-az" },
      { title: "Trailer Electrical Repair", href: "/semi-trailer-electrical-repair-services-phoenix-az" },
    ],
  },

  "full-body-semi-trailer-repair-in-phoenix-az": {
    slug: "full-body-semi-trailer-repair-in-phoenix-az",
    title: "Full Body Semi Trailer Repair in Phoenix, AZ",
    metaTitle: "Full Body Semi Trailer Repair Phoenix, AZ | CT Truck & Trailer Shop",
    metaDescription: "Professional full body semi trailer repair and restoration in Phoenix, AZ. Welding, panel replacement, paint, refinishing. CT Shop.",
    heroHeadline: "Trailer Body Repair & Restoration",
    heroSubheadline: "Welding, panel replacement, paint & full structural restoration services.",
    introHeading: "Full Body Semi Trailer Repair & Restoration in Phoenix, AZ",
    introParagraphs: [
      "Restore your semi-trailer's strength and appearance with professional trailer body repair and restoration services. From aluminum and steel welding and patching to full panel replacements and frame straightening, our technicians handle every detail with precision. We specialize in fixing sidewalls, doors and floors to keep your trailer safe, durable and road-ready for long hauls.",
      "Bring your equipment back to life with expert trailer paint, polishing, and refinishing services. Our restoration team removes rust, repairs damage, and applies high-quality coatings that protect against corrosion and weathering. Whether you need minor touch-ups or complete semi-trailer body restoration, we deliver lasting results that enhance your trailer's look and performance. Get a quote today!",
    ],
    sections: [],
    highlights: [
      { title: "Fast Response", description: "We understand the importance of maintaining your trailer's structural integrity, and our goal is to deliver solutions that meet or exceed customer expectations." },
      { title: "Expert Knowledge", description: "Our extensive knowledge of various trailer models and body repair techniques equips us to handle any job efficiently. With CT Shop, you can trust that your trailer is in capable hands." },
      { title: "Comprehensive Solutions", description: "From welding and patching to complete body restoration, our comprehensive approach ensures that your trailer looks great and performs reliably for years to come." },
    ],
    faqs: [],
    relatedServices: [
      { title: "Trailer Suspension Repair", href: "/semi-trailer-suspension-repair-services-phoenix-az" },
      { title: "Trailer Brake & Tire Repair", href: "/semi-trailer-brake-and-tire-repair-services-in-phoenix-az" },
      { title: "Trailer Electrical Repair", href: "/semi-trailer-electrical-repair-services-phoenix-az" },
    ],
  },
  "commercial-fleet-repair-phoenix-az": {
    slug: "commercial-fleet-repair-phoenix-az",
    title: "Commercial Fleet Repair Phoenix, AZ",
    metaTitle: "Commercial Fleet Repair Phoenix, AZ | CT Truck & Trailer Shop",
    metaDescription: "Commercial fleet repair in Phoenix, AZ. Preventive maintenance, scheduled service, and rapid turnarounds that keep your trucks on the road and on schedule.",
    heroHeadline: "Commercial Fleet Repair Phoenix, AZ",
    heroSubheadline: "Preventive maintenance and fast turnarounds that keep your fleet rolling and your downtime down.",
    introHeading: "Keep Your Fleet Moving with CT Truck & Trailer Shop",
    introParagraphs: [
      "When you run a fleet, every hour off the road costs money. CT Truck & Trailer Shop provides full-service commercial fleet repair in Phoenix, AZ — built around scheduled maintenance, fast diagnostics, and quick parts turnaround so your trucks stay productive. From single owner-operators to multi-truck operations, we tailor service plans to your routes, equipment mix, and budget.",
      "Our shop and mobile crews handle everything from routine PMs and DOT-ready inspections to engine, brake, electrical, and trailer repair under one roof. You get one trusted partner, transparent pricing, and a team that understands the real cost of downtime in Phoenix's freight corridors.",
    ],
    sections: [
      {
        heading: "Full-Service Fleet Maintenance & Repair",
        content: [
          "We build maintenance schedules around how you actually run — local delivery, regional haul, or long-haul OTR. That means consistent PMs, oil and filter service, fluid analysis, and tire rotations that catch wear before it becomes a roadside breakdown.",
          "When something does need repair, our certified diesel technicians work fast with quality parts and clear estimates. You'll know what's needed, why, and what it costs before any wrench turns.",
        ],
        listItems: [
          "Scheduled preventive maintenance (PM A/B/C) programs",
          "DOT-ready inspections and compliance documentation",
          "Engine, transmission, and drivetrain diagnostics",
          "Brake, suspension, and steering service",
          "Electrical, lighting, and battery system repair",
          "Tire service, alignment, and tracking",
          "Fleet reporting and service history records",
        ],
      },
      {
        heading: "Why Phoenix Fleets Choose CT Shop",
        content: [
          "We've earned our reputation by treating every truck like it belongs to our own fleet. Honest assessments, fair pricing, and turnarounds that respect your schedule. Whether you bring trucks to our shop on the corridor or need us to come to your yard, we're set up to handle the job.",
        ],
      },
    ],
    highlights: [
      { title: "Reduced Downtime", description: "Scheduled PMs and rapid diagnostics catch issues before they take a truck off the road." },
      { title: "Fleet Pricing", description: "Volume-friendly rates and transparent estimates so you can budget with confidence." },
      { title: "One-Stop Shop", description: "Engine, brakes, electrical, trailer, and DOT — all handled by one trusted team." },
    ],
    faqs: [
      {
        question: "Do you offer fleet maintenance contracts?",
        answer: "Yes. We build custom PM schedules and service agreements based on your fleet size, equipment, and routes. Fleet customers get priority scheduling, consistent technicians, and detailed service records for every truck.",
      },
      {
        question: "Can you service trucks at our yard?",
        answer: "Absolutely. Our mobile units come to your yard, terminal, or jobsite for PMs, repairs, and DOT inspections — minimizing downtime by skipping the drive-in. Coverage spans the Phoenix metro and major freight corridors.",
      },
      {
        question: "What kinds of trucks and trailers do you work on?",
        answer: "We service all major Class 6–8 truck makes — Freightliner, Peterbilt, Kenworth, Volvo, Mack, International — plus dry van, reefer, flatbed, and tanker trailers. If it's a commercial vehicle, we can keep it running.",
      },
      {
        question: "Do you handle warranty and insurance work?",
        answer: "Yes. We work with fleet warranty programs and insurance carriers and provide the documentation, photos, and detailed invoices needed for claims and audits.",
      },
    ],
    relatedServices: [
      { title: "DOT Inspections", href: "/dot-inspections-phoenix-az" },
      { title: "Semi Truck Engine Repairs", href: "/semi-truck-engine-repairs-in-phoenix-az" },
      { title: "Emergency Truck Repair", href: "/emergency-truck-repair-phoenix" },
    ],
  },

  "dot-inspections-phoenix-az": {
    slug: "dot-inspections-phoenix-az",
    title: "DOT Inspections Phoenix, AZ",
    metaTitle: "DOT Inspections Phoenix, AZ | CT Truck & Trailer Shop",
    metaDescription: "Comprehensive DOT inspections in Phoenix, AZ. Annual federal inspections, pre-trip checks, and compliance documentation to keep your fleet road-legal.",
    heroHeadline: "DOT Inspections Phoenix, AZ",
    heroSubheadline: "Federal annual inspections and full compliance checks that keep your fleet road-legal and out of trouble at the scales.",
    introHeading: "Stay Compliant with Certified DOT Inspections",
    introParagraphs: [
      "DOT compliance isn't optional, and a bad inspection can park your truck and rack up fines fast. CT Truck & Trailer Shop performs thorough Federal Annual Inspections (FMCSA 49 CFR Part 396) for trucks and trailers in Phoenix, AZ — checking every required system, documenting the results, and issuing your inspection sticker on the spot when you pass.",
      "Our certified inspectors don't just check boxes. We catch the small issues that lead to roadside violations — worn brake linings, marginal tires, electrical faults, leaking seals — and give you clear, honest recommendations on what to fix now and what can wait.",
    ],
    sections: [
      {
        heading: "What's Included in a DOT Annual Inspection",
        content: [
          "Our Federal Annual Inspection covers every system required by FMCSA Part 396, Appendix G. We inspect, document, and provide you with a signed inspection report and decal for each unit that passes.",
        ],
        listItems: [
          "Brake system — linings, drums, air lines, slack adjusters",
          "Coupling devices — fifth wheel, pintle hooks, kingpins",
          "Exhaust system and fuel system integrity",
          "Lighting — headlights, marker lights, turn signals, brake lights",
          "Steering, suspension, frame, and tires/wheels",
          "Windshield, wipers, mirrors, and horn",
          "Emergency equipment and load securement points",
        ],
      },
      {
        heading: "Pre-Trip, Re-Inspections & CVSA Prep",
        content: [
          "Beyond the annual inspection, we offer pre-trip safety checks, re-inspections after repair, and CVSA roadside-style inspections so you can find and fix issues before a DOT officer does. Fleet operators love this for driver training and pre-audit confidence.",
        ],
      },
    ],
    highlights: [
      { title: "Certified Inspectors", description: "FMCSA-qualified technicians who know exactly what officers look for at the scales." },
      { title: "Same-Day Service", description: "Most inspections completed same day with sticker issued on the spot upon passing." },
      { title: "Honest Reports", description: "Clear documentation of what passed, what failed, and what we recommend you address." },
    ],
    faqs: [
      {
        question: "How long does a DOT annual inspection take?",
        answer: "Most truck or trailer inspections take 60–90 minutes if everything is in good shape. If we find items that need repair, we'll quote them upfront and let you decide whether to fix them now or come back.",
      },
      {
        question: "Can you do the inspection at our yard?",
        answer: "Yes. Our mobile units are equipped to perform full annual inspections at your yard or terminal, which is especially valuable for fleets that want to keep multiple trucks in service while we work through them on-site.",
      },
      {
        question: "What happens if my truck fails the inspection?",
        answer: "We'll give you a written list of every failed item and a clear repair estimate. You can authorize the repairs with us and we'll re-inspect at no extra inspection charge, or take the truck elsewhere — your choice.",
      },
      {
        question: "Do you provide inspection records for our DOT audit?",
        answer: "Absolutely. Every inspection is documented with a signed report you can keep on file or hand directly to an auditor. For fleet customers, we maintain digital records of every inspection across your trucks.",
      },
    ],
    relatedServices: [
      { title: "Commercial Fleet Repair", href: "/commercial-fleet-repair-phoenix-az" },
      { title: "Semi Truck Tire & Brake Repair", href: "/semi-truck-tire-and-brake-repair-services-phoenix-az" },
      { title: "Semi Truck Diagnostics", href: "/semi-truck-diagnostics-in-phoenix-az" },
    ],
  },

  "commercial-truck-repair-phoenix-az": {
    slug: "commercial-truck-repair-phoenix-az",
    title: "Commercial Truck Repair in Phoenix, AZ",
    metaTitle: "Commercial Truck Repair Phoenix, AZ | CT Truck & Trailer Shop",
    metaDescription: "Commercial truck repair in Phoenix, AZ. Class 6–8 service, fleet contracts, DOT inspections, 24/7 emergency response, parts in stock. Call (602) 830-3232.",
    heroHeadline: "Commercial Truck Repair in Phoenix, AZ",
    heroSubheadline: "Class 6–8 commercial truck service for fleets and owner-operators. Engine, transmission, brakes, electrical, DOT inspections. 24/7 emergency response across the Phoenix Valley.",
    introHeading: "Phoenix's Full-Service Commercial Truck Repair Shop",
    introParagraphs: [
      "CT Truck & Trailer Shop is Phoenix's go-to commercial truck repair shop for fleets and independent operators running Class 6 through Class 8 trucks. From routine PM service to engine overhauls, from a quick brake-pad swap to a complete DOT annual inspection, we handle the full lifecycle of commercial vehicle maintenance — in one shop, with documented work and warranties on every repair.",
      "We service every major OEM — Freightliner, Peterbilt, Kenworth, Volvo, Mack, International, Western Star, Hino, Isuzu — and every major engine — Cummins X15/ISX, Detroit DD15/DD13, PACCAR MX, Volvo D13, Mack MP, CAT C15. Our techs are ASE and OEM-trained, and our diagnostic bay is equipped with dealer-level scan tools (DDDL, Insite, ServiceMaxx, Premium Tech Tool) — so we don't just clear codes, we fix the root cause.",
      "Need commercial truck repair now? Call (602) 830-3232 — we take walk-ins, we offer 24/7 emergency response, and we negotiate fleet contracts.",
    ],
    sections: [
      {
        heading: "Commercial Truck Services We Provide",
        content: [
          "Our Phoenix shop is a one-stop commercial truck repair operation. We handle every system on Class 6–8 trucks:",
        ],
        listItems: [
          "Engine diagnostics, repair, overhaul & rebuild (Cummins, Detroit, PACCAR, Volvo, Mack, CAT)",
          "Transmission service & rebuild (Eaton Fuller, Allison, ZF, Volvo I-Shift, Detroit DT12)",
          "Brake repair, brake pad replacement, S-cam & slack adjuster service",
          "Tire mounting, balancing, alignment & rotation",
          "Electrical, wiring harness, alternator, starter & battery service",
          "Cooling system, radiator, water pump, hose & coolant service",
          "DPF/DEF aftertreatment cleaning, regen, sensor & module replacement",
          "Air system, brake chamber, governor, air dryer & valve service",
          "Suspension, steering, kingpin, U-bolt & airbag service",
          "DOT annual inspections & out-of-service repairs",
          "Preventive maintenance contracts (every 25k / 50k / 100k miles)",
          "24/7 emergency roadside response across the Phoenix Valley",
        ],
      },
      {
        heading: "Fleet Maintenance Contracts",
        content: [
          "Running a fleet? We build custom preventive maintenance contracts that lock in your service intervals, parts pricing and labor rates — and we'll schedule your PM cycles so you never lose a truck to a missed service window. Fleet customers also get priority scheduling, free pickup-and-delivery within the Phoenix Valley, and consolidated monthly invoicing with detailed per-truck reporting.",
          "We're already trusted by regional fleets running everything from food distribution to construction haulers to long-haul OTR carriers. Bring us your fleet manager and we'll quote a contract that beats your current shop on both cost and turnaround.",
        ],
      },
      {
        heading: "Emergency Commercial Truck Repair — 24/7",
        content: [
          "Broken down? Our 24/7 mobile commercial truck repair team rolls heavy. Fully stocked service trucks with welder, generator, air compressor, jump pack, the most common parts (brake pads, chambers, sensors, hoses, belts, filters, batteries) and a 5-ton portable lift. We work across Phoenix, Glendale, Mesa, Tempe, Chandler, Scottsdale, Gilbert, Peoria, Avondale, Goodyear, Buckeye, Surprise and along the I-10, I-17, US-60, Loop 101 and Loop 202 corridors.",
          "Most roadside breakdowns we resolve on-site without towing. When a tow is required, we coordinate with our heavy-duty wrecker partners and bring the truck straight to our shop.",
        ],
      },
    ],
    highlights: [
      { title: "Class 6–8 Specialists", description: "Every major OEM, every major engine. Dealer-level diagnostic tools, ASE and OEM-trained techs, and a parts warehouse stocked for the trucks running Arizona's roads." },
      { title: "Fleet Contracts", description: "Custom PM contracts, priority scheduling, free pickup-and-delivery, consolidated invoicing, per-truck reporting. We make running a fleet less painful." },
      { title: "24/7 Emergency Response", description: "Stocked mobile units across the entire Phoenix Valley. Most roadside repairs done on-site. When you need us, we're already on the way." },
    ],
    faqs: [
      {
        question: "What classes of commercial trucks do you service?",
        answer: "We service Class 6 through Class 8 commercial trucks — that covers most heavy-duty straight trucks, regional and OTR tractors, dump trucks, vocational trucks, refuse trucks, fuel trucks and any GVWR over 19,500 lbs. We don't currently service Class 1–5 (light/medium) — for those you'll want a standard automotive shop.",
        },
      {
        question: "Do you offer fleet maintenance contracts?",
        answer: "Yes. We build custom preventive maintenance contracts for fleets of any size — 3 trucks or 300. Contracts lock in PM intervals, parts pricing, labor rates and turnaround SLAs. Fleet customers also get priority scheduling, free pickup-and-delivery, consolidated monthly invoicing and detailed per-truck reporting. Talk to us about a fleet quote — most fleets save 15–25% versus their current shop.",
      },
      {
        question: "Can you handle emergency commercial truck repair after hours?",
        answer: "Yes — 24/7. Our mobile commercial truck repair team works nights, weekends and holidays. Stocked service trucks cover Phoenix, Mesa, Tempe, Chandler, Glendale, Scottsdale, Gilbert, Peoria, Avondale, Goodyear, Buckeye and Surprise, plus the major freeway corridors (I-10, I-17, US-60, Loop 101, Loop 202). Call (602) 830-3232 anytime.",
      },
      {
        question: "What engines and transmissions do you work on?",
        answer: "Every major commercial truck engine — Cummins (X15, ISX, ISL, ISB), Detroit Diesel (DD15, DD13, DD16, Series 60), PACCAR (MX-11, MX-13), Volvo (D11, D13, D16), Mack (MP7, MP8, MP10), CAT (C13, C15) — and every major transmission — Eaton Fuller (manual + automated), Allison (automatic), ZF, Volvo I-Shift, Detroit DT12, Mack mDRIVE. We have the dealer-level diagnostic software for all of them.",
      },
      {
        question: "Do you do DOT annual inspections?",
        answer: "Yes. We're a DOT-certified inspection facility. Most DOT annual inspections take 60–90 minutes if the truck passes everything. If we find out-of-service items, we'll quote the repairs upfront and re-inspect at no extra inspection charge once the repairs are complete. We can also do annual inspections at your yard with our mobile unit.",
      },
      {
        question: "How quickly can you turn around a commercial truck repair?",
        answer: "It depends on the repair, parts availability and our current shop load. Routine PM, brake pads, tire service, oil changes — usually same-day. Engine diagnostics & most electrical work — 1–2 days. Major repairs (transmission rebuild, engine overhaul, frame work) — 3–10 days with a firm written estimate. Fleet customers get priority scheduling. We'll give you a firm written ETA before we start.",
      },
    ],
    relatedServices: [
      { title: "Commercial Fleet Repair", href: "/commercial-fleet-repair-phoenix-az" },
      { title: "Semi Truck Repair Shop", href: "/semi-truck-repair-shop-phoenix-az" },
      { title: "Emergency Truck Repair", href: "/emergency-truck-repair-phoenix" },
    ],
  },

  "semi-truck-repair-shop-phoenix-az": {
    slug: "semi-truck-repair-shop-phoenix-az",
    title: "Semi Truck Repair Shop in Phoenix, AZ",
    metaTitle: "Semi Truck Repair Shop Phoenix, AZ | CT Truck & Trailer Shop",
    metaDescription: "Trusted semi truck repair shop in Phoenix, AZ. Drive-in bays, walk-ins welcome, ASE/OEM-trained techs, Cummins/Detroit/PACCAR specialists. Call (602) 830-3232.",
    heroHeadline: "Phoenix Semi Truck Repair Shop — Walk-Ins Welcome",
    heroSubheadline: "Drive in, get diagnosed, get fixed. Class 8 specialists, dealer-level diagnostics, parts in stock, warranty on every repair.",
    introHeading: "The Semi Truck Repair Shop Drivers Trust in Phoenix",
    introParagraphs: [
      "When your semi needs work, you need a shop that knows Class 8 trucks — not a generic garage. CT Truck & Trailer Shop is Phoenix's dedicated semi truck repair shop, built specifically around the engines, transmissions, brake systems and aftertreatment systems that run modern over-the-road tractors.",
      "Our shop bays are sized for 53-foot tractor-trailers, our lifts handle 100k+ GVW, our techs are ASE and OEM-certified, and our parts warehouse is stocked with what semi trucks actually break — brake pads, S-cams, slack adjusters, ABS sensors, DEF doser valves, NOx sensors, DPF sensors, turbo actuators, EGR coolers, water pumps, alternators, starters, batteries, air dryers, brake chambers, and the dozens of other parts that strand a semi on the side of the road.",
      "Need a semi truck repair shop you can drive into right now? We're at our Phoenix location during shop hours and walk-ins are welcome. Call (602) 830-3232 to confirm wait time before you head over.",
    ],
    sections: [
      {
        heading: "What We Fix at Our Phoenix Semi Truck Shop",
        content: [
          "Our shop handles the full spectrum of semi truck repair — daily PM, major overhauls and everything in between:",
        ],
        listItems: [
          "Engine repair & overhaul — Cummins X15/ISX, Detroit DD15/DD13, PACCAR MX, Volvo D13, Mack MP",
          "Transmission service — Eaton Fuller, Detroit DT12, Volvo I-Shift, Allison, ZF",
          "Brake pads, drums, rotors, S-cams, slack adjusters & full air-system service",
          "Tire service, mounting, balancing, rotation, alignment",
          "DPF & DEF aftertreatment — regen, sensor replacement, doser cleaning, NOx sensors",
          "Electrical — alternators, starters, batteries, wiring harness, lighting",
          "Suspension, kingpins, U-bolts, airbags, steering",
          "Cooling system, radiators, water pumps, EGR coolers",
          "DOT inspections & out-of-service repairs",
          "Diagnostics with dealer-level scan tools (DDDL, Insite, ServiceMaxx, PTT)",
        ],
      },
      {
        heading: "Why Drivers Choose Our Phoenix Semi Truck Shop",
        content: [
          "We're not the cheapest shop in Phoenix, and we don't try to be. What we are is the shop that fixes it right the first time, documents the work, warranties parts and labor, and tells you the truth about what your truck needs.",
          "Owner-operators send their own trucks here. Fleet managers trust us with their primary maintenance contracts. Other shops refer their tough diagnostic cases to us. That's the bar we maintain.",
        ],
      },
      {
        heading: "Shop Amenities & Logistics",
        content: [
          "We respect that you've got a load to deliver. Our shop is set up so you don't lose a day:",
        ],
        listItems: [
          "Drive-in bays sized for 53-ft tractor-trailers",
          "Walk-ins welcome — call ahead to confirm wait time",
          "Driver lounge with coffee, Wi-Fi & restrooms",
          "Yard parking for overnight repairs",
          "Free pickup-and-delivery for fleet customers",
          "After-hours drop-off available",
          "Written estimates before work begins",
          "12-month parts warranty, 90-day labor warranty",
        ],
      },
    ],
    highlights: [
      { title: "Class 8 Specialists", description: "Every major OEM, every major engine, every major transmission. This is all we do, every day. The diagnostic tools and the parts inventory reflect it." },
      { title: "Drive-In Bays", description: "53-ft tractor-trailer-sized bays, 100k+ GVW lifts, walk-ins welcome. Drive in, get diagnosed, get a written estimate, get fixed." },
      { title: "Real Warranty", description: "12 months on parts, 90 days on labor. We document the work, we stand behind it, and we don't disappear if something goes wrong." },
    ],
    faqs: [
      {
        question: "Where is your semi truck repair shop located in Phoenix?",
        answer: "Our Phoenix semi truck repair shop is located in the heart of the Phoenix Valley with easy access to I-10, I-17, US-60 and the Loop 101/202 freeways. Call (602) 830-3232 for current address, shop hours and walk-in availability.",
      },
      {
        question: "Do you take walk-ins or do I need an appointment?",
        answer: "Walk-ins are welcome at our semi truck repair shop. We recommend a quick call ahead — (602) 830-3232 — to confirm current wait time. Most diagnostic work starts within 30–60 minutes of arrival. Appointments are available for major scheduled repairs (engine overhaul, transmission rebuild, full PM) so we can pre-order parts.",
      },
      {
        question: "What hours is your semi truck shop open?",
        answer: "Our drive-in shop is open standard business hours — call (602) 830-3232 for current shop hours. Emergency mobile semi truck repair is available 24/7, including nights, weekends and holidays. After-hours drop-off is available at our shop yard.",
      },
      {
        question: "Can I drop my truck off overnight or for multiple days?",
        answer: "Yes. We have secure yard parking for overnight repairs and multi-day jobs (engine overhauls, transmission rebuilds). Driver amenities include lounge, coffee, Wi-Fi and restrooms. For longer repairs we can arrange a hotel shuttle for out-of-town drivers.",
      },
      {
        question: "Do you offer warranty on semi truck repairs?",
        answer: "Yes — 12 months on parts and 90 days on labor for every repair. If something fails within the warranty period that's related to our work, we fix it at no charge. We document every repair so warranty claims are simple and quick.",
      },
      {
        question: "What semi truck brands do you specialize in?",
        answer: "We service every Class 8 brand on US roads — Freightliner (Cascadia, Coronado, M2), Peterbilt (579, 389, 567, 365), Kenworth (T680, W900, T880, T800), Volvo (VNL, VNR, VAH), Mack (Anthem, Granite, Pinnacle), International (LT, HV, HX, LoneStar), Western Star (5700, 4900, 49X) and Sterling. We're not brand-loyal — we're trained on all of them.",
      },
    ],
    relatedServices: [
      { title: "Commercial Truck Repair", href: "/commercial-truck-repair-phoenix-az" },
      { title: "Semi Truck Diagnostics", href: "/semi-truck-diagnostics-in-phoenix-az" },
      { title: "Semi Truck Engine Repairs", href: "/semi-truck-engine-repairs-in-phoenix-az" },
    ],
  },
};

export const getAllServicePages = () => Object.values(servicePages);
export const getServicePage = (slug: string) => servicePages[slug];
