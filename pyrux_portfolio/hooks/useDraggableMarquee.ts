import { useRef, useEffect, useCallback } from "react";

interface Options {
	speed?: number; // px per second
	direction?: "left" | "right";
}

/**
 * Drives an infinite-marquee div with JS (replaces CSS animation) so that
 * the user can drag/swipe to pan it in both desktop and mobile.
 *
 * Usage:
 *   const m = useDraggableMarquee({ speed: 80, direction: "left" });
 *   <div ref={m.innerRef} className="flex w-max cursor-grab select-none" {...m.dragProps}>
 *     {duplicatedCards}
 *   </div>
 *
 * The inner div must have duplicated content (2× or more) so that when the
 * position wraps at -50% (left) or 0% (right) it looks seamless.
 */
export function useDraggableMarquee({ speed = 80, direction = "left" }: Options = {}) {
	const innerRef = useRef<HTMLDivElement>(null);
	const posRef = useRef(0);
	const isHoveredRef = useRef(false);
	const isDraggingRef = useRef(false);
	const hasDraggedRef = useRef(false);
	const dragStartXRef = useRef(0);
	const dragStartPosRef = useRef(0);
	const rafRef = useRef<number | undefined>(undefined);
	const lastTimeRef = useRef<number | undefined>(undefined);
	const initializedRef = useRef(false);

	const getHalfWidth = () =>
		innerRef.current ? innerRef.current.scrollWidth / 2 : 0;

	const applyTransform = (x: number) => {
		if (innerRef.current) innerRef.current.style.transform = `translateX(${x}px)`;
	};

	const normalize = useCallback(
		(pos: number) => {
			const half = getHalfWidth();
			if (!half) return pos;
			if (direction === "left") {
				if (pos < -half) return pos + half;
				if (pos > 0) return pos - half;
			} else {
				if (pos > 0) return pos - half;
				if (pos < -half) return pos + half;
			}
			return pos;
		},
		[direction],
	);

	const animate = useCallback(
		(time: number) => {
			if (!initializedRef.current && innerRef.current) {
				posRef.current = direction === "right" ? -getHalfWidth() : 0;
				initializedRef.current = true;
			}
			if (!lastTimeRef.current) lastTimeRef.current = time;
			// Cap delta to avoid large jumps after tab focus
			const delta = Math.min(time - lastTimeRef.current, 50);
			lastTimeRef.current = time;

			if (!isHoveredRef.current && !isDraggingRef.current) {
				const move = (speed / 1000) * delta;
				posRef.current = normalize(
					posRef.current + (direction === "left" ? -move : move),
				);
				applyTransform(posRef.current);
			}

			rafRef.current = requestAnimationFrame(animate);
		},
		[speed, direction, normalize],
	);

	useEffect(() => {
		rafRef.current = requestAnimationFrame(animate);
		return () => {
			if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
		};
	}, [animate]);

	const onPointerDown = useCallback(
		(e: React.PointerEvent<HTMLDivElement>) => {
			isDraggingRef.current = true;
			hasDraggedRef.current = false;
			dragStartXRef.current = e.clientX;
			dragStartPosRef.current = posRef.current;
			e.currentTarget.setPointerCapture(e.pointerId);
			if (innerRef.current) innerRef.current.style.cursor = "grabbing";
		},
		[],
	);

	const onPointerMove = useCallback(
		(e: React.PointerEvent<HTMLDivElement>) => {
			if (!isDraggingRef.current) return;
			const delta = e.clientX - dragStartXRef.current;
			if (Math.abs(delta) > 5) hasDraggedRef.current = true;
			posRef.current = normalize(dragStartPosRef.current + delta);
			applyTransform(posRef.current);
		},
		[normalize],
	);

	const onPointerUp = useCallback(() => {
		isDraggingRef.current = false;
		lastTimeRef.current = undefined;
		if (innerRef.current) innerRef.current.style.cursor = "grab";
	}, []);

	const onMouseEnter = useCallback(() => {
		isHoveredRef.current = true;
	}, []);

	const onMouseLeave = useCallback(() => {
		isHoveredRef.current = false;
		lastTimeRef.current = undefined;
	}, []);

	/** Blocks card onClick if the pointer moved enough to be a drag, not a click */
	const onClickCapture = useCallback((e: React.MouseEvent) => {
		if (hasDraggedRef.current) {
			e.stopPropagation();
			hasDraggedRef.current = false;
		}
	}, []);

	return {
		innerRef,
		dragProps: {
			onPointerDown,
			onPointerMove,
			onPointerUp,
			onMouseEnter,
			onMouseLeave,
			onClickCapture,
		},
	};
}
