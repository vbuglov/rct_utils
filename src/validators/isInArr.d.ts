/// <reference types="ts-toolbelt" />
/**
  * Функция проверяет есть ли подобный элемент в массиве.
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
export declare const isInArr: import("Function/Curry").Curry<(el: any, arr: any) => boolean>;
