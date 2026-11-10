import { Mail, MessageCircle, MapPin, CalendarCheck } from "lucide-react";

export const contactCards = [
  {
    id: "email",
    icon: Mail,
    title: "Escríbenos",
    detail: "hola@tuempresa.com",
    href: "mailto:hola@tuempresa.com",
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "Chat directo",
    href: "https://wa.me/570000000000",
  },
  {
    id: "location",
    icon: MapPin,
    title: "Ubicación",
    detail: "Medellín, Colombia",
    href: null,
  },
  {
    id: "meeting",
    icon: CalendarCheck,
    title: "Agenda una llamada",
    detail: "30 min, gratis",
    href: "#",
  },
];

export const solutionOptions = [
  { id: "web", label: "Desarrollo web" },
  { id: "mobile", label: "App móvil" },
  { id: "custom", label: "Software a la medida" },
  { id: "unsure", label: "No estoy seguro" },
];

export const budgetOptions = [
  { id: "low", label: "Menos de 2M" },
  { id: "mid", label: "2M – 5M" },
  { id: "high", label: "Más de 5M" },
  { id: "unknown", label: "Aún no lo sé" },
];

export const nextSteps = [
  {
    id: "tell",
    title: "Nos cuentas tu necesidad",
    description: "Con el formulario o por WhatsApp.",
  },
  {
    id: "review",
    title: "Revisamos tu caso",
    description: "Entendemos qué quieres lograr.",
  },
  {
    id: "propose",
    title: "Te proponemos el siguiente paso",
    description: "Con claridad y sin compromiso.",
  },
];