module.exports = {
  darkMode: "class",
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Nunito: ["Nunito Sans", "sans-serif"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      // '':'1180px',

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "2000px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'dark-blue': 'hsl(209, 23%, 22%)',
      'very-dark-blue': 'hsl(207, 26%, 17%)',
      'very-dark-blue2': 'hsl(200, 15%, 8%)',
      'dark-gray': 'hsl(0, 0%, 52%)',
      'very-light-gray': 'hsl(0, 0%, 98%)',
      'white': 'hsl(0, 0%, 100%)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
