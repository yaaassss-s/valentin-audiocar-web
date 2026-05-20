import { Send } from "lucide-react";
import { useState } from "react";
import { getWhatsAppUrl } from "../data/business.js";

const serviceOptions = [
  "Audio car",
  "Batería",
  "Polarizado",
  "Alarma",
  "Mecánica",
  "Electricidad",
  "Scaneo",
  "Chapa y pintura",
  "Otro",
];

const initialForm = {
  name: "",
  phone: "",
  car: "",
  service: "",
  comment: "",
};

function getServiceMessage(service) {
  const messages = {
    "Audio car": "Hola Valentín Audiocar, quería consultar por audio para mi auto.",
    Batería: "Hola Valentín Audiocar, quería consultar por una batería.",
    Polarizado: "Hola Valentín Audiocar, quería consultar por polarizado.",
    Alarma: "Hola Valentín Audiocar, quería consultar por alarmas.",
    Mecánica: "Hola Valentín Audiocar, quería consultar por mecánica automotor.",
    Electricidad: "Hola Valentín Audiocar, quería consultar por electricidad automotor.",
    Scaneo: "Hola Valentín Audiocar, quería consultar por un scaneo.",
    "Chapa y pintura": "Hola Valentín Audiocar, quería consultar por chapa y pintura.",
  };

  return messages[service] || "Hola Valentín Audiocar, quería consultar por servicios automotores para mi auto.";
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const message = [
      getServiceMessage(form.service),
      form.name && `Nombre: ${form.name}`,
      form.phone && `Teléfono: ${form.phone}`,
      form.car && `Modelo de auto: ${form.car}`,
      form.service && `Servicio que necesitás: ${form.service}`,
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
          <input name="name" value={form.name} onChange={updateField} placeholder="Tu nombre" autoComplete="name" />
        </label>
        <label>
          Teléfono
          <input name="phone" value={form.phone} onChange={updateField} placeholder="Ej: 11 1234 5678" autoComplete="tel" />
        </label>
      </div>
      <label>
        Modelo de auto
        <input name="car" value={form.car} onChange={updateField} placeholder="Ej: Gol Trend, Corolla, Fiesta" />
      </label>
      <label>
        Servicio que necesitás
        <select name="service" value={form.service} onChange={updateField}>
          <option value="">Seleccioná un servicio</option>
          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </label>
      <label>
        Comentario adicional
        <textarea
          name="comment"
          value={form.comment}
          onChange={updateField}
          placeholder="Contanos qué necesitás revisar, instalar o mejorar."
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
