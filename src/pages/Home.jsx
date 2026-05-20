import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import Hero from "../components/Hero.jsx";
import SEO from "../components/SEO.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import WorkCard from "../components/WorkCard.jsx";
import LocalSection from "../components/LocalSection.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { services } from "../data/services.js";
import { trabajos } from "../data/trabajos.js";

const trustItems = [
  { icon: ShieldCheck, title: "Atención personalizada", text: "Te orientamos según tu auto, el problema y el uso que le das todos los días." },
  { icon: Wrench, title: "Trabajos prolijos", text: "Cuidamos instalación, reparación, diagnóstico y terminaciones para que quede bien presentado." },
  { icon: CheckCircle2, title: "Asesoramiento claro", text: "Sin vueltas ni precios inventados: consultás, evaluamos y coordinamos el servicio." },
  { icon: Sparkles, title: "Soluciones completas", text: "Audio, seguridad, mecánica, electricidad, estética y diagnóstico en un mismo lugar." },
];

const publishedWorks = trabajos.filter((trabajo) => trabajo.publicado).sort((a, b) => (a.orden ?? 999) - (b.orden ?? 999));
const featuredWorks = publishedWorks.filter((trabajo) => trabajo.destacado);
const previewWorks = (featuredWorks.length ? featuredWorks : publishedWorks).slice(0, 3);

export default function Home() {
  return (
    <main id="main-content">
      <SEO
        title="Valentín Audiocar | Centro integral automotor en Wilde"
        description="Valentín Audiocar, centro integral automotor en Wilde: audio car, baterías, polarizados, alarmas, mecánica automotor, electricidad automotor, scaneo y chapa y pintura."
      />
      <Hero />

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Servicios destacados</p>
          <h2>Soluciones para tu vehículo</h2>
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
          <h2>Un taller para resolver tranquilo</h2>
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
          <h2>Servicios automotores con presencia y terminación</h2>
          <Link to="/trabajos">Ver trabajos</Link>
        </div>
        {previewWorks.length > 0 ? (
          <div className="work-grid preview">
            {previewWorks.map((trabajo) => (
              <WorkCard key={trabajo.id} trabajo={trabajo} compact />
            ))}
          </div>
        ) : (
          <div className="empty-state compact-empty">
            <h3>Próximamente vamos a estar subiendo trabajos realizados.</h3>
            <p>Estamos preparando una galería con trabajos reales del local.</p>
          </div>
        )}
      </section>

      <section className="final-cta">
        <div>
          <p className="eyebrow">Consultá antes de venir</p>
          <h2>Contanos qué auto tenés y qué necesitás resolver</h2>
          <p>Te respondemos por WhatsApp para orientar el servicio y coordinar disponibilidad o turno.</p>
        </div>
        <WhatsAppButton />
      </section>
    </main>
  );
}
