import {
  both,
} from 'ramda'
import { notNaN } from './notNaN'
import { notNil } from './notNil'

export const notNilAndNotNan = both(notNaN, notNil);
