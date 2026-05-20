import { Star } from "lucide-react";
import { useState } from "react";

export default function WorkCard({ trabajo, compact = false }) {
  const [imageFailed, setImageFailed] = useState(false);
  const hasImage = Boolean(trabajo.imagen) && !imageFailed;
  const imageAlt = `${trabajo.titulo}${trabajo.vehiculo ? ` - ${trabajo.vehiculo}` : ""}`;

  return (
    <article className={`work-card ${compact ? "compact" : ""}`}>
      <div className="work-media">
        {hasImage ? (
          <img src={trabajo.imagen} alt={imageAlt} loading="lazy" onError={() => setImageFailed(true)} />
        ) : (
          <div className="work-placeholder" role="img" aria-label={`Imagen pendiente para ${trabajo.categoria}`}>
            <span>{trabajo.categoria}</span>
          </div>
        )}
        {trabajo.destacado && (
          <span className="work-badge">
            <Star size={15} />
            Destacado
          </span>
        )}
      </div>
      <div className="work-body">
        <p className="work-category">{trabajo.categoria}</p>
        <h2>{trabajo.titulo}</h2>
        <p>{trabajo.descripcion}</p>
        <dl className="work-meta">
          {trabajo.vehiculo && (
            <div>
              <dt>Vehículo</dt>
              <dd>{trabajo.vehiculo}</dd>
            </div>
          )}
          {trabajo.fecha && (
            <div>
              <dt>Fecha</dt>
              <dd>{trabajo.fecha}</dd>
            </div>
          )}
        </dl>
      </div>
    </article>
  );
}
