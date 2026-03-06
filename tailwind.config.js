module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 0 1px rgba(96,165,250,0.12), 0 12px 36px rgba(59,130,246,0.16)"
      },
      backgroundImage: {
        stars: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.02) 1px, transparent 1px), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(180deg, #070b16 0%, #0a1020 100%)"
      }
    }
  },
  plugins: []
};
