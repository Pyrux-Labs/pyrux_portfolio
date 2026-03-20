// ═══════════════════════════════════════════════
// Componente TechIcon — renderiza iconos de tecnologías
// ═══════════════════════════════════════════════

import {
	SiReact,
	SiNextdotjs,
	SiTypescript,
	SiJavascript,
	SiTailwindcss,
	SiFramer,
	SiHtml5,
	SiCss3,
	SiNodedotjs,
	SiExpress,
	SiPython,
	SiPostgresql,
	SiMongodb,
	SiRedis,
	SiDocker,
	SiGit,
	SiGithub,
	SiLinux,
	SiVercel,
	SiNginx,
	SiStripe,
	SiFigma,
	SiSupabase,
	SiGoogle,
} from "react-icons/si";
import type { IconType } from "react-icons";

// Mapa de nombre de icono a componente
const iconMap: Record<string, IconType> = {
	SiReact,
	SiNextdotjs,
	SiTypescript,
	SiJavascript,
	SiTailwindcss,
	SiFramer,
	SiHtml5,
	SiCss3,
	SiNodedotjs,
	SiExpress,
	SiPython,
	SiPostgresql,
	SiMongodb,
	SiRedis,
	SiDocker,
	SiGit,
	SiGithub,
	SiLinux,
	SiVercel,
	SiNginx,
	SiStripe,
	SiFigma,
	SiSupabase,
	SiGoogle,
};

// Colores de marca para cada icono
const iconColors: Record<string, string> = {
	SiReact: "#61DAFB",
	SiNextdotjs: "var(--text-primary)",
	SiTypescript: "#3178C6",
	SiJavascript: "#F7DF1E",
	SiTailwindcss: "#06B6D4",
	SiFramer: "#0055FF",
	SiHtml5: "#E34F26",
	SiCss3: "#1572B6",
	SiNodedotjs: "#339933",
	SiExpress: "var(--text-primary)",
	SiPython: "#3776AB",
	SiPostgresql: "#4169E1",
	SiMongodb: "#47A248",
	SiRedis: "#DC382D",
	SiDocker: "#2496ED",
	SiGit: "#F05032",
	SiGithub: "var(--text-primary)",
	SiLinux: "#var(--bg-deep)",
	SiVercel: "var(--text-primary)",
	SiNginx: "#009639",
	SiStripe: "#635BFF",
	SiFigma: "#F24E1E",
	SiSupabase: "#3ECF8E",
	SiGoogle: "#4285F4",
};

interface TechIconProps {
	iconName: string;
	size?: number;
	className?: string;
	colored?: boolean;
}

export default function TechIcon({
	iconName,
	size = 20,
	className = "",
	colored = true,
}: TechIconProps) {
	const IconComponent = iconMap[iconName];
	if (!IconComponent) return null;

	return (
		<IconComponent
			size={size}
			className={className}
			style={colored ? { color: iconColors[iconName] } : undefined}
		/>
	);
}
