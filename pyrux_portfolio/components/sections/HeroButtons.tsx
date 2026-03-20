"use client";
import { useState } from "react";
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

interface HeroButtonProps {
	href: string;
	label: string;
	index: number;
}

function HeroButton({ href, label, index }: HeroButtonProps) {
	const [hovered, setHovered] = useState(false);

	return (
		<MotionLink
			href={href}
			className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-coral bg-card-strong no-underline shadow-[0_0_18px_var(--shadow-coral-soft)] transition-shadow duration-300 ease-in-out hover:shadow-[0_0_32px_var(--shadow-coral-mid)]"
			variants={buttonVariants}
			initial="hidden"
			animate="visible"
			custom={index}
			whileHover={{ scale: 1.04 }}
			whileTap={{ scale: 0.97 }}
			transition={{ type: "spring", stiffness: 350, damping: 20 }}
			onHoverStart={() => setHovered(true)}
			onHoverEnd={() => setHovered(false)}>
			<span className="text-[0.95rem] font-medium text-primary">{label}</span>
			<motion.span
				className="text-coral"
				animate={hovered ? { x: 5 } : { x: 0 }}
				transition={{ type: "spring", stiffness: 400, damping: 15 }}>
				→
			</motion.span>
		</MotionLink>
	);
}

export default function HeroButtons() {
	const t = useTranslations("HeroButtons");
	return (
		<section className="mb-14 text-center">
			<div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
				<HeroButton href="#contact" label={t("contact")} index={0} />
				<HeroButton href="/pricing" label={t("pricing")} index={1} />
			</div>
		</section>
	);
}
