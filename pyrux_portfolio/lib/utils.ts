// ═══════════════════════════════════════════════
// Utilidades — Pyrux Portfolio
// ═══════════════════════════════════════════════

/**
 * Combina clases de Tailwind de forma segura.
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
	return classes.filter(Boolean).join(" ");
}
