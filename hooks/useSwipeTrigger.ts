import { useRef, useCallback } from "react";

interface UseSwipeTriggerOptions {
	direction: "left" | "right";
	threshold?: number;
	onSwipe: () => void;
}

export function useSwipeTrigger({ direction, threshold = 60, onSwipe }: UseSwipeTriggerOptions) {
	const startX = useRef(0);
	const startY = useRef(0);

	const onTouchStart = useCallback((e: React.TouchEvent) => {
		startX.current = e.touches[0].clientX;
		startY.current = e.touches[0].clientY;
	}, []);

	const onTouchEnd = useCallback(
		(e: React.TouchEvent) => {
			const deltaX = e.changedTouches[0].clientX - startX.current;
			const deltaY = e.changedTouches[0].clientY - startY.current;

			// Only trigger if the horizontal movement dominates and exceeds the threshold
			if (Math.abs(deltaX) < threshold || Math.abs(deltaX) < Math.abs(deltaY)) return;

			if (direction === "right" && deltaX > 0) onSwipe();
			if (direction === "left" && deltaX < 0) onSwipe();
		},
		[direction, threshold, onSwipe],
	);

	return { onTouchStart, onTouchEnd };
}
