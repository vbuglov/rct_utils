"use strict";

exports.__esModule = true;
exports.isObject = void 0;

function _ramda() {
  const data = require("ramda");

  _ramda = function _ramda() {
    return data;
  };

  return data;
}

/**
  * Функция проверяет объект ли переменная.
  * @category validators
  * @method
  * @since v0.1.0
  * @param {(*)} key - проверяемая переменная
  * @return {boolean}
  *
  * @example
  *
  *      isObject(12);      //=> false
  *      isObject({});      //=> true
 */
const isObject = (0, _ramda().is)(Object);
exports.isObject = isObject;