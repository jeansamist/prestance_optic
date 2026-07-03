import { useState } from "react";

const portfolioItems = [
  {
    img: "https://images.unsplash.com/photo-1556306510-31ca015374b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRpY2lhbiUyMGV5ZXdlYXIlMjBnbGFzc2VzJTIwc2hvcCUyMG1vZGVybnxlbnwxfHx8fDE3ODMwOTM5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Montures",
    title: "Lunettes noires classiques",
  },
  {
    img: "https://images.unsplash.com/photo-1615468822882-4828d2602857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxvcHRpY2lhbiUyMGV5ZXdlYXIlMjBnbGFzc2VzJTIwc2hvcCUyMG1vZGVybnxlbnwxfHx8fDE3ODMwOTM5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Verres",
    title: "Monture argentée sur verre",
  },
  {
    img: "https://images.unsplash.com/photo-1533746228171-962520811097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRpY2FsJTIwbGVucyUyMGZhYnJpY2F0aW9uJTIwcHJlY2lzaW9ufGVufDF8fHx8MTc4MzA5Mzk5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Verres",
    title: "Verre de précision",
  },
  {
    img: "https://images.unsplash.com/photo-1534078477103-9f6a18b3a5e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxvcHRpY2lhbiUyMGV5ZXdlYXIlMjBnbGFzc2VzJTIwc2hvcCUyMG1vZGVybnxlbnwxfHx8fDE3ODMwOTM5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Montures",
    title: "Collection complète",
  },
  {
    img: "https://images.unsplash.com/photo-1611222777277-61319d63ca94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVnbGFzc2VzJTIwZnJhbWVzJTIwY29sbGVjdGlvbiUyMGRpc3BsYXl8ZW58MXx8fHwxNzgzMDk0MDAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Montures",
    title: "Lunettes de soleil tendance",
  },
  {
    img: "https://images.unsplash.com/photo-1582143434535-eba55a806718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxvcHRpY2FsJTIwbGVucyUyMGZhYnJpY2F0aW9uJTIwcHJlY2lzaW9ufGVufDF8fHx8MTc4MzA5Mzk5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Verres",
    title: "Optique de précision",
  },
  {
    img: "https://images.unsplash.com/photo-1486250944723-86bca2b15b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxleWVnbGFzc2VzJTIwZnJhbWVzJTIwY29sbGVjdGlvbiUyMGRpc3BsYXl8ZW58MXx8fHwxNzgzMDk0MDAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Boutique",
    title: "Exposition de montures",
  },
  {
    img: "https://images.unsplash.com/photo-1608539733377-5557e02926b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxleWVnbGFzc2VzJTIwZnJhbWVzJTIwY29sbGVjdGlvbiUyMGRpc3BsYXl8ZW58MXx8fHwxNzgzMDk0MDAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Montures",
    title: "Montures brun & noir",
  },
  {
    img: "https://images.unsplash.com/photo-1646084081219-1090f72a531c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxvcHRpY2lhbiUyMGV5ZXdlYXIlMjBnbGFzc2VzJTIwc2hvcCUyMG1vZGVybnxlbnwxfHx8fDE3ODMwOTM5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Montures",
    title: "Monture minimaliste blanche",
  },
];

const filters = ["Tous", "Montures", "Verres", "Boutique"];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered = activeFilter === "Tous"
    ? portfolioItems
    : portfolioItems.filter(item => item.label === activeFilter);

  return (
    <section id="portfolio" style={{ backgroundColor: "#F4F4F4", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "40px", height: "3px", backgroundColor: "#C41230" }} />
            <span style={{
              fontFamily: "Montserrat, sans-serif", fontWeight: 700,
              fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#C41230",
            }}>
              Portfolio
            </span>
            <div style={{ width: "40px", height: "3px", backgroundColor: "#C41230" }} />
          </div>
          <h2 style={{
            fontFamily: "Poppins, sans-serif", fontWeight: 700,
            fontSize: "clamp(28px, 3.5vw, 44px)", color: "#1A1A1A", lineHeight: 1.2, marginBottom: "12px",
          }}>
            Notre travail, votre regard
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "#666", lineHeight: 1.7 }}>
            Un aperçu de nos réalisations : montures, verres sur-mesure et ambiance boutique.
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "48px", flexWrap: "wrap" }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                padding: "10px 24px",
                border: "2px solid",
                borderColor: activeFilter === f ? "#C41230" : "#1A1A1A",
                backgroundColor: activeFilter === f ? "#C41230" : "transparent",
                color: activeFilter === f ? "#fff" : "#1A1A1A",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}>
          {filtered.map((item, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                overflow: "hidden",
                aspectRatio: "1",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const overlay = e.currentTarget.querySelector<HTMLElement>(".portfolio-overlay");
                if (overlay) overlay.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const overlay = e.currentTarget.querySelector<HTMLElement>(".portfolio-overlay");
                if (overlay) overlay.style.opacity = "0";
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%", height: "100%", objectFit: "cover",
                  transition: "transform 0.4s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div
                className="portfolio-overlay"
                style={{
                  position: "absolute", inset: 0,
                  backgroundColor: "rgba(26,26,26,0.85)",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  opacity: 0, transition: "opacity 0.3s",
                  borderBottom: "4px solid #C41230",
                }}
              >
                <span style={{
                  fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "10px",
                  letterSpacing: "2px", textTransform: "uppercase", color: "#C41230", marginBottom: "8px",
                }}>
                  {item.label}
                </span>
                <span style={{
                  fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "18px",
                  color: "#fff", textAlign: "center", padding: "0 20px",
                }}>
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #portfolio .grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          #portfolio .grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
