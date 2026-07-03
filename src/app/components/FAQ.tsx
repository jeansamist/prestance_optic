import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Faites-vous des examens de la vue ?",
    a: "Non, Optic Prestance ne réalise pas de consultation ophtalmologique. Nous fabriquons vos verres à partir d'une ordonnance délivrée par votre ophtalmologiste. Nous travaillons en complémentarité avec les médecins pour vous offrir le meilleur résultat.",
  },
  {
    q: "Comment fonctionne la consultation en ligne ?",
    a: "Vous prenez rendez-vous sur le site, échangez en visioconférence avec un opticien Optic Prestance, puis transmettez votre ordonnance. Nous sélectionnons ensemble votre monture et vos verres, puis nous fabriquons et livrons vos lunettes à domicile.",
  },
  {
    q: "Livrez-vous partout au Cameroun ?",
    a: "Oui, nous livrons dans toutes les régions du pays après fabrication de vos verres à Douala. Le délai de livraison dépend de votre localisation et est communiqué lors de la commande.",
  },
  {
    q: "Quels sont les délais de fabrication ?",
    a: "Le délai varie selon le type de verre choisi (verres standards, progressifs, amincis, etc.). Il vous est communiqué précisément lors de la commande et peut aller de 3 à 10 jours ouvrés selon la complexité.",
  },
  {
    q: "Puis-je faire ajuster des lunettes achetées ailleurs ?",
    a: "Oui, notre service d'ajustement et de réparation est ouvert à tous, quelle que soit l'origine de vos lunettes. Nous réparons les montures, remplaçons les plaquettes, resserrons les vis et corrigeons les déformations.",
  },
  {
    q: "Quels modes de paiement acceptez-vous ?",
    a: "Nous acceptons les paiements en espèces, par Mobile Money (MTN MoMo, Orange Money) et par virement bancaire. Nous pouvons également convenir d'un paiement en plusieurs fois selon la commande.",
  },
  {
    q: "Comment envoyer mon ordonnance à distance ?",
    a: "Vous pouvez prendre en photo votre ordonnance et nous l'envoyer par e-mail, WhatsApp ou lors de votre consultation en ligne. Assurez-vous que tous les chiffres et mentions sont bien lisibles.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ backgroundColor: "#F4F4F4", padding: "100px 0" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "40px", height: "3px", backgroundColor: "#C41230" }} />
            <span style={{
              fontFamily: "Montserrat, sans-serif", fontWeight: 700,
              fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#C41230",
            }}>
              FAQ
            </span>
            <div style={{ width: "40px", height: "3px", backgroundColor: "#C41230" }} />
          </div>
          <h2 style={{
            fontFamily: "Poppins, sans-serif", fontWeight: 700,
            fontSize: "clamp(28px, 3.5vw, 44px)", color: "#1A1A1A", lineHeight: 1.2,
          }}>
            Foire aux questions
          </h2>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderBottom: "1px solid rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                marginBottom: "4px",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "24px 28px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                }}
              >
                <span style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  color: openIndex === i ? "#C41230" : "#1A1A1A",
                  lineHeight: 1.4,
                  transition: "color 0.2s",
                }}>
                  {faq.q}
                </span>
                <div style={{
                  flexShrink: 0,
                  width: "32px",
                  height: "32px",
                  backgroundColor: openIndex === i ? "#C41230" : "#1A1A1A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.2s",
                }}>
                  {openIndex === i
                    ? <Minus size={16} color="#fff" />
                    : <Plus size={16} color="#fff" />
                  }
                </div>
              </button>

              {openIndex === i && (
                <div style={{
                  padding: "0 28px 24px",
                  borderTop: "1px solid rgba(196,18,48,0.15)",
                }}>
                  <p style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    color: "#555",
                    lineHeight: 1.8,
                    marginTop: "16px",
                  }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
