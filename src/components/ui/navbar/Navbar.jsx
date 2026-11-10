import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";
import { navbarData } from "@data/navbarData";
import CreativeWebDesign from "../CreativeWebDesign/CreativeWebDesign";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToTop = () => {
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <navbar
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
      role="banner"
    >
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={scrollToTop}>
          <span className="navbar__logo" aria-hidden="true">
            <Code2 size={18} strokeWidth={2.5} />
          </span>
          <CreativeWebDesign />
        </Link>

        <nav
          className={`navbar__nav ${isMenuOpen ? "navbar__nav--open" : ""}`}
          aria-label="Navegación principal"
        >
          <ul className="navbar__nav-list">
            {navbarData.map((item) => (
              <li key={item.id}>
                {item.href.startsWith("#") ? (
                  <a
                    href={item.href}
                    className="navbar__nav-link"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `navbar__nav-link ${
                        isActive ? "navbar__nav-link--active" : ""
                      }`
                    }
                    onClick={scrollToTop}
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="navbar__toggle"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </navbar>
  );
}