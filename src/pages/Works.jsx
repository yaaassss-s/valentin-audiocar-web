import GalleryCard from "../components/GalleryCard.jsx";
import SEO from "../components/SEO.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { galleryItems } from "../data/gallery.js";

const categories = ["Audio completo", "Subwoofers", "Pantallas", "Potencias", "Instalaciones prolijas", "Accesorios"];

export default function Works() {
  return (
    <main id="main-content">
      <SEO
        title="Trabajos | Valentín Audiocar"
        description="Galería de trabajos realizados de audio para autos, subwoofers, pantallas, potencias e instalaciones prolijas."
      />
      <section className="page-hero">
        <p className="eyebrow">Trabajos</p>
        <h1>Trabajos de audio con terminación prolija</h1>
        <p>Una muestra de estilos de instalación para audio, pantallas, subwoofers, potencias y accesorios.</p>
      </section>

      <section className="section page-section">
        <div className="category-row" aria-label="Categorías de trabajos">
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <GalleryCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="final-cta compact-cta">
        <div>
          <h2>¿Querés armar algo parecido en tu auto?</h2>
          <p>Mandanos tu modelo y qué sonido buscás. Te orientamos por WhatsApp.</p>
        </div>
        <WhatsAppButton message="Hola Valentín Audiocar, vi la galería de trabajos y quería consultar por mi auto." />
      </section>
    </main>
  );
}
