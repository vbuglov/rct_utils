"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArr = void 0;
const ramda_1 = require("ramda");
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
const isArr = ramda_1.is(Array);
exports.isArr = isArr;
