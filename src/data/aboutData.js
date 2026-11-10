import { Lightbulb, Gem, ShieldCheck, Heart } from "lucide-react";

export const aboutData = {
  eyebrow: "Nuestro enfoque",
  heading: "Tecnología que se adapta a tu organización.",
  paragraphs: [
    "Analizamos las necesidades de tu organización para desarrollar soluciones de software que simplifiquen tus procesos, mejoren la gestión y faciliten el trabajo diario.",
    "Te acompañamos durante todo el desarrollo, mantenemos una comunicación clara y te involucramos en las decisiones importantes para que el resultado responda a lo que realmente necesitas."
  ],
  principles: [
    { id: 1, title: "Claridad.", text: "Cada desarrollo responde a las necesidades y procesos de tu organización." },
    { id: 2, title: "Calidad.", text: "Priorizamos la funcionalidad, la usabilidad y un desarrollo bien estructurado." },
    { id: 3, title: "Cercanía.", text: "Mantenemos una comunicación constante durante cada etapa del proyecto." },
  ],
  
  photos: [
    { id: 1, slot: "a", src: null, alt: "", label: "Foto 1" },
    { id: 2, slot: "b", src: null, alt: "", label: "Foto 2" },
    { id: 3, slot: "c", src: null, alt: "", label: "Foto 3" },
    { id: 4, slot: "d", src: null, alt: "", label: "Foto 4" },
  ],
};



export const aboutIntro =
  "Cada organización trabaja distinto, por eso no vendemos plantillas: escuchamos, diseñamos y construimos herramientas a tu medida.";

export const aboutValues = [
  {
    id: "innovation",
    icon: Lightbulb,
    title: "Innovación",
    description: "Tecnologías modernas para que tu organización avance.",
  },
  {
    id: "quality",
    icon: Gem,
    title: "Calidad",
    description: "Cuidamos cada línea de código y cada detalle.",
  },
  {
    id: "transparency",
    icon: ShieldCheck,
    title: "Transparencia",
    description: "Alcances, tiempos y costos claros desde el inicio.",
  },
  {
    id: "focus",
    icon: Heart,
    title: "Enfoque en ti",
    description: "Te acompañamos de principio a fin.",
  },
];