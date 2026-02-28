// ═══════════════════════════════════════════════
// Utils — Pyrux Portfolio
// ═══════════════════════════════════════════════

/**
 * Combines Tailwind classes safely.
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
	return classes.filter(Boolean).join(" ");
}
