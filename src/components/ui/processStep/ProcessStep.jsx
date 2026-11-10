import "./ProcessStep.css";

export default function ProcessStep({ step, index }) {
  const { icon: Icon, title, description } = step;
  const number = String(index + 1).padStart(2, "0");

  return (
    <li className="process-step">
      <div className="process-step__icon-wrap">
        <span
          className={`process-step__icon ${
            index % 2 === 0
              ? "process-step__icon--blue"
              : "process-step__icon--cyan"
          }`}
          aria-hidden="true"
        >
          <Icon size={34} />
        </span>
        <span className="process-step__number" aria-hidden="true">
          {number}
        </span>
      </div>

      <h3 className="process-step__title">{title}</h3>
      <p className="process-step__description">{description}</p>
    </li>
  );
}