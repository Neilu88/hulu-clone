module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        futura: ["FUTURAB", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
