const eslintPresetDefault = require("./eslint-preset-default");
const eslintPresetImport = require("./eslint-preset-import");
const eslintPresetReact = require("./eslint-preset-react");

module.exports = {
  ...require("./eslint-preset-default"),
  ...require("./eslint-preset-import"),
  ...require("./eslint-preset-react"),
};
