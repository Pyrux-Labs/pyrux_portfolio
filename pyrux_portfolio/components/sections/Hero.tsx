"use client";

import { motion } from "framer-motion";

// Variantes de animación para el Hero
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.15, delayChildren: 0.1 },
	},
};

const textVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" as const },
	},
};

const iconVariants = {
	hidden: { opacity: 0, scale: 0.5, rotate: -15 },
	visible: {
		opacity: 1,
		scale: 1,
		rotate: 0,
		transition: { type: "spring" as const, damping: 12, stiffness: 100 },
	},
};

export default function Hero() {
	return (
		<motion.header
			className="mb-14"
			variants={containerVariants}
			initial="hidden"
			animate="visible">
			<div className="flex items-center justify-between gap-8">
				<div className="flex-1 text-left">
					<motion.h1
						className="font-display text-[clamp(5rem,10vw,6rem)] font-bold leading-none mb-3"
						variants={textVariants}>
						<span
							className="bg-clip-text text-transparent animate-gradient-shift"
							style={{
								backgroundImage:
									"linear-gradient(135deg, var(--hero-title-start) 0%, var(--coral-bright) 52%, var(--hero-title-end) 100%)",
								backgroundSize: "200% 200%",
							}}>
							Pyrux
						</span>
					</motion.h1>
					<motion.p
						className="font-display text-[1.1rem] font-medium text-coral tracking-[0.15em] uppercase mb-5"
						variants={textVariants}>
						Desarrollo web y soluciones digitales.
					</motion.p>
					<motion.p
						className="text-[1.1rem] text-secondary max-w-120 leading-[1.7]"
						variants={textVariants}>
						Creamos páginas web modernas y sistemas a medida para llevar tu
						negocio al siguiente nivel.
					</motion.p>
				</div>
				<motion.div
					className="group w-20 h-20 min-[481px]:w-25 min-[481px]:h-25 animate-float cursor-pointer shrink-0"
					variants={iconVariants}
					whileHover={{ scale: 1.12, animationPlayState: "paused" }}
					aria-hidden="true">
					<svg
						viewBox="0 0 120 120"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="w-full h-full drop-shadow-[0_0_20px_var(--logo-glow)] transition-[filter] duration-300 ease-in-out group-hover:drop-shadow-[0_0_30px_var(--logo-glow-hover)]">
						{/* Lobster Body */}
						<path
							d="M60 10 C30 10 15 35 15 55 C15 75 30 95 45 100 L45 110 L55 110 L55 100 C55 100 60 102 65 100 L65 110 L75 110 L75 100 C90 95 105 75 105 55 C105 35 90 10 60 10Z"
							fill="url(#lobster-gradient)"
						/>
						{/* Left Claw */}
						<path
							d="M20 45 C5 40 0 50 5 60 C10 70 20 65 25 55 C28 48 25 45 20 45Z"
							fill="url(#lobster-gradient)"
							className="origin-right animate-claw-snap"
						/>
						{/* Right Claw */}
						<path
							d="M100 45 C115 40 120 50 115 60 C110 70 100 65 95 55 C92 48 95 45 100 45Z"
							fill="url(#lobster-gradient)"
							className="origin-left animate-claw-snap"
							style={{ animationDelay: "0.2s" }}
						/>
						{/* Antenna */}
						<path
							d="M45 15 Q35 5 30 8"
							stroke="var(--coral-bright)"
							strokeWidth="2"
							strokeLinecap="round"
							className="origin-center animate-wiggle"
						/>
						<path
							d="M75 15 Q85 5 90 8"
							stroke="var(--coral-bright)"
							strokeWidth="2"
							strokeLinecap="round"
							className="origin-center animate-wiggle"
						/>
						{/* Eyes */}
						<circle cx="45" cy="35" r="6" fill="var(--bg-deep)" />
						<circle cx="75" cy="35" r="6" fill="var(--bg-deep)" />
						<circle
							cx="46"
							cy="34"
							r="2"
							fill="var(--cyan-bright)"
							className="animate-blink"
						/>
						<circle
							cx="76"
							cy="34"
							r="2"
							fill="var(--cyan-bright)"
							className="animate-blink"
						/>
						<defs>
							<linearGradient
								id="lobster-gradient"
								x1="0%"
								y1="0%"
								x2="100%"
								y2="100%">
								<stop offset="0%" stopColor="var(--logo-gradient-start)" />
								<stop offset="100%" stopColor="var(--logo-gradient-end)" />
							</linearGradient>
						</defs>
					</svg>
				</motion.div>
			</div>
		</motion.header>
	);
}
