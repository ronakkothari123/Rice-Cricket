import type { CollectionEntry } from "astro:content";

export function sortLeadership(entries: CollectionEntry<"leadership">[]) {
  return [...entries].sort((a, b) => a.data.order - b.data.order);
}

export function getFeaturedStories(entries: CollectionEntry<"stories">[], limit = 2) {
  return [...entries]
    .filter((entry) => entry.data.featured)
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
    .slice(0, limit);
}

export function getLatestStories(entries: CollectionEntry<"stories">[], limit = 3) {
  return [...entries]
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
    .slice(0, limit);
}

export function getLatestMatches(entries: CollectionEntry<"matches">[], limit = 3) {
  return [...entries]
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .slice(0, limit);
}
