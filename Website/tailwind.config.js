module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#f9f9f9", 300: "#e1e1e1", 600: "#727272" },
        white: { A700: "#ffffff" },
        blue: { 500: "#23a6f0" },
        blue_gray: { 900: "#252b42" },
      },
      boxShadow: {},
      fontFamily: { montserrat: "Montserrat" },
      backgroundImage: { gradient: "linear-gradient(89deg, #ffffff,#ffffff,#ffffff00)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
