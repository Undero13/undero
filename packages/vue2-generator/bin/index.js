#!/usr/bin/env node

const yargs = require("yargs");
const path = require("path");
const fs = require("fs");

const getTemplatePath = require("./get-template-path");
const args = yargs.argv;

const options = yargs
  .usage("Usage: vue2-generate")
  .option("w", {
    alias: "what",
    describe: "What you like generate?",
    type: "string",
    default: "component",
    choices: ["component", "view", "service", "store", "directive", "filter"],
  })
  .option("p", {
    alias: "path",
    describe: "Path where the file will be created with it name",
    type: "string",
    required: true,
  }).argv;

const name = path.parse(options.path).base;

const data = {
  name: name,
  path: name,
  what: options.what,
  whatLowerCase: options.what.charAt(0).toUpperCase() + options.what.slice(1),
};
const nameParts = data.name.split("-");

data.name = nameParts
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join("");

const files = getTemplatePath(data);

files.forEach((file) => {
  fs.mkdirSync(options.path, { recursive: true });
  fs.writeFileSync(`${options.path}/${file.filename}`, file.content);
});