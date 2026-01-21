import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        body: ["Space Grotesk", "system-ui", "sans-serif"],
      },
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        navy: {
          50: "hsl(215 50% 95%)",
          100: "hsl(215 50% 85%)",
          200: "hsl(215 50% 70%)",
          300: "hsl(215 50% 55%)",
          400: "hsl(215 50% 40%)",
          500: "hsl(215 50% 23%)",
          600: "hsl(215 50% 18%)",
          700: "hsl(215 50% 12%)",
          800: "hsl(215 50% 8%)",
          900: "hsl(215 50% 5%)",
        },
        ocean: {
          50: "hsl(190 70% 95%)",
          100: "hsl(190 70% 85%)",
          200: "hsl(190 70% 70%)",
          300: "hsl(190 70% 55%)",
          400: "hsl(190 70% 45%)",
          500: "hsl(190 70% 40%)",
          600: "hsl(190 70% 30%)",
          700: "hsl(190 70% 20%)",
        },
        charcoal: {
          50: "hsl(215 20% 95%)",
          100: "hsl(215 20% 85%)",
          200: "hsl(215 20% 70%)",
          300: "hsl(215 25% 50%)",
          400: "hsl(215 30% 35%)",
          500: "hsl(215 35% 22%)",
          600: "hsl(215 35% 18%)",
          700: "hsl(215 35% 12%)",
          800: "hsl(215 35% 8%)",
          900: "hsl(215 35% 5%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1.5rem",
        "3xl": "2rem",
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
