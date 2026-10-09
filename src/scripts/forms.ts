import { track } from "./track";
// Demo sign-up and "Demo-Link per E-Mail". Both post `{email, device, source}` to
// the public endpoint of the Praxisporto backend, which mails the link to the demo
// (docs/ablaeufe.md, "Demo-Anmeldung von der Website" in the app repository).
type Kind = "signup" | "link";

const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

/** After sending: the form gives way to a clear confirmation with the address. */
function showDone(form: HTMLFormElement, kind: Kind, email: string) {
  const done = document.createElement("div");
  done.className = "form-done";
  done.setAttribute("role", "status");
  const icon = document.createElement("span");
  icon.className = "form-done-icon";
  icon.innerHTML = CHECK;
  const title = document.createElement("h3");
  title.tabIndex = -1;
  title.textContent = kind === "signup" ? "Der Link ist unterwegs" : "Gesendet";
  const text = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = email;
  text.append(
    "Wir haben den Link an ",
    strong,
    kind === "signup"
      ? " geschickt. Klicken Sie in der E-Mail auf „Demo öffnen“, die Demo startet sofort."
      : " geschickt. Öffnen Sie die E-Mail später am Praxis-PC und starten Sie die Demo dort.",
  );
  const hint = document.createElement("p");
  hint.className = "form-done-hint";
  hint.textContent = "Keine E-Mail nach ein paar Minuten? Bitte auch im Spam-Ordner nachsehen.";
  const again = document.createElement("button");
  again.type = "button";
  again.className = "link-button";
  again.textContent = "Andere Adresse eingeben";
  again.addEventListener("click", () => {
    done.remove();
    form.classList.remove("is-sent");
    form.querySelector<HTMLInputElement>('input[name="email"]')?.focus();
  });
  done.append(icon, title, text, hint, again);
  form.append(done);
  form.classList.add("is-sent");
  title.focus({ preventScroll: true });
}

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
    const body = { email, device: form.dataset.device ?? "desktop", source: form.dataset.source ?? "" };
    const endpoint = form.dataset.endpoint;
    if (!endpoint) return say("Die Anmeldung ist auf dieser Seite noch nicht angebunden.", false);
    button.disabled = true;
    try {
      const r = await fetch(endpoint, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
      if (r.status === 429) return say("Der Link ist schon unterwegs. Bitte warten Sie ein paar Minuten, bevor Sie einen weiteren anfordern.", false);
      if (r.status === 400) return say("Bitte eine gültige E-Mail-Adresse eingeben.", false);
      if (!r.ok) throw new Error(String(r.status));
      track(kind === "signup" ? "Anmeldung abgeschickt" : "Demo-Link angefordert");
      form.reset();
      status.textContent = "";
      status.className = "form-status";
      showDone(form, kind, email);
    } catch {
      say("Das hat nicht geklappt. Bitte versuchen Sie es in einigen Minuten noch einmal.", false);
    } finally {
      button.disabled = false;
    }
  });
}

for (const f of document.querySelectorAll<HTMLFormElement>("form[data-signup]:not([data-ready])")) { f.dataset.ready = "1"; setup(f, "signup"); }
for (const f of document.querySelectorAll<HTMLFormElement>("form[data-linkform]:not([data-ready])")) { f.dataset.ready = "1"; setup(f, "link"); }
