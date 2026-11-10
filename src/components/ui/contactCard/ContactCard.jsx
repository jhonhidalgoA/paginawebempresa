import "./ContactCard.css";

export default function ContactCard({ card }) {
  const { icon: Icon, title, detail, href } = card;

  const content = (
    <>
      <span className="contact-card__icon" aria-hidden="true">
       <Icon size={40} strokeWidth={1.5} />
      </span>
      <span className="contact-card__title">{title}</span>
      <span className="contact-card__detail">{detail}</span>
    </>
  );

  if (!href) {
    return <div className="contact-card">{content}</div>;
  }

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className="contact-card"
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {content}
    </a>
  );
}