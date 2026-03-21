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
 *
 * All pointer/mouse/click listeners are attached imperatively via useEffect
 * so that no ref-capturing handlers are spread as render-time props.
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
			const MIN_VELOCITY = 0.05;

			const step = () => {
				velocity *= DECAY;
				if (Math.abs(velocity) < MIN_VELOCITY) {
					isInertiaRef.current = false;
					lastTimeRef.current = undefined;
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

	// Attach all interaction listeners imperatively to avoid ref-during-render
	useEffect(() => {
		const el = innerRef.current;
		if (!el) return;

		const onPointerDown = (e: PointerEvent) => {
			isDraggingRef.current = true;
			isInertiaRef.current = false;
			hasDraggedRef.current = false;
			dragStartXRef.current = e.clientX;
			dragStartPosRef.current = posRef.current;
			velocityRef.current = 0;
			lastMoveXRef.current = e.clientX;
			lastMoveTimeRef.current = performance.now();
			el.style.cursor = "grabbing";
		};

		const onPointerMove = (e: PointerEvent) => {
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
		};

		const onPointerUp = () => {
			if (!isDraggingRef.current) return;
			isDraggingRef.current = false;
			el.style.cursor = "grab";

			if (Math.abs(velocityRef.current) > 0.05) {
				runInertia(velocityRef.current);
			} else {
				lastTimeRef.current = undefined;
			}
		};

		const onMouseEnter = () => {
			isHoveredRef.current = true;
		};

		const onMouseLeave = () => {
			isHoveredRef.current = false;
			lastTimeRef.current = undefined;
		};

		// Capture phase — blocks card onClick if pointer moved enough to be a drag
		const onClickCapture = (e: MouseEvent) => {
			if (hasDraggedRef.current) {
				e.stopPropagation();
				hasDraggedRef.current = false;
			}
		};

		el.addEventListener("pointerdown", onPointerDown);
		el.addEventListener("pointermove", onPointerMove);
		el.addEventListener("pointerup", onPointerUp);
		el.addEventListener("pointerleave", onPointerUp);
		el.addEventListener("mouseenter", onMouseEnter);
		el.addEventListener("mouseleave", onMouseLeave);
		el.addEventListener("click", onClickCapture, true); // capture phase

		return () => {
			el.removeEventListener("pointerdown", onPointerDown);
			el.removeEventListener("pointermove", onPointerMove);
			el.removeEventListener("pointerup", onPointerUp);
			el.removeEventListener("pointerleave", onPointerUp);
			el.removeEventListener("mouseenter", onMouseEnter);
			el.removeEventListener("mouseleave", onMouseLeave);
			el.removeEventListener("click", onClickCapture, true);
		};
	}, [normalize, runInertia]);

	return innerRef;
}
