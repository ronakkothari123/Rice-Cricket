export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

export function toBasePath(path = "/"): string {
  const normalizedBase = import.meta.env.BASE_URL.replace(/\/$/, "");

  if (!path || path === "/") {
    return `${normalizedBase}/`;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
