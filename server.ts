import express, { Request, Response, NextFunction } from "express";
import { Pool } from "pg";
import path from "node:path";
import fs from "node:fs";

const NODE_ENV = process.env.NODE_ENV ?? "development";
const IS_PROD = NODE_ENV === "production";
const PORT = IS_PROD ? 5000 : 3001;

if (!process.env.DATABASE_URL) {
  console.error("[server] DATABASE_URL is not set. Aborting.");
  process.exit(1);
}

const ADMIN_TOKEN = process.env.LEADS_ADMIN_TOKEN;
if (!ADMIN_TOKEN) {
  console.error(
    "[server] LEADS_ADMIN_TOKEN is not set. Refusing to start — the GET /api/leads endpoint would be unprotected. " +
      "Set LEADS_ADMIN_TOKEN as a shared environment variable (32 random bytes, hex)."
  );
  process.exit(1);
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const ALLOWED_SOURCES = new Set([
  "website-quote-form",
  "website-contact-form",
  "website-hero-form",
  "website-quote-modal",
  "website-service-page-form",
  "website-unknown",
]);

const MAX_LENGTHS: Record<string, number> = {
  name: 100,
  phone: 30,
  email: 255,
  vehicle: 150,
  message: 4000,
  source: 64,
};

function clean(value: unknown, field: keyof typeof MAX_LENGTHS): string {
  if (value == null) return "";
  const s = String(value).trim();
  return s.slice(0, MAX_LENGTHS[field]);
}

const app = express();
app.use(express.json({ limit: "10kb" }));

// --- Public: insert a lead ---
app.post("/api/leads", async (req: Request, res: Response) => {
  try {
    const name = clean(req.body?.name, "name");
    const phone = clean(req.body?.phone, "phone");
    const email = clean(req.body?.email, "email");
    const vehicle = clean(req.body?.vehicle, "vehicle");
    const message = clean(req.body?.message, "message");
    let source = clean(req.body?.source, "source");

    if (!ALLOWED_SOURCES.has(source)) source = "website-unknown";

    if (!name || !phone || !message) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields: name, phone, message",
      });
    }

    await pool.query(
      `INSERT INTO leads (name, phone, email, vehicle, message, source)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [name, phone, email || null, vehicle || null, message, source]
    );

    return res.json({ success: true });
  } catch (err) {
    console.error("[server] POST /api/leads error:", err);
    return res.status(500).json({ success: false, error: "Server error" });
  }
});

// --- Protected: list leads ---
function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const auth = req.header("authorization") ?? "";
  const match = auth.match(/^Bearer\s+(.+)$/i);
  const token = match?.[1]?.trim();
  if (!token || token !== ADMIN_TOKEN) {
    return res.status(401).json({ success: false, error: "Unauthorized" });
  }
  return next();
}

app.get("/api/leads", requireAdmin, async (_req: Request, res: Response) => {
  try {
    const result = await pool.query(
      `SELECT id, name, phone, email, vehicle, message, source, created_at
       FROM leads
       ORDER BY created_at DESC`
    );
    return res.json({ success: true, count: result.rowCount, leads: result.rows });
  } catch (err) {
    console.error("[server] GET /api/leads error:", err);
    return res.status(500).json({ success: false, error: "Server error" });
  }
});

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ ok: true, env: NODE_ENV });
});

// --- Production: serve the Vite build ---
const distDir = path.resolve(process.cwd(), "dist");
if (IS_PROD && fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  app.use((_req: Request, res: Response) => {
    res.sendFile(path.join(distDir, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`[server] Listening on port ${PORT} (NODE_ENV=${NODE_ENV})`);
});
