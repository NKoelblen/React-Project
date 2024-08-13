import { useState } from 'react';

const title = "Sortir la tête de l'eau !";
const titleStyle = { color: 'red', backgroundColor: 'black' };
const showTitle = true;

const lis = ['Lorem ipsum', 'Dolor sit amet', 'Consectetur elit'];

function App() {
	return (
		<>
			<Title
				styles={titleStyle}
				id="mainTitle"
				className="title"
				data-demo="demo"
			>
				{showTitle && title}
			</Title>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque error similique ex, ipsa architecto officia consequatur iste dolorum tenetur ab! Dolor atque
				accusamus voluptates pariatur hic soluta neque nisi iure.
			</p>
			<input type="text" />
			<ul>
				{lis.map((li) => (
					<li key={li}>{li}</li>
				))}
			</ul>
		</>
	);
}

function Title({ styles, children, hidden, ...props }) {
	if (hidden) {
		return null;
	}

	return (
		<h1
			{...props}
			style={styles}
		>
			{children}
		</h1>
	);
}

export default App;
