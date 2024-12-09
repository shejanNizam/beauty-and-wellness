/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#142F62",
        hash: "#142F62",
        info: "#142F62",
        playground: "#E8BD56",
        "light-gray": "#E7F8FF",
        "green-playground": "#00C38A",
      },
    },
  },
  plugins: [],
};
