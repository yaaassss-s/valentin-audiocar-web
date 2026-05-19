import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import Hero from "../components/Hero.jsx";
import SEO from "../components/SEO.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import GalleryCard from "../components/GalleryCard.jsx";
import LocalSection from "../components/LocalSection.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { services } from "../data/services.js";
import { galleryItems } from "../data/gallery.js";

const trustItems = [
  { icon: ShieldCheck, title: "Atención personalizada", text: "Te orientamos según tu auto, tu idea y el uso que le das todos los días." },
  { icon: Wrench, title: "Instalación prolija", text: "Cuidamos ubicación, cableado y terminaciones para que quede bien presentado." },
  { icon: CheckCircle2, title: "Asesoramiento claro", text: "Sin vueltas ni precios inventados: consultás, evaluamos y coordinamos." },
  { icon: Sparkles, title: "Trabajos al detalle", text: "La diferencia está en los detalles que se ven y en los que quedan ocultos." },
];

export default function Home() {
  return (
    <main id="main-content">
      <SEO
        title="Valentín Audiocar | Audio para vehículos en Wilde"
        description="Venta e instalación de audio, pantallas, potencias, subwoofers y accesorios para vehículos en Wilde."
      />
      <Hero />

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Servicios destacados</p>
          <h2>Todo para que tu auto suene mejor</h2>
          <Link to="/servicios">Ver todos los servicios</Link>
        </div>
        <div className="service-grid compact-grid">
          {services.slice(0, 4).map((service) => (
            <Link to="/servicios" key={service.title} className="card-link">
              <ServiceCard service={service} compact />
            </Link>
          ))}
        </div>
      </section>

      <section className="section trust-band">
        <div className="section-heading">
          <p className="eyebrow">Confianza</p>
          <h2>Un taller para consultar tranquilo</h2>
        </div>
        <div className="trust-grid">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="trust-item">
                <Icon size={28} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <LocalSection />

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Trabajos realizados</p>
          <h2>Instalaciones con presencia y terminación</h2>
          <Link to="/trabajos">Ver galería</Link>
        </div>
        <div className="gallery-grid preview">
          {galleryItems.slice(0, 3).map((item) => (
            <GalleryCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="eyebrow">Consultá antes de venir</p>
          <h2>Contanos qué auto tenés y qué querés mejorar</h2>
          <p>Te respondemos por WhatsApp para orientar la instalación y coordinar disponibilidad o turno.</p>
        </div>
        <WhatsAppButton />
      </section>
    </main>
  );
}
