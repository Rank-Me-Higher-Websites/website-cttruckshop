import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { ArrowRight, Calendar, Tag } from "lucide-react";

import truckDiagnostics from "@/assets/truck-diagnostics.jpg";
import expertTechnician from "@/assets/expert-technician.png";
import nightTowing from "@/assets/night-towing.jpg";
import towingRecovery from "@/assets/towing-recovery.jpg";
import craneLift from "@/assets/crane-lift.png";
import mechanicsWork from "@/assets/mechanics-work.jpeg";

const blogPosts = [
  {
    slug: "semi-truck-repair-fast-and-reliable",
    title: "Semi Truck Repair That Keeps You Rolling — Not Waiting",
    excerpt: "Time is money in trucking, and every hour your rig is down costs you. Learn how our semi truck repair services minimize downtime and get you back on the road fast.",
    category: "Truck & Trailer Maintenance Tips",
    date: "December 23, 2025",
    image: truckDiagnostics,
  },
  {
    slug: "truck-mechanic-near-me-phoenix-az",
    title: "Truck Mechanic Near Me Phoenix, AZ | Fast & Reliable Semi-Truck Repair",
    excerpt: "Looking for a reliable truck mechanic near you in Phoenix? CT Truck Shop offers fast, professional semi-truck repair services with 24/7 emergency roadside assistance.",
    category: "Emergency Roadside Assistance",
    date: "December 15, 2025",
    image: expertTechnician,
  },
  {
    slug: "mobile-truck-repair-keeping-your-rig-rolling",
    title: "Mobile Truck Repair: Keeping Your Rig Rolling When the Shop Comes to You",
    excerpt: "Discover the benefits of mobile truck repair services. When you can't get to the shop, we bring the shop to you with fully-equipped service vehicles.",
    category: "Emergency Roadside Assistance",
    date: "December 10, 2025",
    image: nightTowing,
  },
  {
    slug: "fast-truck-repair-near-me",
    title: "Fast Truck Repair Near Me: The Quick, Reliable Service Every Driver Needs",
    excerpt: "When you need fast truck repair, you need a shop that understands urgency. Learn what to look for in a reliable truck repair service.",
    category: "Truck & Trailer Maintenance Tips",
    date: "December 2, 2025",
    image: towingRecovery,
  },
  {
    slug: "emergency-truck-repair",
    title: "Emergency Truck Repair in Phoenix, AZ — Fast Help When Every Hour Matters",
    excerpt: "Breakdowns don't wait for convenient times. Our emergency truck repair services in Phoenix provide fast, professional help when you need it most.",
    category: "Emergency Roadside Assistance",
    date: "November 24, 2025",
    image: craneLift,
  },
  {
    slug: "reliable-semi-truck-service-for-your-fleet",
    title: "Reliable Semi Truck Service for Maximum Uptime",
    excerpt: "Maximize your fleet's uptime with reliable semi truck service. Preventive maintenance and quick repairs keep your trucks on the road earning money.",
    category: "Truck & Trailer Maintenance Tips",
    date: "November 13, 2025",
    image: mechanicsWork,
  },
];

const Blog = () => {
  return (
    <Layout>
      <SEO
        title="News & Blog"
        description="Read the latest news, tips, and insights from CT Truck & Trailer Shop. Expert advice on truck maintenance, emergency repairs, and fleet management in Phoenix, AZ."
        keywords="truck repair blog, semi truck maintenance tips, fleet management, Phoenix trucking news"
      />

      {/* Hero with futuristic styling */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
            <Tag className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">
              News & Publications
            </span>
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Expert tips, industry insights, and the latest news from CT Truck & Trailer Shop. 
            Stay informed about truck maintenance and fleet management.
          </p>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-accent/30 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-accent/30 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-accent/30 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-accent/30 rounded-br-lg" />
      </section>

      {/* Blog Grid with enhanced styling */}
      <section className="section-padding bg-primary relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="relative bg-primary-foreground/5 border border-accent/20 rounded-2xl overflow-hidden h-full flex flex-col hover:border-accent/50 transition-all duration-300">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
