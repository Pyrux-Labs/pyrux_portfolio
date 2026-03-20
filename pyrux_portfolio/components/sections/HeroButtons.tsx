"use client";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const MotionLink = motion.create(Link);

const buttonVariants = {
	hidden: { opacity: 0, y: 15 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.5 + i * 0.1,
			duration: 0.5,
			ease: "easeOut" as const,
		},
	}),
};

const arrowVariants = {
	rest: { x: 0 },
	hovered: {
		x: 5,
		transition: { type: "spring" as const, stiffness: 400, damping: 15 },
	},
};

export default function HeroButtons() {
	const t = useTranslations("HeroButtons");
	return (
		<section className="mb-14 text-center">
			<div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
				<MotionLink
					href="#contact"
					className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-coral bg-card-strong no-underline shadow-[0_0_18px_var(--shadow-coral-soft)] transition-shadow duration-300 ease-in-out hover:shadow-[0_0_32px_var(--shadow-coral-mid)]"
					variants={buttonVariants}
					initial="hidden"
					animate="visible"
					custom={0}
					whileHover="hovered"
					whileTap={{ scale: 0.97 }}>
					<span className="text-[0.95rem] font-medium text-primary">
						{t("contact")}
					</span>
					<motion.span
						className="text-coral"
						variants={arrowVariants}
						initial="rest">
						→
					</motion.span>
				</MotionLink>
				<MotionLink
					href="/pricing"
					className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-coral bg-card-strong no-underline shadow-[0_0_18px_var(--shadow-coral-soft)] transition-shadow duration-300 ease-in-out hover:shadow-[0_0_32px_var(--shadow-coral-mid)]"
					variants={buttonVariants}
					initial="hidden"
					animate="visible"
					custom={1}
					whileHover="hovered"
					whileTap={{ scale: 0.97 }}>
					<span className="text-[0.95rem] font-medium text-primary">{t("pricing")}</span>
					<motion.span
						className="text-coral"
						variants={arrowVariants}
						initial="rest">
						→
					</motion.span>
				</MotionLink>
			</div>
		</section>
	);
}
