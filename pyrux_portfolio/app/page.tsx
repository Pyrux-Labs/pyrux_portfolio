"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
	const router = useRouter();

	useEffect(() => {
		const saved = localStorage.getItem("pyrux-locale");
		const lang =
			saved === "es" || saved === "en"
				? saved
				: navigator.language.startsWith("es")
					? "es"
					: "en";
		router.replace(`/${lang}`);
	}, [router]);

	return null;
}
