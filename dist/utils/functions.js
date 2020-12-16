

/* eslint-disable */
export const runAfter = (func, wait, immediate) => {
  let timeout
  return function () {
    const context = this
    const args = arguments
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export const pipe = (x) => (...fns) => fns.reduce((r, fn) => fn(r), x)