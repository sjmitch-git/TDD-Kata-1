import { convertToNumber } from "../src";

describe("test convertToNumber function", () => {
  it("should return number from Roman numeral", () => {
    expect(convertToNumber("XVII")).toBe(17);
  });
});
