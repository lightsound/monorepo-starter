module.exports = {
  plugins: ["sort-destructure-keys"],
  extends: ["next/core-web-vitals"],
  rules: {
    "react/display-name": "error",
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
        checkLocalVariables: false,
        checkInlineFunction: true,
      },
    ],
    "react/destructuring-assignment": ["error", "always"],
    "sort-destructure-keys/sort-destructure-keys": 2,
  },
};
