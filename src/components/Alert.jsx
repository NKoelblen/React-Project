import { dynamicClass } from '../utils/dynamicClass';

/**
 *
 * @param {string} type
 * @param {string} children
 * @returns {string}
 */
export function Alert({ type, children }) {
	return (
		<div
			className={dynamicClass(true, `alert-${type}`, 'alert')}
			role="alert"
		>
			{children}
		</div>
	);
}
