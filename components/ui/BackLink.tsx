"use client";

import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function BackLink() {
	const t = useTranslations("Navigation");
	const router = useRouter();
	return (
		<button
			onClick={() => router.back()}
			className="inline-flex items-center gap-2 text-[0.9rem] text-coral mb-4 hover:text-gold cursor-pointer bg-transparent border-none p-0">
			<ArrowLeft size={16} />
			{t("backToHome")}
		</button>
	);
}
