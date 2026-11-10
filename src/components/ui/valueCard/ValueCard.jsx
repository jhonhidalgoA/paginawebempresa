import "./ValueCard.css";

export default function ValueCard({ value }) {
  const { icon: Icon, title, description } = value;

  return (
    <article className="value-card">
      <span className="value-card__icon" aria-hidden="true">
        <Icon size={24} strokeWidth={1.5} />
      </span>
      <h3 className="value-card__title">{title}</h3>
      <p className="value-card__description">{description}</p>
    </article>
  );
}