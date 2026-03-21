import type { FAQItem } from "../types/pricing.types";
import type { Locale } from "@/i18n/config";

export const faqItems: Record<Locale, FAQItem[]> = {
	es: [
		{
			question: "¿Por qué Pyrux y no una agencia?",
			answer:
				"Las agencias cobran un 200% más que nuestros precios, y tercerizan tu proyecto a un programador inexperto. En Pyrux, asegurás que hablás directamente con los profesionales que realizarán tu proyecto, manteniendo una calidad y personalización que no vas a tener en ninguna otra empresa.",
		},
		{
			question: "¿Hay garantía de satisfacción?",
			answer:
				"Sí. Incluimos rondas de revisiones sin costo adicional hasta que el resultado te convenza. No lanzamos nada que no te represente.",
		},
		{
			question: "¿Cuál es el tiempo de respuesta?",
			answer:
				"Plan Growth: respuesta en menos de 48hs. Plan Pro: menos de 24hs. Plan Business y E-Commerce: soporte prioritario con respuesta en menos de 12hs.",
		},
		{
			question: "¿Los precios son en dólares o en pesos?",
			answer:
				"Se cotizan en dólares, se pueden pagar en pesos al tipo de cambio del día.",
		},
		{
			question: "¿Qué necesito tener listo antes de empezar?",
			answer:
				"Un manual de marca hecho por un profesional sería ideal, pero no es obligatorio.",
		},
		{
			question: "¿Puedo actualizar el contenido yo mismo?",
			answer:
				"El plan Standard en adelante incluyen una aplicación web para que puedas cambiar el contenido por vos mismo; mientras que en el plan Growth van por el mantenimiento mensual.",
		},
		{
			question: "¿Qué pasa si no quiero contratar mantenimiento?",
			answer:
				"Te entregamos la aplicación lista, para que los realices por tu cuenta.",
		},
		{
			question: "¿Cuánto tarda realmente un proyecto?",
			answer:
				"Los tiempos son desde que tenemos todo el contenido. Si hay demoras del cliente, el plazo se extiende. Cronograma acordado desde el inicio.",
		},
	],
	en: [
		{
			question: "Why Pyrux instead of an agency?",
			answer:
				"Agencies charge 200% more than our prices and outsource your project to an inexperienced developer. With Pyrux, you deal directly with the professionals who will build your project, ensuring a level of quality and personalization you won't find anywhere else.",
		},
		{
			question: "Is there a satisfaction guarantee?",
			answer:
				"Yes. We include revision rounds at no extra cost until you're satisfied. We don't launch anything that doesn't represent you.",
		},
		{
			question: "What is the response time?",
			answer:
				"Growth plan: response within 48 hours. Pro plan: within 24 hours. Business and E-Commerce: priority support with response within 12 hours.",
		},
		{
			question: "Are prices in dollars or pesos?",
			answer:
				"Prices are quoted in US dollars and can be paid in pesos at the current exchange rate.",
		},
		{
			question: "What do I need ready before we start?",
			answer:
				"A brand manual made by a professional would be ideal, but it's not mandatory.",
		},
		{
			question: "Can I update the content myself?",
			answer:
				"The Standard plan and above include a web application so you can update the content yourself, while the Growth plan includes monthly maintenance for content updates.",
		},
		{
			question: "What if I don't want a maintenance plan?",
			answer:
				"We deliver the finished application so you can handle updates on your own.",
		},
		{
			question: "How long does a project actually take?",
			answer:
				"Timelines start from when we have all the content. If there are client delays, the deadline extends. The schedule is agreed upon from the start.",
		},
	],
};
