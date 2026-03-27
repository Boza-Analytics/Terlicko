import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partneři | DDŠ Těrlicko",
  description: "Poděkování partnerům a sponzorům Dětského domova se školou Těrlicko.",
};

const PARTNERS = [
  { src: "/partners/logo-sponzor.png", alt: "Sponzor DDŠ Těrlicko" },
  { src: "/partners/logo-albi.png", alt: "ALBI" },
  { src: "/partners/kaufland.jpg", alt: "Kaufland" },
  { src: "/partners/bonap.jpg", alt: "BONAP" },
  { src: "/partners/piatnik.jpg", alt: "Piatnik" },
  { src: "/partners/logo-1.jpg", alt: "Partner DDŠ Těrlicko" },
];

export default function PartneriPage() {
  return (
    <>
      <section style={{ background: "var(--navy)", padding: "64px 0 56px", borderBottom: "4px solid var(--amber)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <nav aria-label="Drobečková navigace" style={{ marginBottom: "20px" }}>
            <ol style={{ display: "flex", gap: "8px", listStyle: "none", padding: 0, margin: 0, fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
              <li><Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Úvod</Link></li>
              <li aria-hidden>/</li>
              <li style={{ color: "#fff" }}>Partneři</li>
            </ol>
          </nav>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff", margin: 0 }}>Partneři</h1>
          <div style={{ width: "40px", height: "3px", background: "var(--amber)", margin: "16px 0" }} />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", margin: 0, maxWidth: "560px" }}>
            Děkujeme všem, kdo nás podporují a umožňují nám poskytovat kvalitní péči a vzdělání.
          </p>
        </div>
      </section>

      <section style={{ padding: "72px 0", background: "#fff" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          {/* Thank you text */}
          <div style={{ maxWidth: "680px", marginBottom: "64px" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: "20px" }}>Poděkování</h2>
            <div style={{ width: "40px", height: "3px", background: "var(--amber)", marginBottom: "28px" }} />
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-md)", lineHeight: 1.85, marginBottom: "20px" }}>
              Rádi bychom Vás touto cestou oslovili a vyjádřili naše upřímné poděkování za Vaši neocenitelnou podporu a spolupráci s naším dětským domovem.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-md)", lineHeight: 1.85 }}>
              Vaše finanční i materiální příspěvky a účast na našich akcích nám pomáhají vytvářet bezpečné prostředí a poskytovat kvalitní péči a vzdělání svěřeným chlapcům. Jsme upřímně vděčni za každou formu pomoci.
            </p>
          </div>

          {/* Partner logos */}
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
            <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--text-lt)", marginBottom: "36px" }}>
              Naši sponzoři a partneři
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px" style={{ background: "var(--border)" }}>
              {PARTNERS.map((p) => (
                <div key={p.alt} style={{ background: "#fff", padding: "28px 20px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100px" }}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={120}
                    height={60}
                    className="partner-logo"
                    style={{ maxHeight: "60px", width: "auto", objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
