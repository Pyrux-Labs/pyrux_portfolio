import { useRef, useEffect } from "react";

/**
 * Adds mouse-drag-to-scroll to any overflow-x-auto container.
 * Touch scroll already works natively; this adds desktop mouse drag.
 * Event listeners are attached imperatively via useEffect to avoid
 * exposing ref-capturing handlers as render-time props.
 *
 * Usage:
 *   const ref = useDragScroll();
 *   <div ref={ref} className="overflow-x-auto cursor-grab">...</div>
 */
export function useDragScroll() {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		let isDragging = false;
		let startX = 0;
		let startScroll = 0;

		const onPointerDown = (e: PointerEvent) => {
			isDragging = true;
			startX = e.clientX;
			startScroll = el.scrollLeft;
			el.setPointerCapture(e.pointerId);
			el.style.cursor = "grabbing";
		};

		const onPointerMove = (e: PointerEvent) => {
			if (!isDragging) return;
			el.scrollLeft = startScroll + (startX - e.clientX);
		};

		const onPointerUp = () => {
			isDragging = false;
			el.style.cursor = "grab";
		};

		el.addEventListener("pointerdown", onPointerDown);
		el.addEventListener("pointermove", onPointerMove);
		el.addEventListener("pointerup", onPointerUp);
		el.addEventListener("pointerleave", onPointerUp);

		return () => {
			el.removeEventListener("pointerdown", onPointerDown);
			el.removeEventListener("pointermove", onPointerMove);
			el.removeEventListener("pointerup", onPointerUp);
			el.removeEventListener("pointerleave", onPointerUp);
		};
	}, []);

	return ref;
}
