//@ts-nocheck
import {
  cond,
  T,
  always
} from 'ramda'
import { isKeysExist } from './isKeysExist'
import { isKeyExist } from './isKeyExist'
export const checkMinMax = (params: any) => cond([
  [isKeysExist(['min', 'max']), ({ l, min, max }) => !(l <= max && l >= min) && `От ${min} до ${max} симв.`],
  [isKeyExist('min'), ({ l, min }) => !(l >= min) && `Мин. ${min} симв`],
  [isKeyExist('max'), ({ l, max }) => !(l <= max) && `Макс. ${max} симв.`],
  [T, always(null)]
])(params);