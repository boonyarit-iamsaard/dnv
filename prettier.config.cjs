/** @type {import("prettier").Config} */
const config = {
  arrowParens: 'avoid',
  singleQuote: true,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
};

module.exports = config;
