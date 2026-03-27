import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fotogalerie | DDŠ Těrlicko",
  description: "Fotogalerie z prostředí a aktivit Dětského domova se školou Těrlicko.",
};

const PHOTOS = [
  { src: "/images/hero.jpg", alt: "Areál DDŠ Těrlicko" },
  { src: "/images/img-02.jpg", alt: "Aktivity v DDŠ Těrlicko" },
  { src: "/images/img-03.jpg", alt: "Prostředí DDŠ Těrlicko" },
  { src: "/images/img-04.jpg", alt: "DDŠ Těrlicko" },
  { src: "/images/img-05.jpg", alt: "Zázemí DDŠ Těrlicko" },
  { src: "/images/img-09.jpg", alt: "Sportovní aktivity DDŠ Těrlicko" },
  { src: "/images/img-14.jpg", alt: "DDŠ Těrlicko — pohled na areál" },
  { src: "/images/img-15.jpg", alt: "Aktivity školy DDŠ Těrlicko" },
  { src: "/images/img-16.jpg", alt: "Výuka DDŠ Těrlicko" },
  { src: "/images/img-18.jpg", alt: "Sportovní zázemí DDŠ Těrlicko" },
  { src: "/images/img-19.jpg", alt: "Zázemí dětského domova" },
  { src: "/images/diplom.jpg", alt: "Diplom DDŠ Těrlicko" },
];

export default function FotogaleriePage() {
  return (
    <>
      <section style={{ background: "var(--navy)", padding: "64px 0 56px", borderBottom: "4px solid var(--amber)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <nav aria-label="Drobečková navigace" style={{ marginBottom: "20px" }}>
            <ol style={{ display: "flex", gap: "8px", listStyle: "none", padding: 0, margin: 0, fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
              <li><Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Úvod</Link></li>
              <li aria-hidden>/</li>
              <li style={{ color: "#fff" }}>Fotogalerie</li>
            </ol>
          </nav>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff", margin: 0 }}>Fotogalerie</h1>
          <div style={{ width: "40px", height: "3px", background: "var(--amber)", margin: "16px 0" }} />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", margin: 0, maxWidth: "560px" }}>
            Pohled do každodenního života, prostor a aktivit DDŠ Těrlicko.
          </p>
        </div>
      </section>

      <section style={{ padding: "72px 0", background: "#fff" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {PHOTOS.map((photo, i) => (
              <div key={i} style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="photo-hover"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
