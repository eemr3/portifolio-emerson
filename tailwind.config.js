// const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...require("tailwindcss/colors"),
      blueGray: "#0F172A",
    },
    extend: {
      backgroundImage: (theme) => ({
        "header-texture": "url('https://i.ibb.co/JHkCgyw/bg.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
