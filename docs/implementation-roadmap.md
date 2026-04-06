# Implementation Roadmap

## Recommended Version 1 Technical Architecture

### Framework Choice

Use `Astro` with `TypeScript`.

Why Astro is the right fit for this project:

- The site is content-first rather than app-first
- Static output works naturally with GitHub Pages
- Astro keeps client-side JavaScript low by default
- Content collections provide a clean model for stories, matches, galleries, and leadership profiles
- The framework is easier to keep maintainable for future officers than a more app-oriented stack

### Astro vs Next.js Static Export

Astro is the better default here because:

- It makes static content and mixed page composition straightforward
- It does not push the project toward unnecessary client-side complexity
- Its content collection model fits the club's update patterns very well

Next.js static export is only worth revisiting later if the club truly needs:

- authenticated editing tools
- dynamic integrations
- heavier client-side application behavior

Those are not version 1 needs.

### Recommended Content Approach

- Component-driven marketing pages for `Home`, `About`, `Join`, and `Vision`
- Astro collections for `Stories`, `Matches`, `Galleries`, and `Leadership`
- Centralized data files for navigation, contact info, homepage stats, milestones, and FAQs

### Static Site Strategy

- Fully static build output
- No backend services in version 1
- Minimal interactive islands only where they clearly improve the experience
- GitHub Pages deployment through GitHub Actions

### Blog And News Strategy

Use one `Stories` collection with categories such as:

- announcement
- recap
- milestone
- feature

This keeps the content system simple while still supporting multiple editorial needs.

### Image And Content Organization

- Keep web-ready images in the repo
- Organize by content domain and season
- Optimize images before commit when possible
- Keep the full high-resolution archive outside the repo if asset volume grows

## Recommended Folder Structure

```text
.
|-- .github/
|   `-- workflows/
|       `-- deploy.yml
|-- docs/
|   |-- content-model.md
|   |-- design-direction.md
|   |-- implementation-roadmap.md
|   |-- site-map.md
|   `-- site-vision.md
|-- public/
|   |-- favicon.svg
|   `-- CNAME
|-- src/
|   |-- assets/
|   |   `-- images/
|   |       |-- galleries/
|   |       |-- leadership/
|   |       |-- matches/
|   |       |-- shared/
|   |       `-- stories/
|   |-- components/
|   |   |-- cards/
|   |   |-- interactive/
|   |   |-- layout/
|   |   |-- navigation/
|   |   `-- sections/
|   |-- content/
|   |   |-- galleries/
|   |   |-- leadership/
|   |   |-- matches/
|   |   |-- stories/
|   |   `-- config.ts
|   |-- data/
|   |   |-- faqs.ts
|   |   |-- milestones.ts
|   |   |-- site.ts
|   |   `-- vision.ts
|   |-- layouts/
|   |   |-- BaseLayout.astro
|   |   `-- StoryLayout.astro
|   |-- pages/
|   |   |-- about.astro
|   |   |-- gallery/
|   |   |-- index.astro
|   |   |-- join.astro
|   |   |-- leadership.astro
|   |   |-- matches/
|   |   |-- stories/
|   |   `-- vision.astro
|   |-- styles/
|   |   |-- global.css
|   |   `-- tokens.css
|   `-- utils/
|       |-- content.ts
|       `-- format.ts
|-- astro.config.mjs
|-- package.json
|-- tsconfig.json
`-- README.md
```

## Build Phases

## Phase 1: Planning Foundation

Outputs:

- Site vision
- Information architecture
- Content model
- Design direction
- Implementation roadmap

Success criteria:

- Another engineer can begin scaffolding without reopening product questions
- Page purposes and content responsibilities are clear

## Phase 2: Project Scaffold

Outputs:

- Astro project initialized
- TypeScript configured
- Base layout and routing structure in place
- Content collections defined
- GitHub Pages deployment workflow added

Success criteria:

- The project builds locally
- Deployment path is validated
- Content schemas are ready before page implementation begins

## Phase 3: Design System And Shell

Outputs:

- Design tokens
- Typography system
- Global styles
- Header, mobile nav, footer, section wrappers
- Shared CTA and card primitives

Success criteria:

- The site shell feels cohesive before page-specific content is added
- Navigation is stable across breakpoints
- Accessibility basics are present from the start

## Phase 4: Core Marketing Pages

Outputs:

- Home
- About
- Join
- Leadership
- Vision

Success criteria:

- The core recruiting and credibility story works even before all archive content is loaded
- CTA paths are clear and the site already feels launchable in structure

## Phase 5: Collection-Driven Pages

Outputs:

- Stories index and detail pages
- Matches index and archive structure
- Gallery overview and album pages

Success criteria:

- New entries can be added without editing layout code
- Archive pages feel intentional rather than bolted on

## Phase 6: Polish And Proof

Outputs:

- Refined image treatment
- Lightbox experience
- Subtle motion
- Metadata and social sharing support
- Accessibility review and responsive QA

Success criteria:

- The site feels premium, not just functional
- Motion and interaction add value rather than distraction

## Phase 7: Content Load And Launch

Outputs:

- Real stories, match data, leadership profiles, and galleries
- Final copy review
- GitHub Pages deployment
- Domain mapping planning for `cricket.rice.edu`

Success criteria:

- The live site reflects real club activity
- Future officers can see how to keep it updated

## Deployment Recommendation

### Initial Deployment

- Deploy through GitHub Actions to GitHub Pages
- Keep the build static and reproducible
- Use preview branches or local review before merging to main

### Domain Path

- Launch first on the GitHub Pages domain
- Add a `CNAME` when ready for `cricket.rice.edu`
- Coordinate final DNS setup with the university or appropriate domain owner

## Maintainability Strategy

To keep the site healthy across officer transitions:

- Keep content entry patterns simple and documented
- Prefer small typed config files over repeated hardcoded values
- Use a limited set of reusable components
- Avoid introducing tooling that only one person understands
- Document how to add stories, matches, galleries, and leaders as part of later implementation

## Accessibility And Quality Gates

Every implementation phase should preserve:

- Semantic HTML
- Keyboard accessibility
- Visible focus states
- Strong contrast
- Reduced-motion support
- Responsive layouts that work well on mobile and desktop

## Suggested Immediate Next Implementation Tasks

When the team moves beyond planning, the next practical coding tasks should be:

1. Initialize the Astro project
2. Add content collections and shared data files
3. Create the base layout, navigation, footer, and tokens
4. Implement the homepage and core static pages
5. Layer in the collection-driven archive pages

This sequence reduces rework and keeps the site coherent as it grows.
