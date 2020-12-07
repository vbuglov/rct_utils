"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInArr = void 0;
const ramda_1 = require("ramda");
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
exports.isInArr = ramda_1.curry((el, arr) => arr.findIndex((arrEl) => arrEl === el) >= 0);
