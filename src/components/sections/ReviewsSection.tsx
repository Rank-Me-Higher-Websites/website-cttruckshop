import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { customerReviews, reviewsAggregate } from "@/data/reviews";
import { Star } from "lucide-react";

const GoogleG = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
    <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
    <path fill="#FBBC05" d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/>
    <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
  </svg>
);

const Stars = ({ rating, size = 16 }: { rating: number; size?: number }) => (
  <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={size}
        className={i < rating ? "fill-[#fbbc04] text-[#fbbc04]" : "fill-gray-300 text-gray-300"}
      />
    ))}
  </div>
);

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const ReviewsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    const sync = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };
    sync();
    api.on("select", sync);
    api.on("reInit", sync);
    return () => {
      api.off("select", sync);
      api.off("reInit", sync);
    };
  }, [api]);

  return (
    <section className="pt-6 pb-16 md:pb-20 lg:pb-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Customer Reviews
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What Our Customers Say
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-5xl mx-auto">
            {/* Aggregate header card */}
            <div
              className="bg-white text-gray-900 rounded-2xl shadow-xl p-6 md:p-8 mb-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
              data-testid="reviews-aggregate"
            >
              <div className="flex items-center gap-3">
                <GoogleG className="h-9 w-9" />
                <div className="leading-tight">
                  <div className="font-semibold text-base text-gray-900">Google Reviews</div>
                  <div className="text-xs text-gray-500">Verified by Google</div>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-gray-200" aria-hidden="true" />

              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-4xl md:text-5xl font-bold text-gray-900"
                    data-testid="text-rating"
                  >
                    {reviewsAggregate.rating.toFixed(1)}
                  </span>
                  <Stars rating={Math.round(reviewsAggregate.rating)} size={20} />
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Based on{" "}
                  <span className="font-semibold text-gray-900" data-testid="text-review-count">
                    {reviewsAggregate.count}
                  </span>{" "}
                  reviews
                </div>
              </div>
            </div>

            {/* Reviews carousel */}
            <Carousel
              setApi={setApi}
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {customerReviews.map((review) => (
                  <CarouselItem
                    key={review.id}
                    className="basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <article
                      className="h-full bg-white text-gray-900 rounded-xl shadow-lg p-6 flex flex-col"
                      data-testid={`card-review-${review.id}`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className="h-10 w-10 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0"
                            style={{ backgroundColor: review.initialColor || "#1a73e8" }}
                            aria-hidden="true"
                          >
                            {initials(review.name)}
                          </div>
                          <div className="min-w-0">
                            <div
                              className="font-semibold text-sm text-gray-900 truncate"
                              data-testid={`text-reviewer-${review.id}`}
                            >
                              {review.name}
                            </div>
                            <div className="text-xs text-gray-500">{review.date}</div>
                          </div>
                        </div>
                        <GoogleG className="h-5 w-5 shrink-0" />
                      </div>

                      <Stars rating={review.rating} />

                      <p
                        className="text-sm text-gray-700 leading-relaxed mt-3 flex-1"
                        data-testid={`text-review-${review.id}`}
                      >
                        {review.text}
                      </p>

                      <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-400">
                        Posted on Google
                      </div>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious
                className="hidden md:flex -left-4 lg:-left-12 bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
                data-testid="button-reviews-prev"
              />
              <CarouselNext
                className="hidden md:flex -right-4 lg:-right-12 bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
                data-testid="button-reviews-next"
              />
            </Carousel>

            {/* Pagination dots */}
            {count > 1 && (
              <div className="flex justify-center items-center gap-2 mt-6">
                {Array.from({ length: count }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    aria-label={`Go to review ${i + 1}`}
                    data-testid={`button-review-dot-${i}`}
                    className={`h-2 rounded-full transition-all ${
                      i === current ? "w-6 bg-accent" : "w-2 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}

            <div className="text-center mt-6">
              <a
                href="https://www.google.com/maps/place/CT+Truck+and+Trailer+Shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                data-testid="link-google-reviews"
              >
                <GoogleG className="h-4 w-4" />
                See all reviews on Google
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ReviewsSection;
