import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Aminata Bello",
    location: "Bafoussam",
    text: "Grâce à leur service disponible partout au pays, j'ai pu commander mes lunettes depuis Bafoussam et les recevoir en quelques jours, sans jamais me déplacer à Douala. Service impeccable !",
    rating: 5,
    initials: "AB",
  },
  {
    name: "Jean-Claude Mbarga",
    location: "Yaoundé",
    text: "Optic Prestance a fabriqué mes verres progressifs avec une précision remarquable. L'opticien a pris le temps de bien expliquer chaque choix. Je recommande vivement.",
    rating: 5,
    initials: "JM",
  },
  {
    name: "Sandrine Kotto",
    location: "Douala",
    text: "Très professionnel et à l'écoute. Mon fils a des verres pour enfants et le suivi est excellent. La boutique est moderne et l'accueil chaleureux.",
    rating: 5,
    initials: "SK",
  },
  {
    name: "Paul Essomba",
    location: "Garoua",
    text: "Service de livraison très rapide. Mes lunettes anti-lumière bleue sont arrivées en parfait état. L'équipe est disponible et répond rapidement sur WhatsApp.",
    rating: 5,
    initials: "PE",
  },
  {
    name: "Marie-Claire Ngo",
    location: "Buea",
    text: "J'ai fait ajuster mes anciennes lunettes chez Optic Prestance et le résultat est parfait. Tarifs raisonnables et service de qualité. Bravo à toute l'équipe !",
    rating: 5,
    initials: "MN",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section id="temoignages" style={{ backgroundColor: "#fff", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "40px", height: "3px", backgroundColor: "#C41230" }} />
            <span style={{
              fontFamily: "Montserrat, sans-serif", fontWeight: 700,
              fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#C41230",
            }}>
              Témoignages
            </span>
            <div style={{ width: "40px", height: "3px", backgroundColor: "#C41230" }} />
          </div>
          <h2 style={{
            fontFamily: "Poppins, sans-serif", fontWeight: 700,
            fontSize: "clamp(28px, 3.5vw, 44px)", color: "#1A1A1A", lineHeight: 1.2,
          }}>
            Ils nous font confiance
          </h2>
        </div>

        {/* Carousel */}
        <div className="carousel-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          marginBottom: "48px",
        }}>
          {visible.map((t, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#F4F4F4",
                padding: "40px 32px",
                position: "relative",
                borderBottom: i === 1 ? "4px solid #C41230" : "4px solid transparent",
                transform: i === 1 ? "translateY(-8px)" : "none",
                transition: "transform 0.3s",
              }}
            >
              {/* Quote mark */}
              <div style={{
                fontFamily: "Georgia, serif",
                fontSize: "80px",
                color: "#C41230",
                lineHeight: 1,
                position: "absolute",
                top: "16px",
                left: "24px",
                opacity: 0.15,
              }}>
                "
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={14} fill="#C41230" stroke="none" />
                ))}
              </div>

              {/* Text */}
              <p style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                color: "#444",
                lineHeight: 1.8,
                fontStyle: "italic",
                marginBottom: "28px",
              }}>
                « {t.text} »
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "#1A1A1A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "#fff",
                  }}>
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div style={{
                    fontFamily: "Poppins, sans-serif", fontWeight: 600,
                    fontSize: "14px", color: "#1A1A1A",
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px", color: "#C41230",
                  }}>
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", alignItems: "center" }}>
          <button
            onClick={prev}
            style={{
              width: "48px", height: "48px", backgroundColor: "transparent",
              border: "2px solid #1A1A1A", cursor: "pointer", display: "flex",
              alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#C41230"; e.currentTarget.style.borderColor = "#C41230"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = "#1A1A1A"; }}
          >
            <ChevronLeft size={20} />
          </button>
          <div style={{ display: "flex", gap: "8px" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? "32px" : "8px",
                  height: "8px",
                  backgroundColor: i === current ? "#C41230" : "#ddd",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>
          <button
            onClick={next}
            style={{
              width: "48px", height: "48px", backgroundColor: "transparent",
              border: "2px solid #1A1A1A", cursor: "pointer", display: "flex",
              alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#C41230"; e.currentTarget.style.borderColor = "#C41230"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = "#1A1A1A"; }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #temoignages .carousel-grid { grid-template-columns: 1fr !important; }
          #temoignages .carousel-grid > div:first-child,
          #temoignages .carousel-grid > div:last-child { display: none; }
          #temoignages .carousel-grid > div:nth-child(2) { transform: none !important; }
        }
      `}</style>
    </section>
  );
}
