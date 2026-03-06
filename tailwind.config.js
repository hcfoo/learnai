/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        "soft": "0 1px 2px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: []
};
