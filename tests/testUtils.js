import checkPropTypes from "check-prop-types";
import { createStore } from "redux";

import rootReducer from "../src/reducers";

export function findByTestAttr(wrapper, val) {
	return wrapper.find(`[data-test="${val}"]`);
}

export function checkProps(component, conformingProps) {
	const error = checkPropTypes(
		component.propTypes,
		conformingProps,
		"prop",
		component.name
	);
	expect(error).toBeUndefined();
}

export function storeFactory(initalState) {
	return createStore(rootReducer, initalState);
}
