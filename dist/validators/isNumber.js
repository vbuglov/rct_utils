import { is, both, complement } from 'ramda'
/**
  * Функция проверяет число ли переменная.
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

export const isNumber = both(is(Number), complement(equals(NaN)));