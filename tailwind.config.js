/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  shortcuts: {
    "custom-container": "w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px] mx-auto"
},
  theme: {
    extend: {},
  },
  plugins: [],
}