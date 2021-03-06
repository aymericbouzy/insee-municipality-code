const prettier = require("./prettier.config.js")

module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  plugins: ["prettier", "import"],
  rules: {
    "prettier/prettier": ["error", prettier],
    "no-var": "error",
    "prefer-const": "warn",
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: false,
    },
  },
  env: {
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: ["**/*.test.js"],
      env: {
        jest: true,
      },
    },
  ],
}
