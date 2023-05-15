const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   "pastel-blue": "#A7D2CB",
    //   "pastel-grey": "#DFEAF2",
    //   "pastel-yellow": "#F2D388",
    //   "pastel-pink": "#C98474",
    //   "pastel-burgundy": "#874C62",
    //   "pastel-dark-grey": "#5E6179",
    //   "pastel-black": "#3B3B3B",
    //   "pastel-bg": "#FBF8F6",
    // },
    extend: {
      colors: {
        cyan: colors.cyan,
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
