import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Code, Calendar } from "lucide-react";
import { projectData } from "@data/projectData";

import Title from "@components/ui/title/Title";
import Navbar from "@components/ui/navbar/Navbar";
import Footer from "@components/ui/footer/Footer";
import ProjectGallery from "@components/ui/projectCard/ProjectGallery";
import ProjectInfo from "@components/ui/projectCard/ProjectInfo";
import ProjectTechnologies from "@components/ui/projectCard/ProjectTechnologies";
import ProjectOverview from "@components/ui/projectCard/ProjectOverview";
import ProjectTimeline from "@components/ui/projectCard/ProjectTimeline";
import ProjectTestimonials from "@components/ui/projectCard/ProjectTestimonials";

import "./ProjectDetailPage.css";

export default function ProjectDetailPage() {
  const { slug } = useParams();

  const project = projectData.find((p) => p.href === `/proyectos/${slug}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="project-detail-page">
        <h2>Proyecto no encontrado</h2>
        <Link to="/projects">Volver a proyectos</Link>
      </div>
    );
  }

  const TypeIcon = project.icon;

  return (
    <>
      <Navbar />
      <main className="project-detail-page">
        <Title page={project.titleKey} />

        <header className="project-detail-page__header">
          <div className="project-detail-page__tags">
            <span className="project-detail-page__tag project-detail-page__tag--type">
              <TypeIcon size={16} />             
              {project.tags[0]}
            </span>
            <span className="project-detail-page__tag project-detail-page__tag--tech">
              <Code size={16} />
              {project.tags[1]}
            </span>
            <span className="project-detail-page__tag project-detail-page__tag--year">
              <Calendar size={16} />
              {project.year}
            </span>
          </div>
        </header>

        <div className="project-detail-page__layout">
          <ProjectGallery project={project} />
          <ProjectInfo project={project} />
        </div>

        <ProjectTechnologies technologies={project.technologies} />

        <section className="project-detail-page__story-section">
          <Title page="projectStory" />
          <div className="project-detail-page__story">
            <ProjectOverview overview={project.overview} />
            <ProjectTimeline timeline={project.timeline} />
          </div>
        </section>

        <ProjectTestimonials testimonials={project.testimonials} />
      </main>
      <Footer />
    </>
  );
}