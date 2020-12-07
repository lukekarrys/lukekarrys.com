module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.css", "./src/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        yellow: "#FCF679",
        cyan: "#41FDFE",
        pink: "#FF81C0",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["focus"],
      borderRadius: ["focus"],
    },
  },
}
