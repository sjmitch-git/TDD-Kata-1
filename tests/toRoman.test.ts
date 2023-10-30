import { convertToRoman } from "../src";

describe("test convertToRoman function", () => {
  it("should return Roman numeral from number", () => {
    expect(convertToRoman(1)).toBe("I");
    expect(convertToRoman(58)).toBe("LVIII");
    expect(convertToRoman(3000)).toBe("MMM");
  });
  it("should return error string if input less than 1 and gretaer than 3000", () => {
    expect(convertToRoman(-1)).toBe("Invalid number. Please enter a number between 1 and 3000.");
    expect(convertToRoman(3001)).toBe("Invalid number. Please enter a number between 1 and 3000.");
    expect(convertToRoman(0)).toBe("Invalid number. Please enter a number between 1 and 3000.");
  });
});
