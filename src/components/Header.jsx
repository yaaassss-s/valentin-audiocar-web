import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { getWhatsAppUrl } from "../data/business.js";
import { navItems } from "../data/navigation.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  function closeMenu() {
    setOpen(false);
  }

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={closeMenu} aria-label="Ir al inicio">
        <span className="brand-mark">VA</span>
        <span>
          <strong>Valentín Audiocar</strong>
          <small>Audio para vehículos</small>
        </span>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Navegación principal">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
        <a className="nav-whatsapp" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          Consultar por WhatsApp
        </a>
      </nav>
    </header>
  );
}
