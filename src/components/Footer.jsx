import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { business, getWhatsAppUrl } from "../data/business.js";
import { navItems } from "../data/navigation.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">Valentín Audiocar</div>
          <p>Centro integral automotor en Wilde: audio car, baterías, polarizados, alarmas, mecánica, electricidad, scaneo y chapa y pintura.</p>
        </div>
        <div>
          <h2>Links rápidos</h2>
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>Contacto</h2>
          <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
            <MessageCircle size={17} />
            {business.whatsappDisplay}
          </a>
          <a href={business.instagramUrl} target="_blank" rel="noreferrer">
            <Instagram size={17} />
            {business.instagram}
          </a>
          <Link to="/ubicacion">
            <MapPin size={17} />
            {business.address}
          </Link>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Valentín Audiocar. Todos los derechos reservados.</div>
    </footer>
  );
}
