module.exports = {
  settings: { tailwindcss: { groupByResponsive: true } },
  plugins: ["tailwindcss"],
  extends: [
    require.resolve("eslint-config/eslint-preset-default"),
    require.resolve("eslint-config/eslint-preset-react"),
    require.resolve("eslint-config/eslint-preset-import"),
    "plugin:tailwindcss/recommended",
  ],
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
};
