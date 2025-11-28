export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      colors: {
        zinc: {
          850: "#1f2022",
          950: "#09090b", // Deep black foundation
        },
      },
      animation: {
        blob: "blob 10s infinite",
        "blob-slow": "blob 20s infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
