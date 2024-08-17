/**
 *
 * @param {string} image
 * @param {string} title
 * @param {string} text
 * @param {{string link, string label}} button
 * @returns
 */
export function Card({ image, title, text, button }) {
	return (
		<div className="card">
			{image && (
				<img
					src={image}
					className="card-img-top"
					alt=""
				/>
			)}
			<div className="card-body">
				{title && <h2 className="card-title">{title}</h2>}
				{text && <p className="card-text">{text}</p>}
				{button && (
					<a
						href={button.link}
						className="btn btn-primary"
					>
						{button.label}
					</a>
				)}
			</div>
		</div>
	);
}
