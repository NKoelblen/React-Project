/**
 *
 * @param {boolean} condition
 * @param {string} dynamicClass
 * @param {string} staticClass
 * @returns {string}
 */
export function dynamicClass(condition, dynamicClass, staticClass = '') {
	if (condition) {
		return `${staticClass} ${dynamicClass}`;
	}
	return staticClass;
}
