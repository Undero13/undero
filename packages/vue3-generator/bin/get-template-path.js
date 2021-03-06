const { render } = require("template-file");
const { readFileSync } = require("fs");

const getFile = (path) => readFileSync(path, { encoding: "utf-8" });

const getTemplatePath = (data) => {
  switch (data.what) {
    case "component":
    case "view":
      return [{
          content: render(
            getFile(
              __dirname + "/../template/component/component.component.ts"
            ),
            data
          ),
          filename: `${data.path}.${data.what}.ts`,
        },
        {
          content: render(
            getFile(
              __dirname + "/../template/component/component.component.scss"
            ),
            data
          ),
          filename: `${data.path}.${data.what}.scss`,
        },
        {
          content: render(
            getFile(
              __dirname + "/../template/component/component.component.vue"
            ),
            data
          ),
          filename: `${data.path}.${data.what}.vue`,
        },
        {
          content: render(
            getFile(
              __dirname + "/../template/component/component.component.spec.ts"
            ),
            data
          ),
          filename: `${data.path}.${data.what}.spec.ts`,
        },
      ];

    case "service":
      return [{
          content: render(
            getFile(__dirname + "/../template/service/service.service.ts"),
            data
          ),
          filename: `${data.path}.${data.what}.ts`,
        },
        {
          content: render(
            getFile(__dirname + "/../template/service/service.spec.ts"),
            data
          ),
          filename: `${data.path}.spec.ts`,
        },
      ];

    case "store":
      return [{
          content: render(
            getFile(__dirname + "/../template/store/index.ts"),
            data
          ),
          filename: `index.ts`,
        },
        {
          content: render(
            getFile(__dirname + "/../template/store/state.ts"),
            data
          ),
          filename: `state.ts`,
        },
        {
          content: render(
            getFile(__dirname + "/../template/store/actions.ts"),
            data
          ),
          filename: `actions.ts`,
        },
        {
          content: render(
            getFile(__dirname + "/../template/store/mutations.ts"),
            data
          ),
          filename: `mutations.ts`,
        },
        {
          content: render(
            getFile(__dirname + "/../template/store/getters.ts"),
            data
          ),
          filename: `getters.ts`,
        },
        {
          content: render(
            getFile(__dirname + "/../template/store/store.spec.ts"),
            data
          ),
          filename: `store.spec.ts`,
        },
      ];
  }
};

module.exports = getTemplatePath;