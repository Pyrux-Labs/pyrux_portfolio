// ═══════════════════════════════════════════════
// ImagePreview — fullscreen image viewer
// ═══════════════════════════════════════════════

"use client";

import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cdnFull } from "@/lib/cloudinary";

interface ImagePreviewProps {
    images: string[];
    initialIndex: number;
    alt: string;
    onClose: () => void;
}

export default function ImagePreview({
    images,
    initialIndex,
    alt,
    onClose,
}: ImagePreviewProps) {
    const [index, setIndex] = useState(initialIndex);
    const hasMultiple = images.length > 1;

    const prev = useCallback(
        () => setIndex((i) => (i - 1 + images.length) % images.length),
        [images.length],
    );
    const next = useCallback(
        () => setIndex((i) => (i + 1) % images.length),
        [images.length],
    );

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        },
        [onClose, prev, next],
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
                className="fixed inset-0 z-60 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                {/* Backdrop */}
                <motion.div
                    className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                    onClick={onClose}
                    aria-hidden="true"
                />

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary transition-[border-color,color] duration-200 hover:border-coral hover:text-coral cursor-pointer"
                    aria-label="Cerrar preview"
                >
                    <X size={18} />
                </button>

                {/* Prev button */}
                {hasMultiple && (
                    <button
                        onClick={prev}
                        className="absolute left-4 z-10 w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary transition-[border-color,color] duration-200 hover:border-coral hover:text-coral cursor-pointer"
                        aria-label="Imagen anterior"
                    >
                        <ChevronLeft size={18} />
                    </button>
                )}

                {/* Image */}
                <motion.div
                    key={index}
                    className="relative z-10 max-w-[90vw] max-h-[90vh]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                >
                    <Image
                        src={cdnFull(images[index])}
                        alt={`${alt} ${index + 1}`}
                        width={1920}
                        height={1080}
                        className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-xl border border-border shadow-2xl"
                        priority
                    />
                </motion.div>

                {/* Next button */}
                {hasMultiple && (
                    <button
                        onClick={next}
                        className="absolute right-4 z-10 w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary transition-[border-color,color] duration-200 hover:border-coral hover:text-coral cursor-pointer"
                        aria-label="Imagen siguiente"
                    >
                        <ChevronRight size={18} />
                    </button>
                )}

                {/* Counter */}
                {hasMultiple && (
                    <p className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-xs text-secondary bg-card border border-border rounded-full px-3 py-1">
                        {index + 1} / {images.length}
                    </p>
                )}
            </motion.div>
        </AnimatePresence>
    );
}
