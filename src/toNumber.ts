export function convertToNumber(romanNumeral: string): number | string {
  if (!romanNumeral) {
    throw new Error("No input provided. Please enter a string.");
  }
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

  let result = 0;
  let index = 0;

  while (index < romanNumeral.length) {
    const currentSymbol = romanNumerals[romanNumeral[index]];
    const nextSymbol = romanNumerals[romanNumeral[index + 1]];

    if (currentSymbol === undefined) {
      return `Invalid Roman numeral: ${romanNumeral}`;
    }

    if (nextSymbol && currentSymbol < nextSymbol) {
      result += nextSymbol - currentSymbol;
      index += 2;
    } else {
      result += currentSymbol;
      index += 1;
    }
  }

  return result;
}
