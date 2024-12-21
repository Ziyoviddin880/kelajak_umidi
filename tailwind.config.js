/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true, // Container-ni o‘rtaga joylashtirish
    },
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
