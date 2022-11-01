/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.jsx"],
  theme: {
    extend: {},
    screens: {
      'mp': '350px', 
      // => @media (min-width: 350px) { ... } - iPhone/iPad width
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
