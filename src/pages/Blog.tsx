import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { ArrowRight, Calendar, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import towingRecovery from "@/assets/towing-recovery.jpg";
import { createBreadcrumbSchema, createCollectionPageSchema, BASE_URL } from "@/lib/schema";

const POSTS_PER_PAGE = 6;

const parseDate = (dateStr: string) => new Date(dateStr);

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page") || "1");

  const sortedPosts = useMemo(
    () => [...blogPosts].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()),
    []
  );

  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = sortedPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const goToPage = (page: number) => {
    setSearchParams(page === 1 ? {} : { page: String(page) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <SEO
        title="Truck Repair Tips & Industry News – Phoenix, AZ"
        description="Expert truck maintenance tips, diesel repair guides, and industry news from CT Truck & Trailer Shop in Phoenix. Stay informed about fleet management and semi truck care."
        keywords="truck maintenance blog, diesel repair tips, fleet management phoenix, semi truck maintenance tips, trucking industry news, truck repair guides"
        structuredData={[
          createBreadcrumbSchema([
            { name: "Home", url: BASE_URL },
            { name: "Blog", url: `${BASE_URL}/blog` },
          ]),
          createCollectionPageSchema(
            "CT Truck & Trailer Shop Blog",
            "Expert tips, industry insights, and the latest news from CT Truck & Trailer Shop.",
            `${BASE_URL}/blog`
          ),
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[auto] flex items-center text-primary-foreground overflow-hidden py-24 md:py-24">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${towingRecovery})` }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl hidden sm:block" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl hidden sm:block" />
        <div className="container-custom relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Tag className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">News & Publications</span>
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Expert tips, industry insights, and the latest news from CT Truck & Trailer Shop.
              Stay informed about truck maintenance and fleet management.
            </p>
            <HeroTrustBadges />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="relative bg-primary-foreground/5 border border-accent/20 rounded-2xl overflow-hidden h-full flex flex-col hover:border-accent/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
                    </div>
                    <div className="p-6 flex flex-col flex-1 relative z-10">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                          <Tag className="h-3 w-3" />
                          {post.category}
                        </span>
                      </div>
                      <h2 className="font-heading text-xl font-bold text-primary-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-primary-foreground/70 text-sm mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-accent/20">
                        <span className="flex items-center gap-1 text-xs text-primary-foreground/60">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1 text-sm font-medium text-accent">
                          Read More
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-foreground border border-accent/20 rounded-lg hover:border-accent/50 hover:text-accent transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                    page === currentPage
                      ? "bg-accent text-accent-foreground"
                      : "text-primary-foreground border border-accent/20 hover:border-accent/50 hover:text-accent"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-foreground border border-accent/20 rounded-lg hover:border-accent/50 hover:text-accent transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
