// Build-time loader for auto-generated blog posts on cttruckshop.
//
// Reads frontmatter + HTML body from src/content/blog/*.md and returns
// BlogPost[]-shaped entries that merge into the existing blogPosts array.
// The body is treated as raw HTML (matches the existing content format —
// posts in blogPosts.ts use HTML strings rendered by BlogContent.tsx via
// dangerouslySetInnerHTML).
//
// Also exports autoFeaturedImages, consumed by blogImageMap's
// getFeaturedImage() as the first fallback before slugFeaturedMap.
//
// Posts here are produced by the n8n blog-automation workflow.
// Manually-curated posts continue to live in blogPosts.ts.

import type { BlogPost } from "./blogPosts";

type RawFrontmatter = Record<string, string>;

function parseFrontmatter(raw: string): { fm: RawFrontmatter; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { fm: {}, body: raw };
  const fm: RawFrontmatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w+):\s*(.*?)\s*$/);
    if (!kv) continue;
    let value = kv[2];
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    fm[kv[1]] = value;
  }
  return { fm, body: match[2] };
}

const modules = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const autoBlogPosts: BlogPost[] = Object.entries(modules)
  .map(([path, raw]) => {
    const { fm, body } = parseFrontmatter(raw);
    const filenameMatch = path.match(/([^/]+)\.md$/);
    const slug = fm.slug || filenameMatch?.[1] || "";
    return {
      slug,
      title: fm.title || slug,
      date: fm.date || "",
      category: fm.category || "Truck & Trailer Maintenance Tips",
      excerpt: fm.excerpt || "",
      featuredImage: fm.featuredImage || "",
      metaDescription: fm.metaDescription || fm.excerpt || "",
      content: body.trim(),
    };
  })
  .filter(p => p.slug)
  .sort((a, b) => {
    const da = new Date(a.date).getTime();
    const db = new Date(b.date).getTime();
    return (db || 0) - (da || 0);
  });

// Slug -> image URL map, consumed by getFeaturedImage's fallback chain.
export const autoFeaturedImages: Record<string, string> = Object.fromEntries(
  autoBlogPosts.filter(p => p.featuredImage).map(p => [p.slug, p.featuredImage]),
);
