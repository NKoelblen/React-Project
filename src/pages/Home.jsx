import { Alert } from '../components/Alert';
import { Card } from '../components/Card';
import { Spinner } from '../components/Spinner';
import { useFetch } from '../hooks/useFetch';

export function Home() {
	const { loading, data, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
	if (loading) {
		return <Spinner />;
	}
	if (error) {
		return <Alert type="danger">{error.toString()}</Alert>;
	}
	return (
		<>
			<h1>Hello Word !</h1>
			<div className="row g-4">
				{data.map((post) => (
					<div
						key={post.id}
						className="col-4"
					>
						<Card
							image={`https://picsum.photos/id/${post.id}/400/300`}
							title={post.title}
							text={post.body}
							button={{ link: `#post:${post.id}`, label: "Voir l'article" }}
						/>
					</div>
				))}
			</div>
		</>
	);
}
