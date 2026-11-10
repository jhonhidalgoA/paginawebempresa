import { MessageCircle } from "lucide-react";
import Title from "@components/ui/title/Title";
import ContactCard from "@components/ui/contactCard/ContactCard";
import ContactForm from "@components/ui/contactForm/ContactForm";
import { contactCards, nextSteps } from "@data/contactData";
import "./ContactPage.css";

const whatsapp = contactCards.find((card) => card.id === "whatsapp");

export default function ContactPage() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <Title page="contact" />
        
        <div className="contact__cards">
          {contactCards.map((card) => (
            <ContactCard key={card.id} card={card} />
          ))}
        </div>

        <div className="contact__layout">
          <ContactForm />

          <aside className="contact__aside">
            <div className="contact__panel">
              <h3 className="contact__panel-title">Qué pasa después</h3>
              <ol className="contact__steps">
                {nextSteps.map((step, index) => (
                  <li key={step.id} className="contact__step">
                    <span className="contact__step-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="contact__step-title">{step.title}</p>
                      <p className="contact__step-text">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <a
              href={whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__panel contact__whatsapp"
            >
              <span className="contact__whatsapp-icon" aria-hidden="true">
                <MessageCircle size={22} />
              </span>
              <span>
                <span className="contact__step-title">¿Prefieres escribirnos?</span>
                <span className="contact__whatsapp-link">Abrir WhatsApp</span>
              </span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}