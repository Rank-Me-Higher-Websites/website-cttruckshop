import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import BlogContent from "@/components/BlogContent";
import { blogPosts } from "@/data/blogPosts";
import { autoBlogPosts } from "@/data/autoBlogPosts";
import { getFeaturedImage } from "@/lib/blogImageMap";
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react";
import { createBreadcrumbSchema, createArticleSchema, createFAQSchema, BASE_URL } from "@/lib/schema";

const blogFAQs: Record<string, { question: string; answer: string }[]> = {
  "mobile-truck-repair-phoenix-az-guide": [
    { question: "How much does mobile truck repair cost in Phoenix?", answer: "Mobile truck repair costs vary depending on the type of repair, parts needed, and time of service. Simple roadside fixes like tire changes or air leak repairs typically cost less than major engine or transmission work. CT Truck & Trailer Shop provides upfront estimates before starting any repair so there are no surprises. Call (602) 830-3232 for a quote." },
    { question: "How fast can a mobile mechanic get to my truck in Phoenix?", answer: "Our average response time in the Phoenix metro area is typically under an hour, depending on your location and current demand. We prioritize emergency breakdowns to get you back on the road as quickly as possible." },
    { question: "What types of trucks do you repair?", answer: "We service all major semi truck and commercial vehicle brands including Freightliner, Peterbilt, Kenworth, Volvo, International, Mack, and Western Star. We also repair all trailer types — dry vans, flatbeds, reefers, and tankers." },
    { question: "Do you offer DOT inspections on-site?", answer: "Yes. We offer DOT inspections both at our shop and through our mobile service. Our inspectors are certified and can complete annual inspections, pre-trip inspections, and help you address any issues found during a roadside inspection." },
    { question: "What areas does your mobile truck repair service cover?", answer: "Our mobile repair service covers the entire Phoenix metropolitan area including Glendale, Tempe, Mesa, Chandler, Goodyear, Avondale, Tolleson, and surrounding areas along the I-10 and I-17 corridors." },
    { question: "Can you do engine repairs on the roadside?", answer: "We can diagnose most engine problems on-site and perform many common engine repairs roadside, including fuel system repairs, sensor replacements, turbo repairs, and cooling system fixes. For major engine work like full overhauls, we may recommend towing to our shop for a more thorough repair." },
  ],
  "10-common-semi-truck-brake-problems": [
    { question: "What are the most common semi truck brake problems?", answer: "The most common semi truck brake problems are air pressure loss, worn brake pads or shoes, out-of-adjustment slack adjusters, brake fade on descents, glazed drums or rotors, cracked drums, seized calipers, ABS sensor failures, brake imbalance between tractor and trailer, and contaminated air lines." },
    { question: "What is the minimum brake lining thickness for a semi truck?", answer: "FMCSA sets the minimum lining thickness at 1/4 inch for steering axles and 1/16 inch for other axles. Below these thresholds, the truck is placed out of service at any DOT inspection." },
    { question: "What causes brake fade on a semi truck?", answer: "Brake fade occurs when sustained friction heat vaporizes the brake lining material, creating a gas layer between the shoe and drum. This typically happens from riding brakes on long descents, an overloaded trailer, or wrong gear selection. Use engine braking and short firm applications instead of dragging the brakes." },
    { question: "Why is my ABS warning light on?", answer: "An ABS warning light typically indicates a failed wheel speed sensor, damaged wiring harness, corroded connector, or failed tone ring. The truck still has base braking, but ABS is disabled on the affected wheel, which can cause lockup on slick surfaces. Use a diagnostic scan tool to identify the failed wheel position." },
    { question: "How often should semi truck brakes be inspected?", answer: "Pre-trip inspections should check air pressure and visible brake components every day. A full brake inspection — including push-rod stroke measurement, lining thickness, and drum condition — is typically recommended every 90 days or 25,000 miles, whichever comes first." },
    { question: "What is brake imbalance and why is it dangerous?", answer: "Brake imbalance happens when the tractor and trailer brakes apply with different timing or force. If trailer brakes apply first or harder than tractor brakes, the trailer can push the tractor and cause a jackknife — especially on slippery surfaces. It's one of the leading causes of jackknifing in combination vehicles." },
  ],
  "semi-truck-pre-summer-pm-checklist": [
    { question: "What should be on a pre-summer semi truck PM checklist?", answer: "A pre-summer PM should cover six core systems: cooling system (coolant concentration, hoses, thermostat, radiator cap), tires (tread depth, cold inflation, sidewall condition), brakes (lining thickness, drum/rotor condition, slack adjuster travel), engine oil and filters, electrical system (battery load test, alternator output, ground connections), and HVAC/cab comfort (refrigerant charge, blower motor, cab seals)." },
    { question: "How long does a proper pre-summer truck PM take?", answer: "A thorough pre-summer preventive maintenance inspection takes about 2 to 4 hours per Class 7 or Class 8 truck when done correctly. Skipping it usually costs far more — the average unplanned roadside breakdown runs $1,500 to $3,000 in combined towing, parts, and downtime per incident." },
    { question: "How does summer heat affect semi truck tires?", answer: "Heat dramatically raises tire pressure and accelerates rubber degradation. A drive tire at 90 PSI in 45°F weather can read 100–105 PSI when the pavement hits 130°F. Always check inflation cold and adjust to manufacturer spec — never bleed off pressure to compensate for heat gain, because that causes underinflation when the tire cools and is the leading cause of summer blowouts." },
    { question: "Why is the cooling system the top priority before summer?", answer: "The cooling system is the most heat-sensitive system on any diesel engine, and a failure leads to catastrophic engine damage. Pre-summer service should include refractometer-testing the coolant, checking pH (8.5–10.5), pressure-testing the radiator cap, cleaning the radiator and charge air cooler fins, and verifying thermostat operation." },
    { question: "Can a battery that passes a winter test fail in summer?", answer: "Yes. Heat is actually harder on batteries than cold is — high temperatures accelerate internal corrosion and grid degradation. A battery that load-tests fine in February can fail by August. Every battery should be load-tested before summer; replace anything borderline (below 9.6V under load) instead of waiting for it to strand a truck." },
    { question: "How often should fleets do PM during summer in hot climates like Arizona?", answer: "OEM-standard PM intervals are designed for average operating conditions. High-heat, heavy-load operations — such as construction or dump trucks running multiple loads a day in Phoenix or similar climates — benefit from compressed intervals: roughly 20–25% shorter than the OEM baseline for oil, coolant servicing, and brake inspections during peak summer months." },
  ],
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const allPosts = [...autoBlogPosts, ...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const postIndex = allPosts.findIndex((p) => p.slug === slug);
  const post = allPosts[postIndex];

  if (!post) {
    return (
      <Layout>
        <SEO title="Post Not Found" description="The blog post you're looking for doesn't exist." />
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <h1 className="font-heading text-4xl font-bold text-primary-foreground mb-4">Post Not Found</h1>
            <p className="text-primary-foreground/70 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const prevPost = postIndex > 0 ? allPosts[postIndex - 1] : null;
  const nextPost = postIndex < allPosts.length - 1 ? allPosts[postIndex + 1] : null;

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.metaDescription}
        keywords={`${post.category.toLowerCase()}, ${post.title.toLowerCase().split(' ').slice(0, 5).join(' ')}, truck repair blog, phoenix az`}
        ogType="article"
        ogImage={getFeaturedImage(post.slug)}
        structuredData={[
          createBreadcrumbSchema([
            { name: "Home", url: BASE_URL },
            { name: "Blog", url: `${BASE_URL}/blog` },
            { name: post.title, url: `${BASE_URL}/blog/${post.slug}` },
          ]),
          createArticleSchema(post),
          ...(blogFAQs[post.slug] ? [createFAQSchema(blogFAQs[post.slug])] : []),
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${getFeaturedImage(post.slug)})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-custom relative z-10 py-12 md:py-16">
          <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:underline mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
              <Tag className="h-3 w-3" />
              {post.category}
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <span className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <BlogContent html={post.content} />
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-10 bg-primary border-t border-accent/20">
        <div className="container-custom">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            {prevPost ? (
              <Link to={`/blog/${prevPost.slug}`} className="flex items-center gap-2 text-accent hover:underline text-sm">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">{prevPost.title.slice(0, 40)}...</span>
                <span className="sm:hidden">Previous</span>
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link to={`/blog/${nextPost.slug}`} className="flex items-center gap-2 text-accent hover:underline text-sm">
                <span className="hidden sm:inline">{nextPost.title.slice(0, 40)}...</span>
                <span className="sm:hidden">Next</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
