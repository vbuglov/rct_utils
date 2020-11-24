import { is } from 'ramda'

/**
  * Функция проверяет строка ли переменная.
  * @category validators
  * @method
  * @since v0.1.0
  * @param {(*)} key - проверяемая переменная
  * @return {boolean}
  *
  * @example
  *
  *      isString(12);      //=> false
  *      isString('abc');      //=> true
 */

export const isString = is(String)