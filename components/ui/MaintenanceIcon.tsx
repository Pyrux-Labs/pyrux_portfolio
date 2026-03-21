// ═══════════════════════════════════════════════
// Componente MaintenanceIcon — renderiza iconos de mantenimiento
// ═══════════════════════════════════════════════

import {
	Wrench,
	Pencil,
	SatelliteDish,
	HardDrive,
	Server,
	Shield,
	Clock,
	RefreshCw,
	HeadphonesIcon,
	BarChart2,
} from "lucide-react";

// Mapa de nombre de icono a componente
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
	Server,
	SatelliteDish,
	HardDrive,
	Pencil,
	Shield,
	Clock,
	RefreshCw,
	BarChart2,
	HeadphonesIcon,
	Wrench,
};

interface MaintenanceIconProps {
	iconName: string;
	size?: number;
	className?: string;
}

export default function MaintenanceIcon({
	iconName,
	size = 28,
	className = "",
}: MaintenanceIconProps) {
	const IconComponent = iconMap[iconName];
	if (!IconComponent) return null;

	return <IconComponent size={size} className={className} />;
}
