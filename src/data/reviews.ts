export type CustomerReview = {
  id: string;
  name: string;
  rating: 4 | 5;
  date: string;
  text: string;
  initialColor?: string;
};

// Source: Google Business Profile for CT Truck and Trailer Shop.
// Last synced 2026-07-28 — aggregate 4.5 / 67 reviews.
export const reviewsAggregate = {
  rating: 4.5,
  count: 67,
  source: "Google",
};

export const customerReviews: CustomerReview[] = [
  {
    id: "aziz-ilhamovich",
    name: "Aziz Ilhamovich",
    rating: 5,
    date: "1 week ago",
    text: "Very cool mechanic!!! Daniel, thank you so much! 👍",
    initialColor: "#1a73e8",
  },
  {
    id: "decarles-zachery",
    name: "Decarles Zachery",
    rating: 5,
    date: "1 month ago",
    text: "After months and multiple repair shops I broke down in Flagstaff, Arizona. My truck was towed to Phoenix to CT Truck & Trailer where they found the problem very quickly. It took less than 24 hrs for this shop to repair it. Thank you CT Truck & Trailer Repair Shop. — Barlas Transportation",
    initialColor: "#34a853",
  },
  {
    id: "parker-hardison",
    name: "Parker Hardison",
    rating: 5,
    date: "1 month ago",
    text: "Shoutout to Daniel! Great service and fair pricing. They fixed my trailer brakes in just 2h and got me back on the road.",
    initialColor: "#ea4335",
  },
  {
    id: "mark-s",
    name: "Mark",
    rating: 5,
    date: "2 months ago",
    text: "Great shop! Shoutout to Cesar and Daniel for getting my truck back on the road in just 3 hours! Honest and professional team.",
    initialColor: "#fbbc04",
  },
  {
    id: "pld-maintenance",
    name: "PLD Maintenance",
    rating: 5,
    date: "4 months ago",
    text: "We been coming to this shop for the past 2 years. Daniel is the guy!",
    initialColor: "#9333ea",
  },
  {
    id: "ackeem-doyle",
    name: "Ackeem Doyle",
    rating: 5,
    date: "5 months ago",
    text: "Quick and easy to work with.",
    initialColor: "#0891b2",
  },
  {
    id: "david-ellis-sr",
    name: "David Ellis Sr.",
    rating: 5,
    date: "5 months ago",
    text: "Very good service, made me feel comfortable and was very attentive to my problems at need.",
    initialColor: "#34a853",
  },
  {
    id: "abnel-rodriguez",
    name: "Abnel Rodriguez",
    rating: 5,
    date: "6 months ago",
    text: "This is the best place to come in Phoenix if you want to get your truck fixed. The best customer service, the mechanics are amazing — it's just the best place. Totally recommend.",
    initialColor: "#ea4335",
  },
  {
    id: "leo-gana-dvs",
    name: "Leo Gana DVS",
    rating: 5,
    date: "6 months ago",
    text: "Highly recommended. Good people work here.",
    initialColor: "#fbbc04",
  },
  {
    id: "oleksandr-mazurenko",
    name: "Oleksandr Mazurenko",
    rating: 5,
    date: "7 months ago",
    text: "I definitely recommend this place. The people here are great and always ready to help. Special thanks to Daniel. He's a truly wonderful person.",
    initialColor: "#0891b2",
  },
  {
    id: "alan-stiffler",
    name: "Alan Stiffler",
    rating: 5,
    date: "8 months ago",
    text: "I brought my rig in to the shop after an oil-change interval stretched too far. The team walked me through the diagnostics, found a worn component other shops missed, and got me back on the road within hours. Their techs know semi trucks and trailers inside out — this shop earns every star.",
    initialColor: "#dc2626",
  },
  {
    id: "sommerour-trucking",
    name: "Sommerour Trucking",
    rating: 5,
    date: "8 months ago",
    text: "Found this shop coming into Phoenix today — they are a very honest shop. Had a very simple issue that was resolved with a pressure test. Great prices and I would recommend them to any owner operator.",
    initialColor: "#7c3aed",
  },
];
