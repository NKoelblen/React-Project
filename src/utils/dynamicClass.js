export function dynamicClass(condition, dynamicClass, staticClass = '') {
	if (condition) {
		return `${staticClass} ${dynamicClass}`;
	}
	return staticClass;
}
