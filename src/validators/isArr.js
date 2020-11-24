"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArr = void 0;

var _ramda = require("ramda");

/**
  * Функция проверяет массив ли переменная.
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
var isArr = (0, _ramda.is)(Array);
exports.isArr = isArr;