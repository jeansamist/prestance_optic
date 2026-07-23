const BLOG_IMAGES = [
  "https://images.unsplash.com/photo-1582143434535-eba55a806718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxvcHRpY2FsJTIwbGVucyUyMGZhYnJpY2F0aW9uJTIwcHJlY2lzaW9ufGVufDF8fHx8MTc4MzA5Mzk5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1646084081219-1090f72a531c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxvcHRpY2lhbiUyMGV5ZXdlYXIlMjBnbGFzc2VzJTIwc2hvcCUyMG1vZGVybnxlbnwxfHx8fDE3ODMwOTM5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1608539733377-5557e02926b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxleWVnbGFzc2VzJTIwZnJhbWVzJTIwY29sbGVjdGlvbiUyMGRpc3BsYXl8ZW58MXx8fHwxNzgzMDk0MDAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
];

const posts = [
  {
    img: BLOG_IMAGES[0],
    category: "Conseils",
    date: "20 Juin 2026",
    title: "Comment choisir la monture adaptée à la forme de votre visage",
    excerpt: "Ovale, carré, rond, triangulaire : chaque morphologie du visage appelle une monture différente. Nos opticiens vous guident pas à pas pour trouver la paire qui vous mettra en valeur.",
  },
  {
    img: BLOG_IMAGES[1],
    category: "Technologie",
    date: "5 Juin 2026",
    title: "Verres anti-lumière bleue : utiles ou marketing ?",
    excerpt: "On en entend beaucoup parler, mais que dit vraiment la science ? Nous faisons le point sur les preuves disponibles et vous aidons à décider si ce traitement est fait pour vous.",
  },
  {
    img: BLOG_IMAGES[2],
    category: "Entretien",
    date: "18 Mai 2026",
    title: "5 signes qu'il est temps de changer vos lunettes",
    excerpt: "Vous portez les mêmes lunettes depuis 3 ans ? Voici les signaux qui indiquent qu'il est temps de renouveler votre équipement pour préserver votre confort visuel.",
  },
];

export function Blog() {
  return (
    <section id="blog" style={{ backgroundColor: "#fff", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "56px",
          flexWrap: "wrap",
          gap: "20px",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "40px", height: "3px", backgroundColor: "#C41230" }} />
              <span style={{
                fontFamily: "Montserrat, sans-serif", fontWeight: 700,
                fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#C41230",
              }}>
                Blog
              </span>
            </div>
            <h2 style={{
              fontFamily: "Poppins, sans-serif", fontWeight: 700,
              fontSize: "clamp(28px, 3.5vw, 44px)", color: "#1A1A1A", lineHeight: 1.2,
            }}>
              Conseils & actualités
            </h2>
          </div>
          <button
            style={{
              fontFamily: "Montserrat, sans-serif", fontWeight: 700,
              fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase",
              backgroundColor: "transparent", color: "#1A1A1A",
              border: "2px solid #1A1A1A", padding: "12px 28px", cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#C41230"; e.currentTarget.style.borderColor = "#C41230"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = "#1A1A1A"; e.currentTarget.style.color = "#1A1A1A"; }}
          >
            Voir tous les articles
          </button>
        </div>

        {/* Posts Grid */}
        <div className="posts-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
        }}>
          {posts.map((post, i) => (
            <article
              key={i}
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) => {
                const title = e.currentTarget.querySelector<HTMLElement>("[data-post-title]");
                if (title) title.style.color = "#C41230";
              }}
              onMouseLeave={(e) => {
                const title = e.currentTarget.querySelector<HTMLElement>("[data-post-title]");
                if (title) title.style.color = "#1A1A1A";
              }}
            >
              {/* Image */}
              <div style={{ overflow: "hidden", marginBottom: "24px", height: "220px" }}>
                <img
                  src={post.img}
                  alt={post.title}
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    transition: "transform 0.4s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              {/* Meta */}
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
                <span style={{
                  fontFamily: "Montserrat, sans-serif", fontWeight: 700,
                  fontSize: "10px", letterSpacing: "1.5px", textTransform: "uppercase",
                  color: "#fff", backgroundColor: "#C41230", padding: "4px 10px",
                }}>
                  {post.category}
                </span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#999" }}>
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h3
                data-post-title
                style={{
                  fontFamily: "Poppins, sans-serif", fontWeight: 600,
                  fontSize: "18px", color: "#1A1A1A", lineHeight: 1.4,
                  marginBottom: "12px", transition: "color 0.2s",
                }}
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p style={{
                fontFamily: "Inter, sans-serif", fontSize: "14px",
                color: "#666", lineHeight: 1.7,
              }}>
                {post.excerpt}
              </p>

              {/* Read more */}
              <div style={{
                marginTop: "20px",
                fontFamily: "Montserrat, sans-serif", fontWeight: 700,
                fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase",
                color: "#C41230", display: "flex", alignItems: "center", gap: "6px",
              }}>
                Lire l'article →
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #blog .posts-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #blog .posts-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
