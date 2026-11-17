import type { Action } from 'svelte/action';

type RevealParams =
	| {
			delay?: number;
	  }
	| undefined;

/**
 * Fades and lifts an element into view once.
 * CSS only hides elements when `<html>` has the `js` class, so no-JS users
 * still get fully visible content.
 */
export const reveal: Action<HTMLElement, RevealParams> = (node, params) => {
	node.classList.add('reveal');

	if (params?.delay) {
		node.style.setProperty('--reveal-delay', String(params.delay));
	}

	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('is-visible');
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			}
		},
		{ rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
