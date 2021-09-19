import { isEmpty } from "../../src/libs";

describe("isEmpty", () => {
  it("can check array is empty", () => {
    const exampleArr = [];
    const response = isEmpty(exampleArr);
    expect(response).toBeTruthy();
  });

  it("can check object is empty", () => {
    const exampleObject = {};
    const response = isEmpty(exampleObject);
    expect(response).toBeTruthy();
  });

  it("can check array is empty", () => {
    const exampleArr = ["some-string"];
    const response = isEmpty(exampleArr);
    expect(response).toBeFalsy();
  });

  it("can check object is empty", () => {
    const exampleObject = { key: "value" };
    const response = isEmpty(exampleObject);
    expect(response).toBeFalsy();
  });
});
