import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': {'max': '508px'},
      'tablet': {'min': '509px', 'max': '750px'},
    },
  },
  plugins: [daisyui],
}
