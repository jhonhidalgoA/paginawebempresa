import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <article className="projects__card">
      <img
        src={project.image}
        alt={project.title}
        className="projects__image"
        loading="lazy"
      />
      <div className="projects__overlay">
        <ul className="projects__tags">
          {project.tags.map((tag) => (
            <li key={tag} className="projects__tag">
              {tag}
            </li>
          ))}
        </ul>
        <h3 className="projects__title">{project.title}</h3>
        <p className="projects__description">{project.description}</p>
        <Link to={project.href} className="projects__link">
          Ver detalles
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}