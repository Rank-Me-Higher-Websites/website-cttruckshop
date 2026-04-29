export type CustomerReview = {
  id: string;
  name: string;
  rating: 4 | 5;
  date: string;
  text: string;
  initialColor?: string;
};

export const reviewsAggregate = {
  rating: 4.9,
  count: 47,
  source: "Google",
};

export const customerReviews: CustomerReview[] = [
  {
    id: "sam-miller",
    name: "Sam Miller",
    rating: 5,
    date: "June 30, 2024",
    text: "Guys did great job with the truck, prices are really good.",
    initialColor: "#1a73e8",
  },
  {
    id: "placeholder-1",
    name: "Add Your Reviewer",
    rating: 5,
    date: "Month Day, Year",
    text: "Paste the actual 5-star Google review text here. Replace this placeholder card by editing src/data/reviews.ts.",
    initialColor: "#34a853",
  },
  {
    id: "placeholder-2",
    name: "Add Your Reviewer",
    rating: 5,
    date: "Month Day, Year",
    text: "Paste the actual 5-star Google review text here. Replace this placeholder card by editing src/data/reviews.ts.",
    initialColor: "#fbbc04",
  },
  {
    id: "placeholder-3",
    name: "Add Your Reviewer",
    rating: 4,
    date: "Month Day, Year",
    text: "Paste the actual 4-star Google review text here. Replace this placeholder card by editing src/data/reviews.ts.",
    initialColor: "#ea4335",
  },
  {
    id: "placeholder-4",
    name: "Add Your Reviewer",
    rating: 5,
    date: "Month Day, Year",
    text: "Paste the actual 5-star Google review text here. Replace this placeholder card by editing src/data/reviews.ts.",
    initialColor: "#9333ea",
  },
  {
    id: "placeholder-5",
    name: "Add Your Reviewer",
    rating: 5,
    date: "Month Day, Year",
    text: "Paste the actual 5-star Google review text here. Replace this placeholder card by editing src/data/reviews.ts.",
    initialColor: "#0891b2",
  },
];
