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
import { isArr } from './isArr'
export const emptyArr = both(isArr, isEmpty)
