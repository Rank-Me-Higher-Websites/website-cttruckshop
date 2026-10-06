// Build-time "poor man's prerender" for cttruckshop.com.
//
// Vanilla SPA build hands Google the same dist/index.html for every URL,
// which is the root cause of our indexation gap. Real SSR/SSG is a bigger
// refactor (see docs/seo/SEO_EXECUTION_PLAN.md §1.1). In the meantime, this
// script generates a per-route HTML file with route-specific <title>,
// <meta description>, <link canonical>, OG tags, and JSON-LD schema injected
// into the static shell. The React app still hydrates on the client.
//
// What Google sees on first fetch:
//   GET /commercial-truck-repair-phoenix-az
//   -> dist/commercial-truck-repair-phoenix-az/index.html with unique meta
//
// What the user sees in the browser:
//   Same React SPA as before, just with the right meta on first paint.
//
// Runs after `vite build` and after generate-sitemap.

import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  readdirSync,
} from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const SHELL = join(DIST, "index.html");
const BASE_URL = "https://cttruckshop.com";

if (!existsSync(SHELL)) {
  console.error(`Missing dist/index.html — run \`vite build\` first.`);
  process.exit(1);
}

const shell = readFileSync(SHELL, "utf8");

// We import the service-page data + service-area data via dynamic import
// (tsx supports this for .ts files at runtime).
// We skip autoBlogPosts.ts (it uses Vite's import.meta.glob, not available
// in plain Node) and instead read src/content/blog/*.md directly below.
const servicePagesMod = await import(
  pathToFileURL(join(ROOT, "src/data/servicePages.ts")).href
);
const serviceAreasMod = await import(
  pathToFileURL(join(ROOT, "src/data/serviceAreas.ts")).href
);
const blogPostsMod = await import(pathToFileURL(join(ROOT, "src/data/blogPosts.ts")).href);

const servicePages = servicePagesMod.servicePages as Record<
  string,
  {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    faqs?: { question: string; answer: string }[];
  }
>;
// serviceAreas is exported as an ARRAY (ServiceArea[]). It must be iterated as
// one: a previous version called Object.keys() on it, which yields the array
// INDICES ("0".."11"). That built junk /service-areas/0..11/index.html pages and
// left the 12 real city routes (/service-areas/mesa, ...) with no pre-rendered
// HTML, so they fell through to the SPA shell and served the homepage's <title>.
const serviceAreas = (
  (serviceAreasMod.serviceAreas as Array<Record<string, unknown>>) ||
  (serviceAreasMod.default as Array<Record<string, unknown>>) ||
  []
).filter((sa) => sa && typeof sa.slug === "string");
const blogPosts = (blogPostsMod.blogPosts as Array<{
  slug: string;
  title: string;
  metaDescription: string;
  category?: string;
}>) || [];

// Read auto-generated blog posts directly from src/content/blog/*.md.
// Matches the parsing logic in src/data/autoBlogPosts.ts (which we can't
// import here because it uses Vite-only import.meta.glob).
const autoBlogPosts: Array<{
  slug: string;
  title: string;
  metaDescription: string;
}> = [];
const blogDir = join(ROOT, "src/content/blog");
if (existsSync(blogDir)) {
  for (const file of readdirSync(blogDir)) {
    if (!file.endsWith(".md") || file.startsWith("_") || file.startsWith(".")) {
      continue;
    }
    const raw = readFileSync(join(blogDir, file), "utf8");
    const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    const fm: Record<string, string> = {};
    if (fmMatch) {
      for (const line of fmMatch[1].split(/\r?\n/)) {
        const kv = line.match(/^(\w+):\s*(.*?)\s*$/);
        if (!kv) continue;
        let v = kv[2];
        if (
          (v.startsWith('"') && v.endsWith('"')) ||
          (v.startsWith("'") && v.endsWith("'"))
        ) {
          v = v.slice(1, -1);
        }
        fm[kv[1]] = v;
      }
    }
    const slug = fm.slug || file.replace(/\.md$/, "");
    autoBlogPosts.push({
      slug,
      title: fm.title || slug,
      metaDescription: fm.metaDescription || fm.excerpt || "",
    });
  }
}

