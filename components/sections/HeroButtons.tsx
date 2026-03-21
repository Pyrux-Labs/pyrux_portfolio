"use client";
import { motion } from "framer-motion";
import { MessageCircle, Tag } from "lucide-react";
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

export default function HeroButtons() {
	const t = useTranslations("HeroButtons");
	return (
		<section className="mb-14 text-center">
			<div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
				{/* Primary CTA — relleno coral */}
				<MotionLink
					href="#contact"
					onClick={(e) => {
						e.preventDefault();
						document
							.getElementById("contact")
							?.scrollIntoView({ behavior: "smooth" });
					}}
					className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#a84510] text-white no-underline font-semibold text-[1rem] shadow-[0_0_24px_var(--shadow-coral-mid)] transition-shadow duration-150 ease-in-out hover:shadow-[0_0_40px_var(--shadow-coral-strong,var(--shadow-coral-mid))]"
					variants={buttonVariants}
					initial="hidden"
					animate="visible"
					custom={0}
					whileHover={{ scale: 1.04 }}
					whileTap={{ scale: 0.97 }}
					transition={{ type: "spring", stiffness: 500, damping: 20 }}>
					{t("contact")}
					<MessageCircle size={17} strokeWidth={2} />
				</MotionLink>

				{/* Secondary CTA — outline coral */}
				<MotionLink
					href="/pricing"
					className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-coral bg-transparent text-coral no-underline font-semibold text-[1rem] transition-shadow duration-150 ease-in-out hover:shadow-[0_0_24px_var(--shadow-coral-mid)]"
					variants={buttonVariants}
					initial="hidden"
					animate="visible"
					custom={1}
					whileHover={{ scale: 1.04 }}
					whileTap={{ scale: 0.97 }}
					transition={{ type: "spring", stiffness: 500, damping: 20 }}>
					{t("pricing")}
					<Tag size={17} strokeWidth={2} />
				</MotionLink>
			</div>
		</section>
	);
}
