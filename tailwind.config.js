module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        banner: "#c5a78b", // also for below tags (keep the contrast ratio in mind)
        primary: "#121212", // Dont change this one
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        sen: ["Sen", "sans-serif"],
      },
      screens: {
        custom: "400px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
