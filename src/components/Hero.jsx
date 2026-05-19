import { ArrowRight, Gauge, RadioTower, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton.jsx";

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow">Audio car en Wilde</p>
        <h1 id="hero-title">Sonido, potencia y estilo para tu auto</h1>
        <p className="hero-copy">
          Venta e instalación de audio, pantallas, potencias, subwoofers y accesorios en Wilde.
        </p>
        <p className="brand-note">
          Instalaciones prolijas, asesoramiento personalizado y equipos para cada tipo de vehículo.
        </p>
        <div className="hero-actions">
          <WhatsAppButton />
          <Link className="btn btn-secondary" to="/servicios">
            Ver servicios
            <ArrowRight size={19} />
          </Link>
        </div>
      </div>

      <div className="hero-visual" aria-label="Estética automotor con sistema de audio">
        {/* Reemplazar este bloque por una foto real del local, del taller o de una instalación destacada. */}
        <div className="shop-sign">
          <span>Valentín</span>
          <strong>Audiocar</strong>
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
          <span>Taller especializado en audio vehicular</span>
        </div>
      </div>
    </section>
  );
}
