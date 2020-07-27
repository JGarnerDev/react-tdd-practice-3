import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "../src/reducers";
import { middlewares } from "../src/configureStore";

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
	const createStoreWithMiddleware = applyMiddleware(...middlewares)(
		createStore
	);
	return createStoreWithMiddleware(rootReducer, initalState);
}
