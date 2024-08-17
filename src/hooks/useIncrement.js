import { useState } from 'react';

/**
 *
 * @returns {{int count, function increment, function decrement}}
 */
export function useIncrement({ base = 0, max = Infinity, min = -Infinity }) {
	const [state, setState] = useState(base);
	return {
		count: state,
		increment: () => {
			setState((v) => (v < max ? v + 1 : v));
		},
		decrement: () => {
			setState((v) => (v > min ? v - 1 : v));
		},
	};
}
