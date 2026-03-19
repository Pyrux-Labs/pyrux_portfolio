import { useRef, useEffect, useCallback } from "react";

interface Options {
	speed?: number; // px per second
	direction?: "left" | "right";
}

/**
 * Drives an infinite-marquee div with JS (replaces CSS animation) so that
 * the user can drag/swipe to pan it in both desktop and mobile.
 *
 * - Drag only activates when starting on a card (not on gap between cards)
 * - Releases with inertia that decays before resuming auto-scroll
 */
export function useDraggableMarquee({ speed = 80, direction = "left" }: Options = {}) {
	const innerRef = useRef<HTMLDivElement>(null);
	const posRef = useRef(0);
	const isHoveredRef = useRef(false);
	const isDraggingRef = useRef(false);
	const isInertiaRef = useRef(false);
	const hasDraggedRef = useRef(false);
	const dragStartXRef = useRef(0);
	const dragStartPosRef = useRef(0);
	// Velocity tracking for inertia (px/ms)
	const velocityRef = useRef(0);
	const lastMoveXRef = useRef(0);
	const lastMoveTimeRef = useRef(0);
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
			const delta = Math.min(time - lastTimeRef.current, 50);
			lastTimeRef.current = time;

			if (!isHoveredRef.current && !isDraggingRef.current && !isInertiaRef.current) {
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

	const runInertia = useCallback(
		(velocity: number) => {
			isInertiaRef.current = true;
			const DECAY = 0.95;
			const MIN_VELOCITY = 0.05; // px/ms — below this, stop inertia

			const step = () => {
				velocity *= DECAY;
				if (Math.abs(velocity) < MIN_VELOCITY) {
					isInertiaRef.current = false;
					lastTimeRef.current = undefined; // avoid jump on auto-scroll resume
					return;
				}
				posRef.current = normalize(posRef.current + velocity * 16);
				applyTransform(posRef.current);
				requestAnimationFrame(step);
			};

			requestAnimationFrame(step);
		},
		[normalize],
	);

	const onPointerDown = useCallback(
		(e: React.PointerEvent<HTMLDivElement>) => {
			// Ignore clicks on the gap (flex container itself, not a card child)
			if (e.target === e.currentTarget) return;

			isDraggingRef.current = true;
			isInertiaRef.current = false;
			hasDraggedRef.current = false;
			dragStartXRef.current = e.clientX;
			dragStartPosRef.current = posRef.current;
			velocityRef.current = 0;
			lastMoveXRef.current = e.clientX;
			lastMoveTimeRef.current = performance.now();
			// No setPointerCapture — it redirects click events to this div,
			// preventing card onClick from ever firing.
			if (innerRef.current) innerRef.current.style.cursor = "grabbing";
		},
		[],
	);

	const onPointerMove = useCallback(
		(e: React.PointerEvent<HTMLDivElement>) => {
			if (!isDraggingRef.current) return;

			const now = performance.now();
			const dt = now - lastMoveTimeRef.current;
			if (dt > 0) {
				velocityRef.current = (e.clientX - lastMoveXRef.current) / dt;
			}
			lastMoveXRef.current = e.clientX;
			lastMoveTimeRef.current = now;

			const delta = e.clientX - dragStartXRef.current;
			if (Math.abs(delta) > 5) hasDraggedRef.current = true;
			posRef.current = normalize(dragStartPosRef.current + delta);
			applyTransform(posRef.current);
		},
		[normalize],
	);

	const onPointerUp = useCallback(() => {
		if (!isDraggingRef.current) return;
		isDraggingRef.current = false;
		if (innerRef.current) innerRef.current.style.cursor = "grab";

		// Launch inertia if there's meaningful velocity
		if (Math.abs(velocityRef.current) > 0.05) {
			runInertia(velocityRef.current);
		} else {
			lastTimeRef.current = undefined;
		}
	}, [runInertia]);

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
