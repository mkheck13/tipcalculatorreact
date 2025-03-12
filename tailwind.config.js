const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
	// Ensures Tailwind includes Flowbite styles
  content: ["./src/**/*.{html,js,jsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        'strongCyan': 'hsl(172, 67%, 45%)',
        'veryDarkCyan': 'hsl(183, 100%, 15%)',
        'darkGrayCyan': 'hsl(186, 14%, 43%)',
        'grayCyan': 'hsl(184, 14%, 56%)',
        'lightGrayCyan': 'hsl(185, 41%, 84%)',
        'lightGray': 'hsl(189, 41%, 97%)'

      },
    },
  },
  // Enables Flowbite’s custom UI components
  plugins: [flowbite.plugin()],
}