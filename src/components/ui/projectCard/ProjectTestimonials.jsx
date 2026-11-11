import Title from "@components/ui/title/Title";
import TestimonialCard from "@components/ui/projectCard/TestimonialCard";
import "./ProjectTestimonials.css";

export default function ProjectTestimonials({ testimonials = [] }) {
  if (testimonials.length === 0) return null;

  return (
    <section className="project-testimonials">
      <Title page="projectTestimonials" />

      <div className="project-testimonials__grid">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}