// Ratgeber articles (Markdown in src/content/ratgeber).
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const ratgeber = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/ratgeber" }),
  schema: z.object({
    title: z.string(),
    /** Meta description, about 150 characters. */
    description: z.string().max(170),
    category: z.enum(["Anleitung", "Porto", "Datenschutz", "Praxisalltag"]),
    icon: z.enum(["printer", "euro", "shield", "mail", "plug", "users"]),
    minutes: z.number(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { ratgeber };
