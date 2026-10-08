// Packages. price null: shown as "auf Anfrage" until the price is decided.
export interface Plan { name: string; price: string | null; unit: string; seats: string; highlight?: boolean; cta: "demo" | "contact" }

export const PLANS: Plan[] = [
  { name: "Einzelpraxis", price: null, unit: "pro Monat", seats: "1 Arbeitsplatz", cta: "demo" },
  { name: "Praxisteam", price: null, unit: "pro Monat", seats: "bis 5 Arbeitsplätze", highlight: true, cta: "demo" },
  { name: "MVZ und Gruppen", price: null, unit: "", seats: "mehrere Standorte", cta: "contact" },
];

export const INCLUDED = ["Alle Funktionen", "Druckprotokoll mit CSV-Export", "Persönlicher Support"];
