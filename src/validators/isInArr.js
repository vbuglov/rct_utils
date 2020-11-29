"use strict";

exports.__esModule = true;
exports.isInArr = void 0;

function _ramda() {
  const data = require("ramda");

  _ramda = function _ramda() {
    return data;
  };

  return data;
}

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
const isInArr = (0, _ramda().curry)(function (el, arr) {
  return arr.findIndex(function (arrEl) {
    return arrEl === el;
  }) >= 0;
});
exports.isInArr = isInArr;