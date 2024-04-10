/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        based: '0 0 12px rgba(0,0,0,.9)',
      },
    },
  },
  plugins: [],
}

