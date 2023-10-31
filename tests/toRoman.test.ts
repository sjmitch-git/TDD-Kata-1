import { convertToRoman } from "../src";

describe("test convertToRoman function", () => {
  const romanNumerals: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  it("should return Roman numeral from number", () => {
    expect(convertToRoman(1)).toBe("I");
    expect(convertToRoman(58)).toBe("LVIII");
    expect(convertToRoman(3000)).toBe("MMM");
  });
  for (const key in romanNumerals) {
    it(`should convert ${romanNumerals[key]} to ${key}`, () => {
      expect(convertToRoman(romanNumerals[key])).toBe(key);
    });
  }
  it("should return error string if input less than 1 and gretaer than 3000", () => {
    expect(convertToRoman(-1)).toBe("Invalid number. Please enter a number between 1 and 3000.");
    expect(convertToRoman(3001)).toBe("Invalid number. Please enter a number between 1 and 3000.");
    expect(convertToRoman(0)).toBe("Invalid number. Please enter a number between 1 and 3000.");
  });
});
