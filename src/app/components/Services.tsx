import { Eye, Monitor, Wrench, Truck, Star, Shield, Zap, Users, MessageCircle, Droplets } from "lucide-react";

const lensTypes = [
  { name: "Verres unifocaux", desc: "Une seule correction, pour la myopie, l'hypermétropie ou l'astigmatisme." },
  { name: "Verres progressifs", desc: "Correction fluide de la vision de près, intermédiaire et de loin, sans ligne visible." },
  { name: "Verres bifocaux", desc: "Deux zones de vision distinctes pour la vision de loin et de près." },
  { name: "Verres anti-lumière bleue", desc: "Protection contre la fatigue oculaire liée aux écrans." },
  { name: "Verres photochromiques", desc: "S'assombrissent automatiquement au soleil et s'éclaircissent à l'intérieur." },
  { name: "Verres teintés / solaires", desc: "Protection UV avec teintes personnalisables." },
  { name: "Verres polarisés", desc: "Réduction des reflets et éblouissements, idéal conduite et extérieur." },
  { name: "Verres anti-reflets", desc: "Traitement qui supprime les reflets et améliore la clarté visuelle." },
  { name: "Verres amincis haute-résistance", desc: "Verres fins et légers pour fortes corrections." },
  { name: "Verres pour enfants", desc: "Verres résistants aux chocs, adaptés à la croissance visuelle." },
];

const lensIcons = ["👁️", "🔄", "↕️", "💻", "☀️", "🌈", "🚗", "✨", "🪶", "👦"];

const mainServices = [
  {
    icon: <Star size={28} />,
    title: "Conseil visuel personnalisé",
    desc: "Nos opticiens vous guident dans le choix de la monture, du type de verre et des traitements adaptés à votre morphologie, votre correction et votre mode de vie.",
  },
  {
    icon: <Eye size={28} />,
    title: "Fabrication de verres optiques",
    desc: "Tous types de verres fabriqués en atelier selon votre ordonnance et vos mesures précises pour un confort optimal.",
  },
  {
    icon: <Users size={28} />,
    title: "Vente de montures",
    desc: "Une sélection de montures optiques et solaires, classiques ou tendances, pour toutes les morphologies et tous les budgets.",
  },
  {
    icon: <Monitor size={28} />,
    title: "Consultation en ligne",
    desc: "Où que vous soyez au Cameroun, échangez en visioconférence avec un opticien Optic Prestance : conseil, mesures, ordonnance, fabrication et livraison.",
  },
  {
    icon: <MessageCircle size={28} />,
    title: "Suivi client à distance",
    desc: "Suivi personnalisé après chaque commande : ajustements, questions, renouvellement — accessible par téléphone, WhatsApp ou visioconférence.",
  },
  {
    icon: <Wrench size={28} />,
    title: "Réparation & ajustement",
    desc: "Vis desserrée, monture déformée, plaquettes usées : nous réparons et ajustons vos lunettes pour un confort et un maintien parfaits.",
  },
  {
    icon: <Droplets size={28} />,
    title: "Entretien & nettoyage",
    desc: "Nettoyage aux ultrasons, vérification des traitements de surface et remise à neuf de vos montures.",
  },
  {
    icon: <Truck size={28} />,
    title: "Livraison à domicile",
    desc: "Une fois vos verres fabriqués, nous livrons vos lunettes directement à votre domicile ou lieu de travail, partout au Cameroun.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
      <div style={{ width: "40px", height: "3px", backgroundColor: "#C41230" }} />
      <span style={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 700,
        fontSize: "11px",
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "#C41230",
      }}>
        {children}
      </span>
      <div style={{ width: "40px", height: "3px", backgroundColor: "#C41230" }} />
    </div>
  );
}

export function Services() {
  return (
    <section id="services" style={{ backgroundColor: "#fff", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <SectionLabel>Nos services</SectionLabel>
          <h2 style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 3.5vw, 44px)",
            color: "#1A1A1A",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}>
            Des services pensés pour votre regard
          </h2>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "17px",
            color: "#666",
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto",
          }}>
            Du conseil à la fabrication, en passant par le suivi à distance :
            Optic Prestance prend soin de votre vue à chaque étape.
          </p>
        </div>

        {/* Main Services Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
          marginBottom: "80px",
        }}>
          {mainServices.map((service, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#F4F4F4",
                padding: "36px 24px",
                transition: "all 0.3s",
                cursor: "default",
                borderTop: "3px solid transparent",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "#1A1A1A";
                el.style.borderTopColor = "#C41230";
                el.querySelectorAll<HTMLElement>("[data-title]").forEach(t => t.style.color = "#fff");
                el.querySelectorAll<HTMLElement>("[data-desc]").forEach(t => t.style.color = "rgba(255,255,255,0.7)");
                el.querySelectorAll<HTMLElement>("[data-icon]").forEach(t => t.style.color = "#C41230");
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "#F4F4F4";
                el.style.borderTopColor = "transparent";
                el.querySelectorAll<HTMLElement>("[data-title]").forEach(t => t.style.color = "#1A1A1A");
                el.querySelectorAll<HTMLElement>("[data-desc]").forEach(t => t.style.color = "#666");
                el.querySelectorAll<HTMLElement>("[data-icon]").forEach(t => t.style.color = "#C41230");
              }}
            >
              <div data-icon style={{ color: "#C41230", marginBottom: "20px" }}>{service.icon}</div>
              <h3 data-title style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                color: "#1A1A1A",
                marginBottom: "12px",
                lineHeight: 1.3,
                transition: "color 0.3s",
              }}>
                {service.title}
              </h3>
              <p data-desc style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                color: "#666",
                lineHeight: 1.7,
                transition: "color 0.3s",
              }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Lens Types Section */}
        <div style={{
          backgroundColor: "#1A1A1A",
          padding: "64px 48px",
        }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "40px", height: "3px", backgroundColor: "#C41230" }} />
              <span style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#C41230",
              }}>
                Fabrication de verres
              </span>
              <div style={{ width: "40px", height: "3px", backgroundColor: "#C41230" }} />
            </div>
            <h3 style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(22px, 2.5vw, 34px)",
              color: "#fff",
              marginBottom: "12px",
            }}>
              Tous types de verres optiques
            </h3>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.6)" }}>
              Chaque verre est fabriqué en atelier selon votre ordonnance et vos mesures précises.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "16px",
          }}>
            {lensTypes.map((lens, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "24px 16px",
                  textAlign: "center",
                  transition: "all 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(196,18,48,0.12)";
                  e.currentTarget.style.borderColor = "#C41230";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>{lensIcons[i]}</div>
                <div style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "#fff",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}>
                  {lens.name}
                </div>
                <div style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.5,
                }}>
                  {lens.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #services .main-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 900px) {
          #services .lens-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #services .main-grid { grid-template-columns: 1fr !important; }
          #services .lens-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
