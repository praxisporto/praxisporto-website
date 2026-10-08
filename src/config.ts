// Settings of the website. Public values come from the environment at build time
// (see .env.example); without them the defaults below apply.

export const SITE = {
  name: "Praxisporto",
  tagline: "INTERNETMARKE für Arztpraxen, direkt aus dem PVS",
  locale: "de_DE",
};

/** Login of the Praxisporto app (administration). */
export const APP_URL: string = import.meta.env.PUBLIC_APP_URL ?? "https://app.praxisporto.de";

/** Backend endpoint for the demo sign-up. Empty: the form explains that it is not connected yet. */
export const DEMO_SIGNUP_URL: string = import.meta.env.PUBLIC_DEMO_SIGNUP_URL ?? "";

/** Backend endpoint that mails the demo link (phones). Empty: the form explains that it is not connected yet. */
export const DEMO_LINK_URL: string = import.meta.env.PUBLIC_DEMO_LINK_URL ?? "";

/** Cookie-free analytics (Plausible). Empty domain: no tracking script is added. */
export const ANALYTICS_DOMAIN: string = import.meta.env.PUBLIC_ANALYTICS_DOMAIN ?? "";
export const ANALYTICS_SRC: string = import.meta.env.PUBLIC_ANALYTICS_SRC ?? "https://plausible.io/js/script.js";

/** Contact address (footer, MVZ package). Empty: not shown. */
export const CONTACT_MAIL: string = import.meta.env.PUBLIC_CONTACT_MAIL ?? "";

/** Main navigation. */
export const NAV = [
  { href: "/funktionen/", label: "Funktionen" },
  { href: "/loesungen/", label: "Lösungen" },
  { href: "/preise/", label: "Preise" },
  { href: "/ratgeber/", label: "Ratgeber" },
];
