import { useState } from 'react';
import { TextInput } from './components/forms/TextInput';
import { Checkbox } from './components/forms/Checkbox';
import { ProductCategoryRow } from './components/products/ProductCategoryRow';
import { useIncrement } from './hooks/useIncrement';

const PRODUCTS = [
	{ category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
	{ category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
	{ category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
	{ category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
	{ category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
	{ category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];

function App() {
	const [search, setSearch] = useState('');
	const [showStocked, setShowStocked] = useState(false);

	const visibleProducts = PRODUCTS.filter((product) => {
		if (showStocked && !product.stocked) {
			return false;
		}
		if (search && !product.name.includes(search)) {
			return false;
		}
		return true;
	});

	const { count, increment, decrement } = useIncrement({ base: 1, max: 10, min: -10 });

	return (
		<>
			<SearchBar
				search={search}
				onSearchChange={setSearch}
				showStocked={showStocked}
				onShowStockedChange={setShowStocked}
			/>
			<ProductTable products={visibleProducts} />
			<hr />
			<div>
				<span>Compteur : {count}</span>
				<button onClick={increment}>Incrémenter</button>
				<button onClick={decrement}>Décrémenter</button>
			</div>
		</>
	);
}

/**
 *
 * @returns
 */
function SearchBar({ search, onSearchChange, isChecked, onShowStockedChange }) {
	return (
		<form className="mb-3">
			<TextInput
				value={search}
				onChange={onSearchChange}
				placeholder="Rechercher..."
			/>
			<Checkbox
				id="stockCheckbox"
				checked={isChecked}
				onChange={onShowStockedChange}
				label="N'afficher que les produits en stock"
			/>
		</form>
	);
}

/**
 *
 * @param {{category: string, name: string, stocked: boolean, price: string}[]} products
 */
function ProductTable({ products }) {
	let categoryRows = [];
	let lastCategory = null;
	for (let product of products) {
		if (product.category !== lastCategory) {
			categoryRows.push(product.category);
			lastCategory = product.category;
		}
	}

	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th>Nom</th>
						<th>Prix</th>
					</tr>
				</thead>
				<tbody>
					{categoryRows.map((categoryRow) => (
						<ProductCategoryRow
							key={categoryRow}
							category={categoryRow}
							products={products}
						/>
					))}
				</tbody>
			</table>
		</>
	);
}

export default App;
