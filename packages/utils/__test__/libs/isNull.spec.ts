import { isNull } from "../../src/libs";

describe("isNull", () => {
  it("can check value is null", () => {
    const response = isNull(null);
    expect(response).toBeTruthy();
  });

  it("can check value not null", () => {
    const response = isNull("some-string");
    expect(response).toBeFalsy();
  });
});
