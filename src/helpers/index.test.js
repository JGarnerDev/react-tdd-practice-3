import { getLetterMatchCount } from "./";

describe("getLetterMatchCount", () => {
	const testWord = "party";

	it("returns correct count when there are no matching letters", () => {
		const letterMatchCount = getLetterMatchCount("bones", testWord);
		expect(letterMatchCount).toBe(0);
	});

	it("returns correct count when there are 3 matching letters", () => {
		const letterMatchCount = getLetterMatchCount("train", testWord);
		expect(letterMatchCount).toBe(3);
	});

	it("returns correct count when there are duplicate letters", () => {
		const letterMatchCount = getLetterMatchCount("parka", testWord);
		expect(letterMatchCount).toBe(3);
	});
});
