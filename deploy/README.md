# Deploy

cttruckshop.com runs on the **rankmehigher VPS** (`2.24.92.100`) behind
Caddy. This folder is the SOURCE OF TRUTH for everything the VPS needs
that isn't a runtime secret.

## Layout (the contract)

```
Git repo (this folder, version controlled)
├── deploy/
│   ├── caddy.snippet     ← Caddy host config (gets copied to /opt/n8n/sites.d/)
│   ├── .env.example      ← runtime env vars, no secret values
│   └── README.md         ← this file
└── dist/                  ← built output (committed? no — built on VPS)

VPS (not in git)
├── /opt/sites/website-cttruckshop/
│   ├── (git working tree, autopulled from main)
│   ├── dist/              ← built on VPS via docker node:20
│   └── .env               ← REAL secrets, chmod 600, NEVER committed
└── /opt/n8n/sites.d/website-cttruckshop.caddy   ← copy of deploy/caddy.snippet
```

## Where SEO changes go

**All of these belong in this git repo, not on the VPS:**

- Page copy, H1s, meta titles, meta descriptions
- JSON-LD schema (per-page + global in `index.html`)
- `public/sitemap.xml`
- `public/robots.txt`
- 301 / 302 redirects (in `deploy/caddy.snippet`)
- New landing pages, blog posts
- Image alt text, file names
- Build-time scripts (`scripts/inject-meta.ts`, `scripts/generate-sitemap.ts`)
- Caddy headers (security, caching, HSTS)

**Anything that goes on the VPS only:**

- API keys (Resend, DB credentials, admin tokens)
- The actual `.env` file (template `.env.example` lives in git)
- Built `dist/` output
- Cron schedules / autopull triggers
- GSC service account JSON (shared at `/opt/seo-pipeline/credentials/gsc-sa.json`)

## Deploy flow

1. PR your change to `main`
2. GitHub webhook (or scheduled autopull cron) fires on VPS:
   ```
   cd /opt/sites/website-cttruckshop
   git pull
   docker run --rm -v $PWD:/app -w /app node:20 sh -c "npm ci && npm run build"
   cp deploy/caddy.snippet /opt/n8n/sites.d/website-cttruckshop.caddy
   docker exec n8n-caddy-1 caddy reload --config /etc/caddy/Caddyfile
   ```
3. Verify live:
   - `curl -I https://cttruckshop.com/` → 200
   - `curl -I https://cttruckshop.com/blog/emergency-truck-repair` → 301 to keeper
   - `curl -s https://cttruckshop.com/commercial-truck-repair-phoenix-az | grep '<title>'`
     → unique route title (not the homepage title)

## How to populate secrets the first time

```bash
# 1. SSH to VPS
ssh -i ~/.ssh/rankmehigher_vps root@2.24.92.100

# 2. Copy template
cp /opt/sites/website-cttruckshop/deploy/.env.example /opt/sites/website-cttruckshop/.env

# 3. Lock down
chmod 600 /opt/sites/website-cttruckshop/.env
chown root:root /opt/sites/website-cttruckshop/.env

# 4. Edit with real values
nano /opt/sites/website-cttruckshop/.env
```

## How to manually apply a Caddy change (until autopull is wired)

```bash
scp deploy/caddy.snippet root@2.24.92.100:/opt/n8n/sites.d/website-cttruckshop.caddy
ssh -i ~/.ssh/rankmehigher_vps root@2.24.92.100 \
  "docker exec n8n-caddy-1 caddy reload --config /etc/caddy/Caddyfile"
```

## Verifying redirects after a Caddy change

```bash
# Should 301 to phoenix-arizona keeper
curl -sI https://cttruckshop.com/blog/emergency-truck-repair | grep -i 'location\|HTTP'

# Should 301 to /privacy
curl -sI https://cttruckshop.com/privacy-policy-terms-and-conditions | grep -i 'location\|HTTP'

# Should 200 with unique title
curl -s https://cttruckshop.com/semi-truck-repair-shop-phoenix-az | grep -E '<title>|canonical'
```

## What's in `serve.js` and is it used?

`serve.js` at the repo root is a fallback Node static server for local
development / preview only. In production, Caddy serves `dist/` directly —
the `REDIRECTS_301` map in `serve.js` is for parity during `npm run preview`
but it does NOT take effect on https://cttruckshop.com. The real prod
redirects live in `deploy/caddy.snippet` above.
