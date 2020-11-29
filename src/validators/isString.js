"use strict";

exports.__esModule = true;
exports.isString = void 0;

function _ramda() {
  const data = require("ramda");

  _ramda = function _ramda() {
    return data;
  };

  return data;
}

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
const isString = (0, _ramda().is)(String);
exports.isString = isString;