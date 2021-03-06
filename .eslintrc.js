module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
  ],
  rules: {
    semi: ["warn", "always"],
    quotes: ["warn", "double"],
    "react/jsx-props-no-spreading": "off",
    "no-unused-vars": ["warn"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
    "import/extensions": "off",
    "import/no-unresolved": "off",
  },
};
