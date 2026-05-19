import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../data/business.js";

export default function WhatsAppButton({ children = "Consultar por WhatsApp", message, floating = false, className = "" }) {
  return (
    <a
      className={`${floating ? "whatsapp-float" : "btn btn-whatsapp"} ${className}`}
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      aria-label={floating ? "Consultar por WhatsApp" : undefined}
    >
      <MessageCircle size={floating ? 26 : 19} />
      {!floating && <span>{children}</span>}
    </a>
  );
}
