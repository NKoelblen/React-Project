import { Alert } from '../components/Alert';
import { Pagination } from '../components/Pagination';
import { Spinner } from '../components/Spinner';
import { useFetch } from '../hooks/useFetch';

/**
 *
 * @param {number} postId
 */
export function Single({ postId }) {
	const { loading, data, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
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
				src={`https://picsum.photos/id/${data.id}/1200/900`}
				alt=""
				className="img-fluid img-thumbnail"
			/>
			<p>{data.body}</p>
			<Pagination
				previous={{ condition: postId === 1, link: `#post:${postId - 1}`, label: 'Article précédent' }}
				next={{ condition: postId === 10, link: `#post:${postId + 1}`, label: 'Article suivant' }}
			/>
		</>
	);
}
