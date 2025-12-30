import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { ArrowRight, Calendar, Tag } from "lucide-react";

import semiTruckDiagnostics from "@/assets/blog/semi-truck-diagnostics.jpg";
import truckMechanic from "@/assets/blog/truck-mechanic.jpg";
import mobileTruckRepair from "@/assets/blog/mobile-truck-repair.jpg";
import fastTruckRepair from "@/assets/blog/fast-truck-repair.png";
import semiTruckService from "@/assets/blog/semi-truck-service.png";
import emergencyTruckRepair from "@/assets/blog/emergency-truck-repair.jpg";

const blogPosts = [
  {
    slug: "semi-truck-repair-fast-and-reliable",
    title: "Semi Truck Repair That Keeps You Rolling — Not Waiting",
    excerpt: "Time is money in trucking, and every hour your rig is down costs you. Learn how our semi truck repair services minimize downtime and get you back on the road fast.",
    category: "Truck & Trailer Maintenance Tips",
    date: "December 23, 2025",
    image: semiTruckDiagnostics,
  },
  {
    slug: "truck-mechanic-near-me-phoenix-az",
    title: "Truck Mechanic Near Me Phoenix, AZ | Fast & Reliable Semi-Truck Repair",
    excerpt: "Looking for a reliable truck mechanic near you in Phoenix? CT Truck Shop offers fast, professional semi-truck repair services with 24/7 emergency roadside assistance.",
    category: "Emergency Roadside Assistance",
    date: "December 15, 2025",
    image: truckMechanic,
  },
  {
    slug: "mobile-truck-repair-keeping-your-rig-rolling",
    title: "Mobile Truck Repair: Keeping Your Rig Rolling When the Shop Comes to You",
    excerpt: "Discover the benefits of mobile truck repair services. When you can't get to the shop, we bring the shop to you with fully-equipped service vehicles.",
    category: "Emergency Roadside Assistance",
    date: "December 10, 2025",
    image: mobileTruckRepair,
  },
  {
    slug: "fast-truck-repair-near-me",
    title: "Fast Truck Repair Near Me: The Quick, Reliable Service Every Driver Needs",
    excerpt: "When you need fast truck repair, you need a shop that understands urgency. Learn what to look for in a reliable truck repair service.",
    category: "Truck & Trailer Maintenance Tips",
    date: "December 2, 2025",
    image: fastTruckRepair,
  },
  {
    slug: "emergency-truck-repair",
    title: "Emergency Truck Repair in Phoenix, AZ — Fast Help When Every Hour Matters",
    excerpt: "Breakdowns don't wait for convenient times. Our emergency truck repair services in Phoenix provide fast, professional help when you need it most.",
    category: "Emergency Roadside Assistance",
    date: "November 24, 2025",
    image: emergencyTruckRepair,
  },
  {
    slug: "reliable-semi-truck-service-for-your-fleet",
    title: "Reliable Semi Truck Service for Maximum Uptime",
    excerpt: "Maximize your fleet's uptime with reliable semi truck service. Preventive maintenance and quick repairs keep your trucks on the road earning money.",
    category: "Truck & Trailer Maintenance Tips",
    date: "November 13, 2025",
    image: semiTruckService,
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

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom text-center">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            News & Publications
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Expert tips, industry insights, and the latest news from CT Truck & Trailer Shop. 
            Stay informed about truck maintenance and fleet management.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="card-elevated overflow-hidden h-full flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-accent">
                          <Tag className="h-3 w-3" />
                          {post.category}
                        </span>
                      </div>
                      <h2 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
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
