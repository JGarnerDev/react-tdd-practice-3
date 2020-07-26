import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../tests/testUtils";

import Congratulations from "./Congratulations";

function setup(props = {}) {
	return shallow(<Congratulations {...props} />);
}

it("renders without error", () => {
	const wrapper = setup();
	const node = findByTestAttr(wrapper, "component-congratulations");

	expect(node.length).toBe(1);
});

it("should default the success prop to false", () => {
	const wrapper = setup();

	expect("success" in wrapper.props()).toEqual(false);
});

it("should render a congratulations message if the success prop is true", () => {
	const wrapper = setup({ success: true });
	const node = findByTestAttr(wrapper, "congratulations-msg");
	expect(node.text()).toBe("Awww fuccc");
});

it("Should render no congratulations message if the success prop is false", () => {
	const wrapper = setup({ success: false });
	const node = findByTestAttr(wrapper, "congratulations-msg");

	expect(node.length).toBe(0);
});

// it("", () => {});
