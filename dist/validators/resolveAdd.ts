import {
  either,
  not,
  isNil,
  isEmpty,
  compose,
  trim,
  both,
  is,
  complement,
  equals,
  reject,
  curry,
  cond,
  T,
  always,
  merge
} from 'ramda'

const resolveAdd = curry((resolver, obj, el) => merge(obj, resolver(el)));

export { resolveAdd };
