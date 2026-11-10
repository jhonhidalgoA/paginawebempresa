import { Camera } from "lucide-react";
import Title from "@components/ui/title/Title";
import { aboutData } from "@data/aboutData";
import "./AboutPage.css";

export default function AboutPage() {
  const { eyebrow, heading, paragraphs, principles, photos } = aboutData;

  return (
    <section className="about">
      <div className="about__container">
        <Title page="about" />
        <div className="about__body">
          <div className="about__gallery">
            {photos.map((photo) => (
              <figure
                key={photo.id}
                className={`about__photo about__photo--${photo.slot}`}
              >
                {photo.src ? (
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                ) : (
                  <span className="about__photo-empty" aria-hidden="true">
                    <Camera size={26} />
                    {photo.label}
                  </span>
                )}
              </figure>
            ))}
          </div>

          <div className="about__text">
            <span className="about__eyebrow">{eyebrow}</span>
            <h2 className="about__heading">{heading}</h2>

            {paragraphs.map((text, i) => (
              <p key={i} className="about__paragraph">
                {text}
              </p>
            ))}

            <ul className="about__principles">
              {principles.map((item) => (
                <li key={item.id}>
                  <strong>{item.title}</strong> {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}