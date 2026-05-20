export const business = {
  name: "Valentín Audiocar",
  address: "Salcedo 262, Wilde, Provincia de Buenos Aires",
  whatsappDisplay: "11-2615-5050",
  whatsappNumber: "541126155050",
  instagram: "@valentin_audiocar",
  instagramUrl: "https://www.instagram.com/valentin_audiocar",
  defaultMessage:
    "Hola Valentín Audiocar, quería consultar por servicios automotores para mi auto.",
};

export function getWhatsAppUrl(message = business.defaultMessage) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
