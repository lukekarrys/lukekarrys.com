const PROD = process.env.NODE_ENV === "production"

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    PROD &&
      require("cssnano")({
        preset: "default",
      }),
  ].filter(Boolean),
}
