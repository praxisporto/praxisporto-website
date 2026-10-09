// Settings of the website. Public values come from the environment at build time
// (see .env.example); without them the defaults below apply.

export const SITE = {
  name: "Praxisporto",
  tagline: "INTERNETMARKE für Arztpraxen, direkt aus dem PVS",
  locale: "de_DE",
};

/** Login of the Praxisporto app (administration). */
export const APP_URL: string = import.meta.env.PUBLIC_APP_URL ?? "https://app.praxisporto.de";

/** Backend endpoint for demo requests (sign-up and "Demo-Link per E-Mail"): `POST {email, device, source}`.
 *  Default: the public endpoint of the app. Empty: the form explains that it is not connected yet. */
export const DEMO_REQUEST_URL: string = import.meta.env.PUBLIC_DEMO_REQUEST_URL || `${APP_URL}/api/v1/public/demo-requests`;

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
