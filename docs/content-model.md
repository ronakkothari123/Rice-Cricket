# Content Model

## Content Strategy Principles

The site should separate stable marketing content from repeatable club updates.

- Stable pages should be implemented as route files fed by centralized data.
- Repeatable content should live in structured collections.
- Club metadata should be stored in config files rather than scattered through components.
- The model should assume officer turnover and low-friction updates.

## Major Content Types

| Content Type | Purpose | Update Cadence | Storage Model |
| --- | --- | --- | --- |
| Static pages | Present durable marketing and organizational information | Infrequent | Static route files with shared data sources |
| Stories | Publish announcements, recaps, milestones, and features | Occasional | Collection-based |
| Matches | Track fixtures, results, and score summaries | During season | Collection-based |
| Galleries | Group photos by event or theme | After major events | Collection-based |
| Leadership profiles | Show current officers and key contact points | Semesterly or annually | Collection-based |
| Site config | Control navigation, metadata, social links, CTAs, and stats | As needed | Typed data files |
| Timeline milestones | Power About and Vision proof sections | Occasional | Typed data file or small collection |
| FAQ entries | Keep common answers reusable across pages | Low to moderate | Typed data file |

## Static Pages

The following pages should be treated as stable routes rather than content entries:

- Home
- About
- Join
- Vision

These pages will still draw from centralized structured data for items such as stats, FAQs, milestones, and calls to action, but their layout should stay component-driven.

## Stories Collection

### Purpose

Stories unify the club's editorial layer into one flexible system. This avoids splitting content between a news section and a blog section that officers may struggle to maintain separately.

### Recommended Fields

- `title`
- `slug`
- `publishDate`
- `summary`
- `category`
- `tags`
- `heroImage`
- `featured`
- `author`
- `excerpt`
- `readingTime` or derived reading metadata
- `body`

### Recommended Categories

- `announcement`
- `recap`
- `milestone`
- `feature`

### Update Cadence

Occasional. The site should work even if only a handful of high-quality stories are published each semester.

### Notes

- A match recap is still a story.
- A milestone post should be easy to feature on the homepage.
- Tagging should support lightweight filtering without requiring a complex search experience in version 1.

## Matches Collection

### Purpose

Matches provide the competitive proof layer of the site and create an archive that shows continuity over time.

### Recommended Fields

- `date`
- `season`
- `opponent`
- `competition`
- `venue`
- `result`
- `scoreSummary`
- `status`
- `featured`
- `heroImage`
- `recapSlug`
- `externalScorecardUrl`
- `notes`

### Typical Status Values

- `upcoming`
- `completed`
- `canceled`

### Typical Result Values

- `win`
- `loss`
- `draw`
- `no-result`

### Update Cadence

Whenever matches are scheduled or completed. This collection may be updated more frequently than stories during peak season.

### Notes

- The collection should support both upcoming fixtures and completed results.
- Linking to a related recap story should be optional.
- The structure should be simple enough for officers to update manually without needing an external stats service.

## Galleries Collection

### Purpose

Galleries are the primary visual storytelling system for the site.

### Recommended Fields

- `title`
- `slug`
- `eventDate`
- `season`
- `summary`
- `coverImage`
- `photos`
- `tags`
- `relatedStory`
- `featured`

### Photo Item Shape

Each photo object should support at minimum:

- `src`
- `alt`
- `caption`
- `credit` if needed

### Update Cadence

After major matches, socials, recruiting events, or milestone moments.

### Notes

- Strong captions matter. They keep the gallery from feeling like an uncurated image dump.
- The collection should support both event-based galleries and broader themed albums if needed later.

## Leadership Profiles Collection

### Purpose

Leadership profiles provide a maintainable people system that supports trust and continuity without the overhead of a full public roster.

### Recommended Fields

- `name`
- `role`
- `term`
- `photo`
- `bio`
- `email`
- `major`
- `year`
- `order`
- `active`

### Update Cadence

At officer transitions, usually once per semester or academic year.

### Notes

- Keep the public people model limited and intentional.
- If the club later wants broader member spotlights, those can be added as stories rather than expanding this collection into a full roster.

## Site Config And Shared Data

This data should live outside page components so future officers can update core site settings without reading layout code.

### Recommended Site Config Fields

- `siteTitle`
- `siteDescription`
- `primaryNav`
- `footerGroups`
- `primaryCtas`
- `socialLinks`
- `contactEmail`
- `homepageStats`
- `homepageHighlights`
- `seoDefaults`

### Additional Shared Data Files

- `faqs`
- `timelineMilestones`
- `joinPathways`
- `visionHighlights`
- `clubValues`

## Collection Vs Static Guidance

Use collection-based storage when:

- Multiple entries share the same structure
- New entries will be added over time
- The content should power list pages and detail pages

Use static or data-driven pages when:

- The content is mostly evergreen
- The layout is tightly curated
- The page should not depend on a publishing cadence to feel complete

## Suggested Content Ownership

| Content Area | Primary Owner | Secondary Owner |
| --- | --- | --- |
| Join page details | Recruitment officer or president | Webmaster or communications officer |
| Stories | Communications or social officer | President or match captain |
| Matches | Captain or match coordinator | Webmaster |
| Galleries | Social or media lead | Webmaster |
| Leadership profiles | President or secretary | Webmaster |
| Vision page updates | President | Advisor or facilities-facing leadership if applicable |

## Editorial Cadence Recommendation

Version 1 should assume an evergreen-first rhythm:

- Stable core pages stay useful even when updates are sparse
- Stories are published when there is something worth documenting
- Matches are updated in season
- Galleries are added after major events

This prevents the site from feeling neglected just because officers are busy during the semester.

## Image And Asset Organization

For later implementation, keep web-ready assets organized by content domain and season.

Recommended structure:

- `src/assets/images/stories/`
- `src/assets/images/matches/`
- `src/assets/images/galleries/`
- `src/assets/images/leadership/`
- `src/assets/images/shared/`

If the original photo archive grows too large, keep the full-resolution archive outside the repo and only commit optimized web-ready versions.

## Interface Guidance For Implementation

The implementation should define typed interfaces or schemas for:

- `StoryEntry`
- `MatchEntry`
- `GalleryEntry`
- `LeadershipProfile`
- `SiteConfig`

These should be validated through Astro content schemas so the build fails early if future content is malformed.

## Content Health Checklist

The content model is working well if:

- Officers can add a new story, match, gallery, or leader without touching shared layout code
- The homepage can feature recent proof without hardcoding one-off content blocks
- The site still feels complete during low-update periods
- Content entry fields are obvious enough that new maintainers do not need oral handoff to use them correctly
