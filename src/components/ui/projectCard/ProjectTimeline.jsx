import "./ProjectTimeline.css";

export default function ProjectTimeline({ timeline = [] }) {
  if (timeline.length === 0) return null;

  return (
    <section className="project-timeline">
      <h3 className="project-timeline__title">
        Línea de <span className="project-timeline__highlight">tiempo</span>
      </h3>

      <ol className="project-timeline__list">
        {timeline.map((step) => (
          <li key={step.id} className="project-timeline__item">
            <span className="project-timeline__dot" aria-hidden="true" />

            <div className="project-timeline__card">
              <div className="project-timeline__header">
                <h4 className="project-timeline__step-title">{step.title}</h4>
                <span className="project-timeline__period">{step.period}</span>
              </div>
              <p className="project-timeline__description">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}