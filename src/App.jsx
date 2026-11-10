import { Routes, Route } from "react-router-dom";

import BackgroundLines from "@components/ui/lines/BackgroundLines";
import HomePage from "@pages/HomePage";
import ServicePage from "@pages/ServicePage";
import AboutPage from "@pages/AboutPage";
import ProjectsPage from "@pages/ProjectsPage";
import ContactPage from "@pages/ContactPage";
import ProcessPage from "@pages/ProcessPage";

import "./App.css";

export default function App() {
  return (
    <div className="app-shell">
      <BackgroundLines />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}
