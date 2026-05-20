export default function WorkFilters({ filters, activeFilter, onChange }) {
  return (
    <div className="work-filters" role="group" aria-label="Filtrar trabajos por categoría">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;

        return (
          <button
            key={filter.value}
            className={`filter-button ${isActive ? "active" : ""}`}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(filter.value)}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
