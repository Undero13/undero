import { isNumber } from "../../src/libs";

describe("isNumber", () => {
  it("can check value is not number", () => {
    const response = isNumber("some-string");
    expect(response).toBeFalsy();
  });

  it("can check value is number", () => {
    const response = isNumber(1);
    expect(response).toBeTruthy();
  });
});
