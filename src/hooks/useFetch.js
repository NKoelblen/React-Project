import { useEffect, useState } from 'react';

export function useFetch(url, options = {}) {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);
	const [errors, setErrors] = useState(null);

	useEffect(() => {
		fetch(url, {
			...options,
			headers: {
				...options.headers,
			},
		})
			.then((r) => r.json())
			.then((data) => {
				setData(data);
			})
			.catch((e) => {
				setErrors(e);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return {
		loading,
		data,
		errors,
	};
}
