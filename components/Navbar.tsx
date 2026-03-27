"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Úvod", href: "/" },
  { label: "Domov", href: "/domov" },
  { label: "Škola", href: "/skola" },
  { label: "Fotogalerie", href: "/fotogalerie" },
  { label: "Partneři", href: "/partneri" },
  { label: "Dokumenty", href: "/dokumenty" },
  { label: "GDPR", href: "/gdpr" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header style={{ background: "#fff", borderBottom: "2px solid #1e3a5f" }}>
      {/* Top bar */}
      <div style={{ background: "var(--navy)", color: "#fff" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 flex justify-between items-center" style={{ height: "36px" }}>
          <span style={{ fontSize: "0.78rem", opacity: 0.75, fontFamily: "var(--font-body)" }}>
            Dětský domov se školou Těrlicko
          </span>
          <a
            href="tel:+420596423147"
            style={{ fontSize: "0.78rem", color: "#fff", fontWeight: 600, fontFamily: "var(--font-body)", letterSpacing: "0.01em" }}
          >
            +420 596 423 147
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between" style={{ height: "72px" }}>
        <Link href="/" aria-label="DDŠ Těrlicko — domovská stránka">
          <Image
            src="/images/logo.png"
            alt="DDŠ Těrlicko logo"
            width={160}
            height={52}
            style={{ height: "48px", width: "auto", objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Hlavní navigace" className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: active ? "var(--navy)" : "var(--text-md)",
                  padding: "6px 10px",
                  borderBottom: active ? "2px solid var(--amber)" : "2px solid transparent",
                  transition: "color 0.15s, border-color 0.15s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.color = "var(--navy)";
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.color = "var(--text-md)";
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={open}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", color: "var(--navy)" }}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          aria-label="Mobilní navigace"
          style={{ borderTop: "1px solid var(--border)", background: "#fff" }}
        >
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "14px 24px",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: active ? "var(--navy)" : "var(--text)",
                  borderBottom: "1px solid var(--border)",
                  borderLeft: active ? "4px solid var(--amber)" : "4px solid transparent",
                  background: active ? "var(--off-white)" : "transparent",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
