import { dynamicClass } from '../utils/dynamicClass';

/**
 *
 * @param {{boolean condition, string link, string label}} previous
 * @param {{boolean condition, string link, string label}} next
 */
export function Pagination({ previous, next }) {
	return (
		<nav>
			<ul className="pagination">
				<li className={dynamicClass(previous.condition, 'disabled', 'page_item')}>
					<a
						className="page-link"
						href={previous.link}
					>
						{previous.label}
					</a>
				</li>
				<li className={dynamicClass(next.condition, 'disabled', 'page_item')}>
					<a
						className="page-link"
						href={next.link}
					>
						{next.label}
					</a>
				</li>
			</ul>
		</nav>
	);
}
