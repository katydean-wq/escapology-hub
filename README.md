# The Hub — Escapology Franchise Portal

A static website that replaces the existing Google Site. Designed on-brand (Iron / Brass / Paper palette, Cormorant Garamond + Nunito Sans as stand-ins for Alverata + Museo Sans).

## File structure

```
hub-site/
├── index.html          # Home (quick actions, news, popular resources)
├── marketing.html      # Marketing section
├── operations.html     # Operations section
├── games.html          # Games catalog
├── training.html       # Training section
├── news.html           # News & Updates feed
├── documents.html      # Searchable document directory
└── assets/
    ├── styles.css      # All styles
    └── nav.js          # Shared sidebar + topbar injector
```

## How to preview locally

Just open `index.html` in a browser. Everything else loads relatively. Or run a tiny local server:

```bash
cd hub-site
python3 -m http.server 8000
# visit http://localhost:8000
```

## Typography

The prototype uses Google Fonts approximations:
- **Cormorant Garamond** (stand-in for **Alverata**)
- **Nunito Sans** (stand-in for **Museo Sans**)

When deployed for real, swap the `<link>` tag in each `.html` file (or better, in a shared partial) for your licensed Alverata and Museo Sans hosted via Adobe Fonts, Monotype, or self-hosted WOFF2 files.

## Color tokens (in `assets/styles.css`)

All pulled from Brand Standards v1.0. Primary: `--brass #B77729`, `--iron #3B4559`, `--paper #FFFEF6`, `--black #021414`.

## Hosting + authentication (the important part)

The current Google Sites has ONE killer feature: it gates access to `@escapology.com` email addresses via Google Workspace SSO — and it does it for free. We need to replicate that. Three good options, ranked by effort:

### Option 1: Cloudflare Pages + Cloudflare Access (RECOMMENDED)

- **Hosting:** Free tier of Cloudflare Pages. Drag-and-drop deployment or Git-based.
- **Auth:** Cloudflare Access (free up to 50 users, ~$3/user/month above that). Configure a rule that requires a Google Workspace login with `@escapology.com` email domain. Identical user experience to the current Google Sites gating.
- **Cost:** Free for small teams. Roughly $600–750/month for 200 users at the paid tier — verify current pricing at cloudflare.com/plans/zero-trust-services.
- **Effort:** Half-day setup.

### Option 2: Google Cloud Storage + Identity-Aware Proxy (IAP)

- **Hosting:** Static site hosted on a GCS bucket behind a Google Cloud Load Balancer.
- **Auth:** Google IAP, restricted to `@escapology.com`. Native Google Workspace integration.
- **Cost:** A few dollars/month in GCP usage.
- **Effort:** More setup (requires GCP project, load balancer, IAP config). Good if your IT is already in GCP.

### Option 3: Netlify / Vercel + an auth layer

- **Hosting:** Free on Netlify or Vercel.
- **Auth:** Netlify Identity, Vercel Password Protection, or a custom Google OAuth layer via a serverless function.
- **Cost:** Varies.
- **Effort:** Easy hosting, trickier auth if you want true SSO.

**My recommendation: Option 1.** Cloudflare Access is the closest 1:1 replacement for "Google Sites gated to @escapology.com."

## Iframing content

- **Google Docs / Sheets / Slides:** embed fine with the `/embed` URL. Use for any document you don't want to migrate.
- **Google Sites (the existing Hub):** does NOT allow iframing reliably. X-Frame-Options blocks it. Plan to migrate or link out.
- **Resova (booking):** check with Resova — most SaaS dashboards support iframing with an auth token.

Iframe slots are already in place as `.iframe-placeholder` divs on marketing, operations, and games pages. Swap the placeholder for a real `<iframe>` when you have a URL.

## What's still placeholder

- All news items (dates, titles, descriptions)
- All resource card descriptions
- The 15 games' detail pages (the catalog tiles link to `#` anchors only)
- The document table on `documents.html`
- User name "Katy" and "Orlando, FL" in the topbar
- The avatar (currently shows "KD")

## What's NOT in this prototype yet

- **Real search.** The search bar is decorative. For real search, wire it to Pagefind (free static search), Algolia, or just a simple JS filter over a JSON index of your documents.
- **A CMS.** If you want non-devs to edit content, pair this with a headless CMS (e.g., Decap CMS, Sanity, Contentful) or accept that updates go through Git.
- **The 15 game detail pages.** Each needs its own template. Easy to generate once we have the game content.
- **A mobile hamburger menu.** Sidebar currently hides on screens under 720px. A burger menu is a straightforward add.

## Next steps (suggested)

1. Review the prototype and give feedback on look + feel + structure.
2. Decide on hosting + auth (Option 1 / 2 / 3 above).
3. Decide which existing Google Sites content gets:
   - migrated into this site,
   - kept in Google Docs/Sheets/Slides and iframed,
   - kept in Google Sites with a link-out,
   - deleted.
4. Fill in real content (news items, document list, game details).
5. Deploy.
