import SEO from "../components/SEO.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <main id="main-content">
      <SEO
        title="Servicios | Valentín Audiocar"
        description="Servicios de Valentín Audiocar, centro integral automotor en Wilde: audio car, baterías, polarizados, alarmas, mecánica automotor, electricidad automotor, scaneo y chapa y pintura."
      />
      <section className="page-hero slim">
        <p className="eyebrow">Servicios</p>
        <h1>Centro integral automotor para tu vehículo</h1>
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
