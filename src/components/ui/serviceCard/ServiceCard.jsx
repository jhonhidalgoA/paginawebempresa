import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./ServiceCard.css";

export default function ServiceCard({ service, index }) {
  const { icon: Icon, title, description, features, href } = service;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="service-card">
      <div className="service-card__top">
        <span className="service-card__icon" aria-hidden="true">
          <Icon size={22} />
        </span>
        <span className="service-card__number" aria-hidden="true">
          {number}
        </span>
      </div>

      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>

      <ul className="service-card__features">
        {features.map((feature) => (
          <li key={feature} className="service-card__feature">
            {feature}
          </li>
        ))}
      </ul>

      <Link to={href} className="service-card__link">
        Saber más
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}