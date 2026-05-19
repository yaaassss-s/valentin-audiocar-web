import { ArrowUpRight } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton.jsx";

export default function ServiceCard({ service, compact = false }) {
  return (
    <article className={`service-card ${compact ? "compact" : ""}`}>
      <div className="card-topline" />
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      {!compact && <strong>{service.benefit}</strong>}
      {compact ? (
        <span className="mini-link">
          Ver detalle <ArrowUpRight size={16} />
        </span>
      ) : (
        <WhatsAppButton message={service.message}>Consultar por este servicio</WhatsAppButton>
      )}
    </article>
  );
}
