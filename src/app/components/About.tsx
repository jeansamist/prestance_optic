const ABOUT_IMAGE = "/img/about-us.jpeg";

const stats = [
  { value: "+10", label: "Années d'expertise en optique" },
  { value: "+500", label: "Clients accompagnés" },
  { value: "10", label: "Régions du Cameroun desservies" },
  { value: "100%", label: "Verres fabriqués en atelier local" },
];

export function About() {
  return (
    <section
      id="apropos"
      style={{ backgroundColor: "#F4F4F4", padding: "100px 0 0" }}
    >
      <div
        className="about-top-grid"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Image */}
        <div className="about-image-wrap" style={{ position: "relative" }}>
          <div
            className="about-image-accent"
            style={{
              position: "absolute",
              top: "-20px",
              left: "-20px",
              width: "60px",
              height: "60px",
              backgroundColor: "#C41230",
              zIndex: 0,
            }}
          />
          <img
            className="about-image"
            src={ABOUT_IMAGE}
            alt="Lunettes à verres teintés noirs Optic Prestance"
            style={{
              width: "100%",
              height: "480px",
              objectFit: "cover",
              position: "relative",
              zIndex: 1,
              border: "8px solid #fff",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-20px",
              right: "-20px",
              width: "100px",
              height: "100px",
              border: "4px solid #C41230",
              zIndex: 0,
            }}
          />
        </div>

        {/* Text */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
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
              À propos
            </span>
          </div>

          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 3.5vw, 42px)",
              color: "#1A1A1A",
              lineHeight: 1.2,
              marginBottom: "28px",
            }}
          >
            L'excellence visuelle, une affaire de{" "}
            <span style={{ color: "#C41230" }}>Prestance</span>
          </h2>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#555",
              marginBottom: "20px",
            }}
          >
            Implanté au cœur de Douala, Optic Prestance est un cabinet
            d'opticien dédié au conseil visuel et à la fabrication de verres
            optiques de qualité. Nous accompagnons chaque client dans le choix
            de sa monture, la conception de ses verres et l'entretien de son
            équipement, avec la même exigence de précision et de style.
          </p>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#555",
              marginBottom: "20px",
            }}
          >
            Grâce à notre organisation, nous accompagnons désormais nos clients
            où qu'ils se trouvent sur le territoire camerounais : prise de
            contact facilitée, conseils personnalisés, fabrication et livraison
            à domicile.
          </p>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              lineHeight: 1.8,
              color: "#888",
              fontStyle: "italic",
              borderLeft: "3px solid #C41230",
              paddingLeft: "16px",
              marginBottom: "40px",
            }}
          >
            Optic Prestance n'exerce pas la médecine. Nous travaillons en
            complémentarité avec votre ophtalmologiste et intervenons sur la
            base de votre prescription pour concevoir et fabriquer vos verres
            avec précision.
          </p>
        </div>
      </div>

      {/* Stats Band */}
      <div
        style={{
          backgroundColor: "#1A1A1A",
          marginTop: "80px",
        }}
      >
        <div
          className="about-stats-grid"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "52px 24px",
                textAlign: "center",
                borderRight:
                  i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  fontSize: "48px",
                  color: "#C41230",
                  lineHeight: 1,
                  marginBottom: "12px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.5,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-top-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-image-accent { display: none; }
          .about-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .about-stats-grid > div:nth-child(2) { border-right: none !important; }
        }
        @media (max-width: 600px) {
          .about-top-grid { padding: 0 20px !important; }
          .about-image { height: 320px !important; }
        }
        @media (max-width: 480px) {
          .about-stats-grid { grid-template-columns: 1fr !important; }
          .about-stats-grid > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); }
        }
      `}</style>
    </section>
  );
}
