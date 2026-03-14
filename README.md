# TriView Electronics Website

Astro-powered marketing site for TriView Electronics.

## Development

```bash
npm install
npm run dev
```

Local dev server: http://localhost:4321 (in this environment, it is reverse-proxied to port 3090).

## Quality checks

### Quick SEO smoke audit

Runs fast, heuristic checks to catch obvious SEO regressions (canonical/OG/Twitter/hreflang presence + basic H1 hints).

```bash
npm run seo:audit
```

### Playwright smoke tests

Basic i18n smoke checks with screenshots.

```bash
npm run test:smoke
```

## Notes

- The `seo-audit` script is intentionally lightweight and heuristic. Treat it as a fast smoke check, not a full SEO crawler.
