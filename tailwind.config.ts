import type { Config } from "tailwindcss";
import typographyPlugin from "@tailwindcss/typography";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#bb6029", // orange/brown from the site
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#33444f", // dark blue/navy from the site
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#b39941", // gold accent color
          foreground: "#ffffff",
        },
        background: {
          DEFAULT: "#ffffff",
          alt: "#f6f6f6", // light gray background color
        },
        muted: {
          DEFAULT: "#939ea9", // muted blue/gray from the site
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#33444f",
        },
        border: "#e4e4e7",
        input: "#e4e4e7",
        ring: "#bb6029",
        destructive: {
          DEFAULT: "#ff0000",
          foreground: "#ffffff",
        },
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
      typography: {
        DEFAULT: {
          css: {
            color: '#33444f',
            a: {
              color: '#bb6029',
              '&:hover': {
                color: '#a85523',
              },
            },
            h1: {
              color: '#33444f',
            },
            h2: {
              color: '#33444f',
            },
            h3: {
              color: '#33444f',
            },
            h4: {
              color: '#33444f',
            },
            strong: {
              color: '#33444f',
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    typographyPlugin,
  ],
} satisfies Config;

export default config;
