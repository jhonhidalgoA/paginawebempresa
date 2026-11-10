import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Title from "@components/ui/title/Title";
import { projectData, projectFilters } from "@data/projectData";
import "./ProjectsPage.css";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects =
    activeFilter === "all"
      ? projectData
      : projectData.filter((project) => project.category === activeFilter);

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <Title page="projects" />
        <div className="projects__filters" role="tablist" aria-label="Filtrar proyectos">
          {projectFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.id}
              className={`projects__filter ${
                activeFilter === filter.id ? "projects__filter--active" : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="projects__grid">
          {visibleProjects.map((project) => (
            <article key={project.id} className="projects__card">
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
          ))}
        </div>
      </div>
    </section>
  );
}