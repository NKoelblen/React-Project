import { useEffect, useState } from 'react';

/**
 *
 * @returns {{string page}}
 */
export function useHashNavigation() {
	const [hash, setHash] = useState(location.hash);

	useEffect(() => {
		const handleHashChange = () => {
			setHash(location.hash);
		};
		window.addEventListener('hashchange', handleHashChange);
		return () => {
			window.removeEventListener('hashchange', handleHashChange);
		};
	}, []);
	return { page: hash.replaceAll('#', '') || 'home' };
}
