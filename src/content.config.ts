import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

import {
  matchResults,
  matchStatuses,
  nonEmptyString,
  optionalUrl,
  storyCategories
} from "./content/config";

const stories = defineCollection({
  loader: glob({ base: "./src/content/stories", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: nonEmptyString,
      slug: z.string().trim().min(1).regex(/^[a-z0-9-]+$/),
      publishDate: z.coerce.date(),
      summary: z.string().trim().min(1).max(240),
      category: z.enum(storyCategories),
      tags: z.array(nonEmptyString).default([]),
      heroImage: image().optional(),
      featured: z.boolean().default(false),
      author: nonEmptyString,
      excerpt: z.string().trim().min(1).max(320),
      readingMinutes: z.number().int().positive().max(60).optional()
    })
});

const matches = defineCollection({
  loader: glob({ base: "./src/content/matches", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      date: z.coerce.date(),
      season: nonEmptyString,
      opponent: nonEmptyString,
      competition: nonEmptyString,
      venue: nonEmptyString,
      result: z.enum(matchResults).optional(),
      scoreSummary: z.string().trim().min(1).optional(),
      status: z.enum(matchStatuses),
      featured: z.boolean().default(false),
      heroImage: image().optional(),
      recapSlug: z.string().trim().regex(/^[a-z0-9-]+$/).optional(),
      externalScorecardUrl: optionalUrl,
      notes: z.string().trim().max(400).optional()
    })
});

const galleries = defineCollection({
  loader: glob({ base: "./src/content/galleries", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: nonEmptyString,
      slug: z.string().trim().min(1).regex(/^[a-z0-9-]+$/),
      eventDate: z.coerce.date(),
      season: nonEmptyString,
      summary: z.string().trim().min(1).max(240),
      coverImage: image(),
      photos: z
        .array(
          z.object({
            src: image(),
            alt: nonEmptyString,
            caption: z.string().trim().max(200).optional(),
            credit: z.string().trim().max(120).optional()
          })
        )
        .min(1),
      tags: z.array(nonEmptyString).default([]),
      relatedStory: z.string().trim().regex(/^[a-z0-9-]+$/).optional(),
      featured: z.boolean().default(false)
    })
});

const leadership = defineCollection({
  loader: glob({ base: "./src/content/leadership", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      name: nonEmptyString,
      role: nonEmptyString,
      term: nonEmptyString,
      photo: image(),
      bio: z.string().trim().min(1).max(500),
      email: z.string().email().optional(),
      major: z.string().trim().min(1).max(120).optional(),
      year: z.string().trim().min(1).max(40).optional(),
      order: z.number().int().nonnegative(),
      active: z.boolean().default(true)
    })
});

export const collections = {
  stories,
  matches,
  galleries,
  leadership
};
