import {qsa, style, each, onScroll} from './utils'

const {body} = document
const contents = qsa('.inner-content')

// Parallax is kinda cool, in case I want to come back to it later
onScroll(window, () => {
  each(contents, (el) => style(el, 'background-position-y', (body.scrollTop * -0.5) + 'px'))
})
