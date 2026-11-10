import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      import: importPlugin
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        alias: {
          map: [
            ["@", "./src"],
            ["@components", "./src/components"],
            ["@pages", "./src/pages"],
            ["@features", "./src/features"],
            ["@styles", "./src/styles"],
            ["@data", "./src/data"],
            ["@hooks", "./src/hooks"],
            ["@utils", "./src/utils"],
            ["@assets", "./src/assets"]
          ],
          extensions: [".js", ".jsx", ".json"]
        }
      }
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }]
    }
  },
  prettierConfig
];