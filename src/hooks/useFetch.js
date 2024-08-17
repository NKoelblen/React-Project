import { useEffect, useState } from 'react';

/**
 *
 * @param {string} url
 * @param {{}} options
 * @returns {{boolean loading, data, errors}}
 */
export function useFetch(url, options = {}) {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(url, {
			...options,
			headers: {
				Accept: 'application/json; charset=UTF-8',
				...options.headers,
			},
		})
			.then((r) => r.json())
			.then((data) => {
				setData(data);
			})
			.catch((e) => {
				setError(e);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return {
		loading,
		data,
		error,
	};
}
