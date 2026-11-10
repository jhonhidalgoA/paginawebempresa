import Navbar from "@components/ui/navbar/Navbar";
import Reveal from "@components/ui/reveal/Reveal";

import ServicePage from "@pages/ServicePage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import ProcessPage from "./ProcessPage";
import Footer from "@components/ui/footer/Footer";

import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <section className="home">
        <div className="home__container">
          <div className="home__content">
            <Reveal
              as="span"
              variant="spread"
              delay={100}
              duration={1200}
              className="home__eyebrow"
              style={{
                "--reveal-spread-from": "6px",
                "--reveal-spread-to": "2px",
              }}
            >
              Software a la medida de tu negocio
            </Reveal>

            <h1 className="home__title">
              <Reveal as="span" variant="line" delay={250}>
                Tu organización tiene necesidades únicas.
              </Reveal>
              <Reveal
                as="span"
                variant="line"
                delay={450}
                className="text-gradient"
              >
                Tu software también debería tenerlas.
              </Reveal>
            </h1>

            <Reveal as="p" delay={800} className="home__description">
              Diseñamos y desarrollamos software a la medida para optimizar
              procesos, resolver necesidades reales y crear herramientas
              digitales que evolucionan junto a tu organización.
            </Reveal>
          </div>

          <div className="home__visual">
            <Reveal
              variant="slide-right"
              delay={600}
              className="home__visual-reveal"
            >
              <img
                src="/Nexus.png"
                alt="Nexus"
                className="home__visual-image reveal-float"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="about">
        <AboutPage page="about" />
      </section>

      <section id="services">
        <ServicePage page="services" />
      </section>

      <section id="process">
        <ProcessPage page="process" />
      </section>

      <section id="projects">
        <ProjectsPage page="projects" />
      </section>

      <section id="contact">
        <ContactPage page="contact" />
      </section>

      <Footer />
    </>
  );
}
