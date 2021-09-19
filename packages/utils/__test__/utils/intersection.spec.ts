import { intersection } from "../../src/utils";

describe("intersection", () => {
  it("can check value is null", () => {
    const first = [3, 4, 5, 1, 7];
    const second = [1, 2, 3];

    const response = intersection(first, second);
    expect(response).toEqual([3, 1]);
  });
});
