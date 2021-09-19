import { difference } from "../../src/utils";

describe("difference", () => {
  it("can check value is null", () => {
    const first = [3, 4, 5, 1, 7];
    const second = [1, 2, 3];

    const response = difference(first, second);
    expect(response).toEqual([4, 5, 7]);
  });
});
