/**
 *
 * @param {string} value
 * @param {(s: string) => void} onChange
 * @param {string} placeholder
 *
 */
export function TextInput({ value, onChange, placeholder }) {
	return (
		<input
			type="text"
			className="form-control"
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder={placeholder}
		/>
	);
}
