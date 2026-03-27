import Image from "next/image";
import Link from "next/link";

const PROGRAMS = [
  { icon: "📚", title: "Vzdělávání", desc: "Interaktivní výuka v moderně vybavených učebnách s audiovizuální technikou a smartboardy." },
  { icon: "⚽", title: "Sport", desc: "Sportovní hřiště s umělým povrchem, atletický sektor a travnaté hřiště pro míčové hry." },
  { icon: "🎨", title: "Umění a kultura", desc: "Výtvarná dílna, hudební učebna a pravidelné návštěvy divadel a koncertů." },
  { icon: "🌿", title: "Zahrada", desc: "Pěstitelské práce a zahradničení jako součást každodenního programu." },
  { icon: "🧰", title: "Dílny", desc: "Praktické dovednosti v odborných dílnách a pracovních učebnách." },
  { icon: "🤝", title: "Integrace", desc: "Spolupráce se školami, sportovními kluby a kulturními institucemi v okolí." },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section aria-label="Úvod" style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center" }}>
        <Image src="/images/hero.jpg" alt="Areál DDŠ Těrlicko" fill priority style={{ objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(30,58,95,0.92) 0%, rgba(30,58,95,0.75) 60%, rgba(30,58,95,0.4) 100%)" }} />
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "5px", background: "var(--amber)" }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-8 w-full relative">
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "16px" }}>
            Těrlicko – Horní Těrlicko
          </p>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.4rem, 6vw, 4.5rem)", color: "#fff", margin: 0, maxWidth: "700px" }}>
            Dětský domov<br />se školou Těrlicko
          </h1>
          <div style={{ width: "48px", height: "3px", background: "var(--amber)", margin: "24px 0" }} />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "rgba(255,255,255,0.8)", maxWidth: "520px", lineHeight: 1.8, margin: "0 0 40px" }}>
            Výchovně vzdělávací, terapeutická a poradenská péče pro chlapce od 11 let v příjemném prostředí u Těrlické přehrady.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/domov" className="btn-amber" style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9rem", padding: "13px 28px", textDecoration: "none", display: "inline-block" }}>
              Více o domově
            </Link>
            <Link href="/kontakt" className="btn-outline-white" style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9rem", padding: "12px 28px", textDecoration: "none", display: "inline-block" }}>
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section aria-label="Základní informace" style={{ background: "var(--navy)", borderTop: "4px solid var(--amber)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {[
              { num: "od roku 1960", label: "Tradice a zkušenosti" },
              { num: "Výhradně chlapci", label: "Od 11 let do konce povinné školní docházky" },
              { num: "IČO 62 331 507", label: "Příspěvková organizace MŠMT" },
            ].map((s, i) => (
              <div key={s.label} style={{ padding: "32px 0", paddingRight: i < 2 ? "40px" : 0, borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none", paddingLeft: i > 0 ? "40px" : 0 }}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", color: "#fff" }}>{s.num}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section aria-labelledby="mission-heading" style={{ padding: "80px 0", background: "#fff" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "12px" }}>Kdo jsme</p>
              <h2 id="mission-heading" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", margin: "0 0 20px" }}>Naše poslání</h2>
              <div style={{ width: "40px", height: "3px", background: "var(--amber)", marginBottom: "28px" }} />
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-md)", lineHeight: 1.85, marginBottom: "20px" }}>
                Posláním Dětského domova se školou v Těrlicku je výchovně vzdělávací, terapeutická a poradenská péče o chlapce od 11 let s nařízenou ústavní nebo uloženou ochrannou výchovou.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-md)", lineHeight: 1.85, marginBottom: "32px" }}>
                Nacházíme se ve vilové rekreační čtvrti na břehu Těrlické přehrady v blízkosti Havířova. Každému chlapci poskytujeme individuální přístup, vzdělání, zdravotní péči a psychologickou podporu.
              </p>
              <Link href="/domov" className="link-underline" style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9rem", color: "var(--navy)", textDecoration: "none" }}>
                Zjistit více o domově →
              </Link>
            </div>
            <div style={{ position: "relative", height: "480px" }}>
              <Image src="/images/img-14.jpg" alt="Prostředí DDŠ Těrlicko" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 20px", background: "var(--navy)" }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", margin: 0 }}>
                  Promenádní 561/16, 735 42 Těrlicko – Horní Těrlicko
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section aria-labelledby="programs-heading" style={{ padding: "80px 0", background: "var(--off-white)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div style={{ marginBottom: "48px" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "12px" }}>Aktivity a programy</p>
            <h2 id="programs-heading" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", margin: 0 }}>Co u nás chlapci najdou</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
            {PROGRAMS.map((p) => (
              <article key={p.title} style={{ background: "#fff", padding: "32px 28px" }}>
                <div style={{ fontSize: "2rem", marginBottom: "16px", lineHeight: 1 }} aria-hidden="true">{p.icon}</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "10px" }}>{p.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.925rem", color: "var(--text-md)", lineHeight: 1.75, margin: 0 }}>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <section aria-label="Fotografie z areálu" style={{ padding: "80px 0", background: "#fff", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-end" style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", margin: 0 }}>Pohled do areálu</h2>
            <Link href="/fotogalerie" className="link-underline" style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.875rem", color: "var(--navy)", textDecoration: "none", whiteSpace: "nowrap" }}>
              Celá galerie →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {["/images/img-09.jpg", "/images/img-18.jpg", "/images/img-05.jpg", "/images/img-03.jpg"].map((src, i) => (
              <div key={i} style={{ position: "relative", aspectRatio: "1", overflow: "hidden" }}>
                <Image src={src} alt={`Fotografie z areálu DDŠ Těrlicko ${i + 1}`} fill className="photo-hover" style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section aria-label="Výzva ke kontaktu" style={{ background: "var(--navy)", borderTop: "4px solid var(--amber)", padding: "72px 0" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#fff", margin: "0 0 16px" }}>
            Máte dotazy nebo zájem o spolupráci?
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "rgba(255,255,255,0.65)", maxWidth: "480px", margin: "0 auto 36px", lineHeight: 1.8 }}>
            Rádi vás přivítáme nebo zodpovíme vaše otázky. Neváhejte nás kontaktovat.
          </p>
          <Link href="/kontakt" className="btn-amber" style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.95rem", padding: "14px 36px", textDecoration: "none", display: "inline-block" }}>
            Kontaktujte nás
          </Link>
        </div>
      </section>
    </>
  );
}
