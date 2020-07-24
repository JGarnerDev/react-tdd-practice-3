import { actionTypes } from "../actions";
import success from "./success";

describe("Success Reducer", () => {
	test("returns default initial state of 'false' when not action is passed ", () => {
		const newState = success(undefined, {});
		expect(newState).toBe(false);
	});
	test("returns state of  'true' upon recieving an action type of 'CORRECT_GUESS'", () => {
		const newState = success(undefined, { type: actionTypes.CORRECT_GUESS });
		expect(newState).toBe(true);
	});
});
