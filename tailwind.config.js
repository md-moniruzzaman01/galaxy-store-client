module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#dc3545",

          "secondary": "#00173c",

          "accent": "#68ed82",

          "neutral": "#1781b0",

          "base-100": "#ffff",

          "info": "#94D4F0",

          "success": "#1BC5A3",

          "warning": "#EEBE2F",

          "error": "#E77373",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
// E5E7F0