import waypoints from './waypoints'
import {id, style, onScroll, offScroll} from './utils'

const {requestAnimationFrame: raf} = window
const {body} = document
const footer = id('footer')
const blur = id('background-blur')
const background = id('background')
let scrollHandler

// Load the second bg image, it only gets used with JS so load it here only
style(background, 'background-image', 'url(/img/bg.jpg)')

const fadeBgOnScroll = () => {
  const diff = body.clientHeight - body.scrollTop
  const pct = Math.max(0, Math.min(1, diff / footer.clientHeight))
  console.log(diff, pct)
  style(blur, 'opacity', pct)
}

// A real nice animation based on the percentage of the footer that is visible
const fadeBgScroll = (action) => {
  action && console.log('enter')
  scrollHandler && offScroll(window, scrollHandler)
  if (action) {
    // Call it once right away in case scrolling is happening so fast that
    // scroll handler is never called
    fadeBgOnScroll()
    scrollHandler = onScroll(window, fadeBgOnScroll)
  }
}

// Just set the opacity to 0 or 1, no animation
const fadeBgQuick = (action) => style(blur, 'opacity', action ? 0 : 1)

// Do the scroll animation or set the property quickly based on raf
const fadeBg = (action) => raf ? fadeBgScroll(action) : fadeBgQuick(action)

// When the footer enters and exits the viewport,
// fade out the burred background image
waypoints({element: footer, enter: () => fadeBg(true), exited: () => fadeBg(false)})
