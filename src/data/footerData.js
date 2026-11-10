import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  MessageCircle,
  Clock,
} from "lucide-react";

export const footerData = {
  description:
    "Software a la medida para empresas y colegios que quieren crecer con tecnología.",
  cta: {
    title: "¿Listo para empezar tu proyecto?",
    text: "Cuéntanos tu idea y te respondemos en menos de 24 horas.",
    label: "Hablemos",
    href: "#contact",
  },
  social: [
    { id: "facebook", label: "Facebook", href: "https://facebook.com", icon: Facebook },
    { id: "instagram", label: "Instagram", href: "https://instagram.com", icon: Instagram },
    { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  ],
  contact: [
    { id: "location", icon: MapPin, text: "Medellín, Colombia" },
    { id: "email", icon: Mail, text: "hola@tuempresa.com" },
    { id: "whatsapp", icon: MessageCircle, text: "+57 000 000 0000" },
    { id: "schedule", icon: Clock, text: "Lun - Vie: 8:00 - 18:00" },
  ],
  legal: [
    { id: "privacy", label: "Política de privacidad", href: "/privacidad" },
    { id: "terms", label: "Términos y condiciones", href: "/terminos" },
  ],
};