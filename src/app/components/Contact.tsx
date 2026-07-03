import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" style={{ backgroundColor: "#1A1A1A", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "40px", height: "3px", backgroundColor: "#C41230" }} />
            <span style={{
              fontFamily: "Montserrat, sans-serif", fontWeight: 700,
              fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#C41230",
            }}>
              Contact
            </span>
            <div style={{ width: "40px", height: "3px", backgroundColor: "#C41230" }} />
          </div>
          <h2 style={{
            fontFamily: "Poppins, sans-serif", fontWeight: 700,
            fontSize: "clamp(28px, 3.5vw, 44px)", color: "#fff", lineHeight: 1.2, marginBottom: "12px",
          }}>
            Parlons de votre regard
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
            Consultation en ligne et livraison disponibles pour toute personne résidant hors de Douala.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "start",
        }}>
          {/* Form */}
          <div>
            {sent ? (
              <div style={{
                backgroundColor: "rgba(196,18,48,0.15)",
                border: "1px solid #C41230",
                padding: "32px",
                textAlign: "center",
              }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
                <p style={{
                  fontFamily: "Poppins, sans-serif", fontWeight: 600,
                  fontSize: "18px", color: "#fff",
                }}>
                  Message envoyé avec succès !
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)", marginTop: "8px" }}>
                  Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{
                      fontFamily: "Montserrat, sans-serif", fontWeight: 600,
                      fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase",
                      color: "rgba(255,255,255,0.6)", display: "block", marginBottom: "8px",
                    }}>
                      Nom complet *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jean Dupont"
                      style={{
                        width: "100%", padding: "14px 16px",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "#fff", outline: "none",
                        fontFamily: "Inter, sans-serif", fontSize: "14px",
                        boxSizing: "border-box",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#C41230")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
                    />
                  </div>
                  <div>
                    <label style={{
                      fontFamily: "Montserrat, sans-serif", fontWeight: 600,
                      fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase",
                      color: "rgba(255,255,255,0.6)", display: "block", marginBottom: "8px",
                    }}>
                      Téléphone / WhatsApp
                    </label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+237 6XX XXX XXX"
                      style={{
                        width: "100%", padding: "14px 16px",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "#fff", outline: "none",
                        fontFamily: "Inter, sans-serif", fontSize: "14px",
                        boxSizing: "border-box",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#C41230")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    fontFamily: "Montserrat, sans-serif", fontWeight: 600,
                    fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.6)", display: "block", marginBottom: "8px",
                  }}>
                    E-mail *
                  </label>
                  <input
                    required type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="votre@email.com"
                    style={{
                      width: "100%", padding: "14px 16px",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "#fff", outline: "none",
                      fontFamily: "Inter, sans-serif", fontSize: "14px",
                      boxSizing: "border-box",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#C41230")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
                  />
                </div>

                <div>
                  <label style={{
                    fontFamily: "Montserrat, sans-serif", fontWeight: 600,
                    fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.6)", display: "block", marginBottom: "8px",
                  }}>
                    Sujet
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    style={{
                      width: "100%", padding: "14px 16px",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: form.subject ? "#fff" : "rgba(255,255,255,0.4)",
                      outline: "none", fontFamily: "Inter, sans-serif", fontSize: "14px",
                      boxSizing: "border-box",
                    }}
                  >
                    <option value="" style={{ backgroundColor: "#1A1A1A" }}>Choisir un sujet</option>
                    <option value="rdv" style={{ backgroundColor: "#1A1A1A" }}>Prise de rendez-vous</option>
                    <option value="online" style={{ backgroundColor: "#1A1A1A" }}>Consultation en ligne</option>
                    <option value="devis" style={{ backgroundColor: "#1A1A1A" }}>Demande de devis</option>
                    <option value="reparation" style={{ backgroundColor: "#1A1A1A" }}>Réparation / Ajustement</option>
                    <option value="autre" style={{ backgroundColor: "#1A1A1A" }}>Autre</option>
                  </select>
                </div>

                <div>
                  <label style={{
                    fontFamily: "Montserrat, sans-serif", fontWeight: 600,
                    fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.6)", display: "block", marginBottom: "8px",
                  }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Décrivez votre besoin ou posez votre question..."
                    style={{
                      width: "100%", padding: "14px 16px",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "#fff", outline: "none", resize: "vertical",
                      fontFamily: "Inter, sans-serif", fontSize: "14px",
                      boxSizing: "border-box",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#C41230")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    fontFamily: "Montserrat, sans-serif", fontWeight: 700,
                    fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase",
                    backgroundColor: "#C41230", color: "#fff",
                    border: "2px solid #C41230", padding: "16px 32px", cursor: "pointer",
                    display: "flex", alignItems: "center", gap: "10px", justifyContent: "center",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#C41230"; }}
                >
                  <Send size={16} />
                  Envoyer le message
                </button>
              </form>
            )}
          </div>

          {/* Info + Map */}
          <div>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "32px",
            }}>
              {[
                { icon: <MapPin size={20} />, title: "Adresse", value: "Douala, Cameroun\nQuartier à préciser" },
                { icon: <Phone size={20} />, title: "Téléphone / WhatsApp", value: "+237 6XX XXX XXX" },
                { icon: <Mail size={20} />, title: "E-mail", value: "contact@opticprestance.cm" },
                { icon: <Clock size={20} />, title: "Horaires", value: "Lun – Sam\n08h00 – 18h00" },
              ].map((info, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "24px 20px",
                  }}
                >
                  <div style={{ color: "#C41230", marginBottom: "12px" }}>{info.icon}</div>
                  <div style={{
                    fontFamily: "Montserrat, sans-serif", fontWeight: 700,
                    fontSize: "10px", letterSpacing: "1.5px", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)", marginBottom: "8px",
                  }}>
                    {info.title}
                  </div>
                  <div style={{
                    fontFamily: "Inter, sans-serif", fontSize: "14px",
                    color: "#fff", lineHeight: 1.6, whiteSpace: "pre-line",
                  }}>
                    {info.value}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/237600000000"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
                backgroundColor: "#25D366", color: "#fff", padding: "16px",
                textDecoration: "none", marginBottom: "24px",
                fontFamily: "Montserrat, sans-serif", fontWeight: 700,
                fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <MessageCircle size={20} />
              Contacter sur WhatsApp
            </a>

            {/* Map placeholder */}
            <div style={{
              width: "100%", height: "240px",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: "12px",
            }}>
              <MapPin size={36} color="#C41230" />
              <div style={{ textAlign: "center" }}>
                <p style={{
                  fontFamily: "Poppins, sans-serif", fontWeight: 600,
                  fontSize: "14px", color: "#fff", marginBottom: "4px",
                }}>
                  Optic Prestance
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
                  Douala, Cameroun
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Douala,Cameroun"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "Montserrat, sans-serif", fontWeight: 600,
                  fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase",
                  color: "#C41230", textDecoration: "none",
                }}
              >
                Voir sur Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact .form-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 600px) {
          #contact .info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
