import { ProductRow } from './ProductRow';

export function ProductCategoryRow({ category, products }) {
	return (
		<>
			<tr>
				<td colSpan={2}>
					<strong>{category}</strong>
				</td>
			</tr>
			{products.map((product) =>
				product.category === category ? (
					<ProductRow
						key={product.name}
						product={product}
					/>
				) : (
					''
				)
			)}
		</>
	);
}
