/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A192F',   // Dark navy blue background
        primary: '#00B8D4',      // Deep teal for primary accents (buttons, links)
        accent: '#FF6F00',       // Vibrant orange for hover effect
        textMain: '#FFFFFF',     // White text for readability
        mutedText: '#B0B0B0',    // Muted light gray for secondary text
        border: '#333333',       // Dark gray border
      },
      fontFamily: {
        sans: ['Shantell Sans', 'Rowdies', 'Baloo Bhai 2', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



