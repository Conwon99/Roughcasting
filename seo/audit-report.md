# SEO Audit — J.Kelly Roughcasting

**Audited against:** SEO Master Guide (July 2026)
**Scope:** all pages in the production build (22 HTML pages + sitemap + robots.txt + Netlify config).
**Excluded (by request):** every location-page rule — town pages, location × service matrix pages, the
"by area" grids, location FAQs, location nav/footer lists, and matrix-related page-count targets
(Parts 3.3–3.4, 4 matrix rules, 5.9–5.10, 6.7–6.8, 7.1 "by area", 7.2–7.3, 8.1–8.4 location items,
15.1, 15.9, 16 page-count formula, 17.1–17.2).
**Method:** `npm run build`, then a scripted crawl of `dist/` (titles, meta, H1/H2, word counts,
JSON-LD, images, OG/Twitter, hreflang, geo meta, canonicals) plus a review of `src/` and config.
The live domain could not be fetched from the audit environment, so live HTTP headers and redirects
are listed as "verify after deploy".

---

## Summary

| Area | Status |
|---|---|
| Rendering / crawlability (static Astro, server-rendered meta + JSON-LD) | ✅ Pass |
| Canonicals, hreflang, geo meta, `lang`, viewport | ✅ Pass |
| Open Graph + Twitter Card tags | ✅ Present on every page (OG image too small) |
| Global LocalBusiness schema, review count consistency | ✅ Pass (6 reviews shown = schema `reviewCount` 6) |
| Per-page schema (WebPage / Service / FAQPage / BreadcrumbList) | ✅ Mostly pass |
| One H1 per page, no heading-level skips | ✅ Pass |
| NAP / phone consistency | ✅ Single canonical `tel:+447570658441` sitewide |
| Sitemap | ✅ Generated from data, all indexable routes |
| **Visible placeholder text on live pages** | ❌ Fail — About + Reviews |
| **Duplicate titles / keyword cannibalisation** | ❌ Fail — 2 pairs |
| **Thin category hubs** | ❌ Fail — 119–167 words |
| **Template images hot-linked from a third-party CDN** | ❌ Fail |
| Service page depth (600–800 words) | ⚠️ 6 of 7 under 600 |
| Meta description length (140–160) | ⚠️ 21 of 22 under 140 |
| Image optimisation (WebP, size, dimensions, alt) | ⚠️ Multiple issues |
| robots.txt AI crawler rules | ⚠️ Missing GPTBot / ClaudeBot / PerplexityBot |
| Accessibility landmarks (skip link, nav label) | ⚠️ Missing |
| GBP alignment (link/embed, `sameAs`) | ⚠️ Not linked |

---

## Critical — fix first

### C1. Placeholder text is visible on live pages (Guide 6.10, 15.14, 16)
Customers and Google both see these strings:

| Page | Text | Source |
|---|---|---|
| `/about` | "Video embed placeholder — add if available from business" | `src/pages/about.astro:86` |
| `/about` | "Google Business Profile embed placeholder — paste your embed code here" | `src/pages/about.astro:123` |
| `/about` | "Google Reviews widget placeholder — paste your embed code here." | `src/pages/about.astro:140` |
| `/reviews` | "Google Reviews widget placeholder — paste your embed code here when available." | `src/pages/reviews.astro:117` |

**Fix:** add the real GBP map/review embeds, or delete these blocks until they're available.

### C2. Category hubs and service pages compete for the same keyword (Guide 5.13, 2.5)
Two categories contain one main service each, so the hub and the service page target the same query:

| Category hub | Service page | Clash |
|---|---|---|
| `/smooth-render-ayrshire` | `/services/smooth-render` | **Identical title and identical H1** "Smooth Render in Ayrshire" |
| `/plastering-ayrshire` | `/services/interior-plastering` | **Identical title** "Plastering in Ayrshire \| J.Kelly Roughcasting" (`interior-plastering` has `plastering-ayrshire` as its only category member) |

The breadcrumb on `/services/smooth-render` also reads "Home → Services → Smooth Render → Smooth Render".

**Fix (pick one per pair):**
- Merge: 301 the thinner hub (`/smooth-render-ayrshire`, `/plastering-ayrshire`) to the service page and drop it from categories/sitemap, **or**
- Differentiate: retitle the hub to the broader intent, e.g. "Rendering Services in Ayrshire" (smooth render + render repairs) and "Plastering & Rendering in Ayrshire", and give the service pages the specific titles ("Smooth Render Contractor in Ayrshire", "Interior Plastering in Ayrshire").

### C3. Category hubs are thin (Guide 2.5 — under 300 words on a ranking page)

