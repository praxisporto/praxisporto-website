// Praxisporto website: static pages (SEO, fast, no server needed).
// SITE_URL is the public address; it is used for canonical links, the sitemap and Open Graph.
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL ?? "https://www.praxisporto.de";

export default defineConfig({
  site,
  trailingSlash: "always",
  build: { format: "directory", inlineStylesheets: "auto" },
  // Legal pages are not finished yet; they stay out of the sitemap until they are.
  integrations: [sitemap({ filter: (page) => !/\/(impressum|datenschutz|nutzungsbedingungen|agb|av-vertrag)\//.test(page) })],
  compressHTML: true,
});
