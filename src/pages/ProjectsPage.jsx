import { useState } from "react";
import Title from "@components/ui/title/Title";
import { projectData, projectFilters } from "@data/projectData";
import ProjectCard from "@components/ui/projectCard/ProjectCard";
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}