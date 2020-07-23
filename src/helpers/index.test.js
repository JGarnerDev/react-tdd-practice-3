import { getLetterMatchCount } from "./";

describe("getLetterMatchCount", () => {
	const testWord = "party";

	test("returns correct count when there are no matching letters", () => {
		const letterMatchCount = getLetterMatchCount("bones", testWord);
		expect(letterMatchCount).toBe(0);
	});

	test("returns correct count when there are 3 matching letters", () => {
		const letterMatchCount = getLetterMatchCount("train", testWord);
		expect(letterMatchCount).toBe(3);
	});

	test("returns correct count when there are duplicate letters", () => {
		const letterMatchCount = getLetterMatchCount("parka", testWord);
		expect(letterMatchCount).toBe(3);
	});
});
