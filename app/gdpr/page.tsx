import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDPR | DDŠ Těrlicko",
  description: "Informace o zpracování osobních údajů — DDŠ Těrlicko.",
};

export default function GdprPage() {
  return (
    <>
      <section style={{ background: "var(--navy)", padding: "64px 0 56px", borderBottom: "4px solid var(--amber)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <nav aria-label="Drobečková navigace" style={{ marginBottom: "20px" }}>
            <ol style={{ display: "flex", gap: "8px", listStyle: "none", padding: 0, margin: 0, fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
              <li><Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Úvod</Link></li>
              <li aria-hidden>/</li>
              <li style={{ color: "#fff" }}>GDPR</li>
            </ol>
          </nav>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff", margin: 0 }}>GDPR</h1>
          <div style={{ width: "40px", height: "3px", background: "var(--amber)", margin: "16px 0" }} />
        </div>
      </section>

      <section style={{ padding: "72px 0", background: "#fff" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", marginBottom: "20px" }}>Zpracování osobních údajů</h2>
          <div style={{ width: "40px", height: "3px", background: "var(--amber)", marginBottom: "32px" }} />

          <div style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-md)", lineHeight: 1.85 }}>
            <p style={{ marginBottom: "20px" }}>
              Dětský domov se školou Těrlicko (IČO: 62 331 507) jako správce osobních údajů zpracovává osobní údaje v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR) a zákonem č. 110/2019 Sb., o zpracování osobních údajů.
            </p>

            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "12px", marginTop: "36px" }}>Správce osobních údajů</h3>
            <p style={{ marginBottom: "20px" }}>
              DDŠ Těrlicko<br />
              Promenádní 561/16, 735 42 Těrlicko – Horní Těrlicko<br />
              IČO: 62 331 507<br />
              Datová schránka: iny77tr<br />
              E-mail: <a href="mailto:reditel@terlickodds.cz" style={{ color: "var(--navy)", fontWeight: 600 }}>reditel@terlickodds.cz</a>
            </p>

            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "12px", marginTop: "36px" }}>Vaše práva</h3>
            <p style={{ marginBottom: "12px" }}>V souladu s GDPR máte právo:</p>
            <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
              {[
                "na přístup ke svým osobním údajům",
                "na opravu nepřesných osobních údajů",
                "na výmaz osobních údajů (právo být zapomenut)",
                "na omezení zpracování",
                "na přenositelnost údajů",
                "vznést námitku proti zpracování",
                "podat stížnost u Úřadu pro ochranu osobních údajů",
              ].map((r) => (
                <li key={r} style={{ display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--amber)", fontWeight: 700, flexShrink: 0 }}>—</span>
                  {r}
                </li>
              ))}
            </ul>

            <p style={{ marginTop: "32px" }}>
              V případě dotazů týkajících se zpracování osobních údajů nás prosím kontaktujte na adrese{" "}
              <a href="mailto:reditel@terlickodds.cz" style={{ color: "var(--navy)", fontWeight: 600 }}>reditel@terlickodds.cz</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
