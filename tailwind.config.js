/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          100: "#FFEEE8",
          200: "#FFDDD1",
          300: "#FFA386",
          400: "#FF855E",
          500: "#FF6636",
          600: "#CC522B",
          700: "#993D20",
          800: "#662916",
          900: "#33140B",
        },
        secondary: {
          100: "#EBEBFF",
          200: "#CDCBFE",
          300: "#9A95FE",
          400: "#7872FD",
          500: "#564FFD",
          600: "#453FCA",
          700: "#342F98",
          800: "#222065",
          900: "#111033",
        },
        success: {
          100: "#E1F7E3",
          200: "#C3E5C6",
          300: "#7BD785",
          400: "#4FCA5C",
          500: "#23BD33",
          600: "#1C9729",
          700: "#15711F",
          800: "#0E4C14",
          900: "#07260A",
        },

        warning: {
          100: "#FFF2E5",
          200: "#FED1A5",
          300: "#FEBB79",
          400: "#FDA44C",
          500: "#FD8E1F",
          600: "#CC7319",
          700: "#985613",
          800: "#65390C",
          900: "#331D06",
        },
        danger: {
          100: "#FFF0F0",
          200: "#F4C8C8",
          300: "#EE8F8F",
          400: "#E96969",
          500: "#E34444",
          600: "#B63636",
          700: "#882929",
          800: "#5B1B1B",
          900: "#2D0E0E",
        },
        gray: {
          50: "#F5F7FA",
          100: "#E9EAF0",
          200: "#CED1D9",
          300: "#B7BAC7",
          400: "#A1A5B3",
          500: "#8C94A3",
          600: "#6E7485",
          700: "#4E5566",
          800: "#363B47",
          900: "#1D2026",
        },
        Success: {
          500: "#23BD33",
        },
        purple: {
          1: "#41405C",
        },
        "color-1": "#1D2026",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
