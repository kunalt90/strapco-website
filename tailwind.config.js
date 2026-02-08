/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#061227", // lighter than before (less "black")
          900: "#0A1B33",
          800: "#102245"
        },
        slate: {
          850: "#162D54",
          800: "#1E3561",
          500: "#64748B",
          400: "#94A3B8"
        },
        brand: "#2563EB"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
