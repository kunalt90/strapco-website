/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 950: "#02040a", 900: "#0a0c12", 800: "#11141d" },
        brand: "#0066FF",
        slate: { 400: "#94A3B8", 500: "#64748B" }
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] }
    }
  },
  plugins: []
};
