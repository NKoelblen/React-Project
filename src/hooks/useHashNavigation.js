import { useEffect, useState } from 'react';
import { PageItem } from 'react-bootstrap';

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

	const request = hash.replaceAll('#', '').split(':', 2);
	return {
		page: request[0] || 'home',
		params: request[1],
	};
}
