import checkPropTypes from "check-prop-types";

/**
 * returns nodes with the given data-test attribute
 * @function findByTestAttr
 * @param {object} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 */

export function findByTestAttr(wrapper, val) {
	return wrapper.find(`[data-test="${val}"]`);
}

export function checkProps(component, conformingProps) {
	const propError = checkPropTypes(
		component.propTypes,
		conformingProps,
		"prop",
		component.name
	);
	expect(propError).toBeUndefined();
}
