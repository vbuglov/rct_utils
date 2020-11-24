"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = void 0;

var _ramda = require("ramda");

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
var isNumber = (0, _ramda.both)((0, _ramda.is)(Number), (0, _ramda.complement)(equals(NaN)));
exports.isNumber = isNumber;