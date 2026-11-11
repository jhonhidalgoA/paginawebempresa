import { Link } from "react-router-dom";
import { Code2, ChevronRight, ArrowRight, ArrowUp } from "lucide-react";
import { footerData } from "@data/footerData";
import { navbarData } from "@data/navbarData";
import { servicesData } from "@data/servicesData";
import Logo from "../logo/Logo";
import "./Footer.css";

export default function Footer() {
  const { description, cta, social, contact, legal } = footerData;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__cta">
          <div>
            <h2 className="footer__cta-title">{cta.title}</h2>
            <p className="footer__cta-text">{cta.text}</p>
          </div>
          <a href={cta.href} className="footer__cta-button">
            {cta.label}
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo-link" onClick={scrollToTop}>
              <span className="footer__logo" aria-hidden="true">
                <Code2 size={18} strokeWidth={2.5} />
              </span>
              <Logo />
            </Link>
            <p className="footer__description">{description}</p>
            <ul className="footer__social" aria-label="Redes sociales">
              {social.map(({ id, label, href, icon: Icon }) => (
                <li key={id}>
                  <a
                    href={href}
                    className="footer__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon size={122} strokeWidth={1.5} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="footer__column" aria-label="Enlaces rápidos">
            <h3 className="footer__heading">Enlaces rápidos</h3>
            <ul className="footer__list">
              {navbarData.map((item) => (
                <li key={item.id}>
                  {item.href.startsWith("#") ? (
                    <a href={item.href} className="footer__link">
                      <ChevronRight size={14} />
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.href} className="footer__link" onClick={scrollToTop}>
                      <ChevronRight size={14} />
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__column" aria-label="Servicios">
            <h3 className="footer__heading">Servicios</h3>
            <ul className="footer__list">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="footer__link">
                    <ChevronRight size={14} />
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__column">
            <h3 className="footer__heading">Contacto</h3>
            <ul className="footer__list">
              {contact.map(({ id, icon: Icon, text }) => (
                <li key={id} className="footer__contact-item">
                  <Icon size={16} strokeWidth={1.5} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Creative Web Design. Todos los derechos reservados.
          </p>
          <div className="footer__legal">
            {legal.map((item) => (
              <Link key={item.id} to={item.href} className="footer__legal-link">
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              className="footer__top"
              aria-label="Volver arriba"
              onClick={scrollToTop}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}