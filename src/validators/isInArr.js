"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInArr = void 0;

var _ramda = require("ramda");

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
var isInArr = (0, _ramda.curry)(function (el, arr) {
  return arr.findIndex(function (arrEl) {
    return arrEl === el;
  }) >= 0;
});
exports.isInArr = isInArr;