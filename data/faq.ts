import type { FAQItem } from "../types/pricing.types";
import type { Locale } from "@/i18n/config";

export const faqItems: Record<Locale, FAQItem[]> = {
	es: [
		{
			question: "¿Por qué Pyrux y no una agencia?",
			answer:
				"Las agencias cobran hasta un 200% más y tercerizan tu proyecto a un desarrollador inexperto. En Pyrux trabajás directamente con los profesionales que construyen tu producto, garantizando la calidad y el nivel de detalle que una agencia nunca puede ofrecer.",
		},
		{
			question: "¿Hay garantía de satisfacción?",
			answer:
				"Sí. Incluimos rondas de revisión sin cargo adicional hasta que el resultado te convenza por completo. No publicamos nada que no te represente al 100%.",
		},
		{
			question: "¿Cuál es el tiempo de respuesta?",
			answer:
				"Depende del plan: desde 48 horas en Growth hasta 12 horas en Business y E-Commerce. Cuanto más crítico sea tu negocio, más rápido llegamos.",
		},
		{
			question: "¿Los precios son en dólares o en pesos?",
			answer:
				"Cotizamos en dólares para mantener precios estables, y podés pagar en pesos al tipo de cambio del día. Sin sorpresas ni actualizaciones arbitrarias.",
		},
		{
			question: "¿Qué necesito tener listo antes de empezar?",
			answer:
				"Idealmente, un manual de marca y el contenido (textos e imágenes). Si no tenés alguno de los dos, lo resolvemos juntos — tenemos experiencia arrancando desde cero.",
		},
		{
			question: "¿Puedo actualizar el contenido yo mismo?",
			answer:
				"Los planes Pro en adelante incluyen un panel de administración para que gestiones el contenido sin depender de nosotros. En el plan Growth, las actualizaciones se incluyen dentro del mantenimiento mensual.",
		},
		{
			question: "¿Qué pasa si no quiero contratar mantenimiento?",
			answer:
				"Sin problema. Te entregamos el proyecto completo, documentado y listo para que lo administres vos o cualquier desarrollador que elijas.",
		},
		{
			question: "¿Cuánto tarda realmente un proyecto?",
			answer:
				"Los plazos arrancan desde que tenemos el contenido completo y se acuerdan al inicio del proyecto. El cronograma es claro desde el día uno, sin sorpresas ni demoras de nuestra parte.",
		},
	],
	en: [
		{
			question: "Why Pyrux instead of an agency?",
			answer:
				"Agencies charge up to 200% more and outsource your project to an inexperienced developer. At Pyrux, you work directly with the professionals building your product — guaranteeing the quality and attention to detail that no agency can match.",
		},
		{
			question: "Is there a satisfaction guarantee?",
			answer:
				"Yes. We include unlimited revision rounds at no extra cost until you're fully satisfied. We don't publish anything that doesn't represent you 100%.",
		},
		{
			question: "What is the response time?",
			answer:
				"It depends on the plan: from 48 hours on Growth to 12 hours on Business and E-Commerce. The more critical your business, the faster we respond.",
		},
		{
			question: "Are prices in dollars or pesos?",
			answer:
				"We quote in US dollars to keep pricing stable, and you can pay in pesos at the current exchange rate. No surprises, no arbitrary increases.",
		},
		{
			question: "What do I need ready before we start?",
			answer:
				"Ideally, a brand manual and your content (text and images). If you're missing either, we'll work through it together — we have experience starting from scratch.",
		},
		{
			question: "Can I update the content myself?",
			answer:
				"The Pro plan and above include an admin panel so you can manage your content without relying on us. On the Growth plan, updates are handled as part of the monthly maintenance.",
		},
		{
			question: "What if I don't want a maintenance plan?",
			answer:
				"No problem. We deliver the full project, documented and ready for you or any developer you choose to manage.",
		},
		{
			question: "How long does a project actually take?",
			answer:
				"Timelines start from when we have all the content and are agreed upon at the beginning of the project. The schedule is clear from day one — no surprises, no delays on our end.",
		},
	],
};
