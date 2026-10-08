import { track } from "./track";
// The hero picture: starts as a finished letter, "Selbst durchklicken" replays the three clicks.
const stage = document.querySelector<HTMLElement>("[data-demo-stage]");
const button = stage?.querySelector<HTMLButtonElement>("[data-demo-next]");
const note = stage?.querySelector<HTMLElement>("[data-demo-note]");
const label = stage?.querySelector<HTMLElement>("[data-demo-label]");
const cta = stage?.querySelector<HTMLButtonElement>("[data-demo-cta]");

if (stage && button && note && cta && label) {
  const notes = [
    "Kein Auftrag offen.",
    "Die Adresse kam aus dem PVS.",
    "Format gewählt, das Porto steht dabei.",
    "Fertig: drei Klicks, keine Adresse getippt.",
  ];
  const labels = ["1 · Auftrag öffnen", "2 · Format wählen", "3 · Drucken", "Nochmal"];
  let state = 0;
  const show = (s: number, fresh: boolean) => {
    state = s;
    stage.dataset.s = String(s);
    label!.textContent = labels[s];
    if (!fresh) note.textContent = notes[s];
    cta!.hidden = fresh || s !== 3;
  };
  button.addEventListener("click", () => {
    if (state === 0) track("Hero Durchklicken");
    show(state === 3 ? 0 : state + 1, false);
  });
  cta.addEventListener("click", () => { // back up to the sign-up field, whichever one this screen shows
    track("Hero Demo-Knopf nach Durchklicken");
    const field = [document.getElementById("hero-email"), document.getElementById("hero-link-email")].find((e) => e && e.offsetParent !== null);
    field?.scrollIntoView({ behavior: "smooth", block: "center" });
    (field as HTMLInputElement | undefined)?.focus({ preventScroll: true });
  });
}
