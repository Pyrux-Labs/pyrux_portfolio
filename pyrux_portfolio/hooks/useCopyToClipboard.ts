"use client";

import { useState, useCallback } from "react";

/**
 * Hook that copies text to clipboard and shows temporary state.
 * @param duration Duration in ms of the "copied" state (default: 2000)
 */
export function useCopyToClipboard(duration = 2000) {
	const [copied, setCopied] = useState(false);

	const copy = useCallback(
		async (text: string) => {
			try {
				await navigator.clipboard.writeText(text);
				setCopied(true);
				setTimeout(() => setCopied(false), duration);
				return true;
			} catch {
				// Fallback for older browsers
				const textarea = document.createElement("textarea");
				textarea.value = text;
				textarea.style.position = "fixed";
				textarea.style.opacity = "0";
				document.body.appendChild(textarea);
				textarea.select();
				document.execCommand("copy");
				document.body.removeChild(textarea);
				setCopied(true);
				setTimeout(() => setCopied(false), duration);
				return true;
			}
		},
		[duration]
	);

	return { copied, copy };
}
