/**
 *
 * @param {string} id
 * @param {boolean} checked
 * @param {(s: string) => void} onChange
 * @param {string} label
 *
 */
export function Checkbox({ id, checked, onChange, label }) {
	return (
		<div className="form-check">
			<input
				type="checkbox"
				className="form-check-input"
				id={id}
				checked={checked}
				onChange={(e) => onChange(e.target.checked)}
			/>
			<label
				className="form-check-label"
				htmlFor={id}
			>
				{label}
			</label>
		</div>
	);
}
