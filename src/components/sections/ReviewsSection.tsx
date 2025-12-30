import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Michael McLenaghan",
    date: "June 2023",
    rating: 5,
    text: "These guys take great care of my business assets. The parking access is easy 24/7 and the shop does great work. Best of all, they are there when I need them. They prioritize their regular customers and make sure we stay up and running.",
  },
  {
    name: "Shad Garfield",
    date: "June 2023",
    rating: 5,
    text: "Prompt and reliable service. CT shop is our go-to maintenance shop in Phoenix.",
  },
  {
    name: "William Winkey",
    date: "June 2023",
    rating: 5,
    text: "Great service was able to get in and out. Got to keep the wheels turning 🚛",
  },
  {
    name: "Nikita Nikolaiev",
    date: "May 2023",
    rating: 5,
    text: "The pricing is highly affordable, and the quality of their work is truly outstanding. Never had any problems with them! Highly recommend them to everyone.",
  },
  {
    name: "Art Bialopetrovic",
    date: "May 2023",
    rating: 5,
    text: "CT SHOP has truly impressed me with their reliable and exceptional service. Their commitment to treating customers like family has earned my trust and loyalty. Not only did CT SHOP efficiently resolve my truck and trailer repair needs, but their services also saved me money.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Customer Reviews
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-accent fill-accent" />
              ))}
            </div>
            <span className="text-lg font-semibold">5.0</span>
            <span className="text-primary-foreground/60">from 22+ Google Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, index) => (
            <article
              key={review.name}
              className="bg-primary-foreground/5 rounded-xl p-6 border border-primary-foreground/10 hover:border-accent/30 transition-colors"
            >
              <Quote className="h-8 w-8 text-accent/40 mb-4" />
              <p className="text-primary-foreground/80 mb-6 line-clamp-4">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-primary-foreground/50">{review.date}</p>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Additional Reviews Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {reviews.slice(3).map((review) => (
            <article
              key={review.name}
              className="bg-primary-foreground/5 rounded-xl p-6 border border-primary-foreground/10 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <Quote className="h-6 w-6 text-accent/40 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 mb-4 line-clamp-3">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-sm">{review.name}</p>
                      <p className="text-xs text-primary-foreground/50">{review.date}</p>
                    </div>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Google Badge */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/CT+Truck+and+Trailer+Shop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 px-6 py-3 rounded-lg transition-colors"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="font-medium">View on Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
