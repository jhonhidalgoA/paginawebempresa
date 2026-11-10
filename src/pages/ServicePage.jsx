import Title from "@components/ui/title/Title";
import ServiceCard from "@components/ui/serviceCard/ServiceCard";
import { servicesData } from "@data/servicesData";
import "./ServicePage.css";

export default function ServicePage() {
  return (
    <section className="services">
      <div className="services__container">
        <Title page="services" />
         <div className="services__grid">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}