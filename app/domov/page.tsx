import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dětský domov | DDŠ Těrlicko",
  description: "Informace o dětském domově se školou v Těrlicku — péče, zázemí, vybavení a každodenní program.",
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

const FACILITIES = [
  "Sportovní hřiště s umělým povrchem pro míčové hry",
  "Atletický sektor",
  "Zahrada pro pěstitelské práce",
  "Travnaté hřiště pro malou kopanou",
  "Čtyřlůžkové dřevěné chaty",
  "Kulturní sál",
];

export default function DomovPage() {
  return (
    <>
      <PageHero
        title="Dětský domov"
        sub="Prostředí, péče a každodenní program pro chlapce v ústavní nebo ochranné výchově."
      />

      {/* Main content */}
      <section style={{ padding: "72px 0", background: "#fff" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
            <div>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.3rem)", marginBottom: "20px" }}>Péče a podpora</h2>
              <div style={{ width: "40px", height: "3px", background: "var(--amber)", marginBottom: "28px" }} />
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-md)", lineHeight: 1.85, marginBottom: "20px" }}>
                Dětský domov se školou v Těrlicku poskytuje péči a podporu pro děti a mladé lidi, kteří z různých důvodů nemohou žít ve svých rodinách. Naším cílem je vytvořit bezpečné a podnětné prostředí, kde každý chlapec dostane příležitost k rozvoji.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-md)", lineHeight: 1.85, marginBottom: "20px" }}>
                Každému chlapci poskytujeme individualizovanou péči zahrnující vzdělávací aktivity, zdravotní péči a psychologickou podporu. Pracujeme s rodinnými skupinami po 2–3 chlapcích na pokoji s vlastním zázemím.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-md)", lineHeight: 1.85 }}>
                Domov se nachází v příjemné vilové čtvrti na břehu Těrlické přehrady v blízkosti Havířova — v prostředí, které přirozeně podporuje fyzický i psychický rozvoj svěřenců.
              </p>
            </div>

            <div>
              <div style={{ position: "relative", height: "340px", marginBottom: "2px" }}>
                <Image src="/images/img-19.jpg" alt="Zázemí dětského domova" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "relative", height: "220px" }}>
                <Image src="/images/img-09.jpg" alt="Areál DDŠ Těrlicko" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section style={{ padding: "72px 0", background: "var(--off-white)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.3rem)", marginBottom: "20px" }}>Zázemí a vybavení</h2>
              <div style={{ width: "40px", height: "3px", background: "var(--amber)", marginBottom: "32px" }} />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {FACILITIES.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-md)", lineHeight: 1.6 }}>
                    <span style={{ display: "inline-block", width: "20px", height: "20px", background: "var(--navy)", flexShrink: 0, marginTop: "2px", position: "relative" }}>
                      <svg viewBox="0 0 20 20" fill="none" style={{ position: "absolute", inset: "3px" }}>
                        <polyline points="3,10 8,15 17,5" stroke="#fff" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter"/>
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ position: "relative", height: "420px" }}>
              <Image src="/images/img-18.jpg" alt="Sportovní zázemí DDŠ Těrlicko" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "56px 0", background: "#fff", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-wrap justify-between items-center gap-6">
          <div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", color: "var(--navy)", margin: "0 0 6px" }}>Chcete vědět více?</h3>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--text-lt)", margin: 0 }}>Kontaktujte nás nebo si prohlédněte školu.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/kontakt" style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9rem", background: "var(--navy)", color: "#fff", padding: "12px 24px", textDecoration: "none" }}>
              Kontakt
            </Link>
            <Link href="/skola" style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9rem", background: "transparent", color: "var(--navy)", padding: "11px 24px", border: "1.5px solid var(--navy)", textDecoration: "none" }}>
              Škola
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
