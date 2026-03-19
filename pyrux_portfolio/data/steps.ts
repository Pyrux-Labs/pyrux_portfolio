import type { Step } from "../types/pricing.types";
import type { Locale } from "@/i18n/config";

export const steps: Record<Locale, Step[]> = {
  es: [
    {
      number: "01",
      title: "Hablamos gratis",
      description: "Entendemos tu negocio y te damos un presupuesto claro en 72hs.",
    },
    {
      number: "02",
      title: "Diseñamos juntos",
      description: "Ves cómo va a quedar tu sitio antes de que arranquemos.",
    },
    {
      number: "03",
      title: "Desarrollamos y ajustamos",
      description: "Trabajamos con vos hasta que estés conforme.",
    },
    {
      number: "04",
      title: "Tu sitio sale al aire",
      description: "Nos encargamos de todo para que esté listo.",
    },
    {
      number: "05",
      title: "Seguimos acompañándote",
      description: "Tu sitio siempre activo, seguro y con alguien que te responde.",
    },
  ],
  en: [
    {
      number: "01",
      title: "Free consultation",
      description: "We understand your business and give you a clear quote within 72 hours.",
    },
    {
      number: "02",
      title: "We design together",
      description: "You see how your site will look before we start building.",
    },
    {
      number: "03",
      title: "We build and refine",
      description: "We work with you until you're fully satisfied.",
    },
    {
      number: "04",
      title: "Your site goes live",
      description: "We take care of everything so it's ready to launch.",
    },
    {
      number: "05",
      title: "We keep supporting you",
      description: "Your site stays active, secure, and backed by someone who responds.",
    },
  ],
};
