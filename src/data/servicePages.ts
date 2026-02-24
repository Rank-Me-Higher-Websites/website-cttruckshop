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
    metaDescription: "24/7 Emergency truck repair in Phoenix, AZ. Fast response, certified mechanics, roadside assistance. CT Truck & Trailer Shop gets you back on the road quickly.",
    heroHeadline: "#1 Emergency Truck Repair Phoenix, AZ",
    introHeading: "Fast 24/7 Emergency Truck Repair in Phoenix, AZ",
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
      { title: "24/7 Availability", description: "Round-the-clock emergency service for any breakdown situation." },
      { title: "Fast Response", description: "Quick dispatch with fully equipped service trucks." },
      { title: "Certified Mechanics", description: "Experienced technicians ready for any roadside issue." },
    ],
    faqs: [
      {
        question: "Do you offer Emergency Truck Repair and 24/7 roadside help?",
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
    metaTitle: "24/7 Truck Breakdown Service Phoenix | CT Truck & Trailer Shop",
    metaDescription: "24/7 truck breakdown service and repair in Phoenix, AZ. Fast mobile response, certified technicians, roadside assistance. CT Truck and Trailer Shop.",
    heroHeadline: "24/7 Truck Breakdown Service and Repair",
    introHeading: "Reliable Truck Breakdown Service & Roadside Repair in Phoenix",
    introParagraphs: [
      "When your rig breaks down on the road, every minute counts. That's why CT Truck and Trailer Shop provides 24/7 truck breakdown service and repair throughout Phoenix and nearby areas. Our certified mobile technicians are always ready to respond — day or night — to get you back on the road fast. Whether it's an engine issue, electrical failure, tire blowout, or brake problem, we bring the tools and expertise directly to you.",
      "From emergency roadside repairs to full-service shop diagnostics, we ensure your downtime stays minimal and your truck stays reliable. When you need 24/7 truck repair you can trust, call CT Truck and Trailer Shop — where help is always just a phone call away.",
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
          "24/7 mobile repair & roadside assistance",
        ],
      },
    ],
    highlights: [
      { title: "24/7 Service", description: "Day or night, our mobile technicians are always ready to respond." },
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
        answer: "CT Shop stands out as the Best Mobile Truck Repair in Phoenix because of our certified technicians, 24/7 availability, and commitment to fast, high-quality service. We bring the shop to you, saving time, towing costs, and helping your truck stay road-ready across Arizona highways.",
      },
      {
        question: "What should I do if I need emergency truck repair in Phoenix?",
        answer: "If you experience a breakdown or mechanical issue, call CT Truck and Trailer Shop for Emergency Truck Repair in Phoenix. Our mobile service team is available 24/7 to provide roadside assistance, including diagnostics, tire replacement, air leak repair, and more—getting you back on the road quickly and safely.",
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
    introHeading: "Expert Semi Truck AC Repair & Service in Phoenix, AZ",
    introParagraphs: [
      "Maintaining a well-functioning air conditioning system is essential for heavy-duty trucks operating in hot and demanding conditions. To ensure your comfort and confidence in the reliability of your semi truck's AC system throughout your job, it is crucial to maintain its maximum efficiency. It's equally important to have a skilled team of mechanics available in case any issues arise. At CT Shop, our experienced mechanics are capable of addressing any concerns you may have for your semi truck's AC system.",
      "Neglecting to have your AC unit inspected when you notice any of the check indicators can exacerbate the problem and eventually lead to a complete AC failure. In addition to offering AC repairs, our mechanics can conduct a comprehensive evaluation of your system to ensure seamless operation.",
    ],
    sections: [],
    highlights: [
      { title: "24/7 Service", description: "We understand the importance of a properly functioning AC system in heavy-duty trucks, and our goal is to deliver solutions that meet or exceed customer expectations." },
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
    title: "Semi Truck Tire and Brake Repair Services Phoenix, AZ",
    metaTitle: "Semi Truck Tire & Brake Repair Phoenix, AZ | CT Truck & Trailer Shop",
    metaDescription: "Professional semi truck tire and brake repair services in Phoenix, AZ. Expert technicians, safety-first approach. CT Shop.",
    heroHeadline: "Brake and Tire Repairs",
    introHeading: "Professional Semi Truck Tire & Brake Repair Services in Phoenix",
    introParagraphs: [
      "Brakes and tires are crucial components of any vehicle, and their proper maintenance is even more critical when it comes to semi trucks. Especially, with their heavy loads and long-distance trips, semi trucks put significant strain on braking systems and tires. Regular brake and tire service is essential to ensure optimal performance, maximize safety, and extend the lifespan of these vital components.",
      "Here, at CT Shop our professional technicians will provide you with the high-level semi truck brake and tire services to reduce the risk of brake failure which can have catastrophic consequences.",
    ],
    sections: [],
    highlights: [
      { title: "24/7 Service", description: "We understand the importance of properly functioning brakes and tires in heavy-duty trucks, and our goal is to deliver solutions that meet or exceed customer expectations." },
      { title: "Expert Knowledge", description: "Our extensive knowledge of various truck models and braking systems equips us to diagnose and resolve issues efficiently. With CT Shop, you can trust that your truck is in capable hands." },
      { title: "Comprehensive Solutions", description: "From brake pad replacement to complete tire service, our comprehensive approach ensures that your truck operates at peak performance, promoting safety and minimizing downtime." },
    ],
    faqs: [],
    relatedServices: [
      { title: "Trailer Brake & Tire Repair", href: "/semi-trailer-brake-and-tire-repair-services-in-phoenix-az" },
      { title: "Semi Truck Diagnostics", href: "/semi-truck-diagnostics-in-phoenix-az" },
      { title: "Trailer Suspension Repair", href: "/semi-trailer-suspension-repair-services-phoenix-az" },
    ],
  },

  "semi-truck-diagnostics-in-phoenix-az": {
    slug: "semi-truck-diagnostics-in-phoenix-az",
    title: "Truck Diagnostics in Phoenix, AZ",
    metaTitle: "Semi Truck Diagnostics Phoenix, AZ | CT Truck & Trailer Shop",
    metaDescription: "Fast, accurate semi truck diagnostics in Phoenix, AZ. Dealer-level software, certified technicians. Engine, electrical, emissions testing. CT Shop.",
    heroHeadline: "Semi Truck Diagnostics",
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
    introParagraphs: [
      "We understand the crucial role that engines play in the performance and profitability of your fleet. Whether you're dealing with a minor issue or a major breakdown, our experts are here to diagnose, repair, and optimize your semi-truck engines efficiently and effectively.",
      "Our technicians have extensive experience working with a wide range of semi-truck engines, including diesel engines, gas engines, and more. They stay up to date with the latest advancements in engine technology to provide you with the most accurate diagnoses and efficient repairs.",
      "We believe in using only high-quality, semi truck parts for all engine repairs. This ensures the longevity and reliability of your semi-truck engines. Our semi repair shop is conveniently located near you in Phoenix, AZ right off the major freeways.",
    ],
    sections: [],
    highlights: [
      { title: "24/7 Service", description: "We understand the importance of a properly functioning engine in heavy-duty trucks, and our goal is to deliver solutions that meet or exceed customer expectations." },
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
    introParagraphs: [
      "Similar to the circuitry and wires running to the correct terminals in your home, your truck's electrical system comprises interconnected components that ensure smooth operation. However, if the battery powering your engine encounters any issues, it can bring your truck to a halt. Therefore, it's essential to pay attention to potential signs of electrical system trouble, such as flickering truck lights, problems starting the truck, uneven or dim lighting, sudden decrease in fuel efficiency, etc.",
      "Don't let electrical issues compromise your truck's performance. Contact CT Truck and Trailer Repair Shop today to schedule an appointment and experience our exceptional semi-trailer electrical repair services.",
    ],
    sections: [],
    highlights: [
      { title: "24/7 Service", description: "We understand the importance of a properly functioning electrical system in heavy-duty trucks, and our goal is to deliver solutions that meet or exceed customer expectations." },
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
      { title: "24/7 Service", description: "We understand the importance of properly functioning brakes and tires in semi trailers, and our goal is to deliver solutions that meet or exceed customer expectations." },
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
    introParagraphs: [
      "With our comprehensive range of trailer suspension services, we are here to provide you with top-notch solutions that keep your trailer in optimal condition. Our team of skilled technicians specializes in air suspension repairs, offering a wide array of services to address any issues you may encounter.",
      "Our expert technicians are well-equipped to handle various aspects of air suspension repairs, including airbag repairs, airline replacements, shock absorber repairs, leaf spring and hanger repairs, bushing repairs, and much more. Whether your trailer requires a simple fix or a complex repair, we have the knowledge and expertise to get the job done right.",
    ],
    sections: [],
    highlights: [
      { title: "24/7 Service", description: "We understand the importance of a properly functioning suspension system in semi trailers, and our goal is to deliver solutions that meet or exceed customer expectations." },
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
    introParagraphs: [
      "Restore your semi-trailer's strength and appearance with professional trailer body repair and restoration services. From aluminum and steel welding and patching to full panel replacements and frame straightening, our technicians handle every detail with precision. We specialize in fixing sidewalls, doors and floors to keep your trailer safe, durable and road-ready for long hauls.",
      "Bring your equipment back to life with expert trailer paint, polishing, and refinishing services. Our restoration team removes rust, repairs damage, and applies high-quality coatings that protect against corrosion and weathering. Whether you need minor touch-ups or complete semi-trailer body restoration, we deliver lasting results that enhance your trailer's look and performance. Get a quote today!",
    ],
    sections: [],
    highlights: [
      { title: "24/7 Service", description: "We understand the importance of maintaining your trailer's structural integrity, and our goal is to deliver solutions that meet or exceed customer expectations." },
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
};

export const getAllServicePages = () => Object.values(servicePages);
export const getServicePage = (slug: string) => servicePages[slug];
