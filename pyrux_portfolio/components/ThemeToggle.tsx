"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
	const [theme, setTheme] = useState<"dark" | "light">("dark");

	useEffect(() => {
		const saved = localStorage.getItem("oc-theme");
		const initial = saved === "light" || saved === "dark" ? saved : "dark";
		setTheme(initial);
		document.documentElement.dataset.theme = initial;
		document.documentElement.style.colorScheme = initial;
	}, []);

	const toggle = () => {
		const next = theme === "dark" ? "light" : "dark";
		setTheme(next);
		document.documentElement.dataset.theme = next;
		document.documentElement.style.colorScheme = next;
		localStorage.setItem("oc-theme", next);
	};

	return (
		<button
			className="theme-toggle"
			type="button"
			onClick={toggle}
			aria-label={
				theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
			}
			title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
			<span className="theme-toggle-icon" aria-hidden="true">
				{theme === "dark" ? "☀" : "☾"}
			</span>
		</button>
	);
}
