const integrations = [
	{
		name: "React",
		color: "#61DAFB",
		icon: <circle cx="12" cy="12" r="10" />,
		isStroke: true,
	},
	{
		name: "Next.js",
		color: "#FFFFFF",
		icon: <path d="M4 4h16v16H4z" />,
	},
	{
		name: "Node.js",
		color: "#68A063",
		icon: <path d="M12 2l8 4v12l-8 4-8-4V6z" />,
	},
	{
		name: "Express",
		color: "#FFFFFF",
		icon: <line x1="4" x2="20" y1="12" y2="12" />,
		isStroke: true,
	},
	{
		name: "PostgreSQL",
		color: "#336791",
		icon: <ellipse cx="12" cy="8" rx="7" ry="3" />,
		isStroke: true,
	},
	{
		name: "Docker",
		color: "#2496ED",
		icon: <rect x="4" y="10" width="16" height="8" rx="2" />,
	},
	{
		name: "Tailwind CSS",
		color: "#38BDF8",
		icon: <path d="M4 14c2-4 6-4 8 0s6 4 8 0" />,
		isStroke: true,
	},
	{
		name: "JavaScript",
		color: "#F7DF1E",
		icon: <rect x="4" y="4" width="16" height="16" rx="2" />,
	},
	{
		name: "Git",
		color: "#F05032",
		icon: <circle cx="12" cy="12" r="10" />,
		isStroke: true,
	},
	{
		name: "Linux",
		color: "#FCC624",
		icon: <path d="M12 2a5 5 0 0 1 5 5v5a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" />,
	},
];

export default function OurStack() {
	return (
		<section className="mb-14 animate-fade-in-up [animation-delay:0.6s]">
			<h2 className="font-display text-[1.4rem] font-semibold mb-5 flex items-center gap-2.5">
				<span className="text-coral font-bold">⟩</span> Nuestro Stack
			</h2>
			<div className="flex flex-wrap gap-2.5 justify-center mb-4">
				{integrations.map((item) => (
					<span
						key={item.name}
						className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[20px] border border-border bg-card backdrop-blur-sm text-[0.85rem] text-secondary transition-all duration-250 ease-in-out cursor-default hover:border-coral hover:-translate-y-1 hover:shadow-[0_8px_24px_var(--shadow-coral-soft)]">
						<svg
							viewBox="0 0 24 24"
							className="w-4 h-4 shrink-0 transition-all duration-200 ease-in-out"
							fill={item.isStroke ? "none" : item.color}
							stroke={item.isStroke ? item.color : undefined}
							strokeWidth={item.isStroke ? "2" : undefined}
							strokeLinecap={item.isStroke ? "round" : undefined}
							strokeLinejoin={item.isStroke ? "round" : undefined}
							xmlns="http://www.w3.org/2000/svg">
							{item.icon}
						</svg>
						<span>{item.name}</span>
					</span>
				))}
			</div>
		</section>
	);
}
