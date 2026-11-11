import { Quote } from "lucide-react";
import "./TestimonialCard.css";

const getInitials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

export default function TestimonialCard({ testimonial }) {
  const { text, name, role } = testimonial;

  return (
    <figure className="testimonial-card">
      <Quote
        size={32}
        strokeWidth={1.5}
        className="testimonial-card__quote"
        aria-hidden="true"
      />

      <blockquote className="testimonial-card__text">{text}</blockquote>

      <figcaption className="testimonial-card__author">
        <span className="testimonial-card__avatar" aria-hidden="true">
          {getInitials(name)}
        </span>
        <span className="testimonial-card__info">
          <span className="testimonial-card__name">{name}</span>
          <span className="testimonial-card__role">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}