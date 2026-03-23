"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 300);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<AnimatePresence>
			{visible && (
				<motion.button
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 12 }}
					transition={{ duration: 0.22, ease: "easeOut" }}
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					aria-label="Volver al inicio"
					className="fixed top-6 left-0 right-0 mx-auto min-[481px]:top-auto min-[481px]:bottom-6 min-[481px]:left-auto min-[481px]:right-6 min-[481px]:mx-0 z-50 w-10 h-10 rounded-full flex items-center justify-center bg-elevated border border-border-accent text-coral hover:text-coral-bright hover:border-coral transition-colors duration-200 cursor-pointer">
					<ChevronUp size={18} strokeWidth={2} />
				</motion.button>
			)}
		</AnimatePresence>
	);
}
