import { Send } from "lucide-react";
import { useState } from "react";
import { getWhatsAppUrl } from "../data/business.js";

const initialForm = {
  name: "",
  phone: "",
  car: "",
  install: "",
  comment: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const message = [
      "Hola Valentín Audiocar, quería consultar por una instalación de audio para mi auto.",
      form.name && `Nombre: ${form.name}`,
      form.phone && `Teléfono: ${form.phone}`,
      form.car && `Modelo de auto: ${form.car}`,
      form.install && `Qué quiere instalar: ${form.install}`,
      form.comment && `Comentario adicional: ${form.comment}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Nombre
          <input name="name" value={form.name} onChange={updateField} placeholder="Tu nombre" />
        </label>
        <label>
          Teléfono
          <input name="phone" value={form.phone} onChange={updateField} placeholder="Ej: 11 1234 5678" />
        </label>
      </div>
      <label>
        Modelo de auto
        <input name="car" value={form.car} onChange={updateField} placeholder="Ej: Gol Trend, Corolla, Fiesta" />
      </label>
      <label>
        Qué quiere instalar
        <input name="install" value={form.install} onChange={updateField} placeholder="Audio, pantalla, potencia, subwoofer..." />
      </label>
      <label>
        Comentario adicional
        <textarea
          name="comment"
          value={form.comment}
          onChange={updateField}
          placeholder="Contanos qué tenés en mente o qué querés mejorar."
          rows="5"
        />
      </label>
      <button className="btn btn-whatsapp" type="submit">
        <Send size={18} />
        Enviar consulta
      </button>
    </form>
  );
}
