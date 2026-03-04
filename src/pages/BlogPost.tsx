import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import BlogContent from "@/components/BlogContent";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react";
import { createBreadcrumbSchema, createArticleSchema, BASE_URL } from "@/lib/schema";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[postIndex];

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

  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.metaDescription}
        keywords={`${post.category.toLowerCase()}, ${post.title.toLowerCase().split(' ').slice(0, 5).join(' ')}, truck repair blog, phoenix az`}
        ogType="article"
        ogImage={post.featuredImage}
        structuredData={[
          createBreadcrumbSchema([
            { name: "Home", url: BASE_URL },
            { name: "Blog", url: `${BASE_URL}/blog` },
            { name: post.title, url: `${BASE_URL}/blog/${post.slug}` },
          ]),
          createArticleSchema(post),
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${post.featuredImage})` }}
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
