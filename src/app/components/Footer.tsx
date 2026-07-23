import {
  Eye,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const quickLinks = [
  "Accueil",
  "À propos",
  "Services",
  "Portfolio",
  "Blog",
  "Contact",
];
const services = [
  "Conseil visuel",
  "Fabrication de verres",
  "Livraison à domicile",
  "Réparation & ajustement",
  "Suivi client",
];

const navIds: Record<string, string> = {
  Accueil: "#accueil",
  "À propos": "#apropos",
  Services: "#services",
  Portfolio: "#portfolio",
  Blog: "#blog",
  Contact: "#contact",
};

function handleScroll(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#111", borderTop: "4px solid #C41230" }}>
      {/* Main Footer */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 24px 48px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: "48px",
          }}
        >
          {/* Col 1 — Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  backgroundColor: "#C41230",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Eye size={20} color="#fff" strokeWidth={2} />
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    color: "#fff",
                    fontSize: "16px",
                  }}
                >
                  OPTIC{" "}
                </span>
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    color: "#C41230",
                    fontSize: "16px",
                  }}
                >
                  PRESTANCE
                </span>
              </div>
            </div>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Cabinet d'opticien à Douala. Conseil, fabrication de verres et
              service partout au Cameroun.
            </p>

            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "0.5px",
                color: "#C41230",
                fontStyle: "italic",
              }}
            >
              « Voir autrement, voir avec Prestance »
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: "28px",
              }}
            >
              Liens rapides
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={navIds[link]}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(navIds[link]);
                    }}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#C41230")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.55)")
                    }
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: "28px",
              }}
            >
              Nos services
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {services.map((s) => (
                <li key={s}>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Social + Newsletter */}
          <div>
            <h4
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: "28px",
              }}
            >
              Suivez-nous
            </h4>

            <div style={{ display: "flex", gap: "12px", marginBottom: "32px" }}>
              {[
                { icon: <Facebook size={18} />, label: "Facebook" },
                { icon: <Instagram size={18} />, label: "Instagram" },
                { icon: <MessageCircle size={18} />, label: "WhatsApp" },
                { icon: <Linkedin size={18} />, label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#C41230";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <h4
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: "16px",
              }}
            >
              Newsletter
            </h4>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.6,
                marginBottom: "16px",
              }}
            >
              Conseils visuels et actualités du cabinet directement dans votre
              boîte mail.
            </p>
            <div style={{ display: "flex" }}>
              <input
                type="email"
                placeholder="votre@email.com"
                style={{
                  flex: 1,
                  padding: "12px 14px",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRight: "none",
                  color: "#fff",
                  outline: "none",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                }}
              />
              <button
                style={{
                  backgroundColor: "#C41230",
                  color: "#fff",
                  border: "none",
                  padding: "12px 16px",
                  cursor: "pointer",
                  flexShrink: 0,
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#a00f27")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#C41230")
                }
                aria-label="S'inscrire"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(196,18,48,0.3)" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            © 2026 Optic Prestance — Tous droits réservés.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Mentions légales", "Politique de confidentialité"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.35)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#C41230")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
                  }
                >
                  {link}
                </a>
              ),
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          footer .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
