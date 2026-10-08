# Praxisporto Website

Marketing site for Praxisporto: static [Astro](https://astro.build) site, served by a small Node server (`server.mjs`) on Scalingo.

## Development

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check + static build to dist/
PORT=4399 npm start  # serve dist/ like in production
```

## Structure

| Path | Content |
| --- | --- |
| `src/pages/` | One file per page. `loesungen/[slug].astro` and `ratgeber/[slug].astro` are generated from data. |
| `src/components/` | Sections (Hero, Steps, Scenes, Privacy, Faq, Cta …) and product mocks in `mocks/`. |
| `src/data/` | Texts kept as data: FAQ, specialities (`fields.ts`), packages (`pricing.ts`), customer voices (`proof.ts`). |
| `src/content/ratgeber/` | Ratgeber articles as Markdown. Schema in `src/content.config.ts`. |
| `src/styles/global.css` | Design tokens and all styles. |
| `src/scripts/` | Demo routing for phones, demo forms. |

**Demo path:** Every link with `data-demo` goes to `/demo/` on computers and to `/demo-am-computer/` on phones (tour + demo link by e-mail), see `src/scripts/demo-route.ts`.

## Configuration

Build-time variables, see `.env.example`:

| Variable | Purpose |
| --- | --- |
| `SITE_URL` | Public address (canonical, sitemap, robots.txt, Open Graph) |
| `PUBLIC_APP_URL` | App address for the "Anmelden" link |
| `PUBLIC_DEMO_SIGNUP_URL` | Endpoint for the demo sign-up, `POST {"email"}` |
| `PUBLIC_DEMO_LINK_URL` | Endpoint for "Demo-Link per E-Mail", `POST {"email"}` |
| `PUBLIC_ANALYTICS_DOMAIN` | Domain für die cookie-freie Messung (Plausible). Leer: kein Skript, keine Ereignisse. In die Datenschutzerklärung aufnehmen. |
| `PUBLIC_ANALYTICS_SRC` | Optional: eigene Adresse des Skripts (z. B. selbst gehostet) |
| `PUBLIC_CONTACT_MAIL` | Contact address (footer, MVZ package). Empty: not shown. |

## Deploy on Scalingo

Separate Scalingo app with the Node.js buildpack. Scalingo runs `npm run build` automatically, the `Procfile` starts `node server.mjs` on `$PORT`. Set the variables above in the app environment. The site needs no database: sign-up runs through the backend of the Praxisporto app.

## Before going live

- **Backend endpoints are missing.** The demo sign-up and the demo-link mail need two endpoints in the Praxisporto backend (with CORS for the website domain, rate limit and double opt-in). Until `PUBLIC_DEMO_SIGNUP_URL` / `PUBLIC_DEMO_LINK_URL` are set, the forms say that they are not connected yet.
- **Legal texts:** `impressum`, `datenschutz`, `nutzungsbedingungen` are placeholders with `noindex` and are not in the sitemap.
- **Prices:** `src/data/pricing.ts` has `price: null`, shown as "auf Anfrage".
- **Customer voices and case studies:** `src/data/proof.ts` is empty, so the quote section stays hidden. Only add real, approved statements.
- **Review the articles.** The Ratgeber articles were written from the Deutsche Post price list (1 January 2026) and the product's behaviour. Have them checked for accuracy, especially data protection, Einschreiben and recall. The data protection and recall articles say they are not legal advice.
