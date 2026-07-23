const BACKGROUND_IMAGE = "/img/portfolio/portfolio-08.jpeg";

const steps = [
  {
    num: "01",
    title: "Prise de contact",
    desc: "Contactez-nous depuis le site, par téléphone ou WhatsApp pour exprimer votre besoin.",
  },
  {
    num: "02",
    title: "Échange avec un opticien",
    desc: "Discutez avec un opticien Optic Prestance et transmettez votre ordonnance.",
  },
  {
    num: "03",
    title: "Choix monture & verres",
    desc: "Sélection guidée parmi notre catalogue de montures et de verres, adaptée à vos besoins.",
  },
  {
    num: "04",
    title: "Fabrication sur-mesure",
    desc: "Vos verres sont fabriqués en atelier à Douala selon vos mesures précises.",
  },
  {
    num: "05",
    title: "Livraison partout au Cameroun",
    desc: "Vos lunettes sont livrées à votre porte.",
  },
];

function handleScroll(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function HowItWorks() {
  return (
    <section
      id="comment"
      style={{
        backgroundColor: "#1A1A1A",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image with heavy overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src={BACKGROUND_IMAGE}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.08,
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "3px",
                backgroundColor: "#C41230",
              }}
            />
            <span
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#C41230",
              }}
            >
              Comment ça marche
            </span>
            <div
              style={{
                width: "40px",
                height: "3px",
                backgroundColor: "#C41230",
              }}
            />
          </div>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(26px, 3.5vw, 44px)",
              color: "#fff",
              lineHeight: 1.2,
              maxWidth: "680px",
              margin: "0 auto 16px",
            }}
          >
            Votre nouvelle paire de lunettes, en 5 étapes, partout au Cameroun
          </h2>
        </div>

        {/* Steps */}
        <div
          className="steps-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "0",
            position: "relative",
            marginBottom: "64px",
          }}
        >
          {/* Connector line */}
          <div
            className="connector"
            style={{
              position: "absolute",
              top: "36px",
              left: "10%",
              right: "10%",
              height: "2px",
              backgroundColor: "rgba(196,18,48,0.3)",
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "0 16px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Number circle */}
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  backgroundColor: "#C41230",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "28px",
                  flexShrink: 0,
                  boxShadow: "0 0 0 8px rgba(196,18,48,0.15)",
                }}
              >
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#fff",
                  }}
                >
                  {step.num}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#fff",
                  marginBottom: "12px",
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.6,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
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
              padding: "18px 48px",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#C41230";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#C41230";
              e.currentTarget.style.color = "#fff";
            }}
          >
            Démarrer ma commande
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #comment .steps-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 40px 0 !important; }
          #comment .connector { display: none; }
        }
        @media (max-width: 600px) {
          #comment .steps-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
