import { type } from 'ramda'


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


export const capitalizeFirstLetter = (string) => {
  if (string) return string.charAt(0).toUpperCase() + string.slice(1);
  else {
    const error = `error by func capitalizeFirstLetter, ivalid string. string can't equal ${string}`
    console.error(error)
    return error;
  }
}

export const lowerFirstLetter = (string) => {
  if (string && string[0] && type(string) === "String") return string[0].toLowerCase() + string.slice(1);
  else {
    const error = `error by func lowerFirstLetter, ivalid string. string can't equal ${string}`
    console.error(error)
    return error;
  }
}

export const substringIfNeed = (string, length = 40) => {
  if (string && string.length > length) {
    return string.substring(0, length) + "...";
  }
  return string;
}