import {
  equals,
  cond,
  T,
  always
} from 'ramda'

import { isNumber } from './isNumber';
import { isObject } from './isObject';

export const validateType = (val: any, type: any) => cond([
  [equals('number'), () => !isNumber(val) && 'числовое значение'],
  [equals('object'), () => !isObject && 'не верное значение'],
  [T, always(false)]
])(type);
