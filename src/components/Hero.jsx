import { ArrowRight, Gauge, RadioTower, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton.jsx";

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow">Centro integral automotor en Wilde</p>
        <h1 id="hero-title">Todo para tu auto en un solo lugar</h1>
        <p className="hero-copy">
          Audio car, baterías, polarizados, alarmas, mecánica, electricidad, scaneo y chapa y pintura en Wilde.
        </p>
        <p className="brand-note">
          Servicio integral automotor con atención personalizada, trabajos prolijos y soluciones para cada vehículo.
        </p>
        <div className="hero-actions">
          <WhatsAppButton />
          <Link className="btn btn-secondary" to="/servicios">
            Ver servicios
            <ArrowRight size={19} />
          </Link>
        </div>
      </div>

      <div className="hero-visual" aria-label="Estética automotor de taller integral">
        {/* Reemplazar este bloque por una foto real del local, del taller o de trabajos destacados. */}
        <div className="shop-sign">
          <img src="/images/logo-general.png" alt="Logo Valentín Audiocar" />
        </div>
        <div className="garage-door" />
        <div className="car-silhouette">
          <div className="windshield" />
          <div className="speaker speaker-left">
            <Volume2 size={30} />
          </div>
          <div className="speaker speaker-right">
            <RadioTower size={30} />
          </div>
          <div className="wheel left" />
          <div className="wheel right" />
          <div className="sound-wave one" />
          <div className="sound-wave two" />
          <div className="sound-wave three" />
        </div>
        <div className="hero-stat">
          <Gauge size={18} />
          <span>Sonido, potencia y soluciones para tu auto</span>
        </div>
      </div>
    </section>
  );
}
