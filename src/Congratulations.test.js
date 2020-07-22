import React from "react";
import { shallow } from "enzyme";
import Congratulations from "./Congratulations";

import { findByTestAttr, checkProps } from "../test/testUtils";

/**
 * Factory function to create a ShallowWrapper for the Congratulations component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
	return shallow(<Congratulations {...props} />);
};

test("renders without error ", () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, "component-congratulations");

	expect(component.length).toBe(1);
});

test("renders no text when `success` prop is false ", () => {
	const wrapper = setup({ success: false });
	const component = findByTestAttr(wrapper, "component-congratulations");

	expect(component.text()).toBe("");
});

test("renders a string to indicate congratulations message when success prop is true ", () => {
	const wrapper = setup({ success: true });
	const message = findByTestAttr(wrapper, "congratulations-message");

	expect(message.text().length).not.toBe(0);
});

test("Does not throw warning with expected inherited prop type", () => {
	const expectedProps = { success: false };

	checkProps(Congratulations, expectedProps);
});
