import { isUndefined } from "../../src/libs";

describe("isUndefined", () => {
  it("can check value is undefined", () => {
    const response = isUndefined(undefined);
    expect(response).toBeTruthy();
  });

  it("can check value is not undefined", () => {
    const response = isUndefined(1);
    expect(response).toBeFalsy();
  });
});
