// Frequently asked questions. One source for the pages and the FAQPage data.
export interface Faq { q: string; a: string }

export const FAQ: Record<string, Faq> = {
  demo: { q: "Was ist die Demo?", a: "Ein Zugang mit einer Beispielpraxis, den Sie selbst und sofort nutzen. Es gibt keinen Vorführtermin und kein Telefonat. Sie öffnen Aufträge, sehen Etiketten und drucken, ohne dass echte Marken gekauft werden." },
  post: { q: "Brauche ich ein Konto bei der Deutschen Post?", a: "Für den Praxisbetrieb ja: eine Portokasse, über die das Porto bezahlt wird. Für die Demo nicht." },
  printer: { q: "Welche Drucker funktionieren?", a: "Etikettendrucker von Brother (QL), Dymo (LabelWriter) und Zebra. Die Etikettengröße wählen Sie aus einer Liste." },
  pvs: { q: "Welche PVS werden unterstützt?", a: "Jedes PVS, das Patientendaten als GDT-Datei bereitstellen kann. Das Praxisverwaltungssystem legt die Datei ab, Praxisporto übernimmt die Adresse." },
  data: { q: "Wo liegen meine Patientendaten?", a: "Die Adresse bleibt auf dem Praxis-PC. Der Server, gehostet in Frankreich (EU), erfährt nur Produkt, Anzahl und Auflösung und liefert das Markenbild zurück." },
  phone: { q: "Kann ich die Demo auf dem Handy nutzen?", a: "Praxisporto ist für den Praxis-PC gemacht. Auf dem Handy sehen Sie einen Rundgang, und wir schicken Ihnen den Link für den Computer." },
  install: { q: "Muss ich für die Demo etwas installieren?", a: "Nein. Die Demo läuft im Browser. Für den Praxisbetrieb installieren Sie Praxisporto einmal auf jedem Arbeitsplatz mit Etikettendrucker." },
  misprint: { q: "Was passiert bei einem Fehldruck?", a: "Sie drucken dieselbe Marke noch einmal. Den fehlerhaften Ausdruck vernichten Sie, denn jede Marke darf nur einmal verwendet werden." },
  refund: { q: "Was passiert mit Marken, die nicht gedruckt wurden?", a: "Wurde eine gekaufte Marke nie gedruckt, reicht Praxisporto sie nach sieben Tagen automatisch zur Erstattung ein." },
  price: { q: "Was kostet Praxisporto?", a: "Praxisporto wird monatlich je Praxis abgerechnet, das Porto zahlen Sie getrennt über Ihre Portokasse. Die aktuellen Pakete finden Sie auf der Preisseite." },
};

export const pick = (...keys: (keyof typeof FAQ)[]) => keys.map((k) => FAQ[k]);
