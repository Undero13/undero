const { renderString } = require("template-file");
const { readFileSync } = require("fs");

const getFile = (path) => readFileSync(path, { encoding: "utf-8" });

const getTemplatePath = (data) => {
  switch (data.what) {
    case "component":
    case "view":
      return [{
          content: renderString(
            getFile(
              __dirname + "/../template/component/component.component.ts"
            ),
            data
          ),
          filename: `${data.path}.${data.what}.ts`,
        },
        {
          content: renderString(
            getFile(
              __dirname + "/../template/component/component.component.scss"
            ),
            data
          ),
          filename: `${data.path}.${data.what}.scss`,
        },
        {
          content: renderString(
            getFile(
              __dirname + "/../template/component/component.component.vue"
            ),
            data
          ),
          filename: `${data.path}.${data.what}.vue`,
        },
        {
          content: renderString(
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
          content: renderString(
            getFile(__dirname + "/../template/service/service.service.ts"),
            data
          ),
          filename: `${data.path}.${data.what}.ts`,
        },
        {
          content: renderString(
            getFile(__dirname + "/../template/service/service.spec.ts"),
            data
          ),
          filename: `${data.path}.spec.ts`,
        },
      ];

    case "store":
      return [{
          content: renderString(
            getFile(__dirname + "/../template/store/index.ts"),
            data
          ),
          filename: `index.ts`,
        },
        {
          content: renderString(
            getFile(__dirname + "/../template/store/state.ts"),
            data
          ),
          filename: `state.ts`,
        },
        {
          content: renderString(
            getFile(__dirname + "/../template/store/actions.ts"),
            data
          ),
          filename: `actions.ts`,
        },
        {
          content: renderString(
            getFile(__dirname + "/../template/store/mutations.ts"),
            data
          ),
          filename: `mutations.ts`,
        },
        {
          content: renderString(
            getFile(__dirname + "/../template/store/getters.ts"),
            data
          ),
          filename: `getters.ts`,
        },
        {
          content: renderString(
            getFile(__dirname + "/../template/store/store.spec.ts"),
            data
          ),
          filename: `store.spec.ts`,
        },
      ];

    case "directive":
      return [{
        content: renderString(
          getFile(
            __dirname + "/../template/directive/directive.directive.ts"
          ),
          data
        ),
        filename: `${data.path}.directive.ts`,
      }, ];
    case "filter":
      return [{
          content: renderString(
            getFile(__dirname + "/../template/filter/filter.filter.ts"),
            data
          ),
          filename: `${data.path}.filter.ts`,
        },
        {
          content: renderString(
            getFile(__dirname + "/../template/filter/filter.filter.spec.ts"),
            data
          ),
          filename: `${data.path}.filter.spec.ts`,
        },
      ];
  }
};

module.exports = getTemplatePath;