interface PageMeta {
  path: string; // e.g. "/about", "/commercial-truck-repair-phoenix-az"
  title: string; // full <title>, do NOT append " | CT Truck & Trailer Shop" — caller handles
  description: string;
  ogType?: string;
  jsonLd?: object[];
}

const SITE = "CT Truck & Trailer Shop";

function fullTitle(t: string): string {
  return t.endsWith(SITE) || t.includes("|") ? t : `${t} | ${SITE}`;
}

// NOTE: We deliberately do NOT emit Organization / LocalBusiness JSON-LD here.
// The shell index.html already contains the canonical NAP-matched AutoRepair
// and Organization schemas (set during the 2026-05-26 local SEO sweep). The
// per-route schemas below add Service + FAQ + BreadcrumbList context only.

// Strip route-variable tags from the shell so they don't duplicate when we
// inject route-specific replacements. Conservative regexes — only remove tags
// that should be unique per URL.
function stripRouteVariableTags(html: string): string {
  return html
    // <link rel="canonical" ...>
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>\s*/gi, "")
    // <title>...</title>
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    // <meta name="title" ...>
    .replace(/<meta[^>]+name=["']title["'][^>]*>\s*/gi, "")
    // <meta name="description" ...>
    .replace(/<meta[^>]+name=["']description["'][^>]*>\s*/gi, "")
    // <meta property="og:*" ...>
    .replace(/<meta[^>]+property=["']og:(url|title|description|type|image|site_name|locale)["'][^>]*>\s*/gi, "")
    .replace(/<meta[^>]+property=["']og:image:(width|height|alt)["'][^>]*>\s*/gi, "")
    // <meta name="twitter:*" ...>
    .replace(/<meta[^>]+name=["']twitter:(url|title|description|image|card|image:alt|site)["'][^>]*>\s*/gi, "");
}

const pages: PageMeta[] = [
  {
    path: "/",
    title: "Semi Truck & Trailer Repair in Phoenix, AZ — CT Truck & Trailer Shop",
    description: "Phoenix's trusted semi truck & trailer repair shop. Class 8 specialists, 24/7 emergency response, DOT inspections, brake pads in stock. Call (602) 830-3232.",
  },
  {
    path: "/services",
    title: "Semi Truck Repair Services in Phoenix, AZ",
    description: "Full catalog of semi truck & trailer repair services in Phoenix — emergency, brake, tire, engine, electrical, diagnostics, DOT inspections, fleet contracts.",
  },
  {
    path: "/about",
    title: "About CT Truck & Trailer Shop — Phoenix, AZ",
    description: "Phoenix-based semi truck repair shop with years of Class 8 experience, ASE-certified techs, dealer-level diagnostic tools and a 24/7 mobile response unit.",
  },
  {
    path: "/contact",
    title: "Contact CT Truck & Trailer Shop — Phoenix, AZ",
    description: "Get in touch with CT Truck & Trailer Shop in Phoenix, AZ. Call (602) 830-3232, drop in, or request a quote online for semi truck or trailer repair.",
  },
  {
    path: "/mobile-repair",
    title: "Mobile Truck Repair in Phoenix, AZ — 24/7 On-Site Service",
    description: "24/7 mobile truck repair across the Phoenix metro. Brake, electrical, tire, air system, diagnostics — most fixes done on-site. Call (602) 830-3232.",
  },
  {
    path: "/locations",
    title: "Locations — CT Truck & Trailer Shop in Phoenix, AZ",
    description: "Our Phoenix shop location plus the service areas we cover across the Valley. Drive-in repair, 24/7 mobile response, fleet pickup-and-delivery.",
  },
  {
    path: "/locations/phoenix",
    title: "Truck Repair in Phoenix, AZ — CT Truck & Trailer Shop",
    description: "Drive-in semi truck & trailer repair in Phoenix, AZ. Class 8 specialists, ASE-certified techs, dealer-level diagnostics, parts in stock. Call (602) 830-3232.",
  },
  {
    path: "/blog",
    title: "Truck Repair Blog — CT Truck & Trailer Shop",
    description: "Truck repair guides, maintenance tips, and Phoenix trucking news from CT Truck & Trailer Shop's certified Class 8 technicians.",
  },
  {
    path: "/service-areas",
    title: "Service Areas — Truck Repair Across the Phoenix Valley",
    description: "CT Truck & Trailer Shop serves the entire Phoenix metro — Phoenix, Glendale, Mesa, Tempe, Chandler, Scottsdale, Gilbert, Peoria, Avondale, Goodyear, Buckeye, Surprise.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy — CT Truck & Trailer Shop",
    description: "Privacy policy for CT Truck & Trailer Shop.",
  },
  {
    path: "/terms",
    title: "Terms of Service — CT Truck & Trailer Shop",
    description: "Terms of service for CT Truck & Trailer Shop.",
  },
];

// Service pages (auto-discovered from servicePages.ts)
for (const slug of Object.keys(servicePages)) {
  const sp = servicePages[slug];
  pages.push({
    path: `/${slug}`,
    title: sp.metaTitle || sp.title,
    description: sp.metaDescription,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: sp.title,
        description: sp.metaDescription,
        provider: { "@type": "AutoRepair", name: SITE, url: BASE_URL },
        areaServed: { "@type": "City", name: "Phoenix" },
        url: `${BASE_URL}/${slug}`,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
          { "@type": "ListItem", position: 3, name: sp.title, item: `${BASE_URL}/${slug}` },
        ],
      },
      ...(sp.faqs && sp.faqs.length > 0
        ? [
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: sp.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            },
          ]
        : []),
    ],
  });
}

// Service area pages (auto-discovered)
for (const area of serviceAreas) {
  const sa = area as {
    slug: string;
    name?: string;
    metaTitle?: string;
    metaDescription?: string;
    title?: string;
  };
  const slug = sa.slug;
  const cityName = sa.name || slug.charAt(0).toUpperCase() + slug.slice(1);
  pages.push({
    path: `/service-areas/${slug}`,
    title:
      sa.metaTitle || `Truck Repair in ${cityName}, AZ — CT Truck & Trailer Shop`,
    description:
      sa.metaDescription ||
      `Semi truck & trailer repair serving ${cityName}, AZ. 24/7 mobile response, drive-in shop in Phoenix, ASE-certified techs. Call (602) 830-3232.`,
  });
}

// Blog posts (auto + manual)
for (const post of [...blogPosts, ...autoBlogPosts]) {
  pages.push({
    path: `/blog/${post.slug}`,
    title: `${post.title} — CT Truck & Trailer Shop Blog`,
    description: post.metaDescription,
    ogType: "article",
  });
}

// Pre-strip route-variable tags from the shell once.
const cleanShell = stripRouteVariableTags(shell);

// Build per-route HTML files, once per language.
// English stays unprefixed (/about); Spanish and Russian live under /es and /ru
// (/es/about). Their <title>/<meta description> come from the same dictionaries
// the client-side translator uses (src/i18n/dict/<lang>.json, keyed by the
// whitespace-collapsed English text); anything missing falls back to English.
type Lang = "en" | "es" | "ru";
const LANGS: Lang[] = ["en", "es", "ru"];
const OG_LOCALE: Record<Lang, string> = { en: "en_US", es: "es_US", ru: "ru_RU" };
const norm = (s: string) => s.replace(/\s+/g, " ").trim();
const dicts: Record<Lang, Record<string, string>> = { en: {}, es: {}, ru: {} };
for (const lang of ["es", "ru"] as const) {
  const p = join(ROOT, `src/i18n/dict/${lang}.json`);
  if (existsSync(p)) dicts[lang] = JSON.parse(readFileSync(p, "utf8"));
}
// English strings with no translation yet; written to dist/i18n-missing.json so
// new pages/posts can be spotted and added to src/i18n/dict/<lang>.json.
const untranslated: Record<string, Set<string>> = { es: new Set(), ru: new Set() };
const tr = (lang: Lang, s: string) => {
  if (lang === "en" || !s) return s;
  const hit = dicts[lang][norm(s)];
  if (hit === undefined) untranslated[lang].add(norm(s));
  return hit ?? s;
};
// Titles are "<page> | CT Truck & Trailer Shop" (or "<post> — ... Blog"):
// translate the page part, keep the brand suffix.
// Titles carry brand suffixes ("<page> | CT Truck & Trailer Shop",
// "<post> — CT Truck & Trailer Shop Blog | ...", "<page> – CT Truck & Trailer Shop"):
// translate the page part, keep the suffix as is.
const BRAND_SUFFIX = /\s*[|–—-]\s*CT Truck (?:&|and) Trailer Shop(?: Blog)?\s*$/;
function translateTitle(lang: Lang, t: string): string {
  if (lang === "en") return t;
  let core = t;
  let suffix = "";
  for (let m = core.match(BRAND_SUFFIX); m && m.index; m = core.match(BRAND_SUFFIX)) {
    suffix = core.slice(m.index) + suffix;
    core = core.slice(0, m.index);
  }
  return tr(lang, core) + suffix;
}
const urlFor = (lang: Lang, path: string) => {
  const p = lang === "en" ? path : `/${lang}${path === "/" ? "" : path}`;
  return `${BASE_URL}${p === "/" ? "" : p}`;
};
const alternates = (path: string) =>
  LANGS.map((l) => `\n    <link rel="alternate" hreflang="${l}" href="${urlFor(l, path)}" />`).join("") +
  `\n    <link rel="alternate" hreflang="x-default" href="${urlFor("en", path)}" />`;

let written = 0;
for (const page of pages) {
  for (const lang of LANGS) {
    if (lang === "en" && page.path === "/") {
      // index.html keeps its hand-tuned English head; just add the language alternates.
      // Guarded so re-running this script on the same dist/ doesn't duplicate them.
      if (!shell.includes('hreflang="es"')) {
        writeFileSync(SHELL, shell.replace(/<\/head>/i, `${alternates("/")}\n  </head>`), "utf8");
      }
      continue;
    }

    const outPath = lang === "en" ? page.path : `/${lang}${page.path === "/" ? "" : page.path}`;
    const dir = join(DIST, outPath);
    mkdirSync(dir, { recursive: true });

    const title = translateTitle(lang, fullTitle(page.title));
    const description = tr(lang, page.description);
    const canonical = urlFor(lang, page.path);
    const ogType = page.ogType || "website";

    // Build the per-route head block.
    const headBlock = `
    <title>${escapeHtml(title)}</title>
    <meta name="title" content="${escapeHtml(title)}" />
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${canonical}" />${alternates(page.path)}
    <meta property="og:type" content="${ogType}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:site_name" content="${SITE}" />
    <meta property="og:image" content="${BASE_URL}/og-image.jpg" />
    <meta property="og:locale" content="${OG_LOCALE[lang]}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${canonical}" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${BASE_URL}/og-image.jpg" />`;

    const jsonLdBlock = (page.jsonLd || [])
      .map(
        (obj) =>
          `\n    <script type="application/ld+json">${JSON.stringify(obj)}</script>`,
      )
      .join("");

    // Inject head block + json-ld block just before </head>; set <html lang>.
    const html = cleanShell
      .replace(/<html lang="[^"]*">/i, `<html lang="${lang}">`)
      .replace(/<\/head>/i, `${headBlock}${jsonLdBlock}\n  </head>`);

    writeFileSync(join(dir, "index.html"), html, "utf8");
    written++;
  }
}

writeFileSync(
  join(DIST, "i18n-missing.json"),
  JSON.stringify({ es: [...untranslated.es].sort(), ru: [...untranslated.ru].sort() }, null, 1),
  "utf8",
);
if (untranslated.es.size || untranslated.ru.size) {
  console.warn(
    `i18n: ${untranslated.es.size} es / ${untranslated.ru.size} ru title/description string(s) untranslated — see dist/i18n-missing.json`,
  );
}

console.log(
  `Pre-injected meta for ${written} route(s) (en + es + ru) into dist/<route>/index.html`,
);

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
