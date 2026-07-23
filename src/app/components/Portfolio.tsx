import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const portfolioItems = [
  { img: "/img/portfolio/portfolio-01.jpeg", label: "Montures", title: "Monture ronde écaille ambrée" },
  { img: "/img/portfolio/portfolio-02.jpeg", label: "Montures", title: "Monture rectangulaire noire" },
  { img: "/img/portfolio/portfolio-03.jpeg", label: "Verres", title: "Finition verres sans cerclage" },
  { img: "/img/portfolio/portfolio-04.jpeg", label: "Montures", title: "Monture FRED sans cerclage" },
  { img: "/img/portfolio/portfolio-05.jpeg", label: "Montures", title: "Monture ronde bicolore" },
  { img: "/img/portfolio/portfolio-06.jpeg", label: "Montures", title: "Monture CHANEL ronde dorée" },
  { img: "/img/portfolio/portfolio-07.jpeg", label: "Montures", title: "Monture Emporio Armani" },
  { img: "/img/portfolio/portfolio-08.jpeg", label: "Verres", title: "Verres ronds cerclage doré" },
  { img: "/img/portfolio/portfolio-09.jpeg", label: "Montures", title: "Monture Mont Blanc" },
  { img: "/img/portfolio/portfolio-10.jpeg", label: "Montures", title: "Lunettes de soleil aviateur" },
];

const filters = ["Tous", "Montures", "Verres"];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = activeFilter === "Tous"
    ? portfolioItems
    : portfolioItems.filter(item => item.label === activeFilter);

  const closeSpotlight = () => setActiveIndex(null);
  const showPrev = () => setActiveIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const showNext = () => setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length));

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSpotlight();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, filtered.length]);

  const active = activeIndex !== null ? filtered[activeIndex] : null;

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
            Un aperçu de nos réalisations : montures et verres sur-mesure. Cliquez sur une image pour l'agrandir.
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "48px", flexWrap: "wrap" }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => { setActiveFilter(f); setActiveIndex(null); }}
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
        <div className="portfolio-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}>
          {filtered.map((item, i) => (
            <button
              key={item.img}
              onClick={() => setActiveIndex(i)}
              aria-label={`Agrandir : ${item.title}`}
              style={{
                position: "relative",
                overflow: "hidden",
                aspectRatio: "1",
                cursor: "pointer",
                border: "none",
                padding: 0,
                display: "block",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Spotlight */}
      {active && (
        <div
          onClick={closeSpotlight}
          style={{
            position: "fixed", inset: 0, zIndex: 2000,
            backgroundColor: "rgba(10,10,10,0.94)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            padding: "24px",
          }}
        >
          <button
            onClick={closeSpotlight}
            aria-label="Fermer"
            style={{
              position: "absolute", top: "24px", right: "24px",
              width: "44px", height: "44px",
              backgroundColor: "transparent", border: "2px solid rgba(255,255,255,0.4)",
              color: "#fff", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C41230")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
          >
            <X size={20} />
          </button>

          {filtered.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              aria-label="Image précédente"
              style={{
                position: "absolute", left: "24px", top: "50%", transform: "translateY(-50%)",
                width: "48px", height: "48px",
                backgroundColor: "transparent", border: "2px solid rgba(255,255,255,0.4)",
                color: "#fff", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C41230")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
            >
              <ChevronLeft size={22} />
            </button>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "min(900px, 90vw)", maxHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <img
              src={active.img}
              alt={active.title}
              style={{ maxWidth: "100%", maxHeight: "70vh", objectFit: "contain", border: "6px solid #fff" }}
            />
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <span style={{
                fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "10px",
                letterSpacing: "2px", textTransform: "uppercase", color: "#C41230",
              }}>
                {active.label}
              </span>
              <p style={{
                fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "18px",
                color: "#fff", marginTop: "8px",
              }}>
                {active.title}
              </p>
            </div>
          </div>

          {filtered.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              aria-label="Image suivante"
              style={{
                position: "absolute", right: "24px", top: "50%", transform: "translateY(-50%)",
                width: "48px", height: "48px",
                backgroundColor: "transparent", border: "2px solid rgba(255,255,255,0.4)",
                color: "#fff", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C41230")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
            >
              <ChevronRight size={22} />
            </button>
          )}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          #portfolio .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          #portfolio .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
