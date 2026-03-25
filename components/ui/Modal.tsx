// ═══════════════════════════════════════════════
// Modal — base modal component
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
	bottomSheet?: boolean;
	closeLabel?: string;
}

// Animation variants
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

const sheetVariants = {
	hidden: { y: "100%" },
	visible: {
		y: 0,
		transition: { type: "spring" as const, damping: 30, stiffness: 300 },
	},
	exit: {
		y: "100%",
		transition: { duration: 0.25, ease: "easeIn" as const },
	},
};

export default function Modal({
	isOpen,
	onClose,
	children,
	title,
	bottomSheet = true,
	closeLabel = "Cerrar modal",
}: ModalProps) {
	// Close with Escape
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
			document.documentElement.style.overflow = "hidden";
		}
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
			document.documentElement.style.overflow = "";
		};
	}, [isOpen, handleKeyDown]);

	return (
		<AnimatePresence mode="wait">
			{isOpen && (
				<motion.div
					className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4"
					variants={overlayVariants}
					initial="hidden"
					animate="visible"
					exit="hidden">
					{/* Backdrop */}
					<motion.div
						className="absolute inset-0 bg-black/60 backdrop-blur-sm"
						onClick={onClose}
						aria-hidden="true"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
					/>

					{/* Modal content*/}
					<motion.div
						className={
							bottomSheet
								? "relative w-full max-h-[90vh] overflow-y-auto bg-surface p-5 shadow-2xl rounded-t-2xl sm:rounded-2xl sm:max-w-2xl sm:max-h-[85vh] sm:border sm:border-border sm:p-8 2xl:max-w-4xl"
								: "relative w-full h-full overflow-y-auto bg-surface p-5 shadow-2xl sm:h-auto sm:max-w-2xl sm:max-h-[85vh] sm:rounded-2xl sm:border sm:border-border sm:p-8 2xl:max-w-4xl"
						}
						variants={bottomSheet ? sheetVariants : modalVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						role="dialog"
						aria-modal="true"
						aria-label={title}>
						{/* Handle bar — solo visible en mobile con bottomSheet */}
						{bottomSheet && (
							<div className="flex justify-center mb-4 sm:hidden">
								<div className="w-10 h-1 rounded-full bg-border" />
							</div>
						)}
						{/* Close button */}
						<button
							onClick={onClose}
							className="absolute top-4 right-4 w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary transition-[border-color] duration-200 hover:border-coral hover:text-coral cursor-pointer"
							aria-label={closeLabel}>
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
