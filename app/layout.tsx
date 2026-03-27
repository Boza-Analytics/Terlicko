import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const heading = DM_Serif_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DDŠ Těrlicko | Dětský domov se školou",
  description:
    "Dětský domov se školou v Těrlicku — výchovně vzdělávací, terapeutická a poradenská péče pro chlapce od 11 let.",
  metadataBase: new URL("https://terlickodds.cz"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${heading.variable} ${body.variable}`}>
      <body className="flex flex-col min-h-screen">
        <a href="#main-content" className="skip-link">
          Přejít na hlavní obsah
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
