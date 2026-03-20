// ═══════════════════════════════════════════════
// Contact us section — social links with copy email
// ═══════════════════════════════════════════════

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "@/i18n/locale-provider";
import { toast } from "sonner";
import Section from "@/components/ui/Section";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { CONTACT_EMAIL, contactItems } from "@/data/contacts";
import ContactIcon from "@/components/ui/ContactIcon";
import type { ContactItem } from "@/types";

// Animation variants
const gridVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: "easeOut" as const },
	},
};

export default function ContactUs() {
	const t = useTranslations("ContactUs");
	const { locale } = useLocale();
	const { copy } = useCopyToClipboard();
	const localeContactItems = contactItems[locale];
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, amount: 0 });

	const handleClick = async (item: ContactItem) => {
		if (item.action === "copy-email") {
			await copy(CONTACT_EMAIL);
			toast.success(t("toastSuccess"), {
				description: CONTACT_EMAIL,
				duration: 2500,
			});
		}
	};

	return (
		<Section id="contact" title={t("sectionTitle")}>
			<motion.div
				ref={ref}
				className="grid grid-cols-1 min-[401px]:grid-cols-2 sm:grid-cols-4 gap-4"
				variants={gridVariants}
				initial="hidden"
				animate={inView ? "visible" : "hidden"}>
				{localeContactItems.map((item) => {
					const isLink = !!item.href;
					const Component = isLink ? "a" : "button";
					const extraProps = isLink
						? {
								href: item.href,
								target: "_blank" as const,
								rel: "noopener noreferrer",
							}
						: { type: "button" as const };

					return (
						<motion.div key={item.label} variants={cardVariants} whileHover={{ y: -6 }} whileTap={{ y: -4 }}>
							<Component
								{...extraProps}
								onClick={() => handleClick(item)}
								className="group w-full flex flex-col items-center gap-2 py-6 px-4 max-[480px]:py-5 max-[480px]:px-3 rounded-2xl border border-border bg-card backdrop-blur-xl no-underline text-primary transition-[border-color,box-shadow] duration-200 ease-in-out cursor-pointer hover:border-(--cta-border) hover:shadow-[0_12px_40px_var(--cta-shadow)]"
								style={
									{
										"--cta-border": item.hoverBorder,
										"--cta-shadow": item.hoverShadow,
										"--cta-icon": item.hoverIcon,
									} as React.CSSProperties
								}
								aria-label={item.label}>
								<div className="w-7 h-7 text-coral transition-transform duration-200 ease-in-out group-hover:scale-110 group-hover:text-(--cta-icon) flex items-center justify-center">
									<ContactIcon iconName={item.icon} />
								</div>
								<span className="font-display font-semibold text-base max-[480px]:text-[0.9rem]">
									{item.label}
								</span>
								<span className="text-[0.8rem] text-muted">
									{item.sublabel}
								</span>
							</Component>
						</motion.div>
					);
				})}
			</motion.div>
		</Section>
	);
}
