import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";

interface BackLinkProps {
	label: string;
}

export default function BackLink({ label }: BackLinkProps) {
	return (
		<Link
			href="/"
			className="inline-flex items-center gap-2 text-[0.9rem] text-coral no-underline mb-4 hover:text-cyan">
			<ArrowLeft size={16} />
			{label}
		</Link>
	);
}
