import daisyui from './node_modules/daisyui';
import forms from './node_modules/tailwindcss';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui,
   forms
  ]
}

