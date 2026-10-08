import { track } from "./track";
// Demo sign-up and "Demo-Link per E-Mail". Both post JSON to an endpoint of the
// Praxisporto backend; the endpoints are configured at build time (see .env.example).
type Kind = "signup" | "link";

function setup(form: HTMLFormElement, kind: Kind) {
  const status = form.querySelector<HTMLElement>(".form-status")!;
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const say = (text: string, ok: boolean) => { status.textContent = text; status.className = `form-status ${ok ? "ok" : "err"}`; };
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    if (String(data.get("website") ?? "")) return; // filled only by bots
    const email = String(data.get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return say("Bitte eine gültige E-Mail-Adresse eingeben.", false);
    const body: Record<string, string> = { email };
    const endpoint = form.dataset.endpoint;
    if (!endpoint) return say("Die Anmeldung ist auf dieser Seite noch nicht angebunden.", false);
    button.disabled = true;
    try {
      const r = await fetch(endpoint, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
      if (!r.ok) throw new Error(String(r.status));
      track(kind === "signup" ? "Anmeldung abgeschickt" : "Demo-Link angefordert");
      form.reset();
      say(kind === "signup" ? "Fast geschafft: Bitte bestätigen Sie die E-Mail, die wir Ihnen gerade geschickt haben." : "Gesendet. Öffnen Sie den Link in der E-Mail am Praxis-PC.", true);
    } catch {
      say("Das hat nicht geklappt. Bitte versuchen Sie es in einigen Minuten noch einmal.", false);
    } finally {
      button.disabled = false;
    }
  });
}

for (const f of document.querySelectorAll<HTMLFormElement>("form[data-signup]:not([data-ready])")) { f.dataset.ready = "1"; setup(f, "signup"); }
for (const f of document.querySelectorAll<HTMLFormElement>("form[data-linkform]:not([data-ready])")) { f.dataset.ready = "1"; setup(f, "link"); }
