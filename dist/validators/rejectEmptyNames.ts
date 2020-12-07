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

//@ts-ignore
export const rejectEmptyNames = reject((el) => isNil(el) || isNil(el.name));
