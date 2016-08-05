import {on, off} from 'dom-events'

const {requestAnimationFrame: raf} = window

export const id = (_id) => document.getElementById(_id)
export const qsa = (selector) => document.querySelectorAll(selector)
export const style = (element, prop, value) => element && (element.style[prop] = value)
export const each = (nodes, fn) => Array.prototype.forEach.call(nodes, fn)
export const offScroll = (el, fn) => off(el, 'scroll', fn)
export const onScroll = (el, fn) => {
  const rafd = raf ? () => raf(fn) : fn
  on(el, 'scroll', rafd)
  return rafd
}
