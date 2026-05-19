export default function GalleryCard({ item }) {
  return (
    <article className={`gallery-card tone-${item.tone}`}>
      {/* Reemplazar el placeholder por una foto real del trabajo realizado. */}
      <div className="gallery-placeholder" role="img" aria-label={`Placeholder para ${item.category}`}>
        <span>{item.category}</span>
      </div>
      <div className="gallery-body">
        <p>{item.category}</p>
        <h2>{item.title}</h2>
        <span>{item.description}</span>
      </div>
    </article>
  );
}
