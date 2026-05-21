import { MapPin, Navigation } from "lucide-react";
import SEO from "../components/SEO.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { business } from "../data/business.js";

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Salcedo%20262%2C%20Wilde%2C%20Provincia%20de%20Buenos%20Aires";

export default function Location() {
  return (
    <main id="main-content">
      <SEO
        title="Ubicación | Valentín Audiocar en Wilde"
        description="Valentín Audiocar está en Salcedo 262, Wilde. Centro integral automotor con audio car, baterías, polarizados, alarmas, mecánica, electricidad automotor, scaneo y chapa y pintura."
      />
      <section className="page-hero slim">
        <p className="eyebrow">Ubicación</p>
        <h1>Estamos en Wilde</h1>
        <p>Consultanos antes de venir para coordinar disponibilidad o turno.</p>
      </section>

      <section className="section location-layout">
        <div className="location-info-stack">
          <article className="location-card">
            <MapPin size={32} />
            <h2>Encontranos en Wilde</h2>
            <p>Estamos en Salcedo 262, Wilde. Al llegar vas a reconocer el local por la cartelería de Valentín Audiocar.</p>
            <p className="location-address">
              <strong>Dirección</strong>
              <span>{business.address}</span>
            </p>
            <div className="location-actions">
              <a className="btn btn-secondary" href={mapsUrl} target="_blank" rel="noreferrer">
                <Navigation size={18} />
                Cómo llegar
              </a>
              <WhatsAppButton />
            </div>
          </article>
          <figure className="location-photo-card">
            <img
              src="/images/local-valentin-audiocar.jpg"
              alt="Frente del local Valentín Audiocar en Wilde"
            />
          </figure>
        </div>
        <div className="map-frame">
          {/* Reemplazar este iframe si se quiere usar un mapa definitivo desde Google Maps Embed. */}
          <iframe
            title="Mapa de Valentín Audiocar en Wilde"
            src="https://www.google.com/maps?q=Salcedo%20262%2C%20Wilde%2C%20Provincia%20de%20Buenos%20Aires&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
