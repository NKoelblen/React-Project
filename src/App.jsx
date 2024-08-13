import { useState } from 'react';

const title = "Sortir la tête de l'eau !";
const titleStyle = { color: 'red', backgroundColor: 'black' };
const showTitle = true;

const lis = ['Lorem ipsum', 'Dolor sit amet', 'Consectetur elit'];

function App() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
		setCount((count) => count + 1);
	};

	const [person, setPerson] = useState({
		firstName: 'John',
		lastName: 'Smith',
		age: 18,
	});

	const incrementAge = () => {
		setPerson({ ...person, age: person.age + 1 });
	};

	const [value, setValue] = useState('John doe');
	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const [isAccepted, setIsAccepted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		let data = new FormData(e.target);
		console.log(data.get('firstname'));
	};

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
			<hr />
			<p>Compteur: {count}</p>
			<button onClick={increment}>Incrémenter</button>
			<p>
				Age de {person.firstName}: {person.age}
			</p>
			<button onClick={incrementAge}>Ajouter un an</button>
			<hr />
			<form>
				<input
					name="firstname"
					value={value}
					onChange={handleChange}
				/>
				<PCCheckbox
					checked={isAccepted}
					onCheck={setIsAccepted}
				/>
				<button disabled={!isAccepted}>Envoyer</button>
			</form>
			<hr />
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="firstname"
					defaultValue={'azerty'}
				/>
				<textarea defaultValue={'azerty'} />
				<button>Envoyer</button>
			</form>
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

function PCCheckbox({ checked, onCheck }) {
	return (
		<>
			<label>
				<input
					type="checkbox"
					name=""
					onChange={(e) => onCheck(e.target.checked)}
					checked={checked}
				/>
				Accepter la Politique de Confidentialité
			</label>
		</>
	);
}

export default App;
