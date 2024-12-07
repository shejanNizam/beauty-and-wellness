/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#142F62",
        playground: "#758DFF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
