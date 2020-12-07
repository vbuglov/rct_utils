import {
  equals,
  cond,
  T,
  merge
} from 'ramda';

import { validateType } from './validateType'
import { validateLength } from './validateLength'
import { resolveAdd } from './resolveAdd'

export const validator = (obj: any, params: any) => {
  if (!obj || !params) return obj;
  const validateNonNullable = () => params.nonNullable.reduce((acc: any, el: any) => !obj[el] ? merge(acc, { [el]: 'Необходимый параметр' }) : acc, {})

  const validateTypes = () => params.types.reduce((acc: any, el: any) => {
    const val = validateType(obj[el.name], el.type)
    return val ? merge(acc, { [el.name]: val }) : acc
  }, {});

  const resolver = cond([
    [equals('nonNullable'), validateNonNullable],
    [equals('types'), validateTypes],
    [equals('length'), ({ length, name }) => validateLength(obj[name], length)],
    [T, () => obj]
  ])
  //@ts-ignore
  return Object.keys(params).reduce(resolveAdd(resolver), {})
};