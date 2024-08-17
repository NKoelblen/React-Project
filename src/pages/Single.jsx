import { Alert } from '../components/Alert';
import { Spinner } from '../components/Spinner';
import { useFetch } from '../hooks/useFetch';
import { useHashNavigation } from '../hooks/useHashNavigation';

export function Single() {
	const { page } = useHashNavigation();
	const id = page.split('-')[1];
	const { loading, data, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	if (loading) {
		return <Spinner />;
	}
	if (error) {
		return <Alert type="danger">{error.toString()}</Alert>;
	}
	return (
		<>
			<h1>{data.title}</h1>
			<img
				src={`https://picsum.photos/id/${data.id}/800/600`}
				alt=""
			/>
			<p>{data.body}</p>
		</>
	);
}
