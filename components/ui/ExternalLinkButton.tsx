import { ExternalLink } from "lucide-react";

interface ExternalLinkButtonProps {
	href: string;
	label: string;
}

export default function ExternalLinkButton({ href, label }: ExternalLinkButtonProps) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-coral bg-coral-soft-bg text-coral text-[0.9rem] font-medium no-underline transition-all duration-200 hover:shadow-[0_8px_24px_var(--shadow-coral-soft)] hover:-translate-y-0.5">
			<ExternalLink size={16} />
			{label}
		</a>
	);
}
