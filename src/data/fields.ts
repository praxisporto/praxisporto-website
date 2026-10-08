// Specialities ("Lösungen"): one page each.
export interface Field {
  slug: string; name: string; icon: "steth" | "tooth" | "pulse" | "flask"; tone: "" | "coral" | "petrol" | "blue";
  short: string; title: string; description: string; lead: string;
  letters: { icon: "file" | "mail" | "shield" | "euro" | "list" | "users"; title: string; text: string }[];
}

export const FIELDS: Field[] = [
  {
    slug: "hausarztpraxis", name: "Hausarztpraxis", icon: "steth", tone: "", short: "Rezepte, Überweisungen, Einladungen zur Vorsorge",
    title: "Porto für die Hausarztpraxis: Briefe schneller frankieren",
    description: "Rezepte, Überweisungen und Einladungen zur Vorsorge frankieren Sie mit Praxisporto in Sekunden, die Adresse kommt aus dem PVS.",
    lead: "Rezepte, Überweisungen und Einladungen zur Vorsorge frankieren Sie in Sekunden. Die Adresse kommt aus dem PVS.",
    letters: [
      { icon: "file", title: "Rezepte und Überweisungen", text: "Meist ein Standardbrief, die Adresse steht schon auf dem Etikett." },
      { icon: "mail", title: "Einladungen zur Vorsorge", text: "Viele Briefe hintereinander, je Patient ein Etikett." },
      { icon: "shield", title: "Befunde und Atteste", text: "Auf Wunsch als Einschreiben, die Adresse bleibt am Praxis-PC." },
    ],
  },
  {
    slug: "zahnarztpraxis", name: "Zahnarztpraxis", icon: "tooth", tone: "coral", short: "Recall, Heil- und Kostenpläne, Rechnungen",
    title: "Porto für die Zahnarztpraxis: Recall und Rechnungen frankieren",
    description: "Recall-Briefe, Heil- und Kostenpläne und Rechnungen frankieren Sie mit Praxisporto direkt aus dem PVS, auf Wunsch als Einschreiben.",
    lead: "Recall-Briefe, Heil- und Kostenpläne und Rechnungen frankieren Sie direkt aus dem PVS.",
    letters: [
      { icon: "mail", title: "Recall-Briefe", text: "Erinnerungen an die Kontrolle, je Patient ein Etikett." },
      { icon: "file", title: "Heil- und Kostenpläne", text: "Oft ein Kompakt- oder Großbrief, der Preis steht bei der Auswahl." },
      { icon: "euro", title: "Rechnungen", text: "Bei hohen Beträgen als Einschreiben, im Protokoll nachvollziehbar." },
    ],
  },
  {
    slug: "therapie-physio", name: "Therapie und Physio", icon: "pulse", tone: "petrol", short: "Rechnungen und Berichte an Ärzte",
    title: "Porto für Therapie- und Physiopraxen: Rechnungen und Berichte frankieren",
    description: "Rechnungen an Privatpatienten und Berichte an Ärzte frankieren Sie mit Praxisporto am Tresen, ohne Marken zu verwalten.",
    lead: "Rechnungen und Berichte an Ärzte frankieren Sie am Tresen, ohne dass jemand Marken verwalten muss.",
    letters: [
      { icon: "euro", title: "Rechnungen", text: "Für Privatpatienten und Selbstzahler, als Standard- oder Kompaktbrief." },
      { icon: "file", title: "Berichte an Ärzte", text: "Therapieberichte an die verordnende Praxis." },
      { icon: "users", title: "Kleine Teams", text: "Wer gerade am Tresen steht, druckt. Eine Portokasse für alle." },
    ],
  },
  {
    slug: "labor-mvz", name: "Labor und MVZ", icon: "flask", tone: "blue", short: "Mehrere Standorte, ein Porto-Konto",
    title: "Porto für Labor und MVZ: mehrere Standorte, ein Konto",
    description: "Befundversand und Rechnungen an mehreren Standorten: Praxisporto bündelt das Porto in einem Konto, mit Tageslimits und Druckprotokoll.",
    lead: "Mehrere Standorte, viele Briefe, ein Porto-Konto. Mit Tageslimits und einem Protokoll für die Buchhaltung.",
    letters: [
      { icon: "file", title: "Befunde", text: "Versand an Patienten und Einsender, die Adresse bleibt am Arbeitsplatz." },
      { icon: "users", title: "Mehrere Arbeitsplätze", text: "Jeder PC wird einmal gekoppelt, alle nutzen dieselbe Portokasse." },
      { icon: "list", title: "Protokoll und Limits", text: "Tageslimits je Arbeitsplatz, jede Marke im CSV-Export." },
    ],
  },
];
