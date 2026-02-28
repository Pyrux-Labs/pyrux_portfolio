// ═══════════════════════════════════════════════
// Componente Badge — etiqueta de tecnología
// ═══════════════════════════════════════════════

import { cn } from "@/lib/utils";

interface BadgeProps {
	label: string;
	variant?: "default" | "coral" | "cyan";
	className?: string;
}

export default function Badge({
	label,
	variant = "default",
	className,
}: BadgeProps) {
	const variantClasses = {
		default:
			"border-border bg-card text-secondary hover:border-coral hover:text-coral",
		coral: "border-border-accent bg-coral-soft-bg text-coral",
		cyan: "border-cyan-mid/30 bg-cyan-soft-bg text-cyan",
	};

	return (
		<span
			className={cn(
				"inline-flex items-center px-2.5 py-1 rounded-full border text-[0.75rem] font-medium transition-colors duration-200",
				variantClasses[variant],
				className,
			)}>
			{label}
		</span>
	);
}
