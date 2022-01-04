module.exports = {
  settings: { tailwindcss: { groupByResponsive: true } },
  plugins: ["tailwindcss"],
  extends: [
    require.resolve("@local/eslint/eslint-preset-default"),
    require.resolve("@local/eslint/eslint-preset-react"),
    require.resolve("@local/eslint/eslint-preset-import"),
    "plugin:tailwindcss/recommended",
  ],
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
};
