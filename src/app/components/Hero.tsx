import { ChevronDown, GraduationCap, Microscope, Monitor, Radio, Truck } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?crop=faces&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1920&h=1080";

const reassuranceItems = [
  { icon: <GraduationCap size={28} />, label: "Opticiens diplômés & expérimentés" },
  { icon: <Microscope size={28} />, label: "Verres fabriqués sur-mesure" },
  { icon: <Radio size={28} />, label: "Consultation à distance, partout au Cameroun" },
  { icon: <Truck size={28} />, label: "Livraison à domicile" },
];

function handleScroll(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section id="accueil" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <img
          src={HERO_IMAGE}
          alt="Homme portant des lunettes à verres teintés noirs"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(26,26,26,0.88) 0%, rgba(26,26,26,0.65) 100%)"
        }} />
      </div>

      {/* Content */}
      <div style={{
        position: "relative",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "120px 24px 80px",
        width: "100%",
      }}>
        <div style={{ maxWidth: "680px" }}>
          {/* Red accent line */}
          <div style={{ width: "60px", height: "4px", backgroundColor: "#C41230", marginBottom: "28px" }} />

          <h1 style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(36px, 6vw, 68px)",
            lineHeight: 1.1,
            color: "#fff",
            marginBottom: "24px",
            letterSpacing: "-0.5px",
          }}>
            Votre regard mérite toute notre{" "}
            <span style={{ color: "#C41230" }}>Prestance.</span>
          </h1>

          <p style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.85)",
            marginBottom: "44px",
          }}>
            Cabinet d'opticien à Douala : conseil personnalisé, fabrication de verres
            sur-mesure et consultation en ligne partout au Cameroun.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button
              onClick={() => handleScroll("#contact")}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                backgroundColor: "#C41230",
                color: "#fff",
                border: "2px solid #C41230",
                padding: "16px 32px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#C41230"; }}
            >
              Prendre rendez-vous
            </button>
            <button
              onClick={() => handleScroll("#comment")}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                backgroundColor: "transparent",
                color: "#fff",
                border: "2px solid rgba(255,255,255,0.6)",
                padding: "16px 32px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; }}
            >
              <Monitor size={16} />
              Consultation en ligne
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "rgba(255,255,255,0.5)",
            cursor: "pointer",
            animation: "bounce 2s infinite",
          }}
          onClick={() => handleScroll("#reassurance")}
        >
          <ChevronDown size={28} />
        </div>
      </div>

      {/* Reassurance Band */}
      <div
        id="reassurance"
        style={{
          position: "relative",
          backgroundColor: "#fff",
          borderTop: "4px solid #C41230",
        }}
      >
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0",
        }}>
          {reassuranceItems.map((item, i) => (
            <div
              key={i}
              style={{
                padding: "28px 20px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                borderRight: i < 3 ? "1px solid #F4F4F4" : "none",
              }}
            >
              <span style={{ color: "#C41230", display: "flex", flexShrink: 0 }}>{item.icon}</span>
              <span style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: "13px",
                color: "#1A1A1A",
                lineHeight: 1.4,
              }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @media (max-width: 768px) {
          #reassurance > div { grid-template-columns: repeat(2, 1fr) !important; }
          #reassurance > div > div:nth-child(2) { border-right: none !important; }
        }
        @media (max-width: 480px) {
          #reassurance > div { grid-template-columns: 1fr !important; }
          #reassurance > div > div { border-right: none !important; border-bottom: 1px solid #F4F4F4; }
        }
      `}</style>
    </section>
  );
}
