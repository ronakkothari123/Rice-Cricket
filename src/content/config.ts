import { z } from "astro/zod";

export const storyCategories = [
  "announcement",
  "recap",
  "milestone",
  "feature"
] as const;

export const matchStatuses = ["upcoming", "completed", "canceled"] as const;

export const matchResults = ["win", "loss", "draw", "no-result"] as const;

export const nonEmptyString = z.string().trim().min(1);

export const optionalUrl = z.string().url().optional();

export type StoryCategory = (typeof storyCategories)[number];
export type MatchStatus = (typeof matchStatuses)[number];
export type MatchResult = (typeof matchResults)[number];
