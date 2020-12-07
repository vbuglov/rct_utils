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
declare const isArr: (val: any) => boolean;
export { isArr };
