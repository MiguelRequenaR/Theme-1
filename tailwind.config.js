/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#222D33',
        'secondary': '#FD5D3D',
        'white': '#FFFFFF',
        'black': '#141414',
        'text': '#222D33'
      }
    },
  },
  plugins: [],
}

