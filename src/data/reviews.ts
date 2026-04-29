export type CustomerReview = {
  id: string;
  name: string;
  rating: 4 | 5;
  date: string;
  text: string;
  initialColor?: string;
};

export const reviewsAggregate = {
  rating: 4.5,
  count: 61,
  source: "Google",
};

export const customerReviews: CustomerReview[] = [
  {
    id: "pld-maintenance",
    name: "PLD Maintenance",
    rating: 5,
    date: "1 month ago",
    text: "We been coming to this shop for the past 2 years. Daniel is the guy!",
    initialColor: "#9333ea",
  },
  {
    id: "ackeem-doyle",
    name: "Ackeem Doyle",
    rating: 5,
    date: "2 months ago",
    text: "Quick and easy to work with.",
    initialColor: "#1a73e8",
  },
  {
    id: "david-ellis-sr",
    name: "David Ellis Sr.",
    rating: 5,
    date: "2 months ago",
    text: "Very good service, made me feel comfortable and was very attentive to my problems at need.",
    initialColor: "#34a853",
  },
  {
    id: "abnel-rodriguez",
    name: "Abnel Rodriguez",
    rating: 5,
    date: "3 months ago",
    text: "This is the best place to come in Phoenix if you want to get your truck fix. The best customer service, the mechanics are amazing — it's just the best place. Totally recommend.",
    initialColor: "#ea4335",
  },
  {
    id: "leo-gana-dvs",
    name: "Leo Gana DVS",
    rating: 5,
    date: "3 months ago",
    text: "Highly recommended. Good people work here.",
    initialColor: "#fbbc04",
  },
  {
    id: "aleksandr-mazurenko",
    name: "Александр Мазуренко",
    rating: 5,
    date: "4 months ago",
    text: "I definitely recommend this place. The people here are great and always ready to help. Special thanks to Daniel. He's a truly wonderful person.",
    initialColor: "#0891b2",
  },
  {
    id: "alan-stiffler",
    name: "Alan Stiffler",
    rating: 5,
    date: "5 months ago",
    text: "I brought my rig in to the shop after an oil-change interval stretched too far. The team walked me through the diagnostics, found a worn component other shops missed, and got me back on the road within hours. Their techs know semi trucks and trailers inside out — this shop earns every star.",
    initialColor: "#dc2626",
  },
  {
    id: "sommerour-trucking",
    name: "Sommerour Trucking",
    rating: 5,
    date: "5 months ago",
    text: "Found this shop coming into Phoenix today — they are a very honest shop. Had a very simple issue that was resolved with a pressure test. Great prices and I would recommend them to any owner operator.",
    initialColor: "#7c3aed",
  },
];
