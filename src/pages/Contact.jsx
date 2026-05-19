import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm.jsx";
import SEO from "../components/SEO.jsx";
import { business, getWhatsAppUrl } from "../data/business.js";

export default function Contact() {
  return (
    <main id="main-content">
      <SEO
        title="Contacto | Valentín Audiocar"
        description="Contactá a Valentín Audiocar por WhatsApp o Instagram para consultar por instalaciones de audio para vehículos en Wilde."
      />
      <section className="page-hero slim">
        <p className="eyebrow">Contacto</p>
        <h1>Consultá por tu instalación</h1>
        <p>Completá los datos y se abre WhatsApp con el mensaje listo para enviar.</p>
      </section>

      <section className="section contact-layout">
        <aside className="contact-info" aria-label="Datos de contacto">
          <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
            <MessageCircle size={24} />
            <span>
              <strong>WhatsApp</strong>
              {business.whatsappDisplay}
            </span>
          </a>
          <a href={business.instagramUrl} target="_blank" rel="noreferrer">
            <Instagram size={24} />
            <span>
              <strong>Instagram</strong>
              {business.instagram}
            </span>
          </a>
          <Link to="/ubicacion">
            <MapPin size={24} />
            <span>
              <strong>Dirección</strong>
              {business.address}
            </span>
          </Link>
          {/* Agregar horarios de atención cuando estén confirmados. */}
        </aside>
        <ContactForm />
      </section>
    </main>
  );
}
