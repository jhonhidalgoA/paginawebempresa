import { User, Layers, Calendar, Clock, Users, ExternalLink } from "lucide-react";
import { projectFilters } from "@data/projectData";
import "./ProjectInfo.css";

export default function ProjectInfo({ project }) {
  const categoryLabel =
    projectFilters.find((filter) => filter.id === project.category)?.label ??
    "Por definir";

  const rows = [
    { icon: User, label: "Cliente", value: project.client ?? "Por definir" },
    { icon: Layers, label: "Categoría", value: categoryLabel },
    { icon: Calendar, label: "Fecha", value: project.year },
    { icon: Clock, label: "Duración", value: project.duration ?? "Por definir" },
    { icon: Users, label: "Equipo", value: project.team ?? "Por definir" },
  ];

  return (
    <aside className="project-info">
      <h2 className="project-info__title">Información del proyecto</h2>

      <ul className="project-info__list">
        {rows.map(({ icon: Icon, label, value }) => (
          <li key={label} className="project-info__row">
            <span className="project-info__label">
              <Icon size={40} />
              {label}
            </span>
            <span className="project-info__value">{value}</span>
          </li>
        ))}
      </ul>

      {project.siteUrl && (
        <a
          href={project.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-info__button"
        >
          <ExternalLink size={16} />
          Ver sitio
        </a>
      )}
    </aside>
  );
}