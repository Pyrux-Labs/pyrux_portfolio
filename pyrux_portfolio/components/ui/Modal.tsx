// ═══════════════════════════════════════════════
// Componente Modal — base reutilizable
// ═══════════════════════════════════════════════

"use client";

import { useEffect, useCallback, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	title?: string;
}

// Variantes de animación
const overlayVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const modalVariants = {
	hidden: { opacity: 0, scale: 0.95, y: 20 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { type: "spring" as const, damping: 25, stiffness: 300 },
	},
	exit: {
		opacity: 0,
		scale: 0.95,
		y: 20,
		transition: { duration: 0.2 },
	},
};

export default function Modal({
	isOpen,
	onClose,
	children,
	title,
}: ModalProps) {
	// Cerrar con Escape
	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		},
		[onClose],
	);

	useEffect(() => {
		if (isOpen) {
			document.addEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "hidden";
		}
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
		};
	}, [isOpen, handleKeyDown]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="fixed inset-0 z-50 flex items-center justify-center p-4"
					variants={overlayVariants}
					initial="hidden"
					animate="visible"
					exit="hidden">
					{/* Backdrop */}
					<motion.div
						className="absolute inset-0 bg-black/60 backdrop-blur-sm"
						onClick={onClose}
						aria-hidden="true"
					/>

					{/* Contenido del modal */}
					<motion.div
						className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-2xl"
						variants={modalVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						role="dialog"
						aria-modal="true"
						aria-label={title}>
						{/* Botón cerrar */}
						<button
							onClick={onClose}
							className="absolute top-4 right-4 w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary transition-all duration-200 hover:border-coral hover:text-coral cursor-pointer"
							aria-label="Cerrar modal">
							<X size={18} />
						</button>

						{title && (
							<h3 className="font-display text-xl font-bold text-primary mb-4 pr-10">
								{title}
							</h3>
						)}

						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
