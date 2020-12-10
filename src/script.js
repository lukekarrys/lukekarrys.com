const root = document.querySelector(":root")

const DARK = "dark"
const LIGHT = "light"
const NONE = "none"

const getTheme = () => {
  if (localStorage.theme === DARK) {
    return DARK
  } else if (localStorage.theme === LIGHT) {
    return LIGHT
  }
  return NONE
}

const darkModeMedia = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches

const updateHtmlClass = (e) => {
  const theme = getTheme()

  // Do nothing on the initial call if there is no theme set
  // so that the default css based on the media query takes over
  if (!e && theme === NONE) {
    return
  }

  if (theme === DARK || (theme === NONE && darkModeMedia())) {
    root.classList.add("dark")
    root.classList.remove("light")
  } else {
    root.classList.remove("dark")
    root.classList.add("light")
  }
}

const updateVh = () =>
  root.style.setProperty("--vh", window.innerHeight / 100 + "px")

window.addEventListener("storage", updateHtmlClass)
window.addEventListener("resize", updateVh)

// Set initial state
updateHtmlClass()
updateVh()

document.addEventListener("DOMContentLoaded", (event) => {
  // Put this one inside domready since it used an element on the page
  document.getElementById("toggle-dark").addEventListener("click", (e) => {
    const theme = getTheme()

    if (theme === NONE) {
      // If no theme has ever been set, then set it to the opposite
      // of the user's media query
      localStorage.theme = darkModeMedia() ? LIGHT : DARK
    } else if (theme === DARK) {
      localStorage.theme = LIGHT
    } else if (theme === LIGHT) {
      localStorage.theme = DARK
    }

    updateHtmlClass(e)
  })
})
