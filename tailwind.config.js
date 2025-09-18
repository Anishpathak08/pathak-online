/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#006D77",
          dark: "#005860",
          light: "#EDF6F9",
          accent: "#FFD166"
        }
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
}
