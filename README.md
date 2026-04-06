# Rice Cricket Club Website

This repository contains the version 1 scaffold for the Rice Cricket Club website.

The project is designed to support a premium, image-forward, static website that can recruit students, show club activity and culture, strengthen institutional credibility, and eventually support the case for facilities such as cricket nets and a pitch. The site is being built to deploy cleanly on GitHub Pages first and later move to a custom domain.

## Stack

- Astro
- TypeScript
- Astro content collections
- Plain CSS with shared design tokens
- GitHub Actions for deployment to GitHub Pages

The project intentionally avoids backend infrastructure, Firebase, and unnecessary complexity in version 1.

## Planning Docs

The product and architecture decisions in this repo come from the planning package in `docs/`:

- [docs/site-vision.md](docs/site-vision.md)
- [docs/site-map.md](docs/site-map.md)
- [docs/content-model.md](docs/content-model.md)
- [docs/design-direction.md](docs/design-direction.md)
- [docs/implementation-roadmap.md](docs/implementation-roadmap.md)

Future changes should stay aligned with those documents unless the product direction is intentionally revised.

## Repo Organization

```text
.
|-- .github/workflows/      # GitHub Pages deployment
|-- docs/                   # Planning and architecture docs
|-- public/                 # Public assets copied as-is
|-- src/
|   |-- assets/images/      # Source-owned placeholder and future club imagery
|   |-- components/         # Shared UI pieces grouped by responsibility
|   |-- content/            # Markdown content entries for repeatable collections
|   |-- data/               # Typed site-wide data and configuration
|   |-- layouts/            # Shared page layouts
|   |-- pages/              # Route files
|   |-- styles/             # Tokens and global CSS
|   `-- utils/              # Small helper functions
|-- astro.config.mjs
|-- package.json
|-- tsconfig.json
`-- README.md
```

## Content Structure

The site uses content collections for repeatable content types:

- `src/content/stories/`
- `src/content/matches/`
- `src/content/galleries/`
- `src/content/leadership/`

The collection schemas are defined in:

- `src/content.config.ts`
- `src/content/config.ts`

This split keeps Astro's official content config in the expected location while letting shared collection constants live in a smaller supporting file.

## Shared Data

The site-level configuration lives in `src/data/`:

- `site.ts` for title, nav, footer groups, CTAs, social links, SEO defaults, and homepage data
- `faqs.ts` for reusable FAQ content
- `milestones.ts` for timeline and continuity proof points
- `vision.ts` for facilities-facing messaging and long-term support framing

This setup is meant to reduce layout churn when officers only need to update content.

## Routes Created In Chunk 2

Core static routes:

- `/`
- `/about/`
- `/join/`
- `/leadership/`
- `/vision/`

Collection-backed routes:

- `/stories/`
- `/stories/[slug]/`
- `/matches/`
- `/gallery/`
- `/gallery/[slug]/`

These pages are intentionally simple right now. They validate architecture, routing, and content flow rather than final presentation.

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build the site:

```bash
npm run build
```

Run Astro's project checks:

```bash
npm run check
```

## Deployment

The project is configured for GitHub Pages using `.github/workflows/deploy.yml` and Astro's official GitHub Action.

Current deployment assumptions:

- `site` is configured for the repository's GitHub Pages URL
- `base` is configured for the repository name `Rice-Cricket`
- GitHub Pages should use `GitHub Actions` as the Pages source

If the site later moves to `cricket.rice.edu`, the custom domain steps will be:

1. Add `public/CNAME`
2. Update `site` in `astro.config.mjs` to the custom domain
3. Remove the `base` setting if the custom domain becomes the primary root
4. Verify internal links after that change

Do not add `public/CNAME` until the domain decision is confirmed.

## Maintainability Notes For Future Officers

- Prefer updating collection entries and shared data files over editing layout code
- Keep story, match, gallery, and leadership entries small and structured
- Reuse components rather than creating page-specific one-offs too early
- Treat the planning docs as the product source of truth
- Preserve accessibility fundamentals as the design gets more polished

## Design System Notes

Chunk 3 establishes a shared presentation foundation without turning the project into a complicated theming system.

- `src/styles/tokens.css` defines semantic tokens for color, type roles, spacing, layout widths, radii, shadows, and motion timing
- `src/styles/global.css` provides the global shell, typography rhythm, card language, and responsive defaults
- `src/components/sections/` holds shared structural primitives such as `PageHero`, `SectionShell`, `SectionIntro`, `MediaSplit`, and `CtaBlock`
- `src/components/cards/` and `src/components/interactive/` hold the reusable UI pieces that future page work should compose rather than replace

The guiding idea is simple: strong shared structure first, page-specific polish second.

## What Chunk 4 Should Focus On

Chunk 4 should build on this design-ready foundation by deepening the actual page content and composition:

- Stronger homepage storytelling and image hierarchy
- Richer About and Join page sections
- More complete Leadership and Vision page content
- Better collection page presentation for Stories, Matches, and Gallery
- Content loading with more real club material and less placeholder copy

Chunk 4 should not need to revisit the overall shell, token system, or base navigation architecture unless a clear issue appears.
