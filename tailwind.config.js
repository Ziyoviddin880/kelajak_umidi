/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customDarkGreen: "#32a327",
        customLightGreen: "#67df86",
        customWhite: "#f6f6f6",
        customBlack: "#0d1223",
        customBlue: "#0ef6f5",
      },
    },
  },
  plugins: [],
};
