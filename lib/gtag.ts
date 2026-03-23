// ═══════════════════════════════════════════════
// GA4 custom events — helpers tipados
// ═══════════════════════════════════════════════

declare global {
	interface Window {
		gtag?: (...args: unknown[]) => void;
	}
}

function sendEvent(name: string, params?: Record<string, string | number | boolean>) {
	window.gtag?.("event", name, params);
}

export const gtag = {
	// Hero CTAs
	clickCtaContact: () => sendEvent("click_cta_contact"),
	clickCtaPricing: () => sendEvent("click_cta_pricing"),

	// Sección Contactanos
	clickContact: (method: "whatsapp" | "email" | "linkedin" | "instagram") =>
		sendEvent("click_contact", { method }),

	// Pricing — selección de plan
	selectPricingPlan: (planName: string, planCategory: string) =>
		sendEvent("select_pricing_plan", { plan_name: planName, plan_category: planCategory }),

	// Pricing — WhatsApp CTA en barra inferior
	clickWhatsAppPlan: (planName: string) =>
		sendEvent("click_whatsapp_plan", { plan_name: planName }),

	// Pricing — WhatsApp CTA del plan Personalizado
	clickWhatsAppCustom: () => sendEvent("click_whatsapp_custom"),
};
