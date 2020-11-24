"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasVal = void 0;

var _ramda = require("ramda");

/**
  * Функция проверяет есть ли подобный элемент в объекте. Возвращаемая функция карировання
  * @category validators
  * @method
  * @since v0.1.0
  * @param {Object} obj - объект в котором ведётся поиск
  * @param {string} key - ключ значения
  * @return {boolean}
  *
  * @example
  *
  *      const obj = {1}
  *      hasVal(12);      //=> false
  *      hasVal([]);      //=> true
 */
var hasVal = (0, _ramda.curry)(function (obj, el) {
  return !!obj[el] && !!obj[el].value;
});
exports.hasVal = hasVal;