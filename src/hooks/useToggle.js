import { useState } from 'react';

/**
 *
 * @param {boolean} initial
 * @returns {[boolean state, function toggle]}
 */
export function useToggle(initial = false) {
	const [state, setState] = useState(initial);
	const toggle = () => setState((v) => !v);
	return [state, toggle];
}
