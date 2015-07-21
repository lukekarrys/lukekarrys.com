import {on, off} from 'dom-events'

const {requestAnimationFrame: raf} = window

const id = (_id) => document.getElementById(_id)
const qsa = (selector) => document.querySelectorAll(selector)
const style = (element, prop, value) => element && (element.style[prop] = value)
const each = (nodes, fn) => Array.prototype.forEach.call(nodes, fn)
const offScroll = (el, fn) => off(el, 'scroll', fn)
const onScroll = (el, fn) => {
  const rafd = raf ? () => raf(fn) : fn
  on(el, 'scroll', rafd)
  return rafd
}

export default {id, qsa, style, each, onScroll, offScroll}
