import checkPropTypes from "check-prop-types";

export function findByTestAttr(wrapper, val) {
	return wrapper.find(`[data-test="${val}"]`);
}

export function checkProps(component, conformingProps) {
	const error = checkPropTypes(
		component.propTypes,
		conformingProps,
		"prop",
		component
	);
	expect(error).toBeUndefined();
}
