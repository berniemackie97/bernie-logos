import { transform } from "next/dist/build/swc/generated-native";
import { Scada } from "next/font/google";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate-(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        heartbeat: {
          "0%": { transform: "scale(1)", shadow: "shadow-sm" },
          "25%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(1)" },
          "75%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        rubberband: {
          "0%": {transform: "scale(1)"},
          "30%": {transform: "scale(0.96)"},
          "40%": {transform: "scale(0.97)"},
          "50%": {transform: "scale(0.98)",},
          "65%": {transform: "scale(0.99)"},
          "75%": {transform: "scale(0.99)"},
          "100%": {transform: "scale(1)"},
        },
      },
      animation: {
        heartbeat: "heartbeat 1.6s ease-out",
        wiggle: "wiggle 200ms ease-in-out",
        rubberband: "rubberband 0.4s ease-in-out",
      },
      colors: {
        lightsand: {
          100: "#faf8f3",
          200: "#f5f1e8",
          300: "#efebdc",
          400: "#eae4d1",
          500: "#e5ddc5",
          600: "#b7b19e",
          700: "#898576",
          800: "#5c584f",
          900: "#2e2c27",
        },
        eggshell: {
          100: "#fcfcf8",
          200: "#f9f8f1",
          300: "#f7f5ea",
          400: "#f4f1e3",
          500: "#f1eedc",
          600: "#c1beb0",
          700: "#918f84",
          800: "#605f58",
          900: "#30302c",
        },
        powder: {
          100: "#f2f7f8",
          200: "#e5eff1",
          300: "#d8e7ea",
          400: "#cbdfe3",
          500: "#bed7dc",
          600: "#98acb0",
          700: "#728184",
          800: "#4c5658",
          900: "#262b2c",
        },
        slate: {
          100: "#f0f4f5",
          200: "#e1e9ec",
          300: "#d1dee2",
          400: "#c2d3d9",
          500: "#b3c8cf",
          600: "#8fa0a6",
          700: "#6b787c",
          800: "#485053",
          900: "#242829",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#F1EEDC",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
