import {generate} from 'geopattern'
import colors from 'colors.css'
import {qsa, each, style} from './utils'

// For dynamic creation of backgrounds when testing
each(qsa('.inner-content'), (content) => {
  const color = colors[content.getAttribute('data-color')]
  const pattern = generate(Math.random() + content.id, {color})
  style(content, 'background-image', pattern.toDataUrl())
})
