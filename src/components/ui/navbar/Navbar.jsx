import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";
import { navbarData } from "@data/navbarData";
import Logo from "../logo/Logo";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname, hash, key } = useLocation();

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

  // Al llegar con un #, baja hasta esa sección (también desde otra página)
  useEffect(() => {
    if (!hash) return;
    const timer = setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
    return () => clearTimeout(timer);
  }, [pathname, hash, key]);

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToTop = () => {
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
      role="banner"
    >
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={scrollToTop}>
          <span className="navbar__logo" aria-hidden="true">
            <Code2 size={18} strokeWidth={2.5} />
          </span>
          <Logo />
        </Link>

        <nav
          className={`navbar__nav ${isMenuOpen ? "navbar__nav--open" : ""}`}
          aria-label="Navegación principal"
        >
          <ul className="navbar__nav-list">
            {navbarData.map((item) => (
              <li key={item.id}>
                {item.href.startsWith("#") ? (
                  <Link
                    to={`/${item.href}`}
                    className="navbar__nav-link"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <NavLink
                    to={item.href}
                    end
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
    </header>
  );
}