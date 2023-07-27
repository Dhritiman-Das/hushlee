/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom color palettes here
        background: "#D1C4E9",
        main: "#A29BFE",
        accent: "#FFD166",
        accentMain: "#F8BBD0",
        textColor: "#2D3436",
        lightTheme: "#000000",
        button: "#C7D6C3",
        button1: "#F2E9CF",
        // Add more colors as needed
      },
    },
  },
  plugins: [],
};
