"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
	// Lazy initializer reads localStorage on the client; returns "dark" during SSR.
	// suppressHydrationWarning on button + span handles the server/client mismatch.
	const [theme, setTheme] = useState<"dark" | "light">(() => {
		if (typeof window === "undefined") return "light";
		const saved = localStorage.getItem("oc-theme");
		return saved === "light" || saved === "dark" ? saved : "light";
	});

	useEffect(() => {
		// Sync DOM in case the anti-FOUC script set a different value
		if (document.documentElement.dataset.theme !== theme) {
			document.documentElement.dataset.theme = theme;
			document.documentElement.style.colorScheme = theme;
		}
	}, [theme]);

	const toggle = () => {
		setTheme((prev) => {
			const next = prev === "dark" ? "light" : "dark";
			document.documentElement.dataset.theme = next;
			document.documentElement.style.colorScheme = next;
			localStorage.setItem("oc-theme", next);
			return next;
		});
	};

	return (
		<button
			className="group w-9 h-9 sm:w-10 sm:h-10 grid place-items-center p-0 rounded-full border border-border bg-card-strong cursor-pointer backdrop-blur-[10px] transition-all duration-200 ease-in-out hover:border-border-accent hover:-translate-y-px hover:shadow-[0_10px_24px_var(--shadow-coral-soft)] focus-visible:outline-2 focus-visible:outline-cyan focus-visible:outline-offset-2"
			type="button"
			onClick={toggle}
			suppressHydrationWarning
			aria-label={
				theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
			}
			title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
			<span
				suppressHydrationWarning
				className="text-[1.05rem] leading-none text-secondary transition-[transform,color] duration-200 ease-in-out group-hover:text-primary group-hover:rotate-10 group-hover:scale-[1.04]"
				aria-hidden="true">
				{theme === "dark" ? "☀" : "☾"}
			</span>
		</button>
	);
}
