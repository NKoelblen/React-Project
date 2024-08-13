/**
 *
 * @param {{name: string, stocked: boolean, price: string}} product
 * @returns
 */
export function ProductRow({ product }) {
	const color = product.stocked ? undefined : 'text-danger';

	return (
		<tr>
			<td className={color}>{product.name}</td>
			<td>{product.price}</td>
		</tr>
	);
}
