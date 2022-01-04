module.exports = {
  plugins: ["simple-import-sort", "import-access"],
  rules: {
    "import/newline-after-import": "error",
    "import/no-default-export": "error",
    "import-access/jsdoc": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  overrides: [
    {
      files: ["pages/**/*.tsx", "pages/api/**/*.ts", "next.config.mjs"],
      rules: { "import/no-default-export": "off" },
    },
  ],
};
