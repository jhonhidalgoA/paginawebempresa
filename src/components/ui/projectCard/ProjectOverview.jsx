import "./ProjectOverview.css";

export default function ProjectOverview({ overview }) {
  if (!overview) return null;

  return (
    <section className="project-overview">
      <h3 className="project-overview__title">
        Descripción <span className="project-overview__highlight">general</span>
      </h3>
      <p className="project-overview__text">{overview}</p>
    </section>
  );
}