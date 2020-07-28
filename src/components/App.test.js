import React from "react";
import { shallow } from "enzyme";

import { storeFactory } from "../../tests/testUtils";

import App, { UnconnectedApp } from "./App";

const setup = (state = {}) => {
	const store = storeFactory(state);
	const wrapper = shallow(<App store={store} />)
		.dive()
		.dive();
	return wrapper;
};

describe("App", () => {
	describe("Redux properties", () => {
		it("has access to `success` state", () => {
			const success = true;
			const wrapper = setup({ success });
			const successProp = wrapper.instance().props.success;

			expect(successProp).toBe(success);
		});

		it("has access to `secretWord` state", () => {
			const secretWord = "party";
			const wrapper = setup({ secretWord });
			const secretWordProp = wrapper.instance().props.secretWord;

			expect(secretWordProp).toBe(secretWord);
		});

		it("has access to `guessedWords` state", () => {
			const guessedWords = [
				{ guessedWord: "train", letterMatchCount: 3 },
				{ guessedWord: "party", letterMatchCount: 1 },
				{ guessedWord: "Stalin", letterMatchCount: 5 },
			];
			const wrapper = setup({ guessedWords });
			const guessedWordsProp = wrapper.instance().props.guessedWords;

			expect(guessedWordsProp).toBe(guessedWords);
		});

		it("`getSecretWord` action creator is a function on the props", () => {
			const wrapper = setup();
			const getSecretWordProp = wrapper.instance().props.getSecretWord;

			expect(getSecretWordProp).toBeInstanceOf(Function);
		});
		it("runs `getSecretWord` action creator on App mount", () => {
			const getSecretWordMock = jest.fn();

			const props = {
				getSecretWord: getSecretWordMock,
				success: false,
				guessedWords: [],
			};

			const wrapper = shallow(<UnconnectedApp {...props} />);
			wrapper.instance().componentDidMount();

			const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
			expect(getSecretWordCallCount).toBe(1);
		});
	});
});
