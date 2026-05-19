import SEO from "../components/SEO.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <main id="main-content">
      <SEO
        title="Servicios | Valentín Audiocar"
        description="Instalación de audio, parlantes, subwoofers, potencias, pantallas y accesorios para vehículos en Wilde."
      />
      <section className="page-hero slim">
        <p className="eyebrow">Servicios</p>
        <h1>Audio, multimedia y accesorios para tu vehículo</h1>
        <p>Elegí el servicio que necesitás y consultá por WhatsApp con un mensaje directo para ese trabajo.</p>
      </section>

      <section className="section page-section">
        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}
