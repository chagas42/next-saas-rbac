/** @typedef {import('prettier').Config} PrettierConfig */

/** @type { PrettierConfig } */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 80,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  bracketSpacing: true,
  endOfLine: "auto",
  bracketSameLine: true,
};

export default config;
