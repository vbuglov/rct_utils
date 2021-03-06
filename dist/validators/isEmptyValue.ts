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

export const isEmptyValue = compose(isEmpty, trim)
