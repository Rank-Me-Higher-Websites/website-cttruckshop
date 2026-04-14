import { createServer } from "http";
import { readFile } from "fs/promises";
import { join, extname } from "path";
import { existsSync } from "fs";

const PORT = 5000;
const DIST = join(process.cwd(), "dist");

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
  let filePath = join(DIST, url.pathname);

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

  try {
    const html = await readFile(join(DIST, "index.html"));
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(html);
  } catch {
    res.writeHead(500);
    res.end("Server error");
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Serving on port ${PORT}`);
});
