export function convertToRoman(num: number): string {
  if (!num && num !== 0) {
    throw new Error("No input provided. Please enter a number.");
  }
  if (num <= 0 || num > 3000) {
    return "Invalid number. Please enter a number between 1 and 3000.";
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

  let result = "";

  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      result += key;
      num -= romanNumerals[key];
    }
  }

  return result;
}
