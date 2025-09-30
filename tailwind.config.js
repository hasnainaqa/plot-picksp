/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // inside src
    "./components/**/*.{js,jsx,ts,tsx}", // components outside src
    "./pages/**/*.{js,jsx,ts,tsx}", // pages if any
    "./app/**/*.{js,jsx,ts,tsx}", // app folder if using App Router
  ],
  theme: {
    extend: {
      fontFamily: {
        renner: ["Renner", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
    fontSize: {
      xs: ["0.75rem", "100%"], // 12px
      sm: ["0.875rem", "100%"], // 14px
      base: ["1rem", "100%"], // 16px
      lg: ["1.125rem", "100%"], // 18px
      xl: ["1.25rem", "100%"], // 20px
      "2xl": ["1.5rem", "100%"], // 24px
      "3xl": ["1.875rem", "100%"], // 30px
      "4xl": ["2.25rem", "100%"], // 36px
      "5xl": ["3rem", "100%"], // 48px
      "6xl": ["3.75rem", "100%"], // 60px
      "7xl": ["4.5rem", "100%"], // 72px
      "8xl": ["6rem", "100%"], // 96px
      "9xl": ["8rem", "100%"], // 128px
    },
  },
  plugins: [],
};
