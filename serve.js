// LOCAL PREVIEW SERVER ONLY.
//
// Production cttruckshop.com is served by Caddy on the rankmehigher VPS
// (see deploy/caddy.snippet — that's the real source of truth for 301s
// and headers in prod). This file exists for `npm run preview`-style local
// development and parity testing.
//
// If you change a production redirect, change deploy/caddy.snippet, NOT
// this file. Keep the REDIRECTS_301 map below in sync for local-preview
// fidelity, but understand it does NOT affect production behavior.
import { createServer } from "http";
import { readFile } from "fs/promises";
import { join, extname } from "path";
import { existsSync } from "fs";

const PORT = Number(process.env.PORT) || 5000;
const DIST = join(process.cwd(), "dist");

// 301 redirects for indexed orphan URLs + cannibalized content.
// These flow link equity to current canonical pages.
// Keep in sync with deploy/caddy.snippet (prod) and docs/seo/SEO_EXECUTION_PLAN.md.
const REDIRECTS_301 = {
  // Cannibalized emergency-repair blog posts -> single keeper.
  // Keeper has "phoenix-arizona" suffix (best metadata, location-qualified).
  "/blog/emergency-repair-services": "/blog/emergency-truck-repair-phoenix-arizona",
  "/blog/emergency-truck-repair": "/blog/emergency-truck-repair-phoenix-arizona",
  "/blog/emergency-truck-repair-solutions": "/blog/emergency-truck-repair-phoenix-arizona",

  // Orphan URLs Google has indexed that aren't in our sitemap.
  // Source: GSC indexation report 2026-05-27.
  "/blog/commercial-truck-repair": "/commercial-truck-repair-phoenix-az",
  "/blog/semi-truck-repair-fast-and-reliable": "/semi-truck-repair-shop-phoenix-az",
  "/mobile-truck-repair-keeping-your-rig-rolling-when-the-shop-comes-to-you":
    "/blog/mobile-truck-repair-keeping-your-rig-rolling-when-the-shop-comes-to-you",
  "/privacy-policy-terms-and-conditions": "/privacy",
  "/reliable-semi-truck-service-for-your-fleet":
    "/blog/reliable-semi-truck-service-for-your-fleet",
  "/reliable-semi-truck-service-in-phoenix-arizona":
    "/blog/reliable-semi-truck-service-in-phoenix-arizona",

  // Legacy WordPress page paths (still indexed per GSC 2026-05-28).
  // Map each to the closest current canonical.
  "/about-us": "/about",
  "/news": "/blog",
  "/24h-towing-services-benefits": "/blog/24h-towing-services-benefits",
  "/semi-truck-repair-services": "/services",
  "/semi-trailer-repair-services": "/services",
  "/semi-truck-tire-brake-repair": "/semi-truck-tire-and-brake-repair-services-phoenix-az",
  "/mobile-repair-service-arizona": "/mobile-repair",
  "/semi-truck-engine-repair": "/semi-truck-engine-repairs-in-phoenix-az",
  "/commercial-truck-repair": "/commercial-truck-repair-phoenix-az",
  "/semi-truck-diagnostics": "/semi-truck-diagnostics-in-phoenix-az",
  "/truck-diagnostics": "/semi-truck-diagnostics-in-phoenix-az",
  "/semi-truck-transmission-repair-guide": "/blog/semi-truck-transmission-repair-guide",

  // Trailing slashes -> canonical (no trailing slash, matches sitemap).
  // Handled below via dynamic logic, not in this map.
  // WordPress /author/* archives also handled below as a prefix match.
};

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".webmanifest": "application/manifest+json",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
};

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  let pathname = url.pathname;

  // 1) Exact 301 redirects for orphan + cannibalized URLs.
  const target = REDIRECTS_301[pathname];
  if (target && target !== pathname) {
    res.writeHead(301, {
      Location: target,
      "Cache-Control": "public, max-age=86400",
    });
    res.end();
    return;
  }

  // 1b) WordPress author archives -> blog index.
  if (pathname.startsWith("/author/")) {
    res.writeHead(301, {
      Location: "/blog",
      "Cache-Control": "public, max-age=86400",
    });
    res.end();
    return;
  }

  // 2) Strip trailing slashes (except root) -> canonical no-slash.
  if (pathname.length > 1 && pathname.endsWith("/")) {
    res.writeHead(301, {
      Location: pathname.slice(0, -1) + url.search,
      "Cache-Control": "public, max-age=86400",
    });
    res.end();
    return;
  }

  let filePath = join(DIST, pathname);

  // 3) Exact file (with extension) — assets, sitemap.xml, robots.txt, etc.
  if (existsSync(filePath) && !filePath.endsWith("/")) {
    const ext = extname(filePath);
    if (MIME[ext]) {
      try {
        const data = await readFile(filePath);
        const isAsset = url.pathname.startsWith("/assets/") || ext !== ".html";
        res.writeHead(200, {
          "Content-Type": MIME[ext],
          ...(isAsset ? { "Cache-Control": "public, max-age=31536000, immutable" } : {}),
        });
        res.end(data);
        return;
      } catch {}
    }
  }

  // 4) Per-route HTML generated by scripts/inject-meta.ts.
  //    e.g. /commercial-truck-repair-phoenix-az  ->  dist/commercial-truck-repair-phoenix-az/index.html
  //    Gives Google route-specific <title>, <meta description>, canonical and JSON-LD.
  const routeHtml = join(DIST, pathname, "index.html");
  if (pathname !== "/" && existsSync(routeHtml)) {
    try {
      const html = await readFile(routeHtml);
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=300, must-revalidate",
      });
      res.end(html);
      return;
    } catch {}
  }

  // 5) SPA catch-all: dist/index.html (also used for /).
  try {
    const html = await readFile(join(DIST, "index.html"));
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300, must-revalidate",
    });
    res.end(html);
  } catch {
    res.writeHead(500);
    res.end("Server error");
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Serving on port ${PORT}`);
});
