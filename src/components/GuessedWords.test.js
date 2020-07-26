import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../tests/testUtils";

import GuessedWords from "./GuessedWords";

const defaultProps = {
	guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<GuessedWords {...setupProps} />);
};

it("should not throw warning with expected props", () => {
	checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = setup({
			guessedWords: [],
		});
	});

	it("renders without error", () => {
		const component = findByTestAttr(wrapper, "component-guessed-words");

		expect(component.length).toBe(1);
	});

	it("renders instructions for the game", () => {
		const instructions = findByTestAttr(wrapper, "guess-instructions");

		expect(instructions.text().length).not.toBe(0);
	});
});

describe("if there are words guessed", () => {
	let wrapper;

	const guessedWords = [
		{ guessedWord: "train", letterMatchCount: 3 },
		{ guessedWord: "party", letterMatchCount: 1 },
		{ guessedWord: "Stalin", letterMatchCount: 5 },
	];

	beforeEach(() => {
		wrapper = setup({
			guessedWords,
		});
	});

	it("renders without error", () => {
		const component = findByTestAttr(wrapper, "component-guessed-words");

		expect(component.length).toBe(1);
	});

	it('renders "guessed words" section', () => {
		const node = findByTestAttr(wrapper, "guessed-words");

		expect(node.length).toBe(1);
	});

	it("should have the correct number of guessed words", () => {
		const nodes = findByTestAttr(wrapper, "guessed-word");

		expect(nodes.length).toBe(guessedWords.length);
	});
});
