// ═══════════════════════════════════════════════
// Componente ServiceIcon — renderiza iconos de servicios
// ═══════════════════════════════════════════════

import {
	House,
	MessageCircle,
	TreeDeciduous,
	Globe,
	SquareTerminal,
	Puzzle,
} from "lucide-react";

// Mapa de nombre de icono a componente
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
	House,
	MessageCircle,
	TreeDeciduous,
	Globe,
	SquareTerminal,
	Puzzle,
};

interface ServiceIconProps {
	iconName: string;
	size?: number;
	className?: string;
}

export default function ServiceIcon({
	iconName,
	size = 28,
	className = "",
}: ServiceIconProps) {
	const IconComponent = iconMap[iconName];
	if (!IconComponent) return null;

	return <IconComponent size={size} className={className} />;
}
