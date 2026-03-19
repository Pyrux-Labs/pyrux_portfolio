"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Toaster } from "sonner";

export default function WhatsAppFAB() {
	return (
		<>
			<Toaster
				position="bottom-center"
				toastOptions={{
					style: {
						background: "var(--bg-elevated)",
						color: "var(--text-primary)",
						border: "1px solid var(--border-subtle)",
					},
				}}
			/>
			<motion.a
				href="https://wa.me/5493416941225"
				target="_blank"
				rel="noopener noreferrer"
				className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] text-white grid place-items-center shadow-[0_4px_20px_var(--whatsapp-shadow)] cursor-pointer"
				whileHover={{ scale: 1.08 }}
				whileTap={{ scale: 0.95 }}
				aria-label="Contactar por WhatsApp">
				<FaWhatsapp size={28} />
			</motion.a>
		</>
	);
}
