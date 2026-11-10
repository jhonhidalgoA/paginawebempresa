import { technologyData } from "@data/technologyData";
import "./ProjectTechnologies.css";

export default function ProjectTechnologies({ technologies = [] }) {
  const items = technologies
    .map((id) => ({ id, ...technologyData[id] }))
    .filter((tech) => tech.name);

  if (items.length === 0) return null;

  return (
    <div className="project-tech">
      <h3 className="project-tech__title">Tecnologías</h3>

      <ul className="project-tech__list">
        {items.map((tech) => (
          <li key={tech.id} className="project-tech__item">
            <i className={`${tech.icon} project-tech__icon`} aria-hidden="true" />
            <span className="project-tech__name">{tech.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}