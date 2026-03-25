// ═══════════════════════════════════════════════
// Contact data — contact items and email
// ═══════════════════════════════════════════════

import type { ContactItem } from "@/types";
import type { Locale } from "@/i18n/config";

export const CONTACT_EMAIL = "pyrux@pyrux.com.ar";

export const contactItems: Record<Locale, ContactItem[]> = {
	es: [
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
			action: "copy-email",
			hoverBorder: "var(--gold-bright)",
			hoverShadow: "var(--shadow-gold-soft)",
			hoverIcon: "var(--gold-bright)",
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
	],
	en: [
		{
			label: "LinkedIn",
			sublabel: "Connect with us",
			icon: "LinkedIn",
			href: "https://linkedin.com/company/pyrux",
			hoverBorder: "var(--linkedin-color)",
			hoverShadow: "var(--linkedin-shadow)",
			hoverIcon: "var(--linkedin-color)",
		},
		{
			label: "Email",
			sublabel: "Send us a message",
			icon: "Email",
			action: "copy-email",
			hoverBorder: "var(--gold-bright)",
			hoverShadow: "var(--shadow-gold-soft)",
			hoverIcon: "var(--gold-bright)",
		},
		{
			label: "WhatsApp",
			sublabel: "Chat with us",
			icon: "WhatsApp",
			href: "https://wa.me/5493416941225",
			hoverBorder: "var(--whatsapp-color)",
			hoverShadow: "var(--whatsapp-shadow)",
			hoverIcon: "var(--whatsapp-color)",
		},
		{
			label: "Instagram",
			sublabel: "Follow us on Instagram",
			icon: "Instagram",
			href: "https://www.instagram.com/pyrux_labs",
			hoverBorder: "var(--instagram-color)",
			hoverShadow: "var(--instagram-shadow)",
			hoverIcon: "var(--instagram-color)",
		},
	],
};
