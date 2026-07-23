import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Services", href: "#services" },
  { label: "Comment ça marche", href: "#comment" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "#1A1A1A",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.4)" : "none",
        transition: "box-shadow 0.3s ease",
        height: "80px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#accueil"
          onClick={(e) => { e.preventDefault(); handleNavClick("#accueil"); }}
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}
        >
          <img
            src="/img/logo.png"
            alt="Optic"
            style={{ height: "30px", width: "auto", display: "block" }}
          />
          <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#fff", fontSize: "18px", letterSpacing: "0.5px", lineHeight: 1 }}>
            PRESTANCE
          </span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "28px", alignItems: "center" }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#fff",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C41230")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => handleNavClick("#contact")}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "11px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            backgroundColor: "#C41230",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            cursor: "pointer",
            transition: "background-color 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1A1A1A")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C41230")}
          className="desktop-cta"
        >
          Prendre rendez-vous
        </button>

        {/* Mobile Burger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: "4px", display: "none" }}
          className="mobile-burger"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: 0,
            right: 0,
            backgroundColor: "#1A1A1A",
            borderTop: "1px solid rgba(196,18,48,0.3)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#fff",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              backgroundColor: "#C41230",
              color: "#fff",
              border: "none",
              padding: "14px",
              cursor: "pointer",
              marginTop: "16px",
            }}
          >
            Prendre rendez-vous
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
