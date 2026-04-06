import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://ronakkothari123.github.io",
  base: "/Rice-Cricket",
  trailingSlash: "always",
  vite: {
    cacheDir: ".astro/vite"
  }
});
