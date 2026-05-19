import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";

export default function NotFound() {
  return (
    <main id="main-content">
      <SEO
        title="Página no encontrada | Valentín Audiocar"
        description="La página que buscás no existe. Volvé al inicio o consultá a Valentín Audiocar por WhatsApp."
      />
      <section className="page-hero not-found">
        <p className="eyebrow">404</p>
        <h1>Esta página no está disponible</h1>
        <p>Podés volver al inicio o escribirnos por WhatsApp para hacer tu consulta.</p>
        <div className="hero-actions">
          <Link className="btn btn-secondary" to="/">
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
          <WhatsAppButton />
        </div>
      </section>
    </main>
  );
}
