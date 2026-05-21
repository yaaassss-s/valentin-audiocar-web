import { MapPin, MessageCircle } from "lucide-react";
import { business } from "../data/business.js";
import WhatsAppButton from "./WhatsAppButton.jsx";

export default function LocalSection() {
  return (
    <section className="section local-section" aria-labelledby="local-title">
      <div className="local-copy">
        <p className="eyebrow">Nuestro local</p>
        <h2 id="local-title">Un taller real para resolver tu auto en Wilde</h2>
        <p>
          La estética de Valentín Audiocar nace de la fachada gris, el logo rojo y negro, la vidriera con
          equipamiento automotor y el portón con gráfica de taller. La web sigue esa misma línea: directa,
          potente y profesional, ahora mostrando todos los servicios para tu vehículo.
        </p>
        <div className="local-pills" aria-label="Datos rápidos del local">
          <span>
            <MapPin size={16} />
            {business.address}
          </span>
          <span>
            <MessageCircle size={16} />
            {business.whatsappDisplay}
          </span>
        </div>
        <WhatsAppButton message="Hola Valentín Audiocar, quería consultar antes de pasar por el local." />
      </div>

      <figure className="local-photo-card">
        <img
          className="local-photo"
          src="/images/local-valentin-audiocar.jpg"
          alt="Frente del local Valentín Audiocar en Wilde"
        />
      </figure>
    </section>
  );
}
