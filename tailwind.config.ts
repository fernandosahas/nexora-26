import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: "#05060f",
          900: "#080b1a",
          800: "#0d1226",
          700: "#141b36",
          600: "#1d2748",
        },
        gold: {
          100: "#fbf0c8",
          200: "#f6e7b4",
          300: "#ecd28a",
          400: "#e0b95a",
          500: "#c9a14a",
          600: "#a67f2f",
        },
        nebula: {
          400: "#8b7cf6",
          500: "#6d5ce0",
        },
      },
      fontFamily: {
        display: ['"Cinzel"', "Georgia", "serif"],
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter Variable"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.25", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        streak: {
          "0%": { transform: "translate3d(-30vw, -10vh, 0) rotate(-24deg)", opacity: "0" },
          "6%": { opacity: "0.9" },
          "16%": { transform: "translate3d(130vw, 40vh, 0) rotate(-24deg)", opacity: "0" },
          "100%": { transform: "translate3d(130vw, 40vh, 0) rotate(-24deg)", opacity: "0" },
        },
        sheen: {
          "0%": { transform: "translateX(-120%) skewX(-18deg)" },
          "55%, 100%": { transform: "translateX(260%) skewX(-18deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both",
        float: "float 7s ease-in-out infinite",
        twinkle: "twinkle 3.4s ease-in-out infinite",
        streak: "streak 11s linear infinite",
        sheen: "sheen 4.5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 5s ease-in-out infinite",
        drift: "drift 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
