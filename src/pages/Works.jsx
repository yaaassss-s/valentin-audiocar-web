import { useMemo, useState } from "react";
import WorkCard from "../components/WorkCard.jsx";
import WorkFilters from "../components/WorkFilters.jsx";
import SEO from "../components/SEO.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { trabajos, workFilters } from "../data/trabajos.js";

function sortByOrder(a, b) {
  return (a.orden ?? 999) - (b.orden ?? 999);
}

export default function Works() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const publishedWorks = useMemo(() => trabajos.filter((trabajo) => trabajo.publicado).sort(sortByOrder), []);
  const filteredWorks = useMemo(
    () =>
      activeFilter === "Todos"
        ? publishedWorks
        : publishedWorks.filter((trabajo) => trabajo.categoria === activeFilter),
    [activeFilter, publishedWorks],
  );

  return (
    <main id="main-content">
      <SEO
        title="Trabajos | Valentín Audiocar"
        description="Trabajos realizados por Valentín Audiocar, centro integral automotor en Wilde: audio car, polarizados, alarmas, mecánica, electricidad, chapa y pintura, scaneo y baterías."
      />
      <section className="page-hero">
        <p className="eyebrow">Trabajos</p>
        <h1>Trabajos automotores con terminación prolija</h1>
        <p>Una muestra visual de servicios de audio, polarizados, alarmas, mecánica, electricidad, chapa y pintura y scaneo.</p>
      </section>

      <section className="section page-section">
        <div className="work-toolbar">
          <WorkFilters filters={workFilters} activeFilter={activeFilter} onChange={setActiveFilter} />
        </div>

        {publishedWorks.length === 0 ? (
          <div className="empty-state">
            <h2>Próximamente vamos a estar subiendo trabajos realizados.</h2>
            <p>Estamos preparando una galería con trabajos reales del local.</p>
          </div>
        ) : filteredWorks.length === 0 ? (
          <div className="empty-state">
            <h2>Todavía no hay trabajos publicados en esta categoría.</h2>
            <p>Probá con otro filtro o volvé a ver todos los trabajos.</p>
          </div>
        ) : (
          <div className="work-grid">
            {filteredWorks.map((trabajo) => (
              <WorkCard key={trabajo.id} trabajo={trabajo} />
            ))}
          </div>
        )}
      </section>

      <section className="final-cta compact-cta">
        <div>
          <h2>¿Querés resolver algo en tu auto?</h2>
          <p>Mandanos tu modelo y el servicio que necesitás. Te orientamos por WhatsApp.</p>
        </div>
        <WhatsAppButton message="Hola Valentín Audiocar, vi los trabajos realizados y quería consultar por mi auto." />
      </section>
    </main>
  );
}
