/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'background-color-meloMood' : '#00008B', // cool blue
      'background-color-chill' : '#50C878', // Green
      'background-color-energetic' : '#FFD700', // Vibrant yellow
      'background-color-relaxing' : '#98FB98', // Soft green
      'background-color-upbeat' : '#FFA500', // Lively

      'primary-text-color-meloMood': '#FFFFFF', // white
      'primary-text-color-chill': '#00000', // black
      'primary-text-color-energetic': '#000000', // black
      'primary-text-color-relaxing': '#000000', // black
      'primary-text-color-upbeat': '#000000', // black

      'primary-color': '#E0115F' // ruby

    },
    extend: {},
  },
  plugins: [],
}

