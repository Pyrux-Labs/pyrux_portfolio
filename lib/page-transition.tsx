"use client";

import { createContext, useContext, useState, useRef, useCallback, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

type Direction = "left" | "right";

interface PageTransitionContextValue {
	trigger: (href: string, direction: Direction) => void;
	phase: "idle" | "exiting";
	direction: Direction | null;
	notifyExitDone: () => void;
}

const PageTransitionContext = createContext<PageTransitionContextValue>({
	trigger: () => {},
	phase: "idle",
	direction: null,
	notifyExitDone: () => {},
});

export function usePageTransition() {
	const { trigger } = useContext(PageTransitionContext);
	return { trigger };
}

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
	const [state, setState] = useState<{ phase: "idle" | "exiting"; direction: Direction | null }>({
		phase: "idle",
		direction: null,
	});
	const activeRef = useRef(false);
	const hrefRef = useRef<string | null>(null);
	const router = useRouter();

	const trigger = useCallback((href: string, direction: Direction) => {
		if (activeRef.current) return;
		activeRef.current = true;
		hrefRef.current = href;
		setState({ phase: "exiting", direction });
	}, []);

	const notifyExitDone = useCallback(() => {
		if (hrefRef.current) {
			router.push(hrefRef.current);
			hrefRef.current = null;
		}
		setState({ phase: "idle", direction: null });
		activeRef.current = false;
	}, [router]);

	return (
		<PageTransitionContext.Provider
			value={{ trigger, phase: state.phase, direction: state.direction, notifyExitDone }}>
			{children}
		</PageTransitionContext.Provider>
	);
}

export function AnimatedPage({ children }: { children: React.ReactNode }) {
	const { phase, direction, notifyExitDone } = useContext(PageTransitionContext);
	const controls = useAnimationControls();
	const pathname = usePathname();
	const isMounted = useRef(false);

	// Slide content out when a swipe transition is triggered
	useEffect(() => {
		if (phase === "exiting" && direction) {
			const xOut = direction === "right" ? "-100%" : "100%";
			controls
				.start({ x: xOut, opacity: 0, transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] } })
				.then(() => notifyExitDone());
		}
	}, [phase, direction, controls, notifyExitDone]);

	// Fade in when new page content arrives after navigation
	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true;
			return;
		}
		controls.set({ x: 0, opacity: 0 });
		controls.start({ opacity: 1, transition: { duration: 0.25, ease: "easeOut" } });
	}, [pathname, controls]);

	return (
		<motion.div animate={controls} style={{ opacity: 1 }} className="w-full flex-1 flex flex-col">
			{children}
		</motion.div>
	);
}
