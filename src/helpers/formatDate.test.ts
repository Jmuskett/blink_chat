import { formatDate } from "./formatDate";

describe("format test", () => {
  it("should take a string and return a formatted date", () => {
    expect(formatDate("2020-07-26T11:58:12")).toBe("26 Jul 20 - 11:58 AM");
  });
});
