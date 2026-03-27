import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dokumenty | DDŠ Těrlicko",
  description: "Dokumenty ke stažení — DDŠ Těrlicko.",
};

export default function DokumentyPage() {
  return (
    <>
      <section style={{ background: "var(--navy)", padding: "64px 0 56px", borderBottom: "4px solid var(--amber)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <nav aria-label="Drobečková navigace" style={{ marginBottom: "20px" }}>
            <ol style={{ display: "flex", gap: "8px", listStyle: "none", padding: 0, margin: 0, fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
              <li><Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Úvod</Link></li>
              <li aria-hidden>/</li>
              <li style={{ color: "#fff" }}>Dokumenty</li>
            </ol>
          </nav>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff", margin: 0 }}>Dokumenty</h1>
          <div style={{ width: "40px", height: "3px", background: "var(--amber)", margin: "16px 0" }} />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", margin: 0, maxWidth: "560px" }}>
            Dokumenty a materiály ke stažení.
          </p>
        </div>
      </section>

      <section style={{ padding: "72px 0", background: "#fff" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-md)", lineHeight: 1.8 }}>
            Dokumenty jsou k dispozici na vyžádání. Pro více informací nás prosím{" "}
            <Link href="/kontakt" style={{ color: "var(--navy)", fontWeight: 600, borderBottom: "2px solid var(--amber)", paddingBottom: "1px" }}>kontaktujte</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
