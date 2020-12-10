const darkModeMedia = window.matchMedia("(prefers-color-scheme: dark)").matches
const html = document.querySelector("html")

const DARK = "dark"
const LIGHT = "light"
const NONE = "none"

const isTheme = (val) => {
  if (localStorage.theme === DARK) {
    return DARK === val
  } else if (localStorage.theme === LIGHT) {
    return LIGHT === val
  }
  return NONE === val
}

const updateHtmlClass = () => {
  if (isTheme(DARK) || (isTheme(NONE) && darkModeMedia)) {
    html.classList.add("dark")
  } else {
    html.classList.remove("dark")
  }
}

const updateVh = () =>
  document
    .querySelector(":root")
    .style.setProperty("--vh", window.innerHeight / 100 + "px")

window.addEventListener("storage", updateHtmlClass)

updateHtmlClass()

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("toggle-dark").addEventListener("click", () => {
    if (isTheme(NONE)) {
      localStorage.theme = darkModeMedia ? "light" : "dark"
    } else if (isTheme(DARK)) {
      localStorage.theme = "light"
    } else if (isTheme(LIGHT)) {
      localStorage.theme = "dark"
    }
    updateHtmlClass()
  })

  updateVh()
})

window.addEventListener("resize", () => {
  updateVh()
})
