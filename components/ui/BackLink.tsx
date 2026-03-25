"use client";

import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function BackLink() {
	const t = useTranslations("Navigation");
	return (
		<Link href="/" className="inline-flex items-center gap-2 text-[0.9rem] text-coral no-underline mb-4 hover:text-gold">
			<ArrowLeft size={16} />
			{t("backToHome")}
		</Link>
	);
}
