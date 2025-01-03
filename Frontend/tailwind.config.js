import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Your source files
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}", // Including flowbite-react if needed
  ],
  theme: {
    extend: {
      colors: {
        "olive-600": "#808000", // Add olive green color
      },
    },
  },
  plugins: [flowbite], // Flowbite plugin integrated using ES Modules
};
