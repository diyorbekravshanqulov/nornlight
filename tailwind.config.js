/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        xl: "1332px",
        "2xl": "1332px",
      },
    },
    extend: {
      colors: {
        primary: "#454545",
        second: "#F2F2F2",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "gradient-to-r":
          "linear-gradient(90deg, rgba(0, 0, 0, .1) 0%, rgba(255, 255, 255, .3) 10%, rgba(255, 255, 255, .3) 90%, rgba(0, 0, 0, .1) 100%)",
      },
    },
  },
  plugins: [],
};
