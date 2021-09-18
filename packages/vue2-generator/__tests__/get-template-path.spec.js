const getTemplatePath = require("../bin/get-template-path");

describe("get-template-path", () => {
  it("can read template, parse it and returned - component/view", () => {
    const data = {
      name: "my-test-component",
      path: "./src/my-test-component",
      what: "component",
      whatLowerCase: "Component",
    };

    const reponse = getTemplatePath(data);

    expect(reponse.length).toEqual(4);
    expect(reponse[0].filename).toEqual("./src/my-test-component.component.ts");
  });

  it("can read template, parse it and returned - service", () => {
    const data = {
      name: "my-test-service",
      path: "./src/my-test-service",
      what: "service",
      whatLowerCase: "Service",
    };

    const reponse = getTemplatePath(data);

    expect(reponse.length).toEqual(2);
    expect(reponse[0].filename).toEqual("./src/my-test-service.service.ts");
  });

  it("can read template, parse it and returned - store", () => {
    const data = {
      name: "my-test-store",
      path: "./src/my-test-store",
      what: "store",
      whatLowerCase: "Store",
    };

    const reponse = getTemplatePath(data);

    expect(reponse.length).toEqual(6);
    expect(reponse[0].filename).toEqual("index.ts");
  });

  it("can read template, parse it and returned - directive", () => {
    const data = {
      name: "my-test-directive",
      path: "./src/my-test-directive",
      what: "directive",
      whatLowerCase: "Directive",
    };

    const reponse = getTemplatePath(data);

    expect(reponse.length).toEqual(1);
    expect(reponse[0].filename).toEqual("./src/my-test-directive.directive.ts");
  });

  it("can read template, parse it and returned - filter", () => {
    const data = {
      name: "my-test-filter",
      path: "./src/my-test-filter",
      what: "filter",
      whatLowerCase: "Filter",
    };

    const reponse = getTemplatePath(data);

    expect(reponse.length).toEqual(2);
    expect(reponse[0].filename).toEqual("./src/my-test-filter.filter.ts");
  });
});