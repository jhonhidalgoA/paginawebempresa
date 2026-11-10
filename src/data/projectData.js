import { Globe, Smartphone, Palette, Cloud } from "lucide-react";

export const projectFilters = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Móvil" },
  { id: "design", label: "Diseño" },
  { id: "cloud", label: "Nube" },
];

export const projectData = [
  {
    id: "ecommerce",
    title: "Plataforma de comercio electrónico",
    description:
      "Tienda en línea completa con pasarela de pagos e inventario en tiempo real.",
    image: "https://placehold.co/800x600/0f172a/3b82f6?text=Proyecto+01",
    category: "web",
    tags: ["Aplicación web", "React & Node.js"],
    technologies: ["react", "nodejs", "mongodb", "css"],
    icon: Globe,
    year: 2026,
    href: "/proyectos/comercio-electronico",
    titleKey: "project-ecommerce",
    overview:
      "Construimos una tienda en línea moderna, rápida y fácil de administrar. Incluye control de inventario en tiempo real, un proceso de pago sencillo con varias pasarelas y un panel para gestionar pedidos, clientes y reportes, pensado para crecer junto con el negocio.",
    timeline: [
      {
        id: "discovery",
        title: "Descubrimiento y planeación",
        period: "Semana 1-2",
        description:
          "Análisis de requisitos, diseño de la arquitectura y hoja de ruta del proyecto.",
      },
      {
        id: "design",
        title: "Diseño UI/UX",
        period: "Semana 3-5",
        description:
          "Wireframes, maquetas de alta fidelidad y rondas de aprobación con el cliente.",
      },
      {
        id: "development",
        title: "Desarrollo e integraciones",
        period: "Semana 6-12",
        description:
          "Frontend en React, API con Node.js, base de datos y pasarelas de pago.",
      },
      {
        id: "launch",
        title: "Pruebas y lanzamiento",
        period: "Semana 13-14",
        description:
          "Pruebas de rendimiento, ajustes finales, publicación y acompañamiento inicial.",
      },
    ],
  },
  {
    id: "school-app",
    title: "App de gestión escolar",
    description:
      "Aplicación móvil para notas, asistencia y comunicación con las familias.",
    image: "https://placehold.co/800x600/0f172a/3b82f6?text=Proyecto+02",
    category: "mobile",
    tags: ["Móvil", "React Native & Firebase"],
    technologies: ["react", "nodejs", "mongodb", "tailwind"],
    icon: Smartphone,
    year: 2026,
    href: "/proyectos/gestion-escolar",
    titleKey: "project-school",
    overview:
      "Desarrollamos una aplicación móvil que conecta a colegios y familias en un solo lugar. Permite consultar notas, registrar asistencia y recibir comunicados al instante, reduciendo el papeleo y mejorando la comunicación diaria.",
    timeline: [
      {
        id: "discovery",
        title: "Descubrimiento y planeación",
        period: "Semana 1-2",
        description:
          "Entrevistas con docentes y familias, y definición de funcionalidades clave.",
      },
      {
        id: "design",
        title: "Diseño UI/UX",
        period: "Semana 3-4",
        description:
          "Flujos de navegación, prototipos y sistema de diseño para la app.",
      },
      {
        id: "development",
        title: "Desarrollo móvil",
        period: "Semana 5-10",
        description:
          "Implementación en React Native, autenticación y notificaciones con Firebase.",
      },
      {
        id: "launch",
        title: "Pruebas y publicación",
        period: "Semana 11-12",
        description:
          "Pruebas con usuarios reales, ajustes y publicación en las tiendas de aplicaciones.",
      },
    ],
  },
  {
    id: "brand-identity",
    title: "Identidad de Marca digital",
    description:
      "Sistema de diseño y guía visual para una marca con presencia multicanal.",
    image: "https://placehold.co/800x600/0f172a/3b82f6?text=Proyecto+03",
    category: "design",
    tags: ["Diseño", "UI/UX"],
    technologies: ["react", "nodejs", "mongodb", "tailwind"],
    icon: Palette,
    year: 2026,
    href: "/proyectos/identidad-de-marca",
    titleKey: "project-brand",
    overview:
      "Creamos una identidad visual coherente para que la marca se vea y se sienta igual en su web, redes sociales y materiales digitales. Entregamos un sistema de diseño con colores, tipografías y componentes listos para usar.",
    timeline: [
      {
        id: "discovery",
        title: "Investigación de marca",
        period: "Semana 1-2",
        description:
          "Análisis del público, la competencia y los valores que debe transmitir la marca.",
      },
      {
        id: "concept",
        title: "Concepto visual",
        period: "Semana 3-4",
        description:
          "Propuestas de logotipo, paleta de colores y tipografías.",
      },
      {
        id: "system",
        title: "Sistema de diseño",
        period: "Semana 5-6",
        description:
          "Componentes, reglas de uso y plantillas para los distintos canales.",
      },
      {
        id: "delivery",
        title: "Entrega y guía de marca",
        period: "Semana 7",
        description:
          "Guía visual final y archivos listos para el equipo del cliente.",
      },
    ],
  },
  {
    id: "cloud-migration",
    title: "Migración a la nube",
    description:
      "Traslado de infraestructura local a la nube con cero tiempo de inactividad.",
    image: "https://placehold.co/800x600/0f172a/3b82f6?text=Proyecto+04",
    category: "cloud",
    tags: ["Nube", "AWS"],
    technologies: ["react", "nodejs", "mongodb", "tailwind"],
    icon: Cloud,
    year: 2026,
    href: "/proyectos/migracion-nube",
    titleKey: "project-cloud",
    overview:
      "Trasladamos la infraestructura local de la organización a la nube de forma gradual y segura, sin interrumpir su operación. El resultado es un sistema más escalable, con copias de seguridad automáticas y costos más controlados.",
    timeline: [
      {
        id: "assessment",
        title: "Diagnóstico",
        period: "Semana 1-2",
        description:
          "Inventario de sistemas actuales y definición de la estrategia de migración.",
      },
      {
        id: "architecture",
        title: "Arquitectura en la nube",
        period: "Semana 3-4",
        description:
          "Diseño de la infraestructura, seguridad y respaldo en AWS.",
      },
      {
        id: "migration",
        title: "Migración por fases",
        period: "Semana 5-8",
        description:
          "Traslado gradual de servicios y datos, con pruebas en cada etapa.",
      },
      {
        id: "support",
        title: "Monitoreo y soporte",
        period: "Semana 9-10",
        description:
          "Ajustes de rendimiento, monitoreo continuo y capacitación al equipo.",
      },
    ],
  },
  {
    id: "analytics",
    title: "Panel de analítica",
    description:
      "Dashboard con métricas e indicadores clave para la toma de decisiones.",
    image: "https://placehold.co/800x600/0f172a/3b82f6?text=Proyecto+05",
    category: "web",
    tags: ["Aplicación web", "Dashboard & Analytics"],
    technologies: ["react", "nodejs", "mongodb", "tailwind"],
    icon: Globe,
    year: 2026,
    href: "/proyectos/panel-analitica",
    titleKey: "project-analytics",
    overview:
      "Diseñamos un panel que reúne los datos más importantes del negocio en una sola vista. Con gráficos claros e indicadores en tiempo real, el equipo puede tomar decisiones más rápidas y basadas en información confiable.",
    timeline: [
      {
        id: "discovery",
        title: "Definición de indicadores",
        period: "Semana 1-2",
        description:
          "Identificación de las métricas clave y de las fuentes de datos.",
      },
      {
        id: "design",
        title: "Diseño del dashboard",
        period: "Semana 3-4",
        description:
          "Prototipos de gráficos, filtros y vistas por tipo de usuario.",
      },
      {
        id: "development",
        title: "Desarrollo e integración",
        period: "Semana 5-9",
        description:
          "Frontend en React, API en Node.js y conexión con las bases de datos.",
      },
      {
        id: "launch",
        title: "Pruebas y lanzamiento",
        period: "Semana 10-11",
        description:
          "Validación de datos, ajustes de rendimiento y puesta en producción.",
      },
    ],
  },
  {
    id: "delivery-app",
    title: "App de pedidos y entregas",
    description:
      "Aplicación móvil con seguimiento en vivo de pedidos y notificaciones push.",
    image: "https://placehold.co/800x600/0f172a/3b82f6?text=Proyecto+06",
    category: "mobile",
    tags: ["Móvil", "Flutter"],
    technologies: ["react", "nodejs", "mongodb", "tailwind"],
    icon: Smartphone,
    year: 2026,
    href: "/proyectos/pedidos-entregas",
    titleKey: "project-delivery",
    overview:
      "Creamos una aplicación para pedir y recibir productos con seguimiento en vivo. Los clientes ven el estado de su pedido en tiempo real y reciben notificaciones, mientras el negocio organiza sus entregas desde un solo lugar.",
    timeline: [
      {
        id: "discovery",
        title: "Descubrimiento y planeación",
        period: "Semana 1-2",
        description:
          "Mapeo del proceso de pedidos y definición de las funciones principales.",
      },
      {
        id: "design",
        title: "Diseño UI/UX",
        period: "Semana 3-4",
        description:
          "Flujos de compra y seguimiento, y prototipos de la app.",
      },
      {
        id: "development",
        title: "Desarrollo móvil",
        period: "Semana 5-10",
        description:
          "App en Flutter con mapa de seguimiento y notificaciones push.",
      },
      {
        id: "launch",
        title: "Pruebas y publicación",
        period: "Semana 11-12",
        description:
          "Pruebas en dispositivos reales y publicación en las tiendas.",
      },
    ],
  },
];