"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = void 0;

var _ramda = require("ramda");

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
var isString = (0, _ramda.is)(String);
exports.isString = isString;