| Page | Words in `<main>` |
|---|---|
| `/roughcasting-ayrshire` | 167 |
| `/garden-wall-garage-roughcasting-ayrshire` | 157 |
| `/smooth-render-ayrshire` | 144 |
| `/plastering-ayrshire` | 119 |

These are priority-0.8 pages carrying the strongest keywords, but each has only an intro, one local paragraph and service cards.
**Fix:** add 300–500 words per hub as new H2 sections inside the existing container (Guide 6.12): what the category covers, finish/material options, a cost-guidance paragraph, a short process, 3–4 FAQs with `FAQPage` schema, and links to 1–2 relevant project pages.

### C4. Template images are loaded from `c.animaapp.com` (Guide 15.13, 15.14, 10.15)
Five decorative/icon SVGs (shape, arrow, phone, Facebook, logo icon) are hot-linked from the original template's CDN — about 300 requests across the site, 23 per service page. If that CDN removes them, the icons disappear sitewide. They also have no `alt`, which accounts for nearly all of the missing-alt counts below.
**Fix:** download them into `static/icons/` with the `jkellyroughcasting-` prefix and reference them locally. Give decorative ones `alt=""` + `aria-hidden="true"`, and the phone/Facebook icons a descriptive alt or an `aria-label` on the parent link.

---

## High priority

### H1. Service pages are below the 600–800 word target (Guide 6.6)

| Service page | Words |
|---|---|
| `/services/full-house-roughcasting` | 690 ✅ |
| `/services/extension-roughcasting` | 548 |
| `/services/garden-wall-roughcasting` | 542 |
| `/services/render-repairs-patch-ups` | 496 |
| `/services/garage-roughcasting` | 492 |
| `/services/smooth-render` | 491 |
| `/services/interior-plastering` | 466 |

The required H2 order (Guide 6.3) is correct on every page. Expand the "options", "signs you need" and "what to expect" sections, and add a cost-guidance FAQ ("How much does garage roughcasting cost?") to cover the informational cluster (Guide 3.2).

### H2. Meta descriptions are too short (Guide 5.12)
21 of 22 are under 140 characters (range 92–144). Shortest: `/projects/garden-wall-roughcast-kilwinning` (92), `/roughcasting-ayrshire` (93), `/projects/smooth-render-refresh-troon` (95), `/plastering-ayrshire` (98). Extend each to 140–160 characters with service + area + a CTA ("Free quotes — call 07570 658441").

### H3. About page meta description has a wording bug
"…serving **Ayrshire and surrounding Ayrshire**." (`src/pages/about.astro:37`), because `citiesLabel()` returns the region. Change to "…serving Irvine, Kilwinning and the rest of Ayrshire."

### H4. Two titles are too long and will be truncated
- `/services` — 77 chars: "Roughcasting, Render & Plastering Services in Ayrshire | J.Kelly Roughcasting"
- `/about` — 74 chars

Aim for ≤ 60–65. For example, "Roughcasting & Render Services in Ayrshire | J.Kelly" and "About J.Kelly Roughcasting | Ayrshire Render Specialists".

### H5. Images need optimisation (Guide 10.16–10.19)
- **No WebP:** all photos are JPG.
- **Oversized gallery files** (limit 200 KB): `gal-04-v2.jpg` 614 KB, `gal-03-v2.jpg` 504 KB, `gal-05-v2.jpg` 448 KB, `render-repair.jpg` 317 KB.
- **No `width`/`height`** on almost all `<img>` tags (e.g. 43 of 47 on the homepage), which causes layout shift (CLS).
- **Missing `loading` attribute** on most images; set `eager` on the hero/LCP image and `lazy` below the fold.
- **OG/hero image too small** (Guide 10.18): the homepage `og:image` is `gal-02-v2.jpg` at 723×436 px (minimum 1200 px wide; ideal 1200×630). The `about` and `hero` images are also under 1200 px.

**Fix:** use Astro's `<Image>`/`astro:assets` (outputs WebP with dimensions), or convert manually. Add a dedicated 1200×630 OG image.

---

## Medium priority

### M1. robots.txt doesn't explicitly allow AI crawlers (Guide 10.2, 11.2, 15.12)
`static/robots.txt` allows Googlebot, Bingbot, Slurp and social bots, but not GPTBot, ClaudeBot or PerplexityBot. They aren't blocked (the `*` rule allows them), but the guide requires explicit rules. Add:
```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /
```

### M2. Missing `X-Robots-Tag` header (Guide 10.4)
`netlify.toml` sets security and cache headers but not `X-Robots-Tag: index, follow`. Add it to the `/*` block. The 404 page already has a `noindex` meta tag.

