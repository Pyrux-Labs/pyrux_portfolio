import { useRef, useCallback } from "react";

/**
 * Adds mouse-drag-to-scroll to any overflow-x-auto container.
 * Touch scroll already works natively; this adds desktop mouse drag.
 *
 * Usage:
 *   const drag = useDragScroll();
 *   <div ref={drag.ref} className="overflow-x-auto cursor-grab" {...drag.dragProps}>
 *     ...
 *   </div>
 */
export function useDragScroll() {
	const ref = useRef<HTMLDivElement>(null);
	const isDraggingRef = useRef(false);
	const startXRef = useRef(0);
	const startScrollRef = useRef(0);

	const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
		const el = ref.current;
		if (!el) return;
		isDraggingRef.current = true;
		startXRef.current = e.clientX;
		startScrollRef.current = el.scrollLeft;
		el.setPointerCapture(e.pointerId);
		el.style.cursor = "grabbing";
	}, []);

	const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
		if (!isDraggingRef.current || !ref.current) return;
		ref.current.scrollLeft = startScrollRef.current + (startXRef.current - e.clientX);
	}, []);

	const onPointerUp = useCallback(() => {
		isDraggingRef.current = false;
		if (ref.current) ref.current.style.cursor = "grab";
	}, []);

	return {
		ref,
		dragProps: { onPointerDown, onPointerMove, onPointerUp },
	};
}
