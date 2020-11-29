"use strict";

exports.__esModule = true;
exports.isNumber = void 0;

function _ramda() {
  const data = require("ramda");

  _ramda = function _ramda() {
    return data;
  };

  return data;
}

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
const isNumber = (0, _ramda().both)((0, _ramda().is)(Number), (0, _ramda().complement)((0, _ramda().equals)(NaN)));
exports.isNumber = isNumber;