### M3. Google Business Profile not connected (Guide 9.1, 12.5)
- Schema `sameAs` contains only the Facebook URL; add the GBP share URL.
- `hasMap` and the embedded map use raw coordinates rather than the GBP listing. Use the GBP "share" or "embed" link so the map shows the business pin and reviews.
- No GBP link or embed on About or Reviews (they're currently the placeholders in C1).

### M4. Accessibility landmarks (Guide 11.4)
- No skip-to-content link.
- `<nav role="navigation">` has no `aria-label="Main navigation"`.
- `<main>` landmark is present ✅, and the heading hierarchy has no skipped levels ✅.

### M5. 404 page has a canonical tag pointing to `/404`
A noindexed error page shouldn't declare a canonical. Remove the `canonical` prop on `src/pages/404.astro`.

### M6. Sitemap `lastmod` is always the build date
Every URL gets today's date on every deploy, so Google learns to ignore it (Guide 17.6). Add an `updated` date field to the data files and use that.

### M7. Analytics / Search Console not configured
`googleAnalyticsId` and `googleAdsId` are empty in `src/data/business.ts`. Without GA4 and Search Console you can't do the post-launch checklist (Guide 16) or CTR review (Guide 17.5).

---

## Low priority / verify

- **`.html` duplicate URLs (Guide 5.2, 15.8):** the build uses `format: 'file'` (`/about.html`). Canonicals point to the clean URL, which mitigates this, but confirm on the live site that `/about.html` returns a 301 to `/about` (Netlify Pretty URLs). If not, add `/*.html /:splat 301` to `_redirects`.
- **Review name check:** the first review is attributed to "Axmie Dxickie" (`src/data/reviews.ts`). Confirm the spelling matches the original Facebook review.
- **Email:** confirm `hello@jkellyroughcasting.co.uk` is a working mailbox. It's in schema and on the contact page.
- **Opening hours:** schema says Mon–Sat 08:00–18:00. Confirm this matches GBP exactly (Guide 12.7).
- **Schema validation:** run the homepage, one service page, one category hub, `/contact` and `/reviews` through the [Rich Results Test](https://search.google.com/test/rich-results) after deploy (Guide 9.5).
- **About page schema:** uses `AboutPage`. The guide suggests `WebPage + Organization`. The global `HomeAndConstructionBusiness` already covers the organisation, so this is acceptable.
- **Lighthouse:** not run in this audit. Target SEO 95+ and mobile Performance 80+ after the image fixes (H5).

---

## What's already good

- Static Astro output: every title, meta tag and JSON-LD block is in the raw HTML (Guide 1.7, 10.23).
- Exactly one H1 per page with the correct `[Service] in [Area]` pattern; homepage H1 and title follow Guide 5.7 / 6.2.
- Service pages follow the 7-section H2 order exactly (Guide 6.3) and include `Service`, `FAQPage` and `BreadcrumbList` schema.
- Global `HomeAndConstructionBusiness` schema is complete: NAP, `areaServed`, `serviceType`, opening hours, `aggregateRating` with `reviewCount` matching the 6 reviews on the page.
- Homepage: 993 words, 4 FAQs with schema, service cards link to `/services/[slug]` (Guide 6.5, 15.10).
- Canonical, hreflang (en-gb / en / x-default), `geo.region` GB-SCT, OG and Twitter tags on every page.
- No duplicate meta descriptions; one consistent phone number sitewide.
- Images use the `jkellyroughcasting-` filename prefix (Guide 10.20).
- 4 project pages with real job descriptions (197–221 words) and breadcrumbs.
- No indexable page is more than 2 clicks from the homepage.

---

## Action list (in order)

1. Remove or replace the 4 visible placeholder blocks (C1).
2. Resolve the smooth-render and plastering title/H1 clashes (C2).
3. Self-host the animaapp SVGs and fix their alt text (C4).
4. Expand the 4 category hubs to 300–500 words with FAQs (C3).
5. Expand 6 service pages to 600+ words (H1).
6. Rewrite meta descriptions to 140–160 chars; fix the About description and the two long titles (H2–H4).
7. Convert images to WebP, add dimensions and loading hints, create a 1200×630 OG image (H5).
8. Update robots.txt, add `X-Robots-Tag`, add a skip link and nav label, remove the 404 canonical (M1, M2, M4, M5).
9. Connect GBP (`sameAs`, map, embeds) and set up GA4 + Search Console (M3, M7).
10. Deploy, then verify the `.html` redirects, Rich Results and Lighthouse (Low priority).
