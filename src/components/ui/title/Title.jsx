import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";
import { titleData } from "@data/titleData";
import "./Title.css";

export default function Title({ page }) {
  const data = titleData[page];
  if (!data) return null;

  const {
    icon: Icon,
    breadcrumb,
    before,
    highlight,
    after,
    description,
  } = data;

  return (
    <div className="title">
      {breadcrumb && (
        <nav className="title__breadcrumb" aria-label="Migas de pan">
          <Link to="/" className="title__crumb">
            <Home size={16} />
            <span>Inicio</span>
          </Link>
          <ChevronRight size={14} className="title__separator" />
          <span
            className="title__crumb title__crumb--current"
            aria-current="page"
          >
            <span>{breadcrumb}</span>
          </span>
        </nav>
      )}

      <h2 className="title__heading">
        {before}
        <span className="title__highlight">{highlight}</span>
        {after}
      </h2>

      <p className="title__description">{description}</p>
    </div>
  );
}
