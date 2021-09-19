import { isString } from "../../src/libs";

describe("isString", () => {
  it("can check value is string", () => {
    const response = isString("some-string");
    expect(response).toBeTruthy();
  });

  it("can check value is not string", () => {
    const response = isString(1);
    expect(response).toBeFalsy();
  });
});
