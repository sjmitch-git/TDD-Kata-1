import { convertToNumber } from "../src";

describe("convertToNumber", () => {
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
  for (const key in romanNumerals) {
    test(`should convert ${key} to ${romanNumerals[key]}`, () => {
      expect(convertToNumber(key)).toBe(romanNumerals[key]);
    });
  }
});
