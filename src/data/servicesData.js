import { Code2, Smartphone, Cloud } from "lucide-react";

export const servicesData = [
  {
    id: "web",
    icon: Code2,
    title: "Desarrollo web",
    description:
      "Aplicaciones web a la medida con React, Node.js y tecnologías modernas para un rendimiento y escalabilidad óptimos.",
    features: [
      "Aplicaciones web personalizadas",
      "Soluciones de comercio electrónico",
      "Desarrollo de CMS",
      "Integración de APIs",
    ],
    href: "/servicios/desarrollo-web",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Aplicaciones móviles",
    description:
      "Apps nativas y multiplataforma para iOS y Android con una experiencia fluida y alto rendimiento.",
    features: [
      "Apps para iOS y Android",
      "React Native y Flutter",
      "Publicación en tiendas",
      "Notificaciones push",
    ],
    href: "/servicios/aplicaciones-moviles",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Soluciones en la nube",
    description:
      "Infraestructura escalable, migración y DevOps para optimizar tus operaciones y reducir costos.",
    features: [
      "AWS, Azure y GCP",
      "Migración a la nube",
      "DevOps y CI/CD",
      "Arquitectura serverless",
    ],
    href: "/servicios/nube",
  },
];