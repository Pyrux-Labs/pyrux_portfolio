// ═══════════════════════════════════════════════
// Contact data — contact items and email
// ═══════════════════════════════════════════════

export const CONTACT_EMAIL = "pyrux@pyrux.com.ar";

export const contactItems = [
	{
		label: "LinkedIn",
		sublabel: "Conecta con nosotros",
		icon: "LinkedIn",
		href: "https://linkedin.com/company/pyrux",
		hoverBorder: "var(--linkedin-color)",
		hoverShadow: "var(--linkedin-shadow)",
		hoverIcon: "var(--linkedin-color)",
	},
	{
		label: "Email",
		sublabel: "Envíanos un mensaje",
		icon: "Email",
		action: "copy-email" as const,
		hoverBorder: "var(--cyan-bright)",
		hoverShadow: "var(--shadow-cyan-soft)",
		hoverIcon: "var(--cyan-bright)",
	},
	{
		label: "WhatsApp",
		sublabel: "Chatea con nosotros",
		icon: "WhatsApp",
		href: "https://wa.me/5493416941225",
		hoverBorder: "var(--whatsapp-color)",
		hoverShadow: "var(--whatsapp-shadow)",
		hoverIcon: "var(--whatsapp-color)",
	},
	{
		label: "Instagram",
		sublabel: "Síguenos en Instagram",
		icon: "Instagram",
		href: "https://www.instagram.com/pyrux_labs",
		hoverBorder: "var(--instagram-color)",
		hoverShadow: "var(--instagram-shadow)",
		hoverIcon: "var(--instagram-color)",
	},
];
