import { useState } from "react";
import { Send } from "lucide-react";
import { solutionOptions, budgetOptions } from "@data/contactData";
import "./ContactForm.css";

const initialValues = {
  name: "",
  email: "",
  company: "",
  solution: "web",
  message: "",
  budget: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleChoice = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí va el envío real (API o servicio de correo)
    setIsSent(true);
    setValues(initialValues);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__header">
        <h3 className="contact-form__title">Déjanos tu mensaje</h3>
        <p className="contact-form__subtitle">
          Completa el formulario y revisamos tu caso.
        </p>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="name" className="contact-form__label">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="contact-form__input"
            placeholder="Tu nombre"
            value={values.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="email" className="contact-form__label">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="contact-form__input"
            placeholder="tucorreo@empresa.com"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="company" className="contact-form__label">
          Empresa o colegio{" "}
          <span className="contact-form__optional">(opcional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="contact-form__input"
          placeholder="Nombre de tu organización"
          value={values.company}
          onChange={handleChange}
        />
      </div>

      <div className="contact-form__field">
        <span className="contact-form__label">¿Qué necesitas?</span>
        <div className="contact-form__chips">
          {solutionOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              className={`contact-form__chip ${
                values.solution === option.id
                  ? "contact-form__chip--active"
                  : ""
              }`}
              aria-pressed={values.solution === option.id}
              onClick={() => handleChoice("solution", option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="message" className="contact-form__label">
          Cuéntanos tu proyecto
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="contact-form__input contact-form__textarea"
          placeholder="¿Qué problema quieres resolver o qué te gustaría lograr?"
          value={values.message}
          onChange={handleChange}
          required
        />
      </div>     

      <button type="submit" className="contact-form__submit">
        <Send size={16} />
        Enviar mensaje
      </button>

      <p className="contact-form__note" role="status">
        {isSent
          ? "Recibimos tu mensaje. Te respondemos en menos de 24 horas."
          : "Sin compromiso. Tus datos solo se usan para responderte."}
      </p>
    </form>
  );
}