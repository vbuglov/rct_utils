import { is } from 'ramda'

/**
  * Функция проверяет является ли переменная массивом.
  * @category validators
  * @method
  * @since v0.1.0
  * @param {(*)} key - проверяемая перменная
  * @return {boolean}
  *
  * @example
  *
  *      isArr(12);      //=> false
  *      isArr([]);      //=> true
 */

const isArr = is(Array);

export { isArr };