// Build-time sitemap augmentor for cttruckshop.com.
//
// Runs after `vite build`. Reads public/sitemap.xml (the human-maintained
// source of truth) and injects entries for any auto-generated blog posts
// found in src/content/blog/*.md that aren't already present. Writes the
// augmented result to dist/sitemap.xml. Manual edits pass through verbatim.

import { readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

const SITE_URL = "https://cttruckshop.com";
const TODAY = new Date().toISOString().slice(0, 10);

const SOURCE = join(ROOT, "public/sitemap.xml");
const DEST = join(ROOT, "dist/sitemap.xml");

if (!existsSync(SOURCE)) {
  console.error(`Source sitemap missing: ${SOURCE}`);
  process.exit(1);
}

const existing = readFileSync(SOURCE, "utf8");

function autoBlogSlugs(): string[] {
  const dir = join(ROOT, "src/content/blog");
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter(f => f.endsWith(".md") && !f.startsWith("_") && !f.startsWith("."))
    .map(f => f.replace(/\.md$/, ""));
}

const slugs = autoBlogSlugs();
const newEntries: string[] = [];

for (const slug of slugs) {
  const url = `${SITE_URL}/blog/${slug}`;
  if (existing.includes(`<loc>${url}</loc>`)) continue;
  newEntries.push(`
  <url>
    <loc>${url}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
}

let result = existing;
if (newEntries.length > 0) {
  const block = `\n  <!-- Auto-generated posts -->${newEntries.join("")}\n\n</urlset>\n`;
  result = result.replace(/\n*<\/urlset>\s*$/, block);
}

// Every English URL also exists under /es and /ru (see src/i18n/lang.ts).
// Pages declare their language alternates via hreflang in their own <head>.
const langEntries: string[] = [];
for (const m of result.matchAll(/<url>\s*<loc>([^<]+)<\/loc>([\s\S]*?)<\/url>/g)) {
  const loc = m[1].trim();
  if (!loc.startsWith(SITE_URL)) continue;
  const path = loc.slice(SITE_URL.length);
  for (const lang of ["es", "ru"]) {
    langEntries.push(`
  <url>
    <loc>${SITE_URL}/${lang}${path === "/" ? "" : path}</loc>${m[2].trimEnd()}
  </url>`);
  }
}
if (langEntries.length > 0) {
  result = result.replace(
    /\n*<\/urlset>\s*$/,
    `\n  <!-- Spanish + Russian versions -->${langEntries.join("")}\n\n</urlset>\n`,
  );
}

writeFileSync(DEST, result, "utf8");
console.log(
  `Wrote dist/sitemap.xml — preserved existing entries + injected ${newEntries.length} new auto-post URL(s)`,
);
