import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt | DDŠ Těrlicko",
  description: "Kontakty, adresa, telefonní čísla a konzultační hodiny DDŠ Těrlicko.",
};

const STAFF = [
  { role: "Ředitel", name: "Mgr. Ladislav Václavík", email: "reditel@terlickodds.cz", phone: "+420 596 423 187 / +420 778 489 090" },
  { role: "Zástupce ředitele", name: "Mgr. Alois Vodák, MSc.", email: "vodak@terlickodds.cz", phone: "+420 596 423 635 / +420 778 403 269" },
  { role: "Sociální pracovnice", name: "Mgr. Tereza Kučerová", email: "kucerova@terlickodds.cz", phone: "—" },
  { role: "Vedoucí vychovatelka", name: "Bc. Bronislava Fečková", email: "feckova@terlickodds.cz", phone: "+420 596 424 069 / +420 773 293 350" },
  { role: "Zástupkyně pro ekonomiku", name: "Ing. Věra Gembalová", email: "gembalova@terlickodds.cz", phone: "+420 596 424 067" },
  { role: "Vedoucí školní jídelny", name: "Monika Rajdusová", email: "rajdusova@terlickodds.cz", phone: "+420 596 411 781" },
  { role: "Etoped", name: "Mgr. Ladislav Václavík", email: "vaclavik@terlickodds.cz", phone: "—" },
  { role: "Psycholog", name: "Mgr. Přemysl Mikoláš", email: "mikolas@terlickodds.cz", phone: "—" },
  { role: "Metodik prevence", name: "Mgr. Petr Svoboda", email: "svoboda@terlickodds.cz", phone: "—" },
  { role: "Výchovný poradce", name: "Mgr. Halina Pribula", email: "pribula@terlickodds.cz", phone: "—" },
  { role: "Koordinátor Ceny vévody z Edinburghu", name: "Gabriela Kardašová", email: "kardasovag@terlickodds.cz", phone: "—" },
];

const HOURS = [
  { person: "Psycholog — Mgr. Přemysl Mikoláš", times: ["Pondělí: 18:00–20:30", "Úterý: 10:00–12:00"] },
  { person: "Metodik prevence — Mgr. Petr Svoboda", times: ["Pondělí: 13:30–15:00", "Čtvrtek: 13:30–15:00"] },
  { person: "Výchovný poradce — Mgr. Halina Pribula", times: ["Pondělí: 13:30–15:00", "Středa: 13:30–15:00"] },
];

export default function KontaktPage() {
  return (
    <>
      <section style={{ background: "var(--navy)", padding: "64px 0 56px", borderBottom: "4px solid var(--amber)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <nav aria-label="Drobečková navigace" style={{ marginBottom: "20px" }}>
            <ol style={{ display: "flex", gap: "8px", listStyle: "none", padding: 0, margin: 0, fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
              <li><Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Úvod</Link></li>
              <li aria-hidden>/</li>
              <li style={{ color: "#fff" }}>Kontakt</li>
            </ol>
          </nav>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff", margin: 0 }}>Kontakt</h1>
          <div style={{ width: "40px", height: "3px", background: "var(--amber)", margin: "16px 0" }} />
        </div>
      </section>

      {/* Basic contacts */}
      <section style={{ padding: "72px 0", background: "#fff" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-px" style={{ background: "var(--border)", marginBottom: "64px" }}>
            {[
              {
                label: "Adresa",
                lines: ["Promenádní 561/16", "735 42 Těrlicko – Horní Těrlicko", "IČO: 62 331 507", "Datová schránka: iny77tr"],
                href: "https://maps.google.com/?q=Promen%C3%A1dn%C3%AD+561/16+T%C4%9Brlicko",
                linkLabel: "Zobrazit na mapě →",
              },
              {
                label: "Telefon",
                lines: [
                  "Ústředna: +420 596 423 147",
                  "(Po–Pá 6:00–14:30)",
                  "Sborovna: +420 596 411 780",
                ],
                href: "tel:+420596423147",
                linkLabel: "Zavolat →",
              },
              {
                label: "Vychovatelé",
                lines: [
                  "+420 773 293 352",
                  "+420 773 293 351",
                  "+420 775 423 720",
                ],
              },
            ].map((box) => (
              <div key={box.label} style={{ background: "#fff", padding: "36px 32px" }}>
                <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--amber)", marginBottom: "16px" }}>
                  {box.label}
                </h3>
                {box.lines.map((l) => (
                  <p key={l} style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--text-md)", margin: "0 0 4px", lineHeight: 1.7 }}>{l}</p>
                ))}
                {box.href && (
                  <a href={box.href} style={{ display: "inline-block", marginTop: "12px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.875rem", color: "var(--navy)", borderBottom: "2px solid var(--amber)", paddingBottom: "1px", textDecoration: "none" }}>
                    {box.linkLabel}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Consultation hours */}
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: "20px" }}>Konzultační hodiny</h2>
          <div style={{ width: "40px", height: "3px", background: "var(--amber)", marginBottom: "32px" }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--border)", marginBottom: "64px" }}>
            {HOURS.map((h) => (
              <div key={h.person} style={{ background: "#fff", padding: "28px 24px" }}>
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9rem", color: "var(--navy)", marginBottom: "12px", lineHeight: 1.5 }}>{h.person}</p>
                {h.times.map((t) => (
                  <p key={t} style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text-md)", margin: "0 0 4px" }}>{t}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Staff table */}
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: "20px" }}>Pracovníci</h2>
          <div style={{ width: "40px", height: "3px", background: "var(--amber)", marginBottom: "32px" }} />
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-body)", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "var(--navy)", color: "#fff" }}>
                  {["Funkce", "Jméno", "E-mail", "Telefon"].map((h) => (
                    <th key={h} scope="col" style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {STAFF.map((s, i) => (
                  <tr key={s.email} style={{ background: i % 2 === 0 ? "#fff" : "var(--off-white)", borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "12px 16px", color: "var(--text-md)" }}>{s.role}</td>
                    <td style={{ padding: "12px 16px", fontWeight: 600, color: "var(--text)" }}>{s.name}</td>
                    <td style={{ padding: "12px 16px" }}>
                      <a href={`mailto:${s.email}`} style={{ color: "var(--navy)", textDecoration: "none", borderBottom: "1px solid var(--border)" }}>{s.email}</a>
                    </td>
                    <td style={{ padding: "12px 16px", color: "var(--text-md)", whiteSpace: "nowrap" as const }}>{s.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
