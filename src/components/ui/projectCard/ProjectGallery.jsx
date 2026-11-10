import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import "./ProjectGallery.css";

const PLACEHOLDER_COUNT = 4;

export default function ProjectGallery({ project }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = project.gallery ?? [];
  const slots =
    images.length > 0
      ? images
      : Array.from({ length: PLACEHOLDER_COUNT }, () => null);

  const activeImage = slots[activeIndex];

  return (
    <div className="project-gallery">
      <div className="project-gallery__main">
        {activeImage ? (
          <img
            src={activeImage}
            alt={`${project.title} - imagen ${activeIndex + 1}`}
            className="project-gallery__main-image"
          />
        ) : (
          <div className="project-gallery__placeholder">
            <ImageIcon size={40} />
            <span>Imagen principal</span>
          </div>
        )}
      </div>

      <div className="project-gallery__thumbs">
        {slots.map((image, index) => (
          <button
            key={index}
            type="button"
            className={`project-gallery__thumb ${
              index === activeIndex ? "project-gallery__thumb--active" : ""
            }`}
            aria-label={`Ver imagen ${index + 1}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            {image ? (
              <img src={image} alt="" className="project-gallery__thumb-image" />
            ) : (
              <ImageIcon size={20} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}