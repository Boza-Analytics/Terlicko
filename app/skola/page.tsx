import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Škola | DDŠ Těrlicko",
  description: "Základní škola DDŠ Těrlicko — moderní výuka, integrační aktivity a mezinárodní programy.",
};

function PageHero({ title, sub }: { title: string; sub: string }) {
  return (
    <section style={{ background: "var(--navy)", padding: "64px 0 56px", borderBottom: "4px solid var(--amber)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <nav aria-label="Drobečková navigace" style={{ marginBottom: "20px" }}>
          <ol style={{ display: "flex", gap: "8px", listStyle: "none", padding: 0, margin: 0, fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
            <li><Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Úvod</Link></li>
            <li aria-hidden>/</li>
            <li style={{ color: "#fff" }}>{title}</li>
          </ol>
        </nav>
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff", margin: 0 }}>{title}</h1>
        <div style={{ width: "40px", height: "3px", background: "var(--amber)", margin: "16px 0" }} />
        <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", margin: 0, maxWidth: "560px" }}>{sub}</p>
      </div>
    </section>
  );
}

const INTEGRATION_INTERNAL = [
  "Kulturní a společenská setkání s dětmi ze spádových škol",
  "Integrační programy pro děti s poruchou autistického spektra",
  "Přátelská sportovní utkání",
];

const INTEGRATION_EXTERNAL = [
  "Členství v místním stolnotenisovém klubu",
  "Zápis do Základní umělecké školy",
  "Sportovní soutěže přes místní atletický oddíl",
  "Aktivity střediska volného času a víkendové programy",
  "Návštěvy divadel a koncertů",
];

const PARTNERSHIPS = [
  "Spolupráce se zařízeními pro seniory",
  "Spolupráce s krizovým centrem",
  "Dohody o spolupráci se školami",
  "Mezinárodní soutěže mládeže (Cena vévody z Edinburghu)",
  "Spolupráce s německou mládežnickou organizací JESP e.V.",
];

export default function SkolaPage() {
  return (
    <>
      <PageHero
        title="Škola a základní škola"
        sub="Moderní výuka v interaktivních učebnách, integrační programy a mezinárodní spolupráce."
      />

      {/* Main description */}
      <section style={{ padding: "72px 0", background: "#fff" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.3rem)", marginBottom: "20px" }}>Jak to u nás vypadá?</h2>
              <div style={{ width: "40px", height: "3px", background: "var(--amber)", marginBottom: "28px" }} />
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-md)", lineHeight: 1.85, marginBottom: "20px" }}>
                Školní vyučování probíhá v učebnách s interaktivními tabulemi a audiovizuální technikou. K dispozici jsou odborné učebny: počítačová, fyzikální, hudební, jazyková, výtvarná a dílny.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-md)", lineHeight: 1.85, marginBottom: "20px" }}>
                Výuka je vedena projektovou a interaktivní metodou. Klademe důraz na propojení teorie s praxí a rozvoj komunikačních dovedností.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-md)", lineHeight: 1.85 }}>
                Proces integrace v současných podmínkách je nedílnou součástí naší práce — propojujeme chlapce s okolní komunitou prostřednictvím sportovních, kulturních a vzdělávacích aktivit.
              </p>
            </div>
            <div>
              <div style={{ position: "relative", height: "380px", marginBottom: "2px" }}>
                <Image src="/images/img-16.jpg" alt="Výuka v DDŠ Těrlicko" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "relative", height: "200px" }}>
                <Image src="/images/diplom.jpg" alt="Diplom DDŠ Těrlicko" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section style={{ padding: "72px 0", background: "var(--off-white)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.3rem)", marginBottom: "20px" }}>Integrační aktivity</h2>
          <div style={{ width: "40px", height: "3px", background: "var(--amber)", marginBottom: "40px" }} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
            <div style={{ background: "#fff", padding: "36px 32px" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", color: "var(--navy)", marginBottom: "20px" }}>Interní integrace</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {INTEGRATION_INTERNAL.map((item) => (
                  <li key={item} style={{ display: "flex", gap: "12px", fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--text-md)", lineHeight: 1.65 }}>
                    <span style={{ color: "var(--amber)", fontWeight: 700, flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "#fff", padding: "36px 32px" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", color: "var(--navy)", marginBottom: "20px" }}>Externí integrace</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {INTEGRATION_EXTERNAL.map((item) => (
                  <li key={item} style={{ display: "flex", gap: "12px", fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--text-md)", lineHeight: 1.65 }}>
                    <span style={{ color: "var(--amber)", fontWeight: 700, flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section style={{ padding: "72px 0", background: "#fff", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">
            <div style={{ position: "relative", height: "360px" }}>
              <Image src="/images/img-15.jpg" alt="Aktivity školy DDŠ Těrlicko" fill style={{ objectFit: "cover" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.3rem)", marginBottom: "20px" }}>Dlouhodobá partnerství</h2>
              <div style={{ width: "40px", height: "3px", background: "var(--amber)", marginBottom: "28px" }} />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                {PARTNERSHIPS.map((item) => (
                  <li key={item} style={{ display: "flex", gap: "12px", fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-md)", lineHeight: 1.65, paddingBottom: "14px", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ color: "var(--navy)", fontWeight: 700, flexShrink: 0 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
