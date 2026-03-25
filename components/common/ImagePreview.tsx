// ═══════════════════════════════════════════════
// ImagePreview — fullscreen image viewer
// ═══════════════════════════════════════════════

"use client";

import { useEffect, useCallback, useState, useRef } from "react";
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

function dist(t: { clientX: number; clientY: number }, u: { clientX: number; clientY: number }) {
    return Math.hypot(t.clientX - u.clientX, t.clientY - u.clientY);
}

export default function ImagePreview({
    images,
    initialIndex,
    alt,
    onClose,
}: ImagePreviewProps) {
    const [index, setIndex] = useState(initialIndex);
    const hasMultiple = images.length > 1;

    // ── zoom / pan state ──────────────────────
    const [scale, setScale] = useState(1);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const scaleRef = useRef(1);
    const offsetRef = useRef({ x: 0, y: 0 });
    const pinchStartDist = useRef<number | null>(null);
    const pinchStartScale = useRef(1);
    const panStart = useRef<{ x: number; y: number } | null>(null);
    const panStartOffset = useRef({ x: 0, y: 0 });
    const lastTap = useRef(0);
    const imageWrapRef = useRef<HTMLDivElement>(null);

    const resetZoom = useCallback(() => {
        scaleRef.current = 1;
        offsetRef.current = { x: 0, y: 0 };
        setScale(1);
        setOffset({ x: 0, y: 0 });
    }, []);

    // reset zoom when image changes
    useEffect(() => { resetZoom(); }, [index, resetZoom]);

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

    // ── touch handlers ────────────────────────
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        if (e.touches.length === 2) {
            pinchStartDist.current = dist(e.touches[0], e.touches[1]);
            pinchStartScale.current = scaleRef.current;
            panStart.current = null;
        } else if (e.touches.length === 1) {
            const now = Date.now();
            if (now - lastTap.current < 300) {
                resetZoom();
                lastTap.current = 0;
                return;
            }
            lastTap.current = now;
            if (scaleRef.current > 1) {
                panStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
                panStartOffset.current = { ...offsetRef.current };
            }
        }
    }, [resetZoom]);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        e.preventDefault();
        if (e.touches.length === 2 && pinchStartDist.current !== null) {
            const newDist = dist(e.touches[0], e.touches[1]);
            const newScale = Math.min(4, Math.max(1, pinchStartScale.current * (newDist / pinchStartDist.current)));
            scaleRef.current = newScale;
            if (newScale === 1) offsetRef.current = { x: 0, y: 0 };
            setScale(newScale);
            setOffset({ ...offsetRef.current });
        } else if (e.touches.length === 1 && panStart.current && scaleRef.current > 1) {
            const dx = e.touches[0].clientX - panStart.current.x;
            const dy = e.touches[0].clientY - panStart.current.y;
            offsetRef.current = {
                x: panStartOffset.current.x + dx,
                y: panStartOffset.current.y + dy,
            };
            setOffset({ ...offsetRef.current });
        }
    }, []);

    const handleTouchEnd = useCallback(() => {
        pinchStartDist.current = null;
        panStart.current = null;
        if (scaleRef.current <= 1) resetZoom();
    }, [resetZoom]);

    // passive:false so preventDefault() works
    useEffect(() => {
        const el = imageWrapRef.current;
        if (!el) return;
        el.addEventListener("touchmove", handleTouchMove, { passive: false });
        return () => el.removeEventListener("touchmove", handleTouchMove);
    }, [handleTouchMove]);

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

                {/* Close button — static, always on top */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary transition-[border-color,color] duration-200 hover:border-coral hover:text-coral cursor-pointer"
                    aria-label="Cerrar preview"
                >
                    <X size={18} />
                </button>

                {/* Prev button — static */}
                {hasMultiple && (
                    <button
                        onClick={prev}
                        className="absolute left-4 z-10 w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary transition-[border-color,color] duration-200 hover:border-coral hover:text-coral cursor-pointer"
                        aria-label="Imagen anterior"
                    >
                        <ChevronLeft size={18} />
                    </button>
                )}

                {/* Image container — entry animation only, no zoom transform here */}
                <motion.div
                    key={index}
                    className="relative z-10 max-w-[90vw] max-h-[90vh] overflow-hidden rounded-xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                >
                    {/* Inner wrapper — zoom/pan transform applied here */}
                    <div
                        ref={imageWrapRef}
                        className="touch-none select-none"
                        style={{
                            transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
                            transformOrigin: "center",
                            cursor: scale > 1 ? "grab" : "default",
                            willChange: "transform",
                        }}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <Image
                            src={cdnFull(images[index])}
                            alt={`${alt} ${index + 1}`}
                            width={1920}
                            height={1080}
                            className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain border border-border shadow-2xl pointer-events-none"
                            priority
                            draggable={false}
                        />
                    </div>
                </motion.div>

                {/* Next button — static */}
                {hasMultiple && (
                    <button
                        onClick={next}
                        className="absolute right-4 z-10 w-9 h-9 grid place-items-center rounded-full border border-border bg-card text-secondary transition-[border-color,color] duration-200 hover:border-coral hover:text-coral cursor-pointer"
                        aria-label="Imagen siguiente"
                    >
                        <ChevronRight size={18} />
                    </button>
                )}

                {/* Counter — static */}
                {hasMultiple && (
                    <p className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-xs text-secondary bg-card border border-border rounded-full px-3 py-1">
                        {index + 1} / {images.length}
                    </p>
                )}
            </motion.div>
        </AnimatePresence>
    );
}
