/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", "sans-serif"],
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
