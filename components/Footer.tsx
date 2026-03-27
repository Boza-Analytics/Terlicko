import Link from "next/link";
import Image from "next/image";

const COL1 = [
  { label: "Úvod", href: "/" },
  { label: "Domov", href: "/domov" },
  { label: "Škola", href: "/skola" },
  { label: "Fotogalerie", href: "/fotogalerie" },
];
const COL2 = [
  { label: "Partneři", href: "/partneri" },
  { label: "Dokumenty", href: "/dokumenty" },
  { label: "GDPR", href: "/gdpr" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)", color: "#fff", borderTop: "4px solid var(--amber)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo.png"
              alt="DDŠ Těrlicko"
              width={150}
              height={50}
              style={{ height: "44px", width: "auto", filter: "brightness(0) invert(1)", marginBottom: "16px" }}
            />
            <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "rgba(255,255,255,0.65)", maxWidth: "320px", fontFamily: "var(--font-body)" }}>
              Dětský domov se školou v Těrlicku poskytuje výchovně vzdělávací, terapeutickou a poradenskou péči chlapcům od 11 let.
            </p>
            <address style={{ marginTop: "16px", fontStyle: "normal", fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)", lineHeight: 1.8 }}>
              Promenádní 561/16<br />
              735 42 Těrlicko – Horní Těrlicko<br />
              IČO: 62 331 507
            </address>
          </div>

          {/* Nav col 1 */}
          <div>
            <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "16px" }}>
              Navigace
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {COL1.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link" style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav col 2 */}
          <div>
            <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "16px" }}>
              &nbsp;
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {COL2.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link" style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-3 mt-10 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}>
            © {new Date().getFullYear()} DDŠ Těrlicko
          </p>
          <a href="https://inetio.cz" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ fontSize: "0.82rem", fontFamily: "var(--font-body)" }}>
            Vytvořilo Inetio s.r.o.
          </a>
        </div>
      </div>
    </footer>
  );
}
