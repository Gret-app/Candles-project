import babelParser from "@babel/eslint-parser";

export default {
  languageOptions: {
    parser: babelParser,
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": ["warn"],
  },
};
