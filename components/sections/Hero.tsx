"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

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
	const t = useTranslations("Hero");
	return (
		<motion.section
			aria-label="Hero"
			className="mb-14"
			variants={containerVariants}
			initial="hidden"
			animate="visible">
			<div className="flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between sm:gap-8">
				<div className="flex-1 text-center sm:text-left">
					<motion.h1
						className="font-display text-[clamp(2.8rem,8vw,6rem)] font-bold leading-none mb-4"
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
					<p className="font-display text-[1.1rem] font-medium text-coral tracking-[0.15em] uppercase mb-5">
						{t("subtitle")}
					</p>
					<motion.p
						className="text-[1rem] sm:text-[1.1rem] text-secondary max-w-120 leading-[1.7] mx-auto sm:mx-0"
						variants={textVariants}>
						{t("description")}
					</motion.p>
				</div>
				<motion.div
					className="shrink-0 w-48 h-48 sm:w-64 sm:h-64 "
					variants={iconVariants}
					whileHover={{ scale: 1.1 }}>
					<svg
						viewBox="0 0 768 768"
						className="w-full h-full animate-float transition-all duration-30 hover:animate-gradient-shift"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true">
						<path
							d="M 384,84 A 300,300 0 0 0 84,384 300,300 0 0 0 384,684 300,300 0 0 0 593.6568,598.57868 l 35.70034,45.54406 h 27.0368 L 608.37223,583.14343 A 300,300 0 0 0 684,384 300,300 0 0 0 636.6144,222.1808 l 16.89171,-21.55411 h -26.75223 l -2.70365,3.44028 A 300,300 0 0 0 384,84 Z m 0,25.714291 a 274.28571,274.28571 0 0 1 223.5268,115.32925 l -44.83263,56.93634 -97.24052,122.72046 -28.04125,-35.20651 c 1.70725,-8.3744 2.56137,-17.09246 2.56137,-26.15789 0,-18.72 -3.64354,-35.8788 -10.92354,-51.4788 -7.10669,-15.77331 -17.33132,-28.77165 -30.678,-38.99834 -13.17332,-10.4 -28.77303,-16.98954 -46.79972,-19.76286 -4.68,-0.86668 -8.92663,-1.38377 -12.73994,-1.55691 -3.81332,-0.34686 -7.54303,-0.51886 -11.18303,-0.51886 H 189.85377 V 577.75291 A 274.28571,274.28571 0 0 1 109.71428,384 274.28571,274.28571 0 0 1 384,109.71429 Z M 619.71428,243.73491 A 274.28571,274.28571 0 0 1 658.28571,384 274.28571,274.28571 0 0 1 592.1836,562.58537 L 477.93417,421.39114 589.73103,281.97988 Z m -408.02177,9.12389 h 115.95703 c 2.94669,0 6.41789,0.172 10.40457,0.51886 4.16,0.17314 8.32046,0.69023 12.48046,1.55691 14.38668,2.77332 26.42891,8.49292 36.1356,17.1596 9.88,8.66669 17.33103,19.24434 22.35771,31.72434 5.02669,12.30669 7.54189,25.47732 7.54189,39.51732 l -48.8756,-61.35606 h -27.0452 l 72.22937,89.69029 c -1.05571,3.88531 -2.34211,7.70605 -3.85046,11.45091 -5.02668,12.30669 -12.47771,22.78977 -22.35771,31.45646 -9.70669,8.66668 -21.74892,14.38628 -36.1356,17.1596 -4.16,0.69331 -8.32046,1.21005 -12.48046,1.55691 -3.98668,0.34686 -7.45788,0.52743 -10.40457,0.52743 H 211.69251 Z m 218.31194,140.08931 22.44978,27.86549 -114.40012,141.96428 h 27.55583 l 99.84371,-125.84262 99.3164,125.84262 h 0.81195 l 12.10383,15.43526 A 274.28571,274.28571 0 0 1 384,658.28571 274.28571,274.28571 0 0 1 211.69251,597.4068 V 455.66017 h 115.95703 c 3.64,0 7.36971,-0.172 11.18303,-0.51886 3.81331,-0.34685 8.05994,-0.87194 12.73994,-1.56525 18.02669,-2.77332 33.6264,-9.26829 46.79972,-19.49498 13.34668,-10.4 23.57131,-23.40668 30.678,-39.00668 0.32628,-0.70726 0.64245,-1.41297 0.95422,-2.12612 z"
							style={{
								fill: "url(#logoGradient)",
								stroke: "url(#logoGradient)",
								strokeWidth: 8,
								strokeLinejoin: "round",
								strokeLinecap: "round",
							}}
						/>
						<defs>
							<linearGradient
								id="logoGradient"
								x1="0%"
								y1="0%"
								x2="100%"
								y2="100%">
								<stop offset="0%" stopColor="var(--hero-title-start)" />
								<stop offset="52%" stopColor="var(--coral-bright)" />
								<stop offset="100%" stopColor="var(--hero-title-end)" />
							</linearGradient>
						</defs>
					</svg>
				</motion.div>
			</div>
		</motion.section>
	);
}
