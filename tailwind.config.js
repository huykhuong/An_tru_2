module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        akashi: "UTM-Akashi, sans-serif",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
