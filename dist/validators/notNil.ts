import {
  not,
  isNil,
  compose
} from 'ramda'

export const notNil = compose(not, isNil)