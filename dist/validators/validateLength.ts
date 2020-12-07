//@ts-nocheck
import {
  cond,
  T,
  always
} from 'ramda'

import { checkMinMax } from './checkMinMax'
import { isKeyExist } from './isKeyExist'

export const validateLength = (val: any, length: any) => cond([
  [isKeyExist('equals'), ({ equals }) => val.length !== equals && `${equals} симв.`],
  [isKeyExist('strict'), ({ min, max }) => checkMinMax({ l: val.length, min: min && min + 1, max: max && max - 1 })],
  [isKeyExist('min') || isKeyExist('max'), ({ min, max }) => checkMinMax({ l: val.length, min, max })],
  [T, always(false)]
])(length);