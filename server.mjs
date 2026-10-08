// Static server for Scalingo: serves dist/ with compression and caching,
// unknown paths get dist/404.html with status 404.
import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import sirv from "sirv";

const port = Number(process.env.PORT ?? 8080);
const notFound = readFileSync(new URL("./dist/404.html", import.meta.url));
const assets = sirv("dist", {
  gzip: true,
  brotli: true,
  etag: true,
  setHeaders(res, pathname) {
    const hashed = pathname.startsWith("/_astro/");
    res.setHeader("Cache-Control", hashed ? "public, max-age=31536000, immutable" : "public, max-age=3600");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  },
});

createServer((req, res) =>
  assets(req, res, () => {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(notFound);
  }),
).listen(port, "0.0.0.0", () => console.log(`Praxisporto website on port ${port}`));
