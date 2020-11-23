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

export const isNaN = is(NaN)
export const isObject = is(Object)
export const isArr = is(Array)
export const isString = is(String)
export const isNumber = both(is(Number), complement(equals(NaN)));

export const isInArr = curry((el, arr) => arr.findIndex((arrEl) => arrEl === el) >= 0);
export const hasVal = curry((obj, el) => !!obj[el] && !!obj[el].value);
export const notEmpty = compose(not, isEmpty)
export const notNaN = compose(not, isNaN)
export const notNil = compose(not, isNil)
export const notUndef = (val) => val !== undefined
export const notNilAndNotNan = both(notNaN, notNil)
export const isEmptyValue = compose(isEmpty, trim)
export const nilOrEmpty = either(isEmpty, isNil)
export const checkElementInArr = curry((arr, el) => both(isArr, isInArr(el))(arr));
export const rejectEmptyNames = reject((el) => isNil(el) || isNil(el.name));
export const isKeyExist = (key, obj) => !!obj[key]
export const isKeysExist = (keys, obj) =>
keys.reduce((res, key) => isKeyExist(key, obj) && res, true)

export const emptyArr = both(isArr, isEmpty)


const resolveAdd = curry((resolver, obj, el) => merge(obj, resolver(el)));

export const validator = (obj, params) => {
  if (!obj || !params) return obj;
  const validateNonNullable = () => params.nonNullable.reduce((acc, el) => !obj[el] ? merge(acc, { [el]: 'Необходимый параметр' }) : acc, {})

  const validateTypes = () => params.types.reduce((acc, el) => {
    const val = validateType(obj[el.name], el.type)
    return val ? merge(acc, { [el.name]: val }) : acc
  }, {})

 const resolver = cond([
   [equals('nonNullable'), validateNonNullable],
   [equals('types'), validateTypes],
   [equals('length'), ({ length, name }) => validateLength(obj[name], length)],
   [T, () => obj]
 ])

 return Object.keys(params).reduce(resolveAdd(resolver), {})
}

export const validateType = (val, type) => cond([
    [equals('number'), () => !isNumber(val) && 'числовое значение'],
    [equals('object'), () => !isObject && 'не верное значение'],
    [T, always(false)]
  ])(type)

export const validateLength = (val, length) => cond([
  [isKeyExist('equals'), ({ equals }) => val.length !== equals && `${equals} симв.`],
  [isKeyExist('strict'), ({ min, max }) => checkMinMax({ l: val.length, min: min && min + 1, max: max && max - 1 })],
  [isKeyExist('min') || isKeyExist('max'), ({ min, max }) => checkMinMax({ l: val.length, min, max })],
  [T, always(false)]
])(length)

export const checkMinMax = (params) => cond([
  [isKeysExist(['min', 'max']), ({ l, min, max }) => !(l <= max && l >= min) && `От ${min} до ${max} симв.`],
  [isKeyExist('min'), ({ l, min }) => !(l >= min) && `Мин. ${min} симв`],
  [isKeyExist('max'), ({ l, max }) => !(l <= max) && `Макс. ${max} симв.`],
  [T, always(null)]
])(params)
