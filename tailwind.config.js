/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#020814",
          900: "#071225",
          800: "#0d1b33"
        },
        slate: {
          850: "#16243f",
          800: "#1e2d4f",
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
