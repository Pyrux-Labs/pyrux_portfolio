// ═══════════════════════════════════════════════
// CreatorPreview — compact fullscreen photo viewer
// ═══════════════════════════════════════════════

"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { cdnFull } from "@/lib/cloudinary";

interface CreatorPreviewProps {
	publicId: string;
	alt: string;
	onClose: () => void;
}

export default function CreatorPreview({ publicId, alt, onClose }: CreatorPreviewProps) {
	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		},
		[onClose],
	);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
		};
	}, [handleKeyDown]);

	return (
		<AnimatePresence>
			<motion.div
				className="fixed inset-0 z-[60] flex items-center justify-center p-8"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.2 }}>
				{/* Backdrop */}
				<motion.div
					className="absolute inset-0 bg-black/80 backdrop-blur-sm"
					onClick={onClose}
					aria-hidden="true"
				/>

				{/* Close button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 z-10 w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary transition-[border-color,color] duration-200 hover:border-coral hover:text-coral cursor-pointer"
					aria-label="Cerrar preview">
					<X size={18} />
				</button>

				{/* Image */}
				<motion.div
					className="relative z-10"
					initial={{ opacity: 0, scale: 0.92 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.92 }}
					transition={{ type: "spring", damping: 25, stiffness: 300 }}>
					<Image
						src={cdnFull(publicId)}
						alt={alt}
						width={480}
						height={480}
						className="max-w-[80vw] max-h-[80vh] w-auto h-auto object-contain rounded-2xl border border-border shadow-2xl"
						priority
					/>